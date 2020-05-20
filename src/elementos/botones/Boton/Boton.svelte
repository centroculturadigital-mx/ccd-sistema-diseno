<script>
  export let texto = "Presionar botón";

</script>

<style>
  button {
    background-color: var(--theme-botones-primario-fondo);
    color: var(--theme-botones-primario-color);
    padding: calc(var(--theme-botones-primario-espacio) * 2) calc(var(--theme-botones-primario-espacio) * 4);
    font-family: var(--theme-botones-primario-familia);
    border-radius: var(--theme-botones-primario-esquinas);
    border: 1px solid var(--theme-botones-primario-borde);
    cursor: pointer;
    margin: 0;
    transition: 0.5s;
  }
  button:hover {
    background-color: var(--theme-botones-primario-hover);
    border-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-secundario-color);
  }
  button:focus,
  button:visited,
  button:active {
    background-color: var(--theme-botones-primario-activo);
    border-color:  var(--theme-botones-primario-activo);
    color: var(--theme-botones-primario-claro);
  }
</style>

<button on:click>
  {!!texto ? texto : ''}
</button>
