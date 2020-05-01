<script>
  import ListaComponentes from "../../Listados/ListaComponentes/ListaComponentes.svelte";
  import RegistroTarjeta from "../RegistroTarjeta/RegistroTarjeta.svelte";
  export let elementos;
  export let mensajeVacio = "No hay Registros";

  $: elementosMostrar = elementos.map(e => ({
    componente: RegistroTarjeta,
    data: e
  }));
</script>

<style>
  #RegistrosLista :global(.ListaComponentes ul) {
    margin: 0;
    padding: 0;
    width: 100%;
    padding: 1rem;
    /* display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center; */
  }
  #RegistrosLista :global(.ListaComponentes ul) {
    box-sizing: border-box;
  }
  #RegistrosLista :global(.ListaComponentes ul li) {
    margin: 0;
    /* margin-bottom: 1rem; */
  }
</style>

<section id="RegistrosLista">

  {#if Array.isArray(elementosMostrar)}
    <ListaComponentes elementos={elementosMostrar} {mensajeVacio} />
  {/if}
</section>
