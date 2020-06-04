<script>
  import NavegacionListaElemento from "../NavegacionListaElemento/NavegacionListaElemento.svelte";

  export let elementos = [];
   
</script>

<style>
.NavegacionLista{
 background-color: var(--theme-tarjetas-fondo);
 padding: 0rem 2rem 0rem 2rem;
 font-family: var(--theme-textos-parrafo-tipografia);
 color: var(--theme-textos-parrafo-color);

}

</style>

<section class="NavegacionLista"> 
  <NavegacionListaElemento {elementos} />
</section>