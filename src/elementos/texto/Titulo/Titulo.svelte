<script>

import generadorEtiquetas from "../../../funciones/generadorEtiquetas"

export let nivel;
export let color="#000";
export let texto;
export let data;

const generarTitulo = (nivelTitulo,texto,atributos) => {
    
  let html = ''  

  if( ! (parseInt(nivelTitulo) >= 1 && parseInt(nivelTitulo) <= 6 )) {
    nivel = 3
  } else {
    nivel = parseInt(nivelTitulo)
  }

  html += generadorEtiquetas.etiqueta(
    'h'+nivel,
    texto,
    atributos
  );

  return html

}


$: tituloRenderear = generarTitulo(
  nivel,
  texto,
  {
      style: `color: ${color};`,
      ...data
  }
)

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
