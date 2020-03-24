<script>
  import VideoReproductor from "./VideoReproductor/VideoReproductor.svelte";
  import VideoTarjeta from "./VideoTarjeta/VideoTarjeta.svelte";
  import VideosLista from "./VideosLista/VideosLista.svelte";

  let estado = false;
</script>

<style>
.videoGaleria {
    padding: 0;

}
</style>

<section class="videoGaleria">

  {#if estado}
    <VideoReproductor />
  {:else}
    <VideoTarjeta />
  {/if}

  <VideosLista />

</section>
