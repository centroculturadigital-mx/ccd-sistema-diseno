<script>
  import LogoVista from "../logo/LogoVista.svelte";
  import BotonMenuMovilVista from "../botones/BotonMenuMovil/BotonMenuMovilVista.svelte";
  import MenuEscritorioVista from "../menu/MenuEscritorio/MenuEscritorioVista.svelte";
  import MenuMovilVista from "../menu/MenuMovil/MenuMovilVista.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let objetosMenu;
  export let altura;
  export let colorFondo;
  export let color;
  export let sombra;
  export let fixed;
  export let estadoMenu;

  //  Responsivo
  let responsivo;
  let breakpoint = 720;
</script>

<style>
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
  }
</style>

<svelte:window bind:innerWidth={responsivo} />

<header
  style="background-color:{colorFondo};height:{altura};{!!sombra ? 'box-shadow:0 1px 2px rgba(0,0,0,0.5)' : ''}"
  class={!!fixed ? 'fixed' : ''}>
  <div>
    <LogoVista {logoTexto} {logoImagenUrl} ancho={'auto'} />

    <!-- Menu Escritorio  -->
    {#if responsivo < breakpoint}
      <BotonMenuMovilVista on:eventoBotonMenu />
    {:else if !!objetosMenu}
      <MenuEscritorioVista {objetosMenu} {colorFondo} {color} />
    {/if}

  </div>

  <!-- Menu Movil  -->
  {#if responsivo < breakpoint}
    {#if !!objetosMenu}
      <MenuMovilVista
        on:eventoEstadoMenu
        {estadoMenu}
        {objetosMenu}
        {colorFondo}
        {color}
        {sombra}
        alturaObjetoMenu="4rem" />
    {/if}
  {/if}

</header>
