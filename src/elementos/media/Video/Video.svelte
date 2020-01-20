<script>
  export let videoUrls;
  export let autoplay;
  export let loop;
  export let muted;
  export let controls;
  export let altura;
</script>

<style>
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
</style>

{#if !!videoUrls}
  <video {autoplay} {loop} {muted} {controls} style="height:{altura}">
    {#each videoUrls as videoUrl}
      <source src={videoUrl} />
    {/each}
    Tu navegador no soporta HTML5 video.
  </video>
{/if}
