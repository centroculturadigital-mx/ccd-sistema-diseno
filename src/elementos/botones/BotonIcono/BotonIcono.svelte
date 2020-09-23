<script>
  import Icono from "../../Icono/Icono.svelte";

  export let texto;
  export let icono;
  export let borde = false;
  export let click = () => console.log("Accion botón ícono");
  export let iconoBotonEstadoUnoUrl;
  export let iconoBotonEstadoDosUrl;
  export let estado = false;
  
  export let inactivo;

  export let css = {};

  $: cssString = Object.entries(css).reduce((acc,e)=>acc+(`${e[0]}: ${e[1]};`), "")


</script>

<style>
  button {
    transition: 0.5s;
    color: var(--theme-botones-primario-borde);
    padding: calc(var(--theme-botones-primario-espacio) * 2) calc(var(--theme-botones-primario-espacio) * 4);
    background-color: var(--theme-botones-secundario-fondo);
    font-family: var(--theme-botones-primario-familia);
    border-radius: var(--theme-botones-primario-esquinas);
    display: flex;
    cursor: pointer;
    margin: 0;
    align-items: center;
  }
  button:hover {
    color: var(--theme-botones-secundario-hover);
    border: 1px solid var(--theme-botones-secundario-hover) !important;
    opacity: 0.75;
  }
  button:hover :global(svg) {
    transition: 0.5s;
    fill: var(--theme-botones-secundario-hover);
    /* stroke: var(--theme-botones-secundario-hover); */
  }

  /* button:focus,
  button:visited, */
  button:active {
    color: var(--theme-botones-primario-activo);
  }
  .no-borde {
    border: 0;
  }
  .borde {
    border: 1px solid var(--theme-botones-primario-borde);
  }
  .borde:hover {
    border: 1px solid var(--theme-botones-primario-hover);
  }
  .borde:visited,
  .borde:active {
    border: 1px solid var(--theme-botones-primario-activo);
  }
  .borde:focus {
    outline: 0;
  }
  button :global(.iconoContenedor) {
    margin: 0 0.5rem;
  }
  button :global(.iconoContenedor svg) {
    fill: var(--theme-botones-primario-borde);
  }

</style>

<button on:click={()=>click()} class={!!borde ? 'borde' : 'no-borde'} style={cssString}>

  <!-- version iconos dos estados -->
  {#if !!iconoBotonEstadoUnoUrl}
    <Icono
    icono={!!estado ? iconoBotonEstadoDosUrl : iconoBotonEstadoUnoUrl}
    tamanno={'1rem'}
    color={css.color}
    />
  {:else}{!!texto ? texto : ''}{/if}

  <!-- Version prop icono -->
  {#if !!icono}
    <Icono {icono} tamanno={'1rem'} color={css.color} />
  {/if}

</button>
