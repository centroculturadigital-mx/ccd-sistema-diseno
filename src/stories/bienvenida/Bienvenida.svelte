<script>
  import PlayCircleIcon from "../../../node_modules/svelte-feather-icons/src/icons/PlayCircleIcon.svelte";

  export let videoUrls;
  export let imagenUrl;
  export let textoTitulo;
  export let colorOverlay;
  export let color;
</script>

<style>
  section {
    position: relative;
  }
  .fondo {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 0;
  }
  img,
  video {
    object-fit: fill;
    height: 100%;
  }
  .overlay {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
  }
  .texto {
    position: absolute;
    top: 0;
    color: white;
    height: 100vh;
    width: 100vw;
    z-index: 2;
  }
</style>

<section>
  <div class="fondo">
    {#if !!imagenUrl}
      <img src={imagenUrl} alt={textoTitulo} />
    {:else if !!videoUrls}
      <video src={videoUrls}>
        {#each videoUrls as videoUrl}
          <source src={videoUrl} />
        {/each}
        Tu navegador no soporta HTML5 video.
      </video>
    {/if}
  </div>
  <div class="overlay" style="background-color:{colorOverlay}"/>
  <div class="texto" style="background-color:{color}">

    <h2>{textoTitulo}</h2>

    {#if !!videoUrls}
      <div>
        <PlayCircleIcon />
      </div>
    {/if}
  </div>

</section>
