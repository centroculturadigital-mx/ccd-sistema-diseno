<script>
  import Embebido from "../Embebido/Embebido.svelte";

  export let enlace;
  export let videos;
  export let autoplay;
  export let loop;
  export let muted;
  export let controls;
</script>

<style>
  .Video {
    height: 100%;
    width: 100%;
  }
  video {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  .Iframe {
    height: 100%;
    width: 100%;
  }
</style>

<section class="Video">
  {#if !!enlace}
    <div class="Iframe">

      <Embebido {enlace} />

    </div>
  {:else if !!videos}
    <video {autoplay} {loop} {muted} {controls}>

      {#each videos as videoUrl}
        <source src={videoUrl} />
      {/each}
      Tu navegador no soporta HTML5 video.
    </video>
  {/if}
</section>
