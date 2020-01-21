<script>
  export let imagenUrl;
  export let altTexto;
  export let ajuste;
  export let alineacion;
  export let altura;
</script>

<style>
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>

<img
  src={imagenUrl}
  alt={altTexto}
  style="object-fit:{ajuste};object-position:{alineacion};height:{altura}" />
