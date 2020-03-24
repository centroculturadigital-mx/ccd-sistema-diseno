<script>
  import BotonIcono from "../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import VideoReproductor from "./VideoReproductor/VideoReproductor.svelte";
  import VideoTarjeta from "./VideoTarjeta/VideoTarjeta.svelte";
  import VideosLista from "./VideosLista/VideosLista.svelte";

  export let estado;
  export let videos;

  const verReproductor = () => {
    console.log("Veo el reproductor");
    let estado = false;
  };
  const verTarjeta = () => {
      console.log("Veo la tarjeta");
    let estado = true;
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
        <a href="#" on:click|preventDefault={verTarjeta}>
          <BotonIcono iconoBotonEstadoUnoUrl="cerrar_blanco.svg" />
        </a>
      </header>
      <VideoReproductor url={videos[0].url}/>
    {:else}
        <VideoTarjeta titulo={videos[0].titulo} imagen={videos[0].imagen} abrir={verReproductor}/>
    {/if}

  </section>

  <section class="contenedorLista">

    <VideosLista {videos}/>

  </section>

</section>
