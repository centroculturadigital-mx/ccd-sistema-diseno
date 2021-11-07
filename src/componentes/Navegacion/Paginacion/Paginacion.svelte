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
    console.log(contenedor.scrollLeft)
  };

  let contenedor;
  let contenido;
  let navegacion = false;
  let izquierda;
  let derecha;

  const activaNavegacion = () => {
    if (contenedor) {
      let anchoContenedor = contenedor.clientWidth;
      if (anchoContenedor <= contenido.clientWidth) {
        navegacion = true;

        if (actual > 0) {
          izquierda = true;
        } else {
          izquierda = false;
        }
        if (actual != paginas.length - 1) {
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
        if (elemento) {
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
    }
  };

  onMount(() => {
    if (window !== "undefined") {
      window.addEventListener(
        "resize",
        () => {
          setTimeout(() => {
            activaNavegacion();
            centrarElemento(actual, contenedor);
          });
        },
        500
      );
      //defaults
      setTimeout(() => {
        activaNavegacion();
        centrarElemento(actual);
      }, 500);
    }
  });

  $: activaNavegacionAvanzada =
    contenedor && contenido 
      ? contenido.clientWidth >= contenedor.clientWidth
      : null;
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
    {#if activaNavegacionAvanzada && actual > 3}
      <div class="inicio">
        <span>
          <button on:click={(e) => accion(e, 0)}>{"1"}</button>
        </span>
        <span class="puntos">
          <Texto texto={"..."} />
        </span>
      </div>
    {/if}
    <nav class="contenedor" bind:this={contenedor}>
      <ul bind:this={contenido}>
        {#each paginas as p, i ("pagina_" + i)}
          <li class="elemento {i == actual ? 'actual' : ''}">
            <button on:click={(e) => accion(e, i)}>{p}</button>
          </li>
        {/each}
      </ul>
    </nav>
    {#if activaNavegacionAvanzada && actual < paginas.length - 3}
      <!-- {#if elementosMostrar > 8 && actual < (paginas.length - 2)} -->
      <div class="final">
        <span class="puntos">
          <Texto texto={"..."} />
        </span>
        <span>
          <button on:click={(e) => accion(e, paginas.length)}
            >{paginas.length}</button
          >
        </span>
      </div>
    {/if}
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
    overflow: hidden;
    padding: var(--theme-espaciados-padding) 0;
    width: 100%;
  }
  .contenedor {
    max-width: 20rem;
  }
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;
    width: auto;
  }
  .inicio,
  .final {
    display: flex;
  }
  .inicio {
    background-color: var(--theme-colores-fondo);
    position: absolute;
    left: 1rem;
    top: 0;
    height: 100%;
    align-items: center;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    margin: 0 calc(var(--theme-espaciados-margen) / 2);
  }
  .inicio span:first-of-type,
  .final span:last-of-type {
    height: 2rem;
    width: 2rem;
  }
  .inicio .puntos {
    margin-top: 0.75rem;
  }
  .puntos {
    display: flex;
    align-items: flex-end;
    padding: 0 calc(var(--theme-espaciados-padding) / 2);
    /* height: 100%; */
  }
  .puntos :global(span) {
    font-weight: var(--theme-textos-titulo-peso);
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
    display: flex;
    align-items: center;
    width: 1rem;
  }
  .navegacion button {
    background-color: transparent;
    padding: 0;
    border: 0;
    border-radius: 0.25rem;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .navegacion :global(.iconoContenedor) {
    height: 1rem !important;
    width: 1rem !important;
  }
  .navegacion button:hover {
    background-color: initial;
    opacity: 0.5;
  }
  .navegacion button:active,
  .navegacion button:focus {
    outline: 0;
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
