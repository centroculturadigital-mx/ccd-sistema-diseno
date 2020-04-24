<script>
  export let color;
  export let colorFondo;
  export let tamanno;
  export let grosor;
</script>

<style>
  .IndicadorCargaCircular {
    border: 0.25rem solid #f3f3f3;
    border-radius: 50%;
    border-top: 0.25rem solid #000;
    width: 3rem;
    height: 3rem;
    -webkit-animation: gira 2s linear infinite; /* Safari */
    animation: gira 2s linear infinite;
    margin: 2rem;
  }
  .ContenedorIndicador {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  /* Safari */
  @-webkit-keyframes gira {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes gira {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<section
  class="ContenedorIndicador"
  style="background-color: {colorFondo ? colorFondo : "#FFF"};">

  <div class="IndicadorCargaCircular" 
  style="border: {grosor ? grosor : "0.25rem"} solid #f3f3f3;
  width:{tamanno ? tamanno : "3rem"}; height:{tamanno ? tamanno : "3rem"};
  border-top: {grosor ? grosor : "0.25rem"} solid {color ? color : "rgba(0, 0, 0, 0.5)"};
  "/>

</section>
