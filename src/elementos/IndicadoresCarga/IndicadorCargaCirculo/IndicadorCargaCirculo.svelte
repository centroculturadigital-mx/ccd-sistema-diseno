<script>
export let estilos = {
  color: "",
  tamanno: "",
  grosor: "",
}
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
    background-color: transparent;
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
  class="ContenedorIndicador">

  <div class="IndicadorCargaCircular" 
  style="border: {estilos.grosor ? estilos.grosor : "0.25rem"} solid #f3f3f3;
  width:{estilos.tamanno ? estilos.tamanno : "3rem"}; height:{estilos.tamanno ? estilos.tamanno : "3rem"};
  border-top: {estilos.grosor ? estilos.grosor : "0.25rem"} solid {estilos.color ? estilos.color : "rgba(0, 0, 0, 0.5)"};
  "/>

</section>
