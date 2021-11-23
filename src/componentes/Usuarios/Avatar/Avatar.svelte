<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen";

  export let imagen;
  export let nombre;
  export let hover;
  export let hoverRetirar;

  let hoverAccion = (evento) => {
    if (typeof hover === "function") {
      hover(evento, nombre);
    }
  };

  let hoverAccionRetirar = (evento) => {
    if (typeof hover === "function") {
      setTimeout(() => {
        hoverRetirar(evento);
      },200)
    }
  };
  
</script>


<div
  class="Avatar"
  on:mouseover={hoverAccion}
  on:mouseout={hoverAccionRetirar}
  >
  
    <Imagen {imagen} alt={nombre} />

</div>

<style>
  * {
    box-sizing: border-box;
  }
  .Avatar {
    width: 2rem;
    height: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    cursor: pointer;
  }
  .Avatar :global(img) {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    overflow: hidden;
  }

</style>
