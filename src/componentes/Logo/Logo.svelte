<script>
  import Imagen from "../../elementos/media/Imagen/Imagen.svelte";
  export let logoTexto;
  export let logoImagenUrl;
  export let logoAncho;
  export let alineacion;
  export let enlace;

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
</style>

<div style="width:{logoAncho};{!enlace?"padding:0.5rem":""}">

  {#if !!enlace}
    <a href={enlace}>
      {#if !!logoImagenUrl}
        <Imagen
          imagenUrl={logoImagenUrl}
          altTexto={logoTexto}
          altura="100%"
          ajuste="contain"
          {alineacion} />
      {:else if !logoImagenUrl && !!logoTexto}
        <h4>{logoTexto}</h4>
      {/if}
    </a>
  {:else if !enlace}
    <Imagen
      imagenUrl={logoImagenUrl}
      altTexto={logoTexto}
      altura="100%"
      ajuste="contain"
      {alineacion} />
  {/if}

</div>
