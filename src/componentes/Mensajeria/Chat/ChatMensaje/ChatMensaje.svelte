<script>
  import Imagen from "../../../../elementos/media/Imagen/Imagen.svelte";
  import Texto from "../../../../elementos/texto/Texto/Texto.svelte";
  import Parrafo from "../../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Reacciones from "../../Reacciones/Reacciones";
  import MensajeReacciones from "../../MensajeReacciones/MensajeReacciones";

  import moment from 'moment';

  export let reacciones;
  export let reaccionar;
  export let mensaje;
  export let objetoAccion;


  const reaccionarAccion = reaccion => {
    if(typeof reaccionar == "function") {
      reaccionar({...reaccion, mensaje})
    }
  }

  const realizarObjetoAccion = () => {
    if( !! mensaje && mensaje.objeto && typeof objetoAccion == "function" ) {
      objetoAccion(mensaje.objeto.datos)
    }
  }


</script>

<style>
  .ChatMensaje {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: var(--theme-espaciados-padding);
    height: auto;
    width: 100%;
  }
  .Texto {
    margin-top: calc(var(--theme-espaciados-margen) / 2);
    margin-bottom: var(--theme-espaciados-margen);
  }
  .Texto a {
    text-decoration: none;
    color: #666;
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
  .ChatMensaje .Nombre :global(*) {
    font-weight: bolder;
    color: #000;
  }
  .ChatMensaje .Mensaje :global(*) {
    color: #333;
  }
  
  .Mensaje {
    display: flex;
  }
  .Boton {
    padding: var(--theme-espaciados-padding);
    padding-top: 0;
    display: flex;
    justify-content: center;
  }
  .Boton :global(.Reacciones .iconoContenedor svg) {
    height: 1.5rem;
    width: 1.5rem;
  }
</style>

<article class="ChatMensaje">
  <div class="Avatar">
    <Imagen imagen={mensaje.usuario.imagen} />
  </div>
  <div>
    <div class="Mensaje">
      <div class="Texto">
        <span class="Nombre">
          {#if mensaje.usuario.enlace}
            <a href={mensaje.usuario.enlace}>
              <Texto texto={mensaje.usuario.nombre} />
            </a>
          {:else}
            <Texto texto={mensaje.usuario.nombre} />
          {/if}
        </span>

        <Texto texto={mensaje.mensaje} />

        <Texto texto={moment(mensaje.fechaCreacion).fromNow()} estilos={["italic","small"]}/>

      </div>
      {#if ! mensaje.objeto }
        <div class="Boton">
          <Reacciones {reacciones} reaccionar={reaccionarAccion}/>
        </div>
      {/if}
    </div>
    {#if typeof mensaje.objeto == 'object'}
      <div class="ChatMensajeObjeto" on:click={realizarObjetoAccion}>
        <svelte:component this={mensaje.objeto.componente} {...mensaje.objeto.datos} />
      </div>
    {/if}

      <MensajeReacciones reacciones={mensaje.reacciones} />

  </div>
</article>