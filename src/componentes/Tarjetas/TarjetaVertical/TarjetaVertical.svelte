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
  export let leyenda;
  export let enlaces = [];
  export let acciones = [];

  $: linkTarget = enlace ? enlace.externo ? { target : "_blank" } : {} : {}

</script>

<style>
  article {
    position: relative;
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
    position: relative;
    box-sizing: border-box;
    width: 100%;
  }
  /* .Contenido a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  } */
  .Textos {
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
  .Acciones :global(a) {
    border: none;
    padding: var(--theme-espaciados-padding);
    background-color: var(--theme-botones-secundario-fondo);
    color: var(--theme-botones-secundario-color);
  }
  .Acciones :global(a span) {
    font-size: calc(var(--theme-textos-enlaces-tamanno) / 1.125);
  }
  .Acciones :global(a:hover) {
    border: none;
  }
  .sombra {
    box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.1);
  }
  .Subtitulo :global(h4) {
    /*margin: 0.5rem 0;*/
    margin: var(--theme-espaciados-margen)0; 
  }
  .Leyenda  {
    margin: 0.5rem 0;
    color: var(--theme-textos-parrafo-color); 
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-tamannos-sm); 
  }
  .Leyenda :global( span) {
    color: var(--theme-textos-parrafo-color); 
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-tamannos-sm);
  }
  .Enlaces {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
  .Enlaces :global(a span) {
    padding: var(--theme-espaciados-padding) var(--theme-espaciados-padding)
      var(--theme-espaciados-padding) 0;
    font-size: var(--theme-tamannos-sm);
    font-weight: 700;
    color: var(--theme-textos-enlaces-color);
  }
  hr {
    border-color:var(--theme-bordes-neutro);
    border-style: solid;
    border-width:  thin;
    opacity: 0.25;
  }
  footer {
    width: 100%;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
  }
  .enlazado {
    text-decoration: none;
    width: 100%;
    height: auto;
  }
  .Titulo :global(h3) {
    /*margin: 0.5rem 0;*/
    margin: var(--theme-espaciados-margen)0; 
  }
  .Descripcion :global(p) {
    margin: var(--theme-espaciados-margen)0;
    height: 5rem;
    margin-bottom:2rem;
  }
</style>

<article class={ "TarjetaVertical" + !!sombra ? ' sombra' : ''}>
  <div class="Contenido">
    <div class="Imagen">
      {#if !!enlace}
        <a class="enlazado" {...linkTarget} href={enlace}>
          <Imagen {imagen} alt={nombre} ajuste="cover" />
        </a>
      {:else}
        <Imagen {imagen} alt={nombre} ajuste="cover" />
      {/if}
    </div>
    <div class="Textos">
      {#if !!leyenda}
          <div class="Leyenda">
            <Parrafo texto={leyenda} nivel={5} />
          </div>
        {/if}  
      {#if !!enlace}
      <a class="enlazado" {...linkTarget} href={enlace}>
        {#if !!nombre}
          <div class="Titulo">
           <Titulo texto={nombre} nivel={nivelTitulo} />
          </div>
        {/if}
        {#if !!subtitulo}
          <div class="Subtitulo">
            <Titulo texto={subtitulo} nivel={4} />
          </div>
        {/if}
      </a>
      {:else}
        {#if !!nombre}
          <div class="Titulo">
           <Titulo texto={nombre} nivel={nivelTitulo} />
          </div>
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
      {/if}
            

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

      {#if !!descripcion}
        
      {#if !!enlace}
        <a class="enlazado" {...linkTarget} href={enlace}>
        <div class="Descripcion">
          <Parrafo texto={descripcion} />
          </div>
        </a>
      {:else}
      <div class="Descripcion">
        <Parrafo texto={descripcion} />
        </div>
      {/if}
    
      {/if}

    </div>
  </div>

  {#if Array.isArray(acciones) && acciones.length > 0}
    <footer>
      <hr />
      <div class="Acciones">
        {#each acciones as accion (accion)}
          {#if accion.enlace}
            <Enlace enlace={accion.enlace} texto={accion.texto} />
          {/if}
          {#if typeof accion.accion == 'function'}
            <BotonSecundario
              click={accion.accion}
              radius="15px"
              texto={accion.texto} />
          {/if}
        {/each}
      </div>
    </footer>
  {/if}

</article>
