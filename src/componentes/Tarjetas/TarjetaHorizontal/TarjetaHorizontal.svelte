<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonSecundario from "../../../elementos/botones/BotonSecundario/BotonSecundario.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace.svelte";

  export let enlace;
  export let imagen;
  export let nombre;
  export let nivelTitulo;
  export let subtitulo;
  export let descripcion;
  export let sombra;
  export let chica;
  export let leyenda;
  export let enlaces = [];
  export let acciones = [];

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
    /* width: 50%; */
    height: 21rem;
  }
  .Contenido {
    position: relative;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .Contenido a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .Texto {
    /* 
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 2); */
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .Acciones {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: var(--theme-esapaciados-margen);
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
  footer {
    width: 100%;
  }
  .Enlaces {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
  .Enlaces :global(a) {
    padding: var(--theme-espaciados-padding) var(--theme-espaciados-padding)
      var(--theme-espaciados-padding) 0;
  }
  hr {
    border-color: lightgray;
  }
  footer {
    width: 100%;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
  }
</style>

<article class={clases}>

  <div class="Contenido">
    {#if !!enlace}
      <a href={enlace} />
    {/if}
    <div class="Imagen">
      <Imagen {imagen} alt={nombre} ajuste="cover" />
    </div>
    <div class="Texto">

      {#if !!nombre}
        <Titulo texto={nombre} nivel={nivelTituloMostrar} />
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
      <!--  -->
      {#if Array.isArray(enlaces) && enlaces.length > 0}
        <section>
          <hr />
          <div class="Enlaces">
            {#each enlaces as enlace, i ('enlace_' + i)}
              <Enlace enlace={enlace.enlace} texto={enlace.texto} />
            {/each}
          </div>
        </section>
      {/if}
      <!--  -->
      {#if !!descripcion}
        <Parrafo {descripcion} />
      {/if}


  {#if Array.isArray(acciones) && acciones.length > 0}
    <footer>
      <hr />
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
  </div>
</article>
