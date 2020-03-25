<script>
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";

  export let imagen;
  export let titulo;
  export let indice;
  export let seleccionado;
  export let activo;

</script>

<style>
  .VideoVistaPrevia {
    cursor: pointer;
    border-bottom: 1px solid #aaaaaa;
    display: flex;
    box-sizing: border-box;
    padding: 1rem 0;
  }
  .VideoVistaPrevia:hover {
    opacity: 0.75;
  }
  .VideoVistaPrevia :global(h4) {
    width: 60%;
    margin: 0;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
  .VideoVistaPrevia :global(h4 span) {
    color: #666666;
  }
  .Imagen {
    width: 40%;
    flex-shrink: 0;
  }
</style>

<article class="VideoVistaPrevia" on:click={seleccionado(indice)} style={activo?"lightgray":"transparent"}>

  <div class="Imagen">

    <Imagen imagenUrl={imagen} altTexto={titulo} altura={'5rem'} />

  </div>

  <Titulo nivel={'4'} texto={titulo} />

</article>
