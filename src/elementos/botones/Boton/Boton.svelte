<script>
  export let texto = "Default";
  export let color;
  export let colorBG;
  export let paddingX;
  export let radius;
  export let iconoBotonEstadoUnoUrl;
  export let iconoBotonEstadoDosUrl;
  export let iconoAltura;

  export let estado = false;
</script>

<style>
  button {
    transition: 0.5s;
    background-color: black;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
  }
  button:hover {
    box-shadow: 1px 1px 2px #477751;
  }
  img {
    height: 2rem;
    width: auto;
  }
</style>

<button
  style="border-radius:{radius}; background-color:{colorBG}; color:{color};
  padding: 0.5rem {paddingX};"
  on:click>

  {#if !!iconoBotonEstadoUnoUrl}
      <img
        src={!!estado ? iconoBotonEstadoUnoUrl:iconoBotonEstadoDosUrl}
        alt={!!texto ? texto : ''}
        style="height:{iconoAltura};" />

  {:else}{!!texto ? texto : ''}{/if}

</button>
