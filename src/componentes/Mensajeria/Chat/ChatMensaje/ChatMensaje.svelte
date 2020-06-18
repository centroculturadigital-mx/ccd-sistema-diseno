<script>
  import Imagen from "../../../../elementos/media/Imagen/Imagen.svelte";
  import Texto from "../../../../elementos/texto/Texto/Texto.svelte";
  import Parrafo from "../../../../elementos/texto/Parrafo/Parrafo.svelte";
  import ChatObjeto from "../../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjeto.svelte";

  export let mensaje;
  export let objeto;

  const { usuario, mensaje: mensajeTexto, fechaCreacion } = mensaje;
</script>

<style>
  .ChatMensaje {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: var(--theme-espaciados-padding);
    margin: var(--theme-espaciados-margen) 0;
    height: auto;
    width: 100%;

  }
  .Texto {
    margin-bottom: var(--theme-espaciados-margen);
  }
  .Texto a {  
    text-decoration: none;
    color:#666;
  }
  .Texto :global(p) {
    margin: 0 0 var(--theme-espaciados-padding) 0;
  }
   .Texto :global(span) {
    color: unset !important;
    font-size: 0.875rem;
  }
  .Avatar {
    flex-shrink: 0;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 10rem;
    overflow: hidden;
    margin-right: calc(var(--theme-espaciados-margen) * 2);
  }
</style>

<section class="ChatMensaje">
  <div class="Avatar">
    <Imagen imagen={usuario.imagen} />
  </div>
  <div>
    <div class="Texto">
    <a href={usuario.enlace}>
      <Texto texto={usuario.nombre}/>
    </a>

      <Texto texto={mensajeTexto}/>
    </div>
    {#if  !!objeto}
      <div class="ChatMensajeObjeto">
        <ChatObjeto {...objeto}/>
      </div>
    {/if}
  </div>
</section>
