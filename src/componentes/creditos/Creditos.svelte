<script>
  import Titulo from "../../elementos/texto/Titulo/Titulo.svelte";

  export let titulo;
  export let nivelTitulo;
  export let colorTitulo;
  export let textoAutor;
</script>

<style>
  article {
    max-width: 16rem;
    height: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(192, 192, 192);
    color: rgb(0, 0, 0);
  }
  
  .creditos-texto {
    box-sizing: border-box;
    padding: 1rem 2rem;
    width: 100%;
  }
  p {
    margin: 0;
    padding: 0;
  }
  
  @media (min-width: 720px) {
    article {
      max-width: 16rem;
      flex-direction: unset;
    }
    .creditos-texto {
      width: 100%;
      box-sizing: border-box;
      padding: 0.5rem 1rem;
    }
  }
</style>

<article>

  <div class="creditos-texto">
    {#if !!titulo}
      <Titulo {titulo} {nivelTitulo} color={colorTitulo} />
    {/if}
    <p>{textoAutor}</p>
  </div>

</article>
