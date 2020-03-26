<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";

  import iconoPlay from "../../../../public/botonPlay.png";

  export let titulo;
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
</style>

<article class="VideoTarjeta">

  <div class="VideoTarjetaImagen">
    <Imagen
      imagenUrl={imagen}
      altTexto={titulo}
      alineacion={'center'}
      altura={alturaImagen} />

    <a href="#" on:click|preventDefault={abrir}>
      <BotonIcono iconoBotonEstadoUnoUrl={iconoPlay} />
    </a>

  </div>

</article>
