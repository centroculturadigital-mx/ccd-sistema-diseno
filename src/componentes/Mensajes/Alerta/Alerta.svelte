<script>
  import { slide } from "svelte/transition";
  import Icono from "../../../elementos/Icono/Icono";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonSecundario from "../../../elementos/botones/BotonSecundario/BotonSecundario.svelte";

  export let estado = "";
  export let tipo = "";
  export let titulo = "";
  export let contenido = "";
  export let accion_1 = console.log("Accion1");
  export let accion_2 = console.log("Accion2");

  let tipos = ["informacion", "exito", "aviso", "alerta", "accion"];

  $: claseTipo =
    tipo === tipos[0]
      ? tipos[0]
      : tipo === tipos[1]
      ? tipo[1]
      : tipo === tipos[2]
      ? tipo[2]
      : tipo === tipos[2]
      ? tipo[2]
      : tipo === tipos[3]
      ? tipo[3]
      : tipo === tipos[4]
      ? tipo[4]
      : "";

  let cerrar = () => {
    estado = false;
  };
</script>

<style>
  .Alerta {
    padding: var(--theme-espaciados-padding);
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    height: auto;
    width: auto;
  }
  .Alerta :global(.iconoContenedor) {
    padding: 0 var(--theme-espaciados-padding);
    filter: invert();
    min-width: 2rem;
  }
  .Alerta :global(button) {
    padding: var(--theme-espaciados-padding);
  }
  .Textos {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
    flex-direction: column;
    color: var(--theme-textos-alerta-color);
    padding: 0 calc(var(--theme-espaciados-padding) * 2) 0
      var(--theme-espaciados-padding);
  }
  .Textos :global(h4) {
    margin-top: 0;
    margin-bottom: calc(var(--theme-espaciados-margen) / 2);
    color: inherit !important;
  }
  .Textos :global(p) {
    margin-bottom: 0;
    margin-top: calc(var(--theme-espaciados-margen) / 2);
  }
  .Textos :global(span) {
    color: inherit !important;
  }
  .Textos :global(a) {
    transition: 0.5s;
    color: inherit !important;
  }
  .Textos :global(a:hover) {
    color: var(--theme-textos-alerta-enlace);
  }
  .Cerrar {
    display: flex;
    align-items: center;
  }
  .BotonAccion1,
  .BotonAccion2 {
    display: flex;
    align-items: center;
    margin: 0 var(--theme-espaciados-margen);
  }
  .BotonAccion1 :global(button) {
    background-color: var(--theme-botones-alerta-uno-fondo);
    border: 1px solid var(--theme-botones-alerta-uno-borde);
    color: var(--theme-botones-alerta-uno-texto);
  }
  .BotonAccion2 :global(button) {
    background-color: var(--theme-botones-alerta-dos-fondo);
    border: 1px solid var(--theme-botones-alerta-dos-borde);
    color: var(--theme-botones-alerta-dos-texto);
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
</style>

{#if !!estado}
  <section class={'Alerta ' + claseTipo} transition:slide>

    <Icono icono={'avatar'} />

    <div class="Textos">
      <Titulo texto={titulo} nivel={4} />
      <Parrafo {contenido} />
    </div>

    {#if !!accion_1}
      <div class="BotonAccion1">
        <BotonSecundario texto={'Alerta 1'} click={accion_1} />
      </div>
    {/if}
    {#if !!accion_2}
    <div class="BotonAccion2">
      <Boton texto={'Alerta 2'} click={accion_2} />
    </div>
    {/if}

    <div class="Cerrar" on:click={cerrar}>
      <Icono icono={'cerrar'} />
    </div>
  </section>
{/if}
