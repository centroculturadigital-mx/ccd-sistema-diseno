<script>
  export let videoUrls;
  export let autoplay;
  export let loop;
  export let muted;
  export let controls;
  export let ajuste;
  export let alineacion;
  export let altura;
</script>

<style>
  video {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
</style>

{#if !!videoUrls}
  <video
    {autoplay}
    {loop}
    {muted}
    {controls}
    style="object-fit:{ajuste};object-position:{alineacion};height:{altura}">
    {#each videoUrls as videoUrl}
      <source src={videoUrl} />
    {/each}
    Tu navegador no soporta HTML5 video.
  </video>
{/if}
