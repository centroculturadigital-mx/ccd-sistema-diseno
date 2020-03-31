<script>
  export let id;
  export let enlace;
  export let alto;
  export let ancho;
</script>

<iframe
  {id}
  width={ancho}
  height={alto}
  src={enlace}
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>
