<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";

  export let imagen;
  export let nombre;
  // export let slug;
  // export let mostrarNombre;
  export let hover;

  let hoverAccion = (evento,nombreUsuaria) => {
    if (typeof hover === "function") {
      hover(evento,nombre);
      nombreUsuaria = nombre;
      // console.log("evento", evento);
    }
  };
</script>

<div class="Avatar" on:mouseenter={hoverAccion}>
  <!-- <a href={slug ? slug : ""}> -->
  <Imagen {imagen} alt={nombre} />

  <!-- {#if mostrarNombre}
    <div class="nombre">
      <Texto variante="CHICO" texto={nombre} />
    </div>
  {/if} -->
  <!-- </a> -->
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
  .nombre {
    transition: 0.5s;
    display: none;
    opacity: 0;
    position: absolute;
    top: 0.25rem;
    left: auto;
    right: auto;
    /* background-color: #efefef; */
    /* padding: 0.25rem; */
    /* border-radius: 0.25rem; */
    z-index: 10;
  }
  .nombre :global(span) {
    /* position: fixed; */
    background-color: #000;
    color: #efefef;
    padding: 0.25rem;
    border-radius: 0.25rem;
    flex-shrink: 0;
  }

  .Avatar:hover .nombre {
    display: flex;
    opacity: 1;
  }
</style>
