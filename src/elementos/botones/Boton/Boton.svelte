<script>
  export let texto;
  export let color;
  export let colorBG;
  export let paddingX;
  export let radius;
</script>

<style>
  button {
    transition: 0.5s;
    background-color: var(--theme-botones-primario-fondo);
    color: var(--theme-botones-primario-color);
    border: none;
    cursor: pointer;
    padding: var(--theme-botones-primario-espacio);
    margin: 0;
    font-family: var(--theme-botones-primario-familia)
  }
  button:hover {
    box-shadow: 1px 2px 2px #477751;
  }

</style>

<button
  style="border-radius:{radius};background-color:{colorBG};color:{color};padding:
  0.5rem {paddingX};"
  on:click>
  {!!texto ? texto : ''}
</button>
