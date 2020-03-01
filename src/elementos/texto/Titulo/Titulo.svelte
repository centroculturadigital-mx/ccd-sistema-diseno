<script>

  import etiquetaGenerar from "../../../funciones/etiquetaGenerar"

  export let nivel;
  export let titulo;
  export let texto;

  const generarTitulo = (nivel,texto,color) => {
    let html = ''
    // agregar un default, h3:
    
    if( ! (parseInt(nivel) >= 1 && parseInt(nivel) <= 6 )) {
      nivel = 3
    }

    html += etiquetaGenerar.abrir('h'+nivel)
    html += texto
    html += etiquetaGenerar.cerrar('h'+nivel)

    return html
  }

  $: tituloRenderear = generarTitulo(nivel,!! texto ? texto : titulo,color)

  export let color="#000";

</script>

<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
  }
  /* .titulo-grande {
    font-size: 2.7rem;
    max-width: 19rem;
  } */
</style>

<span style="color:{color};">
  {@html tituloRenderear}
</span>
