<script>
  export let texto;
  export let color;
  export let colorBG;
  export let paddingX;
  export let radius;
</script>

<style>
  button {
    background-color: var(--theme-botones-primario-fondo);
    color: var(--theme-botones-primario-color);
    padding: calc(var(--theme-botones-primario-espacio) * 2 ) calc(var(--theme-botones-primario-espacio) * 4);
    font-family: var(--theme-botones-primario-familia);
    border-radius: var(--theme-botones-primario-esquinas);
    border: none;
    cursor: pointer;
    margin: 0;
    transition: 0.5s;
  }
  button:hover {
    background-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-secundario-color);
  }
  button:focus,
  button:visited,
  button:active {
    background-color: var(--theme-botones-primario-activo);
    color: var(--theme-botones-primario-claro);
  }

</style>

<button
  style="border-radius:{radius};background-color:{colorBG};color:{color};padding:
  0.5rem {paddingX};"
  on:click>
  {!!texto ? texto : ''}
</button>
