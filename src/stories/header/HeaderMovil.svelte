<script>
  import LogoVista from "../logo/LogoVista.svelte";
  import BotonMenuMovilVista from "../botones/BotonMenuMovil/BotonMenuMovilVista.svelte";
  import MenuMovilVista from "../menu/MenuMovil/MenuMovilVista.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let objetosMenu;
  export let altura;
  export let color;
  export let sombra;
  export let fixed;

  //  Responsivo
  let responsivo;
  let breakpoint = 720;

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
  .sombra {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }
  .fixed {
    position: fixed;
    padding: 0.5rem;
    width: 100%;
    top: 0;
    left: 0;
  }
</style>

<svelte:window bind:innerWidth={responsivo} />

{#if responsivo < breakpoint}
  <header
    style="background-color:{color};height:{altura};{!!sombra ? 'box-shadow:1px 0 2px rgba(0,0,0,0.5)' : ''}"
    class={!!fixed ? 'fixed' : ''}>
    <div>
      <LogoVista {logoTexto} {logoImagenUrl} ancho={'33%'} />

      <BotonMenuMovilVista />

    </div>

    {#if !!objetosMenu}
      <MenuMovilVista {objetosMenu} on:eventoEstadoMenu />
    {/if}
  </header>
{/if}
