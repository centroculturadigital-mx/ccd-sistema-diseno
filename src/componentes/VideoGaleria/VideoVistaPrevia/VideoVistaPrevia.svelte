<script>
  import Titulo from '../../../elementos/texto/Titulo/Titulo.svelte';
  import Imagen from '../../../elementos/media/Imagen/Imagen.svelte';

  export let imagen;
  export let titulo;
  export let indice;
  export let seleccionado;
</script>

<style>
.VideoVistaPrevia {
    cursor: pointer;
}
.VideoVistaPrevia:hover {
    opacity: 0.75;
}
</style>

<article class="VideoVistaPrevia" on:click={seleccionado(indice)}>
  <div class="imagen">
    <Imagen imagenUrl={imagen} altTexto={titulo} altura={"4rem"}/>
  </div>

  <Titulo nivel={3} texto={titulo} />

</article>
