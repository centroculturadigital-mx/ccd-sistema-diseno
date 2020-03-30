<script>
  import { onMount } from "svelte";
  import BotonIcono from "../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import Titulo from "../../elementos/texto/Titulo/Titulo.svelte";
  import VideoReproductor from "./VideoReproductor/VideoReproductor.svelte";
  import VideoTarjeta from "./VideoTarjeta/VideoTarjeta.svelte";
  import VideosLista from "./VideosLista/VideosLista.svelte";
  import iconoCierra from "./cerrar_blanco.svg";

  export let videos;
  export let activo;

  let siguiente;

  $: videoActivo = seleccionarActivo(activo, siguiente);
  $: videoActual = activarVideo(videoActivo);

  $: activarGaleria(videos);

  const seleccionarActivo = (act, sig) => {
    const activoInt = parseInt(act);
    const siguienteInt = parseInt(sig);

    if (activoInt === 0 || activoInt > 0) {
      return act;
    }
    if (siguienteInt === 0 || siguienteInt > 0) {
      return sig;
    }
  };

  const activarVideo = indice => {
    return Array.isArray(videos) ? videos[indice] : null;
  };

  const activarGaleria = videos => {
    if (Array.isArray(videos)) {
      if (videos.length > 0) {
        if (!siguiente) {
          setTimeout(() => {
            siguiente = videos.findIndex(v => typeof v == "object");
          });
        }
      }
    }
  };

  let estado;

  const alternarEstado = () => {
    estado = !estado;
  };

  // const seleccionar = (i, elemento) => {
  const seleccionar = (i, elemento = "") => {
    activo = i;

    if (elemento != "") {
      // Aplica color activo + quita color activo anterior

      limpiaColorLista(elemento.parentElement.childNodes);

      elemento.style.backgroundColor = "rgba(200,200,200,0.35)";
      elemento.style.opacity = "opacity(0.85)";
    }
  };

  const limpiaColorLista = lista => {
    // Elimina el color del elemento activo
    lista.forEach(item => {
      if (item.nodeName === "ARTICLE") {
        item.style.backgroundColor = "#FFF";
      }
    });
  };
  onMount(() => {
    // estilo video inicial
    let inicial = document.querySelector(".VideosLista").children[0];
    seleccionar(0, inicial);
    //
  });
</script>

<style>
  #VideoGaleria {
    scroll-behavior: smooth;
  }
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
    right: 0.25rem;
    top: 1rem;
    width: auto;
    transition: 0.5s;
  }
  .ContenedorMedia header a button :global(img:hover) {
    filter: invert();
    background: transparent;
  }
  .ContenedorMedia header a button:hover {
    background-color: transparent;
    box-shadow: 0;
  }
  .ContenedorLista {
    width: 100%;
    box-sizing: border-box;
    padding-left: 0rem;
    max-height: auto;
    overflow-y: initial;
    overflow-x: initial;
  }
  @media screen and (min-width: 720px) {
    .VideoGaleria {
      --altura: 23rem;
    }
    .VideoGaleria {
      display: flex;
    }
    .ContenedorPrincipal {
      width: 60%;
      /* border-bottom: 1px solid #aaaaaa; */
    }
    .ContenedorLista {
      width: 40%;
      overflow-y: scroll;
      overflow-x: hidden;
      max-height: calc(var(--altura) + 5rem);
      padding-left: 1rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .VideoGaleria {
      --altura: 25rem;
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
      --altura: 29rem;
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
      --altura: 30rem;
    }
    .ContenedorPrincipal :global(h4) {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 2250px) {
    .VideoGaleria {
      --altura: 32rem;
    }
    .ContenedorPrincipal :global(h4) {
      font-size: 1.75rem;
    }
  }
</style>

<section id="VideoGaleria" class="VideoGaleria">

  <section class="ContenedorPrincipal">

    {#if !!videoActual && typeof videoActual == 'object'}
      <div class="ContenedorMedia">
        {#if estado}
          <header>
            <a href="#" on:click|preventDefault={alternarEstado}>
              <BotonIcono iconoBotonEstadoUnoUrl={iconoCierra} />
            </a>
          </header>

          <VideoReproductor enlace={videoActual.enlace} />
        {:else}
          <VideoTarjeta imagen={videoActual.imagen} abrir={alternarEstado} />
        {/if}
      </div>

      <Titulo nivel={'4'} texto={videoActual.nombre} />
    {/if}
  </section>

  <section class="ContenedorLista">

    <VideosLista {videos} seleccionado={seleccionar} />

  </section>

</section>
