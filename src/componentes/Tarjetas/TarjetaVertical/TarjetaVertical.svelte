<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonSecundario from "../../../elementos/botones/BotonSecundario/BotonSecundario.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace.svelte";

  export let imagen;
  export let titulo;
  export let nivelTitulo;
  export let subtitulo;
  export let texto;
  export let sombra;
  export let leyenda;
  export let enlaces = [];
  export let acciones = [];
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
    color: var(--theme-textos-parrafo-color);
    overflow: hidden;
  }
  .Imagen {
    width: 100%;
    height: 10rem;
  }
  .Contenido {
    box-sizing: border-box;
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 2);
    width: 100%;
  }
  .Acciones {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    /* margin-top: var(--theme-espaciados-margen);
    margin-bottom: var(--theme-espaciados-margen); */
  }
  .Acciones :global(button) {
    border: none;
    padding: var(--theme-espaciados-padding);
  }
  .Acciones :global(button:hover) {
    border: none;
  }
  .sombra {
    box-shadow: -1px 2px 3px rgba(0, 0, 0, 5);
  }
  .Subtitulo :global(h4) {
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
  hr {
    border-color: lightgray;
  }
</style>

<article class={!!sombra ? 'sombra' : ''}>

  <div class="Imagen">
    <Imagen {imagen} alt={titulo} ajuste="cover" />
  </div>

  <div class="Contenido">

    {#if !!titulo}
      <Titulo texto={titulo} nivel={nivelTitulo} />
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

    {#if Array.isArray(acciones) && acciones.length > 0}
      <footer>
      <hr>
        <div class="Acciones">
          {#each acciones as accion, i ('enlace_' + i)}
            <BotonSecundario
              click={accion.accion}
              radius="15px"
              texto={accion.texto} />
          {/each}
        </div>
      </footer>
    {/if}
  </div>

</article>
