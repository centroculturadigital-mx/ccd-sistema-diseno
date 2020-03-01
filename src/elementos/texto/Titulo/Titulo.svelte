<script>

  import generarEtiqueta from "../../../funciones/generarEtiqueta"

  export let nivel;
  export let titulo;
  export let color;
  export let texto;

  const generarTitulo = (nivel,texto,color) => {
    let html = ''
    // agregar un default, h3:
    
    if( ! (parseInt(nivel) >= 1 && parseInt(nivel) <= 6 )) {
      nivel = 3
    }

    html += generarEtiqueta.abrir(
      'h'+nivel,
      color?{
        style: `color: ${color};`
      }:null
    );

    html += texto;

    html += generarEtiqueta.cerrar('h'+nivel);

    return html
  }

  $: tituloRenderear = generarTitulo(
    nivel,
    !! texto ? texto : titulo,
    color
  )

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

{@html tituloRenderear}
