<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let imagenUrl;
  export let titulo;
  export let nivelTitulo;
  export let colorTitulo;
  export let texto;
  export let color;
  export let colorBG;
  export let sombra;
  export let iconoBotonEstadoUnoUrl;
  export let iconoBotonAltura;
  export let chica;

  $: nivelTituloMostrar = chica ? 5 : nivelTitulo ? nivelTitulo :  4


  $: clases = (
    (!!sombra ? 'sombra' : '')
    +
    (!!chica ? 'chica' : '')
  )

</script>

<style>
  article {
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: unset;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0.25rem;
    background-color: rgb(255);
    color: rgb(0, 0, 0);
  }
  .tarjeta-imagen {
    width: 50%;
    height: 21rem;
  }
  .tarjeta-texto {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 50%;
    padding: 0.5rem 1rem;
  }
  .tarjeta-boton {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .sombra {
    box-shadow: -1px 2px 3px rgba(0, 0, 0, 5);
  }

  .chica .tarjeta-imagen {
    height: 4rem;
    width: 25%;
  }
</style>

<article style="background-color:{colorBG};" class={clases}>

  <div class="tarjeta-imagen">
    <Imagen {imagenUrl} altTexto={titulo} ajuste="cover" />
  </div>

  <div class="tarjeta-texto">

    {#if !!titulo}
      <Titulo texto={titulo} nivel={nivelTituloMostrar} color={colorTitulo} />
    {/if}
    <Parrafo {texto} {color} />

    <div class="tarjeta-boton">
      <Boton
        on:click
        radius="15px"
        texto="Saber más"
        {iconoBotonEstadoUnoUrl}
        {iconoBotonAltura} />
    </div>

  </div>

</article>
