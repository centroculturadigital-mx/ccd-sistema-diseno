<script>
  import { onMount } from "svelte";
  import Texto from "../../texto/Texto/Texto.svelte";
  import Icono from "../../Icono/Icono.svelte";

  export let elementos = [];
  export let actual = 0;

  let responsivo;

  let estado = false;
  let inicio;
  let scrollIzq;
  let scrollDer;

  const scrollHorizontal = (elemento) => {
    elemento.addEventListener("mousedown", (e) => {
      estado = true;
      elemento.classList.add("activo");
      inicio = e.pageX - elemento.offsetLeft;
      scrollIzq = elemento.scrollLeft;
    });
    elemento.addEventListener("touchstart", (e) => {
      estado = true;
      elemento.classList.add("activo");
      inicio = e.touches[0].pageX - elemento.offsetLeft;
      scrollIzq = elemento.scrollLeft;
    });
    // resetea al dejar eventos
    elemento.addEventListener("mouseleave", () => {
      estado = false;
      elemento.classList.remove("activo");
    });
    elemento.addEventListener("mouseup", () => {
      estado = false;
      elemento.classList.remove("activo");
    });
    elemento.addEventListener("touchend", () => {
      estado = false;
      elemento.classList.remove("activo");
    });
    // aplica cambio de valores
    elemento.addEventListener("mousemove", (e) => {
      if (!moviendoMouse) {
        moviendoMouse = setTimeout(() => {
          if (estado) {
            e.preventDefault();
            let x = e.pageX - elemento.offsetLeft;
            let avanza = x - inicio;
            elemento.scrollLeft = scrollIzq - avanza;
          }
          activaNavegacion();
          moviendoMouse = null;
        }, 50);
      }
    });
    elemento.addEventListener("touchmove", (e) => {
      if (!moviendoTouch) {
        moviendoTouch = setTimeout(() => {
          if (estado) {
            e.preventDefault();
            let x = e.touches[0].pageX - elemento.offsetLeft;
            let avanza = x - inicio;
            elemento.scrollLeft = scrollIzq - avanza;
          }
          activaNavegacion();
          moviendoTouch = null;
        }, 50);
      }
    });
  };

  let moviendoMouse;
  let moviendoTouch;

  let contenedor;
  let contenido;
  let navegacion = false;
  let izquierda;
  let derecha;

  const activaNavegacion = () => {
    if (contenedor) {
      let anchoContenedor = contenedor.clientWidth;
      let scrollDerecha = anchoContenedor - contenedor.scrollLeftMax;

      if (anchoContenedor <= contenido.clientWidth) {
        navegacion = true;

        if (contenedor.scrollLeft > 0) {
          izquierda = true;
        } else {
          izquierda = false;
        }
        if (scrollDerecha <= anchoContenedor) {
          derecha = true;
        } else {
          derecha = false;
        }
      } else {
        navegacion = false;
        izquierda = false;
        derecha = false;
      }
    } 
  };

  const centrarElemento = (indice,contenedor) => {
    let contenedorElementos;
    let posicionElemento;
    let elemento;

    if (window !== "undefined") {
      if (contenedor) {
        
        elemento = Array.from(contenedor.querySelectorAll(".elemento"))[
          indice
        ];

        if(elemento) {

          posicionElemento = elemento.offsetLeft;
          
          contenedor.scrollTo({
            top: 0,
            left: (posicionElemento - ((contenedor.clientWidth - elemento.clientWidth)   / 2)),
            behavior: "smooth",
          });

        }

      }
    }
  };

  const regresa = () => {
    actual -= 1;
    actual = Math.max(0, actual);
  };

  const avanza = () => {
    actual += 1;
    actual = Math.min(elementos.length - 1, actual);
  };

  onMount(() => { 
    if (window !== "undefined") {
      window.addEventListener("resize", () => {
        activaNavegacion();
      });
      setTimeout(() => {
        //defaults
        activaNavegacion();
        centrarElemento(actual);
      }, 500);
    }
  });

  $: centrarElemento(actual,contenedor);
</script>

<svelte:window bind:innerWidth={responsivo} />

<div class="MenuLocal  {navegacion ? 'interaccion' : ''}">
  {#if izquierda}
    <div class="navegacion izquierda" on:click={regresa}>
      <Icono icono={"izquierda"} />
    </div>
  {/if}
  <nav use:scrollHorizontal bind:this={contenedor}>
    <ul bind:this={contenido}>
      {#each elementos as elemento, i (elemento)}
        {#if elemento.enlace}
          <li class={`elemento Enlace ${i == actual ? " actual" : ""}`}>
            <a href={elemento.enlace}>
              {#if elemento.icono && responsivo < 768}
                <Icono icono={elemento.icono} />
              {/if}
              <Texto texto={elemento.texto} />
            </a>
          </li>
        {:else}
          <li
            on:click={elemento.accion(i)}
            class={`elemento ${i == actual ? "actual" : ""}`}
          >
            {#if elemento.icono && responsivo < 768}
              <Icono icono={elemento.icono} />
            {/if}
            <Texto texto={elemento.texto} />
          </li>
        {/if}
      {/each}
    </ul>
  </nav>
  {#if derecha}
    <div class="navegacion derecha" on:click={avanza}>
      <Icono icono={"derecha"} />
    </div>
  {/if}
</div>

<style>
  * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
  }
  .MenuLocal {
    position: relative;
    width: 100%;
  }
  .interaccion {
    transition: var(--theme-transiciones-normal);
    padding: 0 calc(var(--theme-espaciados-padding) * 2);
  }
  nav {
    position: relative;
    display: flex;
    justify-content: flex-start;
    height: auto;
    width: 100%;
    overflow: hidden;
    cursor: grab;
  }
  ul {
    position: relative;
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-width: 80rem;
    justify-content: flex-start;
  }
  .activo {
    cursor: grabbing;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 3);
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    flex-shrink: 0;
    cursor: pointer;
  }

  li {
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 3);
  }
  li.Enlace a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    text-decoration: none;
  }

  li a:hover {
    opacity: 0.75;
  }
  li :global(.iconoContenedor) {
    height: 1.25rem !important;
    width: 1.25rem !important;
  }
  li :global(svg) {
    fill: var(--theme-textos-parrafo-color) !important;
    height: 100%;
  }
  .actual {
    border-bottom: 3px solid var(--theme-pestannas-borde-hover);
  }
  nav::-webkit-scrollbar {
    width: 0.75rem;
  }
  *::-webkit-scrollbar-track {
    background-color: #edf2f7;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #718096;
    border-radius: 9999px;
  }
  .navegacion {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 1.5rem;
    cursor: pointer;
    z-index: 100;
  }
  .navegacion :global(.iconoContenedor) {
    height: 1rem !important;
    width: 1rem !important;
  }
  .navegacion :global(svg) {
    fill: #aaaaaa;
  }

  .izquierda {
    position: absolute;
    left: 0;
    top: 0;
    background: rgb(255, 255, 255);
    background: -moz-linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 70%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 70%,
      rgba(255, 255, 255, 0) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 70%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .derecha {
    position: absolute;
    right: 0;
    top: 0;
    background: rgb(255, 255, 255);
    background: -moz-linear-gradient(
      270deg,
      rgba(255, 255, 255, 1) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-linear-gradient(
      270deg,
      rgba(255, 255, 255, 1) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 1) 71%,
      rgba(255, 255, 255, 0) 100%
    );
  }
</style>
