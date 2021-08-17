<script>
  import { slide, fade } from "svelte/transition";
  import Icono from "../../../elementos/Icono/Icono";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonSecundario from "../../../elementos/botones/BotonSecundario/BotonSecundario.svelte";

  export let apariencia = "HORIZONTAL"; //Vertical
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

  let responsivo;
</script>

<svelte:window bind:innerWidth={responsivo} />

{#if !!estado}
  <section
    class="{clases}
    {apariencia == 'VERTICAL' ? 'vertical' : ''}"
    transition:fade
  >
    <div class="superior">
      <div
        class="Informacion {apariencia == 'VERTICAL'
          ? 'verticalInformacion'
          : ''}"
      >
        <Icono {icono} />

        {#if !!titulo}
          <div
            class="titulo {apariencia == 'VERTICAL' ? 'verticalTextos' : ''}"
          >
            <Titulo texto={titulo} nivel={4} />
          </div>
        {/if}
      </div>

      {#if responsivo > 768}
        <div
          class="Acciones {apariencia == 'VERTICAL' ? 'verticalAcciones' : ''}"
        >
          {#if Array.isArray(acciones) && acciones.length > 0}
            {#each acciones as accion (accion)}
              {#if typeof accion.accion == "function"}
                <Boton texto={accion.texto} click={accion.accion} />
              {/if}
            {/each}
          {/if}
        </div>
      {/if}

      <div
        class="Cerrar {apariencia == 'VERTICAL' ? 'verticalCerrar' : ''}"
        on:click={cerrar}
      >
        <Icono icono={"cerrar"} />
      </div>
    </div>
    <!--  -->
    {#if !!contenido}
      <div
        class="descripcion {apariencia == 'VERTICAL' ? 'verticalTextos' : ''}"
      >
        <Parrafo {contenido} />
      </div>
    {/if}

    {#if responsivo <= 768}
      <div
        class="Acciones {apariencia == 'VERTICAL' ? 'verticalAcciones' : ''}"
      >
        {#if Array.isArray(acciones) && acciones.length > 0}
          {#each acciones as accion (accion)}
            {#if typeof accion.accion == "function"}
              <Boton texto={accion.texto} click={accion.accion} />
            {/if}
          {/each}
        {/if}
      </div>
    {/if}

  </section>
{/if}

<style>
  * {
    box-sizing: border-box;
    /* outline: 1px solid #FFF; */
  }
  .Alerta {
    position: relative;
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .superior {
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
  .titulo {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: wrap;
    flex-direction: column;
    color: var(--theme-textos-alerta-color);
    padding: 0 calc(var(--theme-espaciados-padding) * 2) 0
      var(--theme-espaciados-padding);
  }
  .titulo :global(h4) {
    margin-top: 0;
    padding: calc(var(--theme-espaciados-margen) / 3) 0;
    margin-bottom: 0;
    color: inherit !important;
  }
  .titulo :global(span) {
    color: var(--theme-textos-alerta-color);
    font-weight: 400 !important;
  }
  .titulo :global(a) {
    transition: 0.5s;
    color: var(--theme-textos-alerta-color);
  }
  .titulo :global(a:hover) {
    color: var(--theme-textos-alerta-enlace);
  }
  .descripcion {
    color: var(--theme-textos-alerta-color);
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 2);
  }
  .descripcion :global(p) {
    margin-bottom: 0;
    padding: calc(var(--theme-espaciados-margen) / 3) 0;
    margin-top: 0;
  }
  .descripcion :global(span) {
    color: var(--theme-textos-alerta-color);
  }
  .descripcion :global(a) {
    transition: 0.5s;
    color: var(--theme-textos-alerta-color);
  }
  .descripcion :global(a:hover) {
    color: var(--theme-textos-alerta-enlace);
  }
  .Cerrar {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .Cerrar:hover {
    opacity: 0.75;
  }
  .Cerrar :global(.iconoContenedor) {
    height: 1.125rem !important;
    width: 1.125rem !important;
  }
  .Cerrar :global(.iconoContenedor svg) {
    height: 100%;
    width: 100%;
  }
  .Acciones :global(button) {
    background-color: var(--theme-botones-alerta-uno-fondo);
    border: 1px solid var(--theme-botones-alerta-uno-borde);
    color: var(--theme-botones-alerta-uno-texto);
    margin-right: var(--theme-espaciados-margen);
  }
  .Acciones :global(button:hover) {
    opacity: 0.75rem;
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
  .vertical .superior {
    justify-content: center;
    padding: 0;
  }
  .vertical .superior .Cerrar {
    position: absolute;
    top: -1rem;
    right: -1rem;
  }
  .verticalInformacion {
    flex-direction: column;
    max-width: 20rem;
    padding: 1rem 0rem;
  }
  .verticalTextos {
    margin: 0.5rem 0;
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
