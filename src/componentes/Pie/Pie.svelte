<script>
  import Logo from "../Logo/Logo.svelte";
  import Logos from "../Logos/Logos.svelte";
  import Parrafo from "../../elementos/texto/Parrafo/Parrafo.svelte";
  import MenuEscritorio from "../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte";

  export let logotipo;
  export let logotipos;
  export let nombre;
  export let menu;
  export let copyright;
  export let fixed;

  export let estilos = {
    altura: ""
  };
</script>

<style>
  footer {
    background-color: var(--theme-pies-fondo);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: calc(var(--theme-espaciados-padding) / 2)
      var(--theme-espaciados-padding);
    width: 100%;
  }

  .fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
  .logotipos {
    width: auto;
    height: 100%;
  }
  .copyright :global(p span) {
    font-size: 0.75rem;
    color: var(--theme-pies-texto);
  }
  .menu :global(a) {
    transition: var(--theme-transicion);
    text-transform: capitalize;
    color: var(--theme-textos-parrafo-enlace);
  }
  .menu :global(a:hover) {
    text-transform: capitalize;
    color: var(--theme-textos-parrafo-color);
  }

</style>

<footer
  style="height:{!!estilos.altura ? estilos.altura : ''};"
  class={!!fixed ? 'fixed' : ''}>

  <div class="logotipos">

    {#if Array.isArray(logotipos)}
      <Logos {logotipos} />
    {:else if !!logotipo}
      <Logo {nombre} {logotipo} />
    {/if}

  </div>
  <div class="menu">

    {#if Array.isArray(menu)}
      <MenuEscritorio objetosMenu={menu} />
    {/if}

  </div>
  {#if !!copyright}
    <div class="copyright">
      <Parrafo texto={copyright} />
    </div>
  {/if}

</footer>
