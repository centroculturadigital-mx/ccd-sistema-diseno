<script>
  import { slide, fade } from "svelte/transition";
  import Icono from "../../../elementos/Icono/Icono";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonSecundario from "../../../elementos/botones/BotonSecundario/BotonSecundario.svelte";

  export let apariencia = "horizontal"; //Vertical
  export let estado = "";
  export let tipo = "";
  export let titulo = "";
  export let contenido = "";
  export let acciones;

  let tipos = ["informacion", "exito", "aviso", "alerta", "accion"];

  $: clases = `Alerta ${
    tipo == tipos[0]
      ? "informacion"
      : tipo == tipos[1]
      ? "exito"
      : tipo == tipos[2]
      ? "aviso"
      : tipo == tipos[3]
      ? "alerta"
      : tipo == tipos[4]
      ? "accion"
      : "informacion" //default
  }`;

  $: icono = `${
    tipo == tipos[0]
      ? "informacion"
      : tipo == tipos[1]
      ? "exito"
      : tipo == tipos[2]
      ? "aviso"
      : tipo == tipos[3]
      ? "alerta"
      : tipo == tipos[4]
      ? "pregunta"
      : "informacion" //default
  }`;

  let cerrar = () => {
    estado = false;
  };
</script>

<style>
  .Alerta {
    position: relative;
    padding: var(--theme-espaciados-padding);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: auto;
    width: 100%;
  }
  .Alerta :global(.iconoContenedor) {
    padding: 0 var(--theme-espaciados-padding);
    filter: invert();
    min-width: 2rem;
  }
  .Alerta :global(.iconoContenedor) {
    justify-content: center;
  }
  .Alerta :global(button) {
    padding: var(--theme-espaciados-padding);
  }
  .Informacion {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .Acciones {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .Textos {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: wrap;
    flex-direction: column;
    color: var(--theme-textos-alerta-color);
    padding: 0 calc(var(--theme-espaciados-padding) * 2) 0
      var(--theme-espaciados-padding);
  }
  .Textos :global(h4) {
    margin-top: 0;
    padding: calc(var(--theme-espaciados-margen) / 3) 0;
    margin-bottom: 0;
    color: inherit !important;
  }
  .Textos :global(p) {
    margin-bottom: 0;
    padding: calc(var(--theme-espaciados-margen) / 3) 0;
    margin-top: 0;
  }
  .Textos :global(span) {
    color: var(--theme-textos-alerta-color);
  }
  .Textos :global(a) {
    transition: 0.5s;
    color: var(--theme-textos-alerta-color);
  }
  .Textos :global(a:hover) {
    color: var(--theme-textos-alerta-enlace);
  }
  .Cerrar {
    display: flex;
    align-items: center;
  }
  .Cerrar:hover {
    opacity: 0.75;
  }
  .Cerrar :global(.iconoContenedor img) {
    height: 1.25rem;
    width: auto;
  }
  .Acciones :global(button) {
    background-color: var(--theme-botones-alerta-uno-fondo);
    border: 1px solid var(--theme-botones-alerta-uno-borde);
    color: var(--theme-botones-alerta-uno-texto);
    margin-right: var(--theme-espaciados-margen);
  }
  .informacion {
    background-color: var(--theme-alertas-informacion);
  }
  .exito {
    background-color: var(--theme-alertas-exito);
  }
  .aviso {
    background-color: var(--theme-alertas-aviso);
  }
  .alerta {
    background-color: var(--theme-alertas-alerta);
  }
  .accion {
    background-color: var(--theme-alertas-accion);
  }
  .vertical {
    flex-direction: column;
    max-width: 20rem;
    padding: 2rem 1rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .verticalInformacion {
    flex-direction: column;
    max-width: 20rem;
    padding: 1rem 0rem;
  }
  .verticalTextos {
    margin: 2rem 0;
  }
  .verticalAcciones {
    justify-content: center;
  }
  .verticalCerrar {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
</style>

{#if !!estado}
  <section
    class="{clases}
    {apariencia == 'vertical' ? 'vertical' : ''}"
    transition:fade>

    <div
      class="Informacion {apariencia == 'vertical' ? 'verticalInformacion' : ''}">
      <Icono {icono} />

      <div class="Textos {apariencia == 'vertical' ? 'verticalTextos' : ''}">
        {#if !!titulo}
          <Titulo texto={titulo} nivel={4} />
        {/if}
        {#if !!contenido}
          <Parrafo {contenido} />
        {/if}
      </div>
    </div>

    <div class="Acciones {apariencia == 'vertical' ? 'verticalAcciones' : ''}">
      {#if Array.isArray(acciones) && acciones.length > 0}
        {#each acciones as accion (accion)}
          {#if typeof accion.accion == 'function'}
            <Boton texto={accion.texto} click={accion.accion} />
          {/if}
        {/each}
      {/if}
      <div
        class="Cerrar {apariencia == 'vertical' ? 'verticalCerrar' : ''}"
        on:click={cerrar}>
        <Icono icono={'cerrar'} />
      </div>
    </div>

  </section>
{/if}
