<script>
  import Imagen from "../../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../../elementos/texto/Titulo/Titulo.svelte";
  import Parrafo from "../../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let datos = {
    imagen: "https://fakeimg.pl/300?text=Oferta",
    titulo: "#01 - Titulo de objeto ofertado",
    contenido: "Breve descripción objeto oferta en tiempo real..."
  };
</script>

<style>
  .ChatObjeto {
    display: flex;
    height: 6rem;
    background-color: var(--theme-alertas-inactivo);
    width: 100%;
    box-sizing: border-box;
  }
  .ChatObjetoImagen {
    width: 5rem;
    height: 100%;
    flex-shrink: 0;
  }
  .ChatObjetoTexto {
    display: flex;
    flex-direction: column;
    padding: var(--theme-espaciados-padding);
    box-sizing: border-box;
  }
  .ChatObjetoTexto :global(h5) {
    margin: 0 0 var(--theme-espaciados-margin) 0;
  }
  .ChatObjetoTexto :global(h5 span) {
    margin: 0 0 var(--theme-espaciados-margin) 0;
    color: #fff;
  }
  .ChatObjetoTexto :global(p) {
    margin: 0;
  }
  .ChatObjetoTexto :global(p span) {
    font-size: 0.85rem;
    color: #fff;
  }
</style>

<section class="ChatObjeto">
  <div class="ChatObjetoImagen">
    <Imagen imagen={datos.imagen} />
  </div>
  <div class="ChatObjetoTexto">
    <Titulo texto={datos.titulo} nivel={5} />
    <Parrafo contenido={datos.contenido} />
  </div>
</section>
