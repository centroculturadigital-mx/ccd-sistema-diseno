<script>
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
</script>

<style>
  .Alerta {
    padding: var(--theme-espaciados-padding);
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
  }
  .Textos {
    display: flex;
    flex-direction: column;
  }
  .Textos :global(h4) {
      margin-top: 0;
      margin-bottom: calc( var(--theme-espaciados-margen) / 2 );
  }
  .Textos :global(p) {
      margin-bottom: 0;
      margin-top: calc( var(--theme-espaciados-margen) / 2 );
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

<section class={'Alerta ' + claseTipo}>

  <Icono icono={'cerrar'} />

  <div class="Textos">
    <Titulo texto={'Titulo de alerta'} nivel={4} />

    <Parrafo contenido={'Texto con un <a href="#">LINK</a> entre el texto'} />
  </div>

  <BotonSecundario texto={'Alerta 1'} click={accion_1} />

  <Boton texto={'Alerta 2'} click={accion_2} />

</section>
