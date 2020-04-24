<script>
  export let color;
  export let colorFondo;
  export let tamanno;
  export let grosor;
</script>

<style>
  .IndicadorCargaLinea {
    position: relative;
    background-color: #f3f3f3;
    width: 10rem;
    height: 0.5rem;
    overflow: hidden;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }
  .Linea {
    content: "";
    position: absolute;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: primero 1.5s infinite ease-out;
  }
  /* .IndicadorCargaLinea:before {
    content: "";
    position: absolute;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: primero 1.5s infinite ease-out;
  } */
  /* .IndicadorCargaLinea:after {
    content: "";
    position: absolute;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    animation: segundo 1.5s infinite ease-in;
  } */
  .ContenedorIndicador {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  @keyframes primero {
    0% {
      left: -100%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 10%;
    }
  }
  /* @keyframes segundo {
    0% {
      left: -150%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 10%;
    }
  } */
</style>

<section
  class="ContenedorIndicador"
  style="background-color: {colorFondo ? colorFondo : '#FFF'};">
  <div class="IndicadorCargaLinea" style="width: {tamanno ? tamanno : '10rem'};height: {grosor ? grosor : "0.25rem"}">
    <div class="Linea" style="background-color: {color ? color : 'rgba(0, 0, 0, 0.5)'};"/>
  </div>

</section>
