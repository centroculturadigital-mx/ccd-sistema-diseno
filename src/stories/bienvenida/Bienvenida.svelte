<script>
import VideoVista from '../video/VideoVista.svelte';
import ImagenVista from '../imagen/ImagenVista.svelte';
import TituloVista from '../titulo/TituloVista.svelte';
import PlayCircleIcon from "../../../node_modules/svelte-feather-icons/src/icons/PlayCircleIcon.svelte";

  export let videoUrls;
  export let imagenUrl;
  export let titulo;
  export let nivelTitulo;
  export let posicionTexto;
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
    max-width: 19rem;
  }
  .texto article {
    height: auto;
    width: 100%;
    display: flex;
    position: relative;
    max-width: 720px;
  }
  .texto div {
    max-width: 3rem;
    position: absolute;
    bottom: -1rem;
  }
  :global(svg.feather-play-circle) {
    stroke-width: 1px;
    stroke: white;
  }
  @media (min-width: 720px) {
    .texto article {
      margin: 0 auto;
    }
    .texto h1 {
      max-width: 26rem;
    }
  }
</style>

<section>
  <div class="fondo">
    {#if !!imagenUrl}
      <ImagenVista {imagenUrl} altTexto={titulo} />
    {:else if !!videoUrls}
      <VideoVista {videoUrls} loop="true" autoplay="true"/>
    {/if}
  </div>
  {#if !!overlay}
    <div class="overlay" style="background-color:{colorOverlay}" />
  {/if}
  {#if !!titulo}
    <div class="texto">
      <article style="justify-content:{posicionTexto};">
        <h1 style="color:{color}">{titulo}</h1>
        <TituloVista {titulo} {nivelTitulo}/>
        {#if !!videoUrls}
          <div>
            <PlayCircleIcon />
          </div>
        {/if}
      </article>
    </div>
  {/if}

</section>
