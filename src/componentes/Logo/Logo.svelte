<script>
  import Imagen from "../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../elementos/texto/Titulo/Titulo.svelte";

  export let logotipo;
  export let imagen;
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

  $: imagen = typeof logotipo != "undefined" ? logotipo : imagen;


</script>

<div
  class="Logo"
  style="width:{estilos.ancho ? estilos.ancho : '100%'};{!enlace
    ? 'padding:0.5rem'
    : ''}"
>
  {#if !!enlace}
    <a href={enlace} target={externo ? "_blank" : ""} class="enlace">
      {#if !!imagen}
        {#if tipo == "imagen" || !tipo}
        <Imagen
          imagen={imagen}
          altTexto={nombre}
          altura="100%"
          ajuste="contain"
          alineacion={estilos.alineacion}
        />
        {:else if tipo == "vector"}
          <div class="vector {nombre ? nombre : ""}">
            {@html imagen}
          </div>
        {/if}
      {:else if !imagen && !!nombre}
        <Titulo texto={nombre} nivel={4} />
      {/if}
    </a>
  {:else if !enlace}
    {#if !!imagen}
      {#if tipo == "imagen" || !tipo}
      <Imagen
        imagen={imagen}
        altTexto={nombre}
        altura="100%"
        ajuste="contain"
        alineacion={estilos.alineacion}
      />
      {:else if tipo == "vector"}
      <div class="vector {nombre ? nombre : ""}">
        {@html imagen}
      </div>
    {/if}
    {:else if !imagen && !!nombre}
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
    max-width: 7rem;
  }
  a {
    padding: 0.25rem;
    height: 100%;
    width: 100%;
  }
  .Logo :global(img) {
    object-fit: contain;
    object-position: left;
    height: 100%;
    width: 100%;
  }
  .enlace:hover {
    transition: .5s;
    opacity: 0.75;
  }
</style>
