<script>
import Video from '../video/Video.svelte';
import Imagen from '../media/Imagen/Imagen.svelte';
import Titulo from '../../elementos/texto/Titulo/Titulo.svelte';
import PlayCircleIcon from "../../../node_modules/svelte-feather-icons/src/icons/PlayCircleIcon.svelte";

  export let videos;
  export let imagen;
  export let titulo;
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
    bottom: -2rem;
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
    {#if !!imagen}
      <Imagen {imagen} altTexto={titulo} />
    {:else if !!videos}
      <Video {videos} loop="true" autoplay="true"/>
    {/if}
  </div>
  {#if !!overlay}
    <div class="overlay" style="background-color:{colorOverlay}" />
  {/if}
  {#if !!titulo}
    <div class="texto">
      <article style="justify-content:{posicionTexto};">
        <Titulo texto={titulo} />
        {#if !!videos}
          <div>
            <PlayCircleIcon />
          </div>
        {/if}
      </article>
    </div>
  {/if}

</section>
