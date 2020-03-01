<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import BotonVista from "../../../elementos/botones/Boton/Boton.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let imagenUrl;
  export let titulo;
  export let nivelTitulo;
  export let colorTitulo;
  export let texto;
  export let color;
  export let colorBG;
  export let sombra;
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
    background-color: rgb(255);
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
  .sombra {
    box-shadow: -1px 2px 3px rgba(0, 0, 0, 5);
  }
</style>

<article style="background-color:{colorBG};" class={!!sombra ? 'sombra' : ''}>

  <div class="tarjeta-imagen">
    <Imagen {imagenUrl} altTexto={titulo} ajuste="cover" />
  </div>

  <div class="tarjeta-texto">

    {#if !!titulo}
      <Titulo texto={titulo} nivel={nivelTitulo} color={colorTitulo} />
    {/if}
    {#if !!texto}
      <Parrafo {texto} {color} />
    {/if}

    <div class="tarjeta-boton">
      <BotonVista radius="15px" texto="Saber más" on:click />
    </div>

  </div>

</article>
