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
    height: var(--theme-tamannos-xs);
    overflow: hidden;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }
  .Linea {
    content: "";
    position: absolute;
    height: 100%;
    background-color: var(--theme-colores-primario);
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
    style="width: {estilos.tamanno ? estilos.tamanno : ''};height: {estilos.grosor ? estilos.grosor : ''}">
    <div
      class="Linea"
      style="background-color: {estilos.color ? estilos.color : ''};" />
  </div>

</section>
