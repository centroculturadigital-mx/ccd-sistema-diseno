<script>
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import VideoReproductor from "./VideoReproductor/VideoReproductor.svelte";
  import VideoTarjeta from "./VideoTarjeta/VideoTarjeta.svelte";
  import VideosLista from "./VideosLista/VideosLista.svelte";

  let estado;

  const verReproductor = () => {
    console.log("Veo el reproductor");
    let estado = true;
  };
  const verTarjeta = () => {
      console.log("Veo la tarjeta");
    let estado = false;
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
      <VideoReproductor />
    {:else}
      <a href="#" on:click|preventDefault={verReproductor}>
        <VideoTarjeta />
      </a>
    {/if}

  </section>

  <section class="contenedorLista">

    <VideosLista />

  </section>

</section>
