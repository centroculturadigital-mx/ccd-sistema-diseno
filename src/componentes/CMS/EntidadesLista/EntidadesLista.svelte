<script>
  import ListaComponentes from "../../Listados/ListaComponentes/ListaComponentes.svelte";
  import EntidadTarjeta from "../../../componentes/CMS/EntidadTarjeta/EntidadTarjeta.svelte";

  export let elementos;
  export let mensajeVacio = "No hay Entidades";

  $: elementosMostrar = elementos.map(data => ({
    componente: EntidadTarjeta,
    data
  }));
</script>

<style>
  #EntidadesLista :global(.ListaComponentes ul) {
    margin: 0;
    padding: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    box-sizing: border-box;
  }
  #EntidadesLista :global(.ListaComponentes ul li) {
    margin: 0;
  }
</style>

<section id="EntidadesLista">

    <ListaComponentes elementos={elementosMostrar} {mensajeVacio} />

</section>
