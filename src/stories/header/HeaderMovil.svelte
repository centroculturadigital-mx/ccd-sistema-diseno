<script>
import { slide } from 'svelte/transition'
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
    height: 95%;
    width: 100%;
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

      <BotonMenuMovilVista on:eventoBotonMenu/>

    </div>

    {#if !!objetosMenu}
      <MenuMovilVista estadoMenu={estadoMenu} colorFondo="lime" alturaObjetoMenu="4rem" {objetosMenu} on:eventoEstadoMenu />
    {/if}
  </header>
{/if}
