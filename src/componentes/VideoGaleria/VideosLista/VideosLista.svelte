<script>
  import VideoVistaPrevia from "../VideoVistaPrevia/VideoVistaPrevia.svelte";

  export let videos;
  export let seleccionado;

</script>

<aside class="VideosLista">

  {#each videos as video, i ('video_' + i)}
    <VideoVistaPrevia
      imagen={video.imagen}
      titulo={video.titulo}
      {seleccionado} 
      indice={i}/>
    <hr />
  {/each}

</aside>
