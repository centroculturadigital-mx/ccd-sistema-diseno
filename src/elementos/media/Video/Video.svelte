<script>
  import Embebido from "../Embebido/Embebido.svelte";

  export let videos;
  export let enlace;
  export let autoplay;
  export let loop;
  export let muted;
  export let controls;

</script>

<style>
  video {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  .videoIframe {
    height: 100%;
    width: 100%;
  }

</style>

{#if !!videos}
  <video
    {autoplay}
    {loop}
    {muted}
    {controls}>
    {#each videos as videoUrl}
      <source src={videoUrl} />
    {/each}
    Tu navegador no soporta HTML5 video.
  </video>
{:else}
  <div class="videoIframe">

    <Embebido {enlace} />

  </div>
{/if}
