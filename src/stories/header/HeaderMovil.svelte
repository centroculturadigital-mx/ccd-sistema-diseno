<script>
  import LogoVista from "../logo/LogoVista.svelte";
  import BotonMenuMovilVista from "../botones/BotonMenuMovil/BotonMenuMovilVista.svelte";
  import MenuMovilVista from "../menu/MenuMovil/MenuMovilVista.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let objetosMenu;
  export let altura;
  export let color;


</script>

<style>
  header {
    padding: 0.5rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
</style>

<header style="background-color:{color};height:{altura}">
  <div>
    <LogoVista {logoTexto} {logoImagenUrl} ancho={'33%'} />

    <BotonMenuMovilVista />

  </div>

  {#if !!objetosMenu}
    <MenuMovilVista {objetosMenu} on:eventoEstadoMenu/>
  {/if}
</header>
