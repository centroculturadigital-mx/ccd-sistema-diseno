<script>
  import Titulo from '../../../elementos/texto/Titulo/Titulo.svelte';
  import Imagen from '../../../elementos/media/Imagen/Imagen.svelte';

  export let imagen;
  export let titulo;
</script>

<article class="VideoVistaPrevia">

  <div>
    <Imagen imagenUrl={imagen} altTexto={titulo} altura={"4rem"}/>
  </div>

  <Titulo nivel={3} texto={titulo} />

</article>
