<script>
  import Formulario from "../Formulario/Formulario.svelte";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace";

  export let campos = [];
  export let enviar;
  export let registrar;

</script>

<style>
  .Ingresa {
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 20rem;
    box-sizing: border-box;
  }
  .Ingresa :global(form input) {
    width: 100%;
    box-sizing: border-box;
  }
  .Ingresa :global(form input[type="submit"]) {
    width: 50%;
    position: initial !important;
    margin-top: 1rem;
    box-sizing: border-box;
  }
  .Registro {
    display: flex;
    justify-content: center;
    padding: var(--theme-espaciados-padding) calc(var(--theme-espaciados-padding) * 2);
    box-sizing: border-box;
  }
  .Registro :global(span) {
    display: flex;
    align-items: center;
    font-size: calc(var(--theme-textos-parrafo-tamanno) / 1.5);
  }
</style>

{#if !!campos}
  <section class="Ingresa">

    <Formulario {campos} {enviar} />

    
    <div class="Registro">
      <Texto texto={'¿Aún no tienes cuenta?'} />
      &nbsp;
      {#if typeof registrar == 'function'}
        <span on:click={registrar}>
          <Texto
            texto={'Ingresa aquí'}
            css={{ color: '#4d376d !important', cursor: 'pointer' }} />
        </span>
      {:else}
        <Enlace texto={'Ingresa aquí'} enlace={'/registrar'} />
      {/if}
    </div>
  </section>
{/if}
