<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let imagen;
  export let titulo;
  export let nivelTitulo;
  export let subtitulo;
  export let texto;
  export let sombra;
  export let chica;
  export let enlaces = [];
  export let leyenda;

  $: nivelTituloMostrar = chica ? 5 : nivelTitulo ? nivelTitulo : 4;

  $: clases = (!!sombra ? "sombra" : "") + (!!chica ? "chica" : "");
</script>

<style>
  article {
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: var(--theme-tarjetas-esquina);
    background-color: var(--theme-tarjetas-fondo);
    color: var(--theme-textos-parrafo-color);
    overflow: hidden;
  }
  .Imagen {
    width: 50%;
    height: 21rem;
  }
  .Textos {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 2);
  }
  .Boton {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: var(--theme-esapaciados-margen);
  }
  .sombra {
    box-shadow: -1px 2px 3px rgba(0, 0, 0, 5);
  }

  .chica .Imagen {
    height: 4rem;
    width: 25%;
  }
  .Subtitulo :global(h4) {
    text-align: center;
    margin: 0.5rem 0;
  }
  .Leyenda :global(h5) {
    text-align: center;
    margin: 0.5rem 0;
  }
  .Leyenda :global(h5 span) {
    color: #aaa;
    font-weight: 100;
    font-size: 0.75rem;
    text-align: center;
  }
</style>

<article class={clases}>

  <div class="Imagen">
    <Imagen {imagen} alt={titulo} ajuste="cover" />
  </div>

  <div class="Textos">

    {#if !!titulo}
      <Titulo texto={titulo} nivel={nivelTituloMostrar} />
    {/if}
    {#if !!subtitulo}
      <div class="Subtitulo">
        <Titulo texto={subtitulo} nivel={4} />
      </div>
    {/if}
    {#if !!leyenda}
      <div class="Leyenda">
        <Titulo texto={leyenda} nivel={5} />
      </div>
    {/if}
    {#if !!texto}
      <Parrafo {texto} />
    {/if}
    <div class="Boton">
      <Boton on:click radius="15px" texto="Ver más" />
    </div>

  </div>

</article>
