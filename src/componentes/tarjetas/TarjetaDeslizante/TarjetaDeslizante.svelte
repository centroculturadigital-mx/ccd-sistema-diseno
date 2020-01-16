<script>
  import ImagenVista from "../../imagen/ImagenVista.svelte";
  import Titulo from "../../titulo/Titulo.svelte";
  import BotonVista from "../../botones/Boton/BotonVista.svelte";

  export let imagenUrl;
  export let textoParrafo;
  export let titulo;
  export let nivelTitulo;
  export let colorTitulo;
</script>

<style>
  article {
    max-width: 20rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0.25rem;
    background-color: rgb(192, 192, 192);
    color: rgb(0, 0, 0);
  }
  .tarjeta-imagen {
    width: 100%;
    height: 10rem;
  }
  .tarjeta-texto {
    box-sizing: border-box;
    padding: 1rem 2rem;
    width: 100%;
  }
  .tarjeta-boton {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (min-width: 720px) {
    article {
      max-width: 100%;
      flex-direction: unset;
    }
    .tarjeta-imagen {
      width: 50%;
      height: 20rem;
    }
    .tarjeta-texto {
      width: 50%;
      box-sizing: border-box;
      padding: 0.5rem 1rem;
    }
  }
</style>

<article>

  <div class="tarjeta-imagen">
    <ImagenVista {imagenUrl} altTexto={titulo} ajuste="cover" />
  </div>

  <div class="tarjeta-texto">

    {#if !!titulo}
      <Titulo {titulo} {nivelTitulo} color={colorTitulo} />
    {/if}
    <p>{textoParrafo}</p>

    <div class="tarjeta-boton">
      <BotonVista radius="15px" texto="Saber más" on:click />
    </div>

  </div>

</article>
