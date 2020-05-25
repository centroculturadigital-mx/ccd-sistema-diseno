<script>
  import Insertar from "../../../elementos/media/Insertar/Insertar.svelte";

  export let enlace;
  export let id;

</script>

<style>
  .VideoReproductor {
    height: 100%;
    width: 100%;
  }
</style>

<article class="VideoReproductor">

  <Insertar {id} {enlace}/>

</article>
