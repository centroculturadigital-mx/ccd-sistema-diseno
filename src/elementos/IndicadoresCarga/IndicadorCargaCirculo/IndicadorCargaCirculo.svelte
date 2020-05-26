<script>
  export let estilos = {
    color: "",
    tamanno: "",
    grosor: ""
  };
</script>

<style>
  .IndicadorCargaCircular {
    /* border-top-color: var(--theme-color-s) !important; */
    border-color: var(--theme-colores-primario) #BBB #BBB #BBB;
    border-style: solid;
    border-width: var(--theme-tamanno-xs);
    border-radius: 50%;
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

<section class="ContenedorIndicador">

  <div
    class="IndicadorCargaCircular"
    style="border-width: {estilos.grosor ? estilos.grosor : ''};
    width:{estilos.tamanno ? estilos.tamanno : '3rem'}; height:{estilos.tamanno ? estilos.tamanno : '3rem'};
    border-top-width: {estilos.grosor ? estilos.grosor : ''}; border-top-color:{estilos.color ? estilos.color : ''};
    " />

</section>
