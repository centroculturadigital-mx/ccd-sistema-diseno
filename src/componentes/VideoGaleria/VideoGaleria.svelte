<script>
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
    activo  = i;
  };

</script>

<style>
  .VideoGaleria {
    width: 100%;
    height: auto;
    padding: 1rem;
    box-sizing: border-box;
  }
  .ContenedorPrincipal {
    min-height: 32rem;
    border-bottom: #AAAAAA;
  }
  .ContenedorPrincipal :global(span) {
    color: #666666;
  }
  .ContenedorMedia {
    height: 22rem;
  }
</style>

<section class="VideoGaleria">

  <section class="ContenedorPrincipal">

    <div class="ContenedorMedia">
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

  <section class="contenedorLista">

    <VideosLista {videos} seleccionado={seleccionar}/>

  </section>

</section>
