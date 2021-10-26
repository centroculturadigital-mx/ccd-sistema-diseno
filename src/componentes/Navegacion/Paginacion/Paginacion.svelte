<script>
  import { onMount } from "svelte";
  import Icono from "../../../elementos/Icono/Icono";
  import Boton from "../../../elementos/botones/Boton/Boton";
  import Texto from "../../../elementos/texto/Texto/Texto";

  const revisarNumero = (n) => parseInt(n) === 0 || parseInt(n) > 0;

  export let elementos;
  export let elementosPagina = 10;
  export let pagina;
  export let seleccionar;

  $: elementosMostrar = elementos || 0;

  $: mostrar = revisarNumero(elementosMostrar);

  $: numPaginas = Math.ceil(elementosMostrar / elementosPagina);

  $: paginas = new Array(numPaginas).fill(0).map((e, i) => {
    return i + 1;
  });

  $: actual =
    pagina === 0 || parseInt(pagina) > 0
      ? pagina
      : paginaSeleccionada
      ? paginaSeleccionada
      : 0;

  let paginaSeleccionada;

  const accion = (e, i) => {
    if (revisarNumero(i) && i < elementosMostrar) {
      if (typeof seleccionar == "function") {
        seleccionar(i);
      }

      paginaSeleccionada = i;
    }
  };

  const anterior = () => {
    if (actual > 0) {
      actual--;
    }
    activaNavegacion();
  };

  const siguiente = () => {
    if (actual < paginas.length - 1) {
      actual++;
    }
    activaNavegacion();
  };

  // interaccion
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

        if (actual > 0) {
          izquierda = true;
        } else {
          izquierda = false;
        }
        if (scrollDerecha < anchoContenedor) {
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

  const centrarElemento = (indice, contenedor) => {
    let posicionElemento;
    let elemento;

    if (window !== "undefined") {
      if (contenedor) {
        elemento = Array.from(contenedor.querySelectorAll(".elemento"))[indice];
        posicionElemento = elemento.offsetLeft;

        contenedor.scrollTo({
          top: 0,
          left:
            posicionElemento -
            (contenedor.clientWidth - elemento.clientWidth) / 1.25,
          behavior: "smooth",
        });
      }
    }
  };

  onMount(() => {
    if (window !== "undefined") {
      window.addEventListener("resize", () => {
        activaNavegacion();
      });
      //defaults
      setTimeout(() => {
        activaNavegacion();
        centrarElemento(actual);
      }, 500);
    }
  });

  $: centrarElemento(actual, contenedor);
</script>

{#if mostrar}
  <div class="Paginacion {navegacion ? 'interaccion' : ''}">
    <div class="navegacion anterior" on:click={anterior}>
      {#if izquierda}
        <button>
          <Icono icono="izquierda" />
        </button>
        {/if}
      </div>
    <nav bind:this={contenedor}>
      <ul bind:this={contenido}>
        {#each paginas as p, i ("pagina_" + i)}
          <li class="elemento {i == actual ? 'actual' : ''}">
            <button on:click={(e) => accion(e, i)}>{p}</button>
          </li>
        {/each}
      </ul>
    </nav>
    <div class="navegacion siguiente" on:click={siguiente}>
      {#if derecha}
        <button>
          <Icono icono="derecha" />
        </button>
        {/if}
      </div>
  </div>
{/if}

<style>
  * {
    box-sizing: border-box;
  }
  .Paginacion {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  nav {
    display: flex;
    width: 100%;
    overflow: hidden;
    padding: var(--theme-espaciados-padding) 0;
  }
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;
    width: auto;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    margin: 0 0.5rem;
  }
  button {
    transition: var(--theme-transiciones-rapida);
    background-color: transparent;
    border: 0.5px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .interaccion {
    transition: var(--theme-transiciones-normal);
  }
  button:hover {
    background-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-primario-color);
  }
  button:active,
  button:focus {
    outline: 0;
  }
  .navegacion {
    height: 100%;
    width: 3rem;
  }
  .navegacion button {
    background-color: transparent;
    border: 0;
    border-radius: 0.25rem;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .navegacion button:hover {
    background-color: initial;
    opacity: 0.5;
  }
  .navegacion button:active,
  .navegacion button:focus {
    outline: 0;
  }
  .navegacion :global(.iconoContenedor) {
    height: 1.5rem !important;
    width: 1.5rem !important;
  }
  .actual button {
    border: 1px solid var(--theme-colores-primario) !important;
    color: var(--theme-colores-primario);
    border: 0;
  }
  .actual button:hover {
    background-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-primario-color);
    border: 0;
  }
  .actual button:focus,
  .actual button:active {
    outline: none;
  }
</style>
