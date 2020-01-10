<script>
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
    padding: 0.25rem;
  }
  h4 {
    margin: 0.25rem 0;
  }
</style>

<div style="width:{ancho};justify-content:{alineacion}">
  {#if !!logoImagenUrl}
    <img src={logoImagenUrl} alt={logoTexto} />
  {:else if !logoImagenUrl && !!logoTexto}
    <h4>{logoTexto}</h4>
  {/if}
</div>
