<script>
  import Icono from "../../Icono/Icono.svelte";
 
  export let texto = "Default";
  export let color;
  export let colorBG;
  export let paddingX;
  export let radius;
  export let icono;
  export let iconoBotonEstadoUnoUrl;
  export let iconoBotonEstadoDosUrl;
  export let iconoAltura;

  export let estado = false;

</script>

<style>
  button {
    transition: 0.5s;
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 0;
  }
  button:hover {
    box-shadow: 1px 2px 2px transparent;
  }
  img {
    height: 2rem;
    width: auto;
  }
</style>

<button
  style="border-radius:{radius};background-color:{colorBG};color:{color};padding:
  0.5rem {paddingX};"
  on:click>

  {#if !!iconoBotonEstadoUnoUrl}
    <img
      src={!!estado ? iconoBotonEstadoDosUrl : iconoBotonEstadoUnoUrl}
      alt={!!texto ? texto : ''}
      style="height:{iconoAltura};" />
  {:else}{!!texto ? texto : ''}{/if}

  <!-- nuevo prop icono -->
  {#if !!icono}
    <Icono {icono} tamanno={'1rem'}/>
  {/if}

</button>
