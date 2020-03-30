<script>
  import { fade } from "svelte/transition";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";
  
  import iconoPlay from "./play.svg";

  export let nombre;
  export let imagen;
  export let abrir;

  let alturaImagen;
</script>

<style>
  .VideoTarjeta {
    height: 100%;
  }
  .VideoTarjetaImagen {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .VideoTarjetaImagen :global(img) {
    border-radius: 4px;
  }
  a {
    position: absolute;
    height: auto;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  a :global(button),
  a :global(button img) {
    height: 5rem;
    transition: 0.5s;
  }
  a :global(button img:hover) {
    filter: invert();
  }
  a img {
    height: 4rem;
    transition: 0.5s;
  }
  a img:hover {
    height: 4.25rem;
  }
</style>

<article class="VideoTarjeta" tansition:fade>

  <div class="VideoTarjetaImagen">
    <Imagen
      imagenUrl={imagen}
      altTexto={nombre}
      alineacion={'center'}
      altura={alturaImagen} />

    <a href="#" on:click|preventDefault={abrir}>
      <!-- <BotonIcono iconoBotonEstadoUnoUrl={iconoPlay} /> -->
      <img src={iconoPlay} alt="play" />
    </a>

  </div>

</article>
