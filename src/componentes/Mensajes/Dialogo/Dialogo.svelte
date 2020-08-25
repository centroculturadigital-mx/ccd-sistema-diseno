<script>
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonSecundario from "../../../elementos/botones/BotonSecundario/BotonSecundario.svelte";

  export let titulo = "";
  export let texto = "";
  export let acciones;
</script>

<style>
  .Dialogo {
    position: relative;
    background-color: var(--theme-tarjetas-fondo);
    padding: calc(var(--theme-espaciados-padding) * 3);
    max-width: 40rem;
    box-sizing: border-box;
  }
  .Dialogo :global(button) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>

<section class="Dialogo">
  <Titulo texto={titulo} nivel={4} />
  <Parrafo {texto} />

  {#if Array.isArray(acciones) && acciones.length > 0}
    <section class="acciones">

      {#each acciones as accion (accion)}
        {#if typeof accion.accion == 'function'}
          <Boton texto={accion.texto} click={accion.accion} />
        {/if}
      {/each}

    </section>
  {/if}

</section>
