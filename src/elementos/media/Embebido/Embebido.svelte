<script>
  export let id;
  export let enlace;

  export let estilos = {
    alto: "",
    ancho: ""
  }
</script>

<style>
  iframe {
    height: 100%;
    width: 100%;
  }
</style>

<iframe
  {id}
  width={estilos.ancho}
  height={estilos.alto}
  src={enlace}
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen />
