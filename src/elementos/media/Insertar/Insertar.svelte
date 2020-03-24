<script>
  export let url;
  export let alto;
  export let ancho;
</script>

<iframe
  width={ancho}
  height={alto}
  src={url}
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen />
