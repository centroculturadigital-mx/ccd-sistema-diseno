<script>
  import NavegacionListaElemento from "../NavegacionListaElemento/NavegacionListaElemento.svelte";

  export let elementos = [];
  
</script>

<section class="NavegacionLista">
  <NavegacionListaElemento {elementos} />
</section>