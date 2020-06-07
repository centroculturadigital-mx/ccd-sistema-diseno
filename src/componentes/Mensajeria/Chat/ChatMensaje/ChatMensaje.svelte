<script>
  import Imagen from "../../../../elementos/media/Imagen/Imagen.svelte";
  import Texto from "../../../../elementos/texto/Texto/Texto.svelte";
  import Parrafo from "../../../../elementos/texto/Parrafo/Parrafo.svelte";
  import ChatObjeto from "../../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjeto.svelte";

  export let usuario;
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
  .ChatTexto {
    display: flex;
  }
  .ChatTexto :global(p) {
    margin: 0 0 var(--theme-espaciados-padding) 0;
  }
  .ChatAvatar {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 10rem;
    overflow: hidden;
    margin-right: calc(var(--theme-espaciados-margen) * 2);
  }
</style>

<section class="ChatMensaje">
  <div class="ChatAvatar">
    <Imagen imagen={usuario.avatar} />
  </div>
  <div>
    <div class="ChatTexto">
      <Parrafo contenido={usuario.nombre + ':&nbsp; ' + usuario.mensaje} />
    </div>
    {#if Array.isArray(usuario.ofertas) || usuario.ofertas > 0}
      <div class="ChatMensajeObjetos">
        {#each usuario.ofertas as oferta}
          <ChatObjeto datos={oferta} />
        {/each}
      </div>
    {/if}
  </div>
</section>
