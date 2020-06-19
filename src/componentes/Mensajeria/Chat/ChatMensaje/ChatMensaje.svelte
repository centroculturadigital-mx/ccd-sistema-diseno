<script>
  import Imagen from "../../../../elementos/media/Imagen/Imagen.svelte";
  import Texto from "../../../../elementos/texto/Texto/Texto.svelte";
  import Parrafo from "../../../../elementos/texto/Parrafo/Parrafo.svelte";
  import ChatObjeto from "../../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjeto.svelte";
  import MensajeReacciones from '../../MensajeReacciones/MensajeReacciones';

  export let mensaje;
  export let objeto;
   
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
    margin-top: calc(var(--theme-espaciados-margen) / 2);
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

<article class="ChatMensaje">
  <div class="Avatar">
    <Imagen imagen={mensaje.usuario.imagen} />
  </div>
  <div>
    <div class="Texto">
      <a href={mensaje.usuario.enlace}>
        <Texto texto={mensaje.usuario.nombre}/>
      </a>

      <Texto texto={mensaje.mensaje}/>

      <Texto texto={mensaje.fechaCreacion}/>
    </div>
    {#if  typeof objeto == "object" }
      <div class="ChatMensajeObjeto">
        <ChatObjeto {...objeto}/>
      </div>
    {/if}

    {#if !!mensaje.reacciones && Array.isArray(mensaje.reacciones)}
      <MensajeReacciones reacciones={mensaje.reacciones}/>
    {/if}

  </div>
</article>
