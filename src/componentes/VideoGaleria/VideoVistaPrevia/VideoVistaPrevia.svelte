<script>
  import { onMount } from "svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import BotonIcono from '../../../elementos/botones/BotonIcono/BotonIcono.svelte';

  export let imagen;
  export let nombre;
  export let indice;
  export let seleccionado;

  let elementoActivo;
</script>

<style>
  .VideoVistaPrevia {
    cursor: pointer;
    border-bottom: 1px solid var(--theme-campos-borde);
    display: flex;
    box-sizing: border-box;
    padding: var(--theme-espaciados-padding) 0;
  }
  .VideoVistaPrevia:hover {
    opacity: 0.75;
  }
  .VideoVistaPrevia :global(h4) {
    width: 60%;
    margin: 0;
    display: flex;
    align-items: center;
    padding-left: calc(var(--theme-espaciados-padding) - 0.25rem);
  }
  .VideoVistaPrevia :global(h4 span) {
    color: var(--theme-textos-parrafo-color);
  }
  .Imagen {
    width: 40%;
    flex-shrink: 0;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: calc(var(--theme-espaciados-padding) - 0.25rem);
    box-sizing: border-box;
  }
  .Imagen :global(img) {
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

  @media screen and (min-width: 720px) {
    .VideoVistaPrevia :global(h4) {
      font-size: 0.65rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .VideoVistaPrevia :global(h4) {
      font-size: 0.75rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .VideoVistaPrevia :global(h4) {
      font-size: 0.95rem;
    }
  }
  @media screen and (min-width: 1920px) {
    .VideoVistaPrevia :global(h4) {
      font-size: 1.25rem;
    }
  }
</style>

<article
  bind:this={elementoActivo}
  on:click={seleccionado(indice, elementoActivo)}
  class="VideoVistaPrevia">

  <div class="Imagen">

    <Imagen imagen={imagen} altTexto={nombre} />

    <a href="#VideoGaleria" on:click>
      <BotonIcono icono={"play"}/>
    </a>

  </div>

  <Titulo nivel={'4'} texto={nombre} />

</article>
