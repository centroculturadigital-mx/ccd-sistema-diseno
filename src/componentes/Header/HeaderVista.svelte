<script>
  import Logo from "../Logo/Logo.svelte";
  import BotonIcono from "../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import MenuEscritorio from "../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte";
  import MenuMovil from "../../elementos/menu/MenuMovil/MenuMovil.svelte";

  export let menuAlternar;
  export let logoTexto;
  export let logoImagenUrl;
  export let objetosMenu;
  export let altura;
  export let colorFondo;
  export let colorFondoMovil;
  export let color;
  export let sombra;
  export let fixed;
  export let estadoMenu;
  export let iconoBotonEstadoUnoUrl;
  export let iconoBotonEstadoDosUrl;
  export let iconoBotonAltura;
  export let segment;

  //  Responsivo
  let responsivo;
  let breakpoint = 720;
</script>

<style>
  header {
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
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
  }
</style>

<svelte:window bind:innerWidth={responsivo} />

<header
  style="background-color:{colorFondo};height:{altura};{!!sombra ? 'box-shadow:0 1px 2px rgba(0,0,0,0.5)' : ''}"
  class={!!fixed ? 'fixed' : ''}>
  <div>
    <Logo {logoTexto} {logoImagenUrl} logoAncho={'30%'} />

    <!-- Menu Escritorio  -->
    {#if responsivo < breakpoint}
      <BotonIcono
        on:click={menuAlternar}
        estado={estadoMenu}
        {iconoBotonEstadoUnoUrl}
        {iconoBotonEstadoDosUrl}
        iconoAltura={iconoBotonAltura} 
        colorBG={colorFondo}/>
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
        alturaObjetoMenu="4rem" />
    {/if}
  {/if}

</header>
