<script>
  import NavegacionListaElemento from "../NavegacionListaElemento/NavegacionListaElemento.svelte";

  export let elementos = [];
  export let accion;
   
</script>

<style>
.NavegacionLista {
 background-color: var(--theme-tarjetas-fondo);
 padding: var(--theme-tamannos-md);
}

</style>

<section class="NavegacionLista"> 
  {#each elementos as elemento, i ({ texto: elemento.texto, elementos: elemento.elementos.map(e=>e.texto), i })}
    <NavegacionListaElemento {elemento} {accion}/>
  {/each}
</section>