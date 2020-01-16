<script>
  import Bienvenida from "./Bienvenida.svelte";

  export let videoUrls;
  export let imagenUrl;
  export let titulo;
  export let posicionTexto;
  export let overlay;
  export let colorOverlay;
  export let color;
</script>

<Bienvenida
  {videoUrls}
  {imagenUrl}
  {titulo}
  {posicionTexto}
  {color}
  {overlay}
  {colorOverlay} />
