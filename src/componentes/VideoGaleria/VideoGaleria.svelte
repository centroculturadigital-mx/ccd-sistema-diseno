<script>
  import { fade } from "svelte/transition";
  import BotonIcono from "../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import Titulo from "../../elementos/texto/Titulo/Titulo.svelte";
  import VideoReproductor from "./VideoReproductor/VideoReproductor.svelte";
  import VideoTarjeta from "./VideoTarjeta/VideoTarjeta.svelte";
  import VideosLista from "./VideosLista/VideosLista.svelte";

  import iconoCierra from "../../../public/cerrar_blanco.svg";

  export let videos;

  export let activo = 0;

  let estado;

  const alternarEstado = () => {
    estado = !estado;
  };

  const seleccionar = i => {
    activo = i;
  };
</script>

<style>
  .VideoGaleria {
    --altura: 18rem;
  }
  .VideoGaleria {
    width: 100%;
    height: auto;
    padding: 1rem;
    box-sizing: border-box;
    display: block;
  }
  .ContenedorPrincipal {
    min-height: auto;
  }
  .ContenedorPrincipal :global(span) {
    color: #666666;
  }
  .ContenedorPrincipal :global(h4) {
    min-height: 5rem;
    margin: 0;
    display: flex;
    align-items: center;
  }
  .ContenedorMedia {
    height: var(--altura);
    position: relative;
  }
  .ContenedorMedia header {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: auto;
    transition: 0.5s;
  }
  .ContenedorMedia header a:hover {
    filter: invert();
  }
  .ContenedorLista {
    width: 100%;
    box-sizing: border-box;
    padding-left: 1rem;
    max-height: calc(var(--altura) + 5rem);
    overflow-y: initial;
    overflow-x: initial;
  }
  @media screen and (min-width: 720px) {
    .VideoGaleria {
      --altura: 18rem;
    }
    .VideoGaleria {
      display: flex;
    }
    .ContenedorPrincipal {
      width: 60%;
      border-bottom: 1px solid #aaaaaa;
    }
    .ContenedorLista {
      width: 40%;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
  @media screen and (min-width: 1024px) {
    .VideoGaleria {
      --altura: 22rem;
    }
    .ContenedorPrincipal {
      width: 70%;
    }
    .ContenedorLista {
      width: 30%;
    }
    .ContenedorPrincipal :global(h4) {
      font-size: 1.125rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .VideoGaleria {
      --altura: 24rem;
    }
    .ContenedorPrincipal {
      width: 70%;
    }
    .ContenedorLista {
      width: 30%;
    }
    .ContenedorPrincipal :global(h4) {
      font-size: 1.25rem;
    }
  }
  @media screen and (min-width: 1920px) {
    .VideoGaleria {
      --altura: 34rem;
    }
    .ContenedorPrincipal :global(h4) {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 2250px) {
    .VideoGaleria {
      --altura: 48rem;
    }
    .ContenedorPrincipal :global(h4) {
      font-size: 1.75rem;
    }
  }
</style>

<section class="VideoGaleria">

  <section class="ContenedorPrincipal">

    <div class="ContenedorMedia" transition:fade>
      {#if estado == true}
        <header>
          <a href="#" on:click|preventDefault={alternarEstado}>
            <BotonIcono iconoBotonEstadoUnoUrl={iconoCierra} />
          </a>
        </header>

        <VideoReproductor url={videos[activo].url} />
      {:else}
        <VideoTarjeta imagen={videos[activo].imagen} abrir={alternarEstado} />
      {/if}
    </div>

    <Titulo nivel={'4'} texto={videos[activo].titulo} />

  </section>

  <section class="ContenedorLista">

    <VideosLista {videos} seleccionado={seleccionar} />

  </section>

</section>
