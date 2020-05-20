<script>
  export let imagenUrl;
  export let imagen;
  export let altTexto;

  export let estilos = {
    ajuste: "",
    alineacion: "",
    altura: ""
  };

  $: clases = estilos.altura ? "width-auto" : "";

  if (!imagen) {
    //
    imagen = imagenUrl;
  }
</script>

<style>
  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  .width-auto {
    width: auto;
  }
</style>

<img
  on:click
  class={clases}
  src={imagen}
  alt={altTexto}
  style="object-fit:{estilos.ajuste};object-position:{estilos.alineacion};height:{estilos.altura}" />
