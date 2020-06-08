<script>
  import Embebido from "../../../elementos/media/Embebido/Embebido.svelte";

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

  <Embebido {id} {enlace}/>

</article>
