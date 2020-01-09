<script>
  import Logo from "./Logo.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let ancho;
  export let alineacion;
</script>


<Logo {logoImagenUrl} {logoTexto} {alineacion} {ancho}/>