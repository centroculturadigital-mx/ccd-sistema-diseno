<script>
  export let imagenUrl;
  export let altTexto;
  export let ajuste;
  export let alineacion;
  export let altura;
</script>

<style>
  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
</style>

<img
  src={imagenUrl}
  alt={altTexto}
  style="object-fit:{ajuste};object-position:{alineacion};height:{altura}" />
