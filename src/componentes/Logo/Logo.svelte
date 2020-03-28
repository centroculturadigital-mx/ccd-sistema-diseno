<script>
  import Imagen from "../../elementos/media/Imagen/Imagen.svelte";
  export let logotipo;
  export let enlace;
  export let nombre;

  export let logoAncho;
  export let alineacion;

  if (!alineacion) {
    alineacion = "left";
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
</style>

<div class="Logo" style="width:{logoAncho};{!enlace?"padding:0.5rem":""}">

  {#if !!enlace}
    <a href={enlace} target="_blank">
      {#if !!logotipo}
        <Imagen
          imagenUrl={logotipo}
          altTexto={nombre}
          altura="100%"
          ajuste="contain"
          {alineacion} />
      {:else if !logotipo && !!nombre}
        <h4>{nombre}</h4>
      {/if}
    </a>
  {:else if !enlace}
      {#if !!logotipo}
        <Imagen
          imagenUrl={logotipo}
          altTexto={nombre}
          altura="100%"
          ajuste="contain"
          {alineacion} />
      {:else if !logotipo && !!nombre}
        <h4>{nombre}</h4>
      {/if}
  {/if}

</div>
