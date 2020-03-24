<script>
  import VideoVistaPrevia from "../VideoVistaPrevia/VideoVistaPrevia.svelte";

  export let videos;
</script>

<aside class="VideosLista">

{#each videos as video}

  <VideoVistaPrevia imagen={video.imagen} titulo={video.titulo}/>

  <hr>

{/each}

</aside>
