<script>
  export let estilos = {
    color: "",
    tamanno: "",
    grosor: ""
  };
</script>

<style>
  .IndicadorCargaLinea {
    position: relative;
    background-color: #f3f3f3;
    width: 10rem;
    height: var(--theme-tamannos-md);
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
  .ContenedorIndicador {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: transparent;
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
</style>

<section class="ContenedorIndicador">
  <div
    class="IndicadorCargaLinea"
    style="width: {estilos.tamanno ? estilos.tamanno : '10rem'};height: {estilos.grosor ? estilos.grosor : '0.25rem'}">
    <div
      class="Linea"
      style="background-color: {estilos.color ? estilos.color : 'rgba(0, 0, 0, 0.5)'};" />
  </div>

</section>
