<script>
  import Imagen from "../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../elementos/texto/Titulo/Titulo.svelte";

  export let logotipo;
  export let enlace;
  export let externo = false;
  export let nombre;
  export let tipo = 'imagen';// imagen o vector

  export let estilos = {
    ancho: "",
    alineacion: "",
  };

  if (!estilos.alineacion) {
    estilos.alineacion = "left";
  }
</script>

<div
  class="Logo"
  style="width:{estilos.ancho ? estilos.ancho : '100%'};{!enlace
    ? 'padding:0.5rem'
    : ''}"
>
  {#if !!enlace}
    <a href={enlace} target={externo ? "_blank" : ""} class="enlace">
      {#if !!logotipo}
        {#if tipo == "imagen" || !tipo}
        <Imagen
          imagen={logotipo}
          altTexto={nombre}
          altura="100%"
          ajuste="contain"
          alineacion={estilos.alineacion}
        />
        {:else if tipo == "vector"}
          <div class="vector {nombre ? nombre : ""}">
            {@html logotipo}
          </div>
        {/if}
      {:else if !logotipo && !!nombre}
        <Titulo texto={nombre} nivel={4} />
      {/if}
    </a>
  {:else if !enlace}
    {#if !!logotipo}
      {#if tipo == "imagen" || !tipo}
      <Imagen
        imagen={logotipo}
        altTexto={nombre}
        altura="100%"
        ajuste="contain"
        alineacion={estilos.alineacion}
      />
      {:else if tipo == "vector"}
      <div class="vector {nombre ? nombre : ""}">
        {@html logotipo}
      </div>
    {/if}
    {:else if !logotipo && !!nombre}
      <Titulo texto={nombre} nivel={4} />
    {/if}
  {/if}
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .Logo {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: left;
    width: auto;
  }
  a {
    padding: 0.5rem;
    height: 100%;
  }
  .Logo :global(img) {
    object-fit: contain;
    object-position: left;
    width: auto;
  }
  .enlace:hover {
    transition: .5s;
    opacity: 0.75;
  }
</style>
