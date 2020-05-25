<script>
  import { fade } from "svelte/transition";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";
  
  import iconoPlay from "./play.svg";

  export let nombre;
  export let imagen;
  export let abrir;

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
    display: flex;
    justify-content: center;
  }
  a :global(button) {
    transition: 0.5s;
  }
  a :global(button:hover) {
    filter: invert();
  }
  a :global(button .iconoContenedor img) {
  height: calc( var(--theme-iconos-primario-tamanno) * 2.5);
  }

</style>

<article class="VideoTarjeta" tansition:fade>

  <div class="VideoTarjetaImagen">
    <Imagen
      imagen={imagen}
      altTexto={nombre}
      alineacion={'center'}
      />

    <a href="#" on:click|preventDefault={abrir}>
      <BotonIcono icono={"play"} alt={"play"}/>
    </a>

  </div>

</article>
