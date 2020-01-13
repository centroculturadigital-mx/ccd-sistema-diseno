<script>
  import PlayCircleIcon from "../../../node_modules/svelte-feather-icons/src/icons/PlayCircleIcon.svelte";

  export let videoUrls;
  export let imagenUrl;
  export let textoTitulo;
  export let overlay;
  export let colorOverlay;
  export let color;
</script>

<style>
  section {
    position: relative;
    height: 100vh;
  }
  .fondo {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  img,
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .overlay {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.35;
    z-index: 1;
  }
  .texto {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
  .texto h1 {
    font-size: 2.7rem;
    max-width: 18rem;
  }
  .texto article {
    height: auto;
    width: 100%;
    display: flex;
    max-width: 720px;
  }
  .texto div {
    max-width: 3rem;
  }
  :global(svg.feather-play-circle) {
    stroke-width: 1px;
    stroke: white;
  }
  @media (min-width: 720px) {
    .texto article {
      margin: 0 auto;
    }
  }
</style>

<section>
  <div class="fondo">
    {#if !!imagenUrl}
      <img src={imagenUrl} alt={textoTitulo} />
    {:else if !!videoUrls}
      <video autoplay loop>
        {#each videoUrls as videoUrl}
          <source src={videoUrl} />
        {/each}
        Tu navegador no soporta HTML5 video.
      </video>
    {/if}
  </div>
  {#if !!overlay}
    <div class="overlay" style="background-color:{colorOverlay}" />
  {/if}
  {#if !!textoTitulo}
    <div class="texto">
      <article>
        <h1 style="color:{color}">{textoTitulo}</h1>
        {#if !!videoUrls}
          <div>
            <PlayCircleIcon />
          </div>
        {/if}
      </article>
    </div>
  {/if}

</section>
