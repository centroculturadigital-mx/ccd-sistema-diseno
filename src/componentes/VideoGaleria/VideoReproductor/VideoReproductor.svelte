<script>
  import { slide } from "svelte/transition";
  import Insertar from "../../../elementos/media/Insertar/Insertar.svelte";

  export let url;
  export let titulo;
  export let alto;
  export let ancho;
</script>

<style>
  .VideoReproductor {
    height: 100%;
    width: 100%;
  }
  .VideoReproductor :global(iframe) {
    height: 100%;
    width: 100%;
  }
</style>

<article class="VideoReproductor">

  <Insertar {url} {alto} {ancho} />

</article>
