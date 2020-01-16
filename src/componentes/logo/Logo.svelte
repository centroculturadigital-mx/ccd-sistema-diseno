<script>
  import Imagen from "../media/Imagen/Imagen.svelte";
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
  h4 {
    margin: 0.25rem 0;
  }
</style>

<div style="width:{ancho};justify-content:{alineacion}">
  {#if !!logoImagenUrl}
    <Imagen imagenUrl={logoImagenUrl} altTexto={logoTexto} altura="90%"/>
  {:else if !logoImagenUrl && !!logoTexto}
    <h4>{logoTexto}</h4>
  {/if}
</div>
