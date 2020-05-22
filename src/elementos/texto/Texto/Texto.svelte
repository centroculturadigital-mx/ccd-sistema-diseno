<script>
  // import { escapeHtml } from "escape-html";
  import {
    nombreGenerar,
    abrir,
    cerrar
  } from "../../../funciones/generadorEtiquetas";
  import generadorEtiquetas from "../../../funciones/generadorEtiquetas";

  export let estilos;
  export let texto;
  export let tamanno;

  let html = "";

  $: generarTexto(estilos, texto);

  const generarTexto = (estilos, texto) => {
    if (Array.isArray(estilos)) {
      estilos.forEach(e => {
        html += generadorEtiquetas.abrir(generadorEtiquetas.nombreGenerar(e), {
          style: `font-size: ${tamanno}`
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
</script>

<style>
  span {
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    color: var(--theme-textos-parrafo-color);
    font-weight: var(--theme-textos-parrafo-peso);
  }
</style>

<span>
  {@html html}
</span>
