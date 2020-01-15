<script>
  import ImagenVista from "../../imagen/ImagenVista.svelte";

  export let imagenUrl;
  export let titulo;
  export let sombra;
  
</script>

<style>
  article {
    width: 16rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0.25rem;
    background-color: rgb(192, 192, 192);
    color: rgb(0, 0, 0);
  }
  .tarjeta-imagen {
    width: 16rem;
    height: 22rem;
  }
  
  @media (min-width: 720px) {
    article {
      max-width: 16rem;
      flex-direction: unset;
    }
    .tarjeta-imagen {
      width: 100%;
      height: 22rem;
    }
    
  }
</style>

  
<article style="{!!sombra ? 'box-shadow:0 2px 4px rgba(0,0,0,0.5)' : ''}"  >

  <div class="tarjeta-imagen">
    <ImagenVista {imagenUrl} altTexto={titulo} ajuste="cover" />
  </div>

  

</article>
