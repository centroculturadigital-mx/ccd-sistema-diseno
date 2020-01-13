<script>
  import Bienvenida from "./Bienvenida.svelte";

  export let videoUrls;
  export let imagenUrl;
  export let textoTitulo;
  export let colorOverlay;
  export let color;
</script>


<Bienvenida {videoUrls} {imagenUrl} {textoTitulo} {colorOverlay} {color} />
