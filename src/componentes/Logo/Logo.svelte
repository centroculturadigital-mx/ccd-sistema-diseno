<script>
  import Imagen from "../../elementos/media/Imagen/Imagen.svelte";
  export let logoTexto;
  export let logoImagenUrl;
  export let ancho;
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
    align-items: center;
    justify-content: left;
  }
  a {
    box-sizing: border-box;
    padding: 0.5rem;
    height: 100%;
    width:  100%;
  }
  h4 {
    margin: 0.25rem 0;
  }
</style>

<div style="width:{ancho};justify-content:{alineacion};">
<a href=".">
  {#if !!logoImagenUrl}
    <Imagen imagenUrl={logoImagenUrl} altTexto={logoTexto} altura="100%" ajuste="contain"/>
  {:else if !logoImagenUrl && !!logoTexto}
    <h4>{logoTexto}</h4>
  {/if}
</a>
</div>
