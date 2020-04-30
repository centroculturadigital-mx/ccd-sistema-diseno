<script>
  import ListaComponentes from "../../Listados/ListaComponentes/ListaComponentes.svelte";

  export let elementos;
  export let mensajeVacio = "No hay Registros";
</script>


<style>

  #RegistrosLista :global(.ListaComponentes ul) {
    margin: 0;
    padding: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  #RegistrosLista :global(.ListaComponentes ul li) {
    margin: 0;
  }
</style>

<section id="RegistrosLista">

  <ListaComponentes {elementos} {mensajeVacio} />

</section>
