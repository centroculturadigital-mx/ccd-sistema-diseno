<script>
  export let id;
  export let enlace;
  export let alto;
  export let ancho;
</script>

<style>
  iframe {
    height: 100%;
    width: 100%;
  }
</style>

<iframe
  {id}
  width={ancho}
  height={alto}
  src={enlace}
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen />
