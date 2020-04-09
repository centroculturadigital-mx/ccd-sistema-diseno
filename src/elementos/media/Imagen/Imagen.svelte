<script>
  export let imagenUrl;
  export let altTexto;
  export let ajuste;
  export let alineacion;
  export let altura;

  $: clases = altura ? "width-auto" : "";
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
  src={imagenUrl}
  alt={altTexto}
  style="object-fit:{ajuste};object-position:{alineacion};height:{altura}" />
