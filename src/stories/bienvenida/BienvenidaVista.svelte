<script>
  import Bienvenida from "./Bienvenida.svelte";

  export let videoUrls;
  export let imagenUrl;
  export let textoTitulo;
  export let posicionTexto;
  export let overlay;
  export let colorOverlay;
  export let color;
</script>

<Bienvenida
  {videoUrls}
  {imagenUrl}
  {textoTitulo}
  {posicionTexto}
  {color}
  {overlay}
  {colorOverlay} />
