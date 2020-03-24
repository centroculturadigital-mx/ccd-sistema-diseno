<script>
  import BotonIcono from "../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import VideoReproductor from "./VideoReproductor/VideoReproductor.svelte";
  import VideoTarjeta from "./VideoTarjeta/VideoTarjeta.svelte";
  import VideosLista from "./VideosLista/VideosLista.svelte";

  import iconoCierra from "../../../public/cerrar_blanco.svg";

  export let videos;
  let estado;

  const alternarEstado = () => {
    estado = !estado;
    console.log(estado);
  };

</script>

<style>
  .videoGaleria {
    padding: 0;
  }
</style>

<section class="videoGaleria">

  <section class="contenedorGrande">

    {#if estado == true}
      <header>
        <a href="#" on:click|preventDefault={alternarEstado}>
          <BotonIcono iconoBotonEstadoUnoUrl={iconoCierra}/>
        </a>
      </header>
      <VideoReproductor url={videos[0].url} />
    {:else}
      <VideoTarjeta
        titulo={videos[0].titulo}
        imagen={videos[0].imagen}
        abrir={alternarEstado} />
    {/if}

  </section>

  <section class="contenedorLista">

    <VideosLista {videos} />

  </section>

</section>
