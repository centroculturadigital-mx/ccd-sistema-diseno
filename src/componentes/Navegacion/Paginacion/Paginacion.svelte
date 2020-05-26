<script>
  const revisarNumero = n => parseInt(n) === 0 || parseInt(n) > 0;

  export let elementos;
  export let elementosPagina = 10;
  export let pagina;
  export let seleccionar;

  $: elementosMostrar = revisarNumero(elementos)
    ? elementos
    : Array.isArray(elementos)
    ? elementos.length
    : null;

  $: mostrar = revisarNumero(elementosMostrar);

  $: paginasNum = Math.ceil(elementosMostrar / elementosPagina);
  $: paginas = Array(paginasNum)
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
</script>

<style>
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  ul {
    display: flex;
    padding: 0;
  }
  li {
    list-style: none;
  }
  button {
    background-color: var(--theme-botones-secundario-fondo);
    color: var(--theme-botones-secundario-color);
    border: 0;
    cursor: pointer;
    transition: var(--theme-transicion);
  }
  button:hover {
    background-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-primario-color);
  }
  button:active,
  button:focus {
    outline: 0;
  }
  .actual button {
    background-color: var(--theme-botones-primario-fondo);
    color: var(--theme-botones-primario-color);
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

{#if mostrar}
  <div class="Paginacion">
    <nav>
      <ul>
        {#each paginas as p, i ('pagina_' + i)}
          <li class={i == actual ? 'actual' : ''}>
            <button on:click={e => accion(e, i)}>{p}</button>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
{/if}
