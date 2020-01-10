<script>
  import Logo from "../logo/LogoVista.svelte";
  import BotonMenuMovil from "../botones/BotonMenuMovil/BotonMenuMovilVista.svelte";

  export let logoTexto;
  export let logoImagenUrl;
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
}
</style>

<header>

  <Logo {logoTexto} {logoImagenUrl} ancho={'33%'} />

  <BotonMenuMovil />

</header>
