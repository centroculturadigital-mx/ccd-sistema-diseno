<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";

  export let imagen;
  export let nombre;
  export let slug;
  export let mostrarNombre;

</script>

<div class="Avatar">
  <!-- <a href={slug ? slug : ""}> -->
  <Imagen {imagen} alt={nombre} />

  {#if mostrarNombre}
    <div class="nombre">
      <Texto variante="CHICO" texto={nombre} />
    </div>
  {/if}
  <!-- </a> -->
</div>

<style>
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
  }
  .Avatar :global(img) {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    overflow: hidden;
  }
  .nombre {
    display: none;
    position: absolute;
    top: -1.5rem;
    background-color: #efefef;
    padding: 0.25rem;
    border-radius: 0.25rem;
    z-index: 10;
  }

  .Avatar:hover .nombre {
    display: block;
  }

</style>
