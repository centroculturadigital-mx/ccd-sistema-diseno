<script>
  export let texto;
  // export let color;
  // export let colorBG;
  // export let paddingX;
  // export let radius;
</script>

<style>
  button {
    transition: 0.5s;
    background-color: var(--theme-botones-secundario-fondo);
    color: var(--theme-botones-primario-color);
    border: 1px solid var(--theme-botones-secundario-color);
    cursor: pointer;
    padding: var(--theme-botones-primario-espacio);
    margin: 0;
    font-family: var(--theme-botones-primario-familia);
    border-radius: var(--theme-botones-tamannos-sm);
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
