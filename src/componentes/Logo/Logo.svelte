<script>
  import Imagen from "../../elementos/media/Imagen/Imagen.svelte";
  import Parrafo from "../../elementos/texto/Parrafo/Parrafo.svelte";

  // export let imagen;
  // export let enlace;
  // export let nombre;
  
  export let logos;
  export let logoAncho;
  export let alineacion;

  if (!alineacion) {
    alineacion = "left";
  }

</script>

<style>
  div {
    display: flex;
    height: 100%;
    width: 100%;
    min-width: 12rem;
    align-items: center;
    justify-content: left;
    
  }
  a {
    box-sizing: border-box;
    padding: 0.5rem;
    height: 100%;
    width: 100%;
  }
</style>

<div style="width: {logoAncho};">
  {#each logos as logo}
    <a href={logo.enlace}>
      {#if !!logo.logotipo.publicUrl}
        <Imagen
          imagenUrl={logo.logotipo.publicUrl}
          altTexto={logo.nombre}
          altura="100%"
          ajuste="contain"
          {alineacion} />
      {:else if !logo.imagen && !!logo.nombre}
        <Parrafo texto={'Agrega un logotipo'} />
      {/if}
    </a>
  {/each}
</div>
