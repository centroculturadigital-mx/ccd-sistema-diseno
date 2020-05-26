<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
 
  export let imagen;
  export let titulo;
  export let nivelTitulo;
  export let texto;
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
    border-radius: var(--theme-tarjetas-esquina);
    background-color: var(--theme-tarjetas-fondo);
    color:var(--theme-textos-parrafo-color);;
  }
  .tarjeta-imagen {
    width: 100%;
    height: 10rem;
  }
  .tarjeta-texto {
    box-sizing: border-box;
    padding: var(--theme-espaciados-padding) calc(var(--theme-espaciados-padding) * 2);
    width: 100%;
  }
  .tarjeta-boton {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: calc(var(--theme-espaciados-margin) * 4);
    margin-bottom: calc(var(--theme-espaciados-margin) * 2);
  }
  .sombra {
    box-shadow: -1px 2px 3px rgba(0, 0, 0, 5);
  }
</style>

<article class={!!sombra ? 'sombra' : ''}>

  <div class="tarjeta-imagen">
    <Imagen {imagen} alt={titulo} ajuste="cover" />
  </div>

  <div class="tarjeta-texto">

    {#if !!titulo}
      <Titulo texto={titulo} nivel={nivelTitulo} />
    {/if}
    {#if !!texto}
      <Parrafo {texto} />
    {/if}

    <div class="tarjeta-boton">
      <Boton
        on:click
        radius="15px"
        texto="Saber más" />
    </div>

  </div>

</article>
