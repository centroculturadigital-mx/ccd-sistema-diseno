<script>
  import Imagen from "../../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../../elementos/texto/Titulo/Titulo.svelte";
  import Parrafo from "../../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let imagen;
  export let titulo = "";
  export let texto = "";
  export let textoSecundario = "";
</script>

<style>
  .ChatObjetoEjemplo {
    display: flex;
  }
  .Imagen {
    width: 5rem;
    height: 100%;
    flex-shrink: 0;
  }
  .Texto {
    display: flex;
    flex-direction: column;
    padding: var(--theme-espaciados-padding);
    box-sizing: border-box;
  }
  .Texto :global(h5) {
    margin: 0 0 var(--theme-espaciados-margen) 0;
  }
  .Texto :global(h5 span) {
    margin: 0 0 var(--theme-espaciados-margen) 0;
    color: #fff;
  }
  .Texto :global(p) {
    margin: 0;
  }
  .Texto :global(p span) {
    font-size: 0.85rem;
    color: #fff;
  }
</style>

<article class="ChatObjetoEjemplo">
  <div class="Imagen">
    <Imagen {imagen} />
  </div>
  <div class="Texto">
    <Titulo texto={titulo} nivel={5} />
    <Parrafo {texto} />
    <Parrafo texto={textoSecundario} nivel={4} />
  </div>
</article>
