<script>
  import Logo from "../Logo/Logo.svelte";
  import Logos from "../Logos/Logos.svelte";
  import BotonIcono from "../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import MenuEscritorio from "../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte";
  import MenuMovil from "../../elementos/menu/MenuMovil/MenuMovil.svelte";
  import Icono from "../../elementos/Icono/Icono";

  export let segment;
  export let logotipos;
  export let objetosMenu;
  export let objetosMenuExtra;
  export let fixed;
  export let sombra;
  export let estadoMenu;

  $: clases = `Cabecera ${!!fixed ? "fixed" : ""}`;

  let responsivo;
  let breakpoint = 1024;

  const menuAlterna = () => {
    estadoMenu = !estadoMenu;
  };
</script>

<style>
  header.Cabecera {
    position: relative;
    width: 100%;
    background-color: var(--theme-cabeceras-principal-fondo);
    height: var(--theme-cabeceras-principal-altura);
    padding: var(--theme-espaciados-padding) 0;
    box-sizing: border-box;
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
  .Cabecera :global(.Logo a) {
    padding: 0;
    margin-right: 0.5rem;
  }
</style>

<svelte:window bind:innerWidth={responsivo} />

<header
  style={!!sombra ? 'box-shadow:0 4px 3px rgba(0,0,0,0.5)' : ''}
  class={clases}>
  <div>

    {#if Array.isArray(logotipos)}
      <Logos {logotipos} />
    {/if}

    <!-- Menu Escritorio  -->
    {#if responsivo < breakpoint}
      {#if !!objetosMenu}
        <Icono on:click={menuAlterna} icono={!estadoMenu ? 'menu' : 'cerrar'} />
      {/if}
    {:else if !!objetosMenu}
      <MenuEscritorio {objetosMenu} {segment} />
    {/if}

  </div>

  <!-- Menu Movil  -->
  {#if responsivo < breakpoint}
    {#if !!objetosMenu}
      <MenuMovil
        on:eventoEstadoMenu
        {estadoMenu}
        {objetosMenu}
        {objetosMenuExtra}
        {sombra}
        {segment} />
    {/if}
  {/if}

</header>
