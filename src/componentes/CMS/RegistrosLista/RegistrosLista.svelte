<script>
  import ListaComponentes from "../../Listados/ListaComponentes/ListaComponentes.svelte";
  import RegistroTarjeta from "../RegistroTarjeta/RegistroTarjeta.svelte";

  export let elementos;
  export let mensajeVacio = "No hay Registros";

  $: elementosMostrar = elementos
    ? elementos.map(e => ({
        componente: RegistroTarjeta,
        data: e
      }))
    : [];
</script>

<style>
  #RegistrosLista {
    width: 100%;
  }
  #RegistrosLista :global(.ListaComponentes ul) {
    margin: 0;
    padding: 0;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
  #RegistrosLista :global(.ListaComponentes ul li) {
    margin: 0;
  }
</style>

<section id="RegistrosLista">

  {#if Array.isArray(elementosMostrar)}
    <ListaComponentes elementos={elementosMostrar} {mensajeVacio} />
  {/if}
</section>
