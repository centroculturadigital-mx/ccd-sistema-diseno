<script>
  import Imagen from "../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from '../../elementos/texto/Titulo/Titulo.svelte';

  export let logotipo;
  export let enlace;
  export let nombre;

  export let estilos = {
    ancho: "",
    alineacion: ""
  };

  if (!estilos.alineacion) {
    estilos.alineacion = "left";
  }
</script>

<style>
  .Logo {
    display: flex;
    height: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: left;
    box-sizing: border-box;
  }
  a {
    box-sizing: border-box;
    padding: 0.5rem;
    height: 100%;
    width: 100%;
  }
  h4 {
    margin: 0.25rem 0;
  }
  .Logo :global(img) {
    object-fit: contain;
    object-position: left;
    width: auto;
  }
</style>

<div
  class="Logo"
  style="width:{estilos.ancho};{!enlace ? 'padding:0.5rem' : ''}">

  {#if !!enlace}
    <a href={enlace} target="_blank">
      {#if !!logotipo}
        <Imagen
          imagen={logotipo}
          altTexto={nombre}
          altura="100%"
          ajuste="contain"
          alineacion={estilos.alineacion} />
      {:else if !logotipo && !!nombre}
        <Titulo texto={nombre} nivel={4}/>
      {/if}
    </a>
  {:else if !enlace}
    {#if !!logotipo}
      <Imagen
        imagen={logotipo}
        altTexto={nombre}
        altura="100%"
        ajuste="contain"
        alineacion={estilos.alineacion} />
    {:else if !logotipo && !!nombre}
        <Titulo texto={nombre} nivel={4}/>
    {/if}
  {/if}

</div>
