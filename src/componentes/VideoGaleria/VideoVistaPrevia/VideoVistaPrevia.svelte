<script>
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";

  export let imagen;
  export let titulo;
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
  }
  @media screen and (min-width: 720px) {
  }
  @media screen and (min-width: 1024px) {
    .VideoVistaPrevia :global(h4) {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .VideoVistaPrevia :global(h4) {
      font-size: 1.125rem;
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

    <Imagen imagenUrl={imagen} altTexto={titulo} altura={'8rem'} />

  </div>

  <Titulo nivel={'4'} texto={titulo} />

</article>
