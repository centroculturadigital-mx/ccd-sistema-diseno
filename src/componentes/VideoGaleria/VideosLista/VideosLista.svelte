<script>
  import VideoVistaPrevia from "../VideoVistaPrevia/VideoVistaPrevia.svelte";

  export let videos;
  export let seleccionado;

</script>

<aside class="VideosLista">

  {#if Array.isArray( videos )}
    {#each videos as video, i ('video_' + i)}
      {#if typeof video == "object" }
          <VideoVistaPrevia
            imagen={video.imagen}
            nombre={video.nombre}
            {seleccionado} 
            indice={i}/>
      {/if}
    {/each}
  {/if}

</aside>
