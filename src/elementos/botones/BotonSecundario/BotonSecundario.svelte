<script>
  export let texto;
</script>

<style>
  button {
    background-color: var(--theme-botones-secundario-fondo);
    color: var(--theme-botones-primario-color);
    border: 1px solid var(--theme-botones-secundario-color);
    padding: var(--theme-botones-primario-espacio);
    font-family: var(--theme-botones-primario-familia);
    border-radius: var(--theme-botones-primario-esquinas);
    margin: 0;
    cursor: pointer;
    transition: 0.5s;
  }
  button:hover {
    border: 1px solid var(--theme-botones-secundario-hover);
    color: var(--theme-botones-secundario-borde);
  }
  button:focus,
  button:visited,
  button:active {
    border: 1px solid var(--theme-botones-primario-activo);
    color: var(--theme-botones-primario-activo);
  }
</style>

<button on:click>{!!texto ? texto : ''}</button>
