<script>
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import iconoPlay from "../VideoTarjeta/play.png";


  export let imagen;
  export let nombre;
  export let indice;
  export let seleccionado;
</script>

<style>
  .VideoVistaPrevia {
    cursor: pointer;
    border-bottom: 1px solid #aaaaaa;
    display: flex;
    box-sizing: border-box;
    padding: 1rem 0;
  }
  .VideoVistaPrevia:hover {
    opacity: 0.75;
  }
  .VideoVistaPrevia :global(h4) {
    width: 60%;
    margin: 0;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
  .VideoVistaPrevia :global(h4 span) {
    color: #666666;
  }
  .Imagen {
    width: 40%;
    flex-shrink: 0;
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
  
  @media screen and (min-width: 720px) {
    .VideoVistaPrevia :global(h4) {
      font-size: 0.75rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .VideoVistaPrevia :global(h4) {
      font-size: 0.85rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .VideoVistaPrevia :global(h4) {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 1920px) {
    .VideoVistaPrevia :global(h4) {
      font-size: 1.25rem;
    }
  }
</style>

<article
  class="VideoVistaPrevia"
  on:click={seleccionado(indice)}
  >

  <div class="Imagen">

    <Imagen imagenUrl={imagen} altTexto={nombre}  />

    <a href="#" on:click|preventDefault>
      <img src={iconoPlay} alt="play" />
    </a>

  </div>

  <Titulo nivel={'4'} texto={nombre} />

</article>
