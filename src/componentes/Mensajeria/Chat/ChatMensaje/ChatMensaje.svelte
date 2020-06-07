<script>
  import Imagen from "../../../../elementos/media/Imagen/Imagen.svelte";
  import Texto from "../../../../elementos/texto/Texto/Texto.svelte";
  import Parrafo from "../../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let usuario = {
    id: "id_usuario",
    nombre: "Nobre usuario",
    avatar: "https://fakeimg.pl/100?text=CCD",
    mensaje: "Soy un mensaje de <a href='#'>texto</a> para el chat"
  };
  export let objeto = null;
  export let datos = {};
</script>

<style>
  .ChatMensaje {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: var(--theme-espaciados-padding);
    margin: var(--theme-espaciados-margen) 0;
    height: auto;
    width: 100%;
  }
  .ChatTexto {
    display: flex;
  }
  .ChatTexto :global(p) {
    margin: 0;
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
  <div class="ChatTexto">
    <Parrafo contenido={usuario.nombre + ':&nbsp; ' + usuario.mensaje} />
  </div>
  {#if !!objeto}
  <div class="ChatMensajeObjeto">
    <svelte:component this={objeto} {...datos} />
  </div>
  {/if}
</section>
