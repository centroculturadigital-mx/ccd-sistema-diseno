<script>
  import Icono from "../../../elementos/Icono/Icono";
  const revisarNumero = (n) => parseInt(n) === 0 || parseInt(n) > 0;

  export let elementos;
  export let elementosPagina = 10;
  export let pagina;
  export let seleccionar;
  export let variante = "NUMERICA"; //CARGA
  export let cargarResultados;

  $: elementosMostrar = revisarNumero(elementos)
    ? elementos
    : Array.isArray(elementos)
    ? elementos.length
    : null;

  $: mostrar = revisarNumero(elementosMostrar);

  $: paginas = Math.ceil(elementosMostrar / elementosPagina);
  $: paginas = Array(paginas)
    .fill(0)
    .map((e, i) => {
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
    if (actual = !0) {
      actual--;
      console.log("Regresa", actual);
    }
  };
  const siguiente = () => {
    if (actual < paginas.length - 1) {
      actual++;
      console.log("Avanza", actual);
    }
  };
</script>

{#if mostrar}
  {#if variante === "NUMERICA"}
    <div class="Paginacion">
      <nav>
        <div class="navegacion anterior" on:click={anterior}>
          <button>
            <Icono icono="izquierda" />
          </button>
        </div>
        <ul>
          {#each paginas as p, i ("pagina_" + i)}
            <li class={i == actual ? "actual" : ""}>
              <button on:click={(e) => accion(e, i)}>{p}</button>
            </li>
          {/each}
        </ul>
        <div class="navegacion siguiente" on:click={siguiente}>
          <button>
            <Icono icono="derecha" />
          </button>
        </div>
      </nav>
    </div>
  {:else if variante === "CARGA"}
    Pag. Carga
  {/if}
{/if}

<style>
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  ul {
    display: flex;
    padding: 0;
    list-style-type: none;
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
  button:hover {
    background-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-primario-color);
  }
  button:active,
  button:focus {
    outline: 0;
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
