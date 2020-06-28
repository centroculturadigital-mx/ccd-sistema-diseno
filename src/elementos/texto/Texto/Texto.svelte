<script>
  // import { escapeHtml } from "escape-html";
  import {
    nombreGenerar,
    abrir,
    cerrar
  } from "../../../funciones/generadorEtiquetas";

  import generadorEtiquetas from "../../../funciones/generadorEtiquetas";

  export let texto;
  export let variante;

  export let estilos;
  export let tamanno;
  export let color;
  export let css = {};

  let html = "";

  if (!!variante) {
    switch (variante) {
      case "NORMAL":
        estilos = [];
        break;
      case "SECUNDARIO":
        estilos = ["small"];
        break;
      case "AUXILIAR":
        color = "gray";
        estilos = ["small", "italic"];
        break;
    }
  }

  $: generarTexto(estilos, texto);

  const generarTexto = (estilos, texto) => {
    if (Array.isArray(estilos)) {
      estilos.forEach(e => {
        html += generadorEtiquetas.abrir(generadorEtiquetas.nombreGenerar(e), {
          style: `font-size: ${tamanno}; ${!!color ? "color:" + color: ""}`
        });
      });
    }

    // html += escapeHtml(texto)
    html += texto;
    // html += texto

    if (Array.isArray(estilos)) {
      estilos.forEach(e => {
        html += generadorEtiquetas.cerrar(generadorEtiquetas.nombreGenerar(e));
      });
    }
  };


  $: cssString = Object.entries(css).reduce((acc,e)=>acc+(`${e[0]}: ${e[1]};`), "")


</script>

<style>
  span {
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    color: var(--theme-textos-parrafo-color);
    font-weight: var(--theme-textos-parrafo-peso);
  }
</style>

<span on:click style={cssString}>
  {@html html}
</span>
