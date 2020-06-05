<script>
  export let texto;
  export let click;
</script>

<style>
  button {
    background-color: var(--theme-botones-secundario-fondo);
    color: var(--theme-botones-secundario-color);
    border: 1px solid var(--theme-botones-secundario-color);
    padding: calc(var(--theme-botones-primario-espacio) * 2 ) calc(var(--theme-botones-primario-espacio) * 4);
    font-family: var(--theme-botones-primario-familia);
    border-radius: var(--theme-botones-primario-esquinas);
    margin: 0;
    cursor: pointer;
    transition: var(--theme-transiciones-normal); 
  }
  button:hover {
    border: 1px solid var(--theme-botones-secundario-hover);
    color: var(--theme-botones-secundario-hover);
  }
  button:focus,
  button:visited,
  button:active {
    border: 1px solid var(--theme-botones-primario-activo);
    color: var(--theme-botones-primario-activo);
  }
</style>

<button on:click={click}>{!!texto ? texto : ''}</button>
