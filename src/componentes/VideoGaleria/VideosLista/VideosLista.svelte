<script>
  import VideoVistaPrevia from "../VideoVistaPrevia/VideoVistaPrevia.svelte";

  export let videos;
</script>

<h1>VIDEOS LISTA</h1>

{#each videos as video}
  <VideoVistaPrevia />
{/each}
