<script>
  import Logo from "../Logo/Logo.svelte";
  import Logos from "../Logos/Logos.svelte";
  import BotonIcono from "../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import MenuEscritorio from "../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte";
  import MenuMovil from "../../elementos/menu/MenuMovil/MenuMovil.svelte";
  import Icono from "../../elementos/Icono/Icono";

  export let menuAlternar;
  export let logoTexto;
  export let logos;
  export let logoImagenUrl;
  export let objetosMenu;
  export let objetosAlineacion;
  export let altura;
  export let colorFondo;
  export let colorFondoMovil;
  export let color;
  export let sombra;
  export let fixed;
  export let estadoMenu;
  export let iconoBotonAltura;
  export let alturaMenuMovil;
  export let objetosMenuExtra;
  export let segment;

  $: clases = `Header Cabecera ${!!fixed ? "fixed" : ""}`;
  //  Responsivo
  let responsivo;
  let breakpoint = 1024;
</script>

<style>
  header.Header {
    position: relative;
  }
  header div:nth-child(1) {
    box-sizing: border-box;
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
  .fixed {
    position: fixed !important;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
  }
</style>

<svelte:window bind:innerWidth={responsivo} />

<header
  style="background-color:{colorFondo};height:{altura};{!!sombra ? 'box-shadow:0 1px 2px rgba(0,0,0,0.5)' : ''}"
  class={clases}>
  <div>

    {#if Array.isArray(logos)}
      <Logos {logos} />
    {:else if !!logoImagenUrl}
      <Logo {logoTexto} {logoImagenUrl} logoAncho={'30%'} />
    {/if}

    <!-- Menu Escritorio  -->
    {#if responsivo < breakpoint}
      <Icono on:click={menuAlternar} icono={!estadoMenu ? 'menu' : 'cerrar'} tamanno={iconoBotonAltura }/>
    {:else if !!objetosMenu}
      <MenuEscritorio {objetosMenu} {colorFondo} {color} />
    {/if}

  </div>

  <!-- Menu Movil  -->
  {#if responsivo < breakpoint}
    {#if !!objetosMenu}
      <MenuMovil
        on:eventoEstadoMenu
        {estadoMenu}
        {objetosMenu}
        {color}
        {sombra}
        colorFondo={colorFondoMovil}
        alturaObjetoMenu="3rem"
        {alturaMenuMovil}
        {objetosMenuExtra}
        {objetosAlineacion} />
    {/if}
  {/if}

</header>
