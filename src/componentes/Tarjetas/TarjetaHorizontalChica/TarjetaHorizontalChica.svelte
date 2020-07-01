<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen";
  import Titulo from "../../../elementos/texto/Titulo/Titulo";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo";
  import Texto from "../../../elementos/texto/Texto/Texto";

  export let imagen;
  export let titulo = "";
  export let texto = "";
  export let textoSecundario = "";
</script>

<style>
  .TarjetaHorizontalChica {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: var(--theme-tarjetas-fondo);
    width: auto;
  }
  .Imagen {
    width: 5rem;
    height: 100%;
    flex-shrink: 0;
  }
  .Texto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--theme-espaciados-padding);
    box-sizing: border-box;
    width: 100%;
  }
  .Texto :global(h5) {
    margin: 0 0 var(--theme-espaciados-margen) 0;
  }
  .Texto :global(h5 span) {
    margin: 0 0 var(--theme-espaciados-margen) 0;
    color: var(--theme-textos-parrafo-color);
  }
  .Texto :global(p) {
    margin: 0;
  }
  .Texto :global(p span) {
    font-size: 0.85rem;
    color: var(--theme-textos-parrafo-color);
  }
</style>

<article class="TarjetaHorizontalChica">
  {#if !!imagen}
    <div class="Imagen">
      <Imagen {imagen} />
    </div>
  {/if}
  <div class="Texto">
    {#if !!titulo}
      <Titulo texto={titulo} nivel={5} />
    {/if}
    {#if !!texto}
      <Parrafo {texto} />
    {/if}
    {#if !!textoSecundario}
      <Texto texto={textoSecundario} variante={'AUXILIAR'} />
    {/if}
  </div>
</article>
