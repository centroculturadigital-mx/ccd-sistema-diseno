<script>
  import { fade } from 'svelte/transition'
  import Logo from "../Logo/Logo.svelte";
  import Logos from "../Logos/Logos.svelte";
  import BotonIcono from "../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import MenuEscritorio from "../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte";
  import MenuMovil from "../../elementos/menu/MenuMovil/MenuMovil.svelte";
  import Icono from "../../elementos/Icono/Icono";
  import Texto from "../../elementos/texto/Texto/Texto";

  export let segment;
  export let logotipos;
  export let elementos;
  export let componentes;
  export let componentesMovil;
  export let fixed;
  export let sombra;
  export let estado;
  export let texto;

  let responsivo;
  let breakpoint = 1024;

  function noScroll() {
    if (window) {
      window.scrollTo(0, 0);
    }
  }

  const pararScroll = () => {
    if (estado) {
      if (window) {
        window.addEventListener("scroll", noScroll);
      }
    } else {
      if (window) {
        window.removeEventListener("scroll", noScroll);
      }
    }
  };

  const habilitarScroll = () => {
    if (window) {
      window.removeEventListener("scroll", noScroll);
      // body.css.overflow = "initial";
    }
  };

  const menuAlternar = () => {
    estado = !estado;
  };

  $: clases = `Cabecera ${fixed ? "fixed" : ""}`;
</script>

<svelte:window bind:innerWidth={responsivo} />

<header
  class={!!sombra ? "sombra " + clases : clases}
  on:mouseenter={estado ? pararScroll : null}
  on:mouseleave={estado ? habilitarScroll : null}
>
  <div class="contenedor">
    <div class="informacion">
      {#if Array.isArray(logotipos)}
        <Logos {logotipos} />
      {/if}

      {#if texto}
        <div class="texto">
          <Texto {texto} />
        </div>
      {/if}
    </div>

    <div class="Navegacion">
      {#if responsivo < breakpoint}

        {#if componentesMovil && !estado}
          <!--  -->
        <div class="componentesMovil" transition:fade={{duration:100}}>
            {#each componentesMovil as componente}
              <svelte:component
                this={componente.componente}
                {...componente.datos}
              />
            {/each}
          </div>
        {/if}

        {#if Array.isArray(elementos) || Array.isArray(componentes)}
          <div class="iconoMenu" on:click={menuAlternar}>
            <Icono icono={!estado ? "menu" : "cerrar"} />
          </div>
        {/if}
      {:else}
        <MenuEscritorio {elementos} {segment} />

        {#if Array.isArray(componentes) && componentes.length > 0}
          <div class="Herramientas">
            {#each componentes as componente}
              <svelte:component
                this={componente.componente}
                {...componente.datos}
              />
            {/each}
          </div>
        {/if}
      {/if}
    </div>
  </div>

  <!-- Navegacion Movil  -->
  {#if responsivo < breakpoint}
    <div class="navegacionMovil">
      {#if Array.isArray(elementos) || Array.isArray(componentes)}
        <MenuMovil
          on:eventoEstadoMenu
          {estado}
          {elementos}
          {sombra}
          {segment}
          {componentes}
          entraRaton={pararScroll}
          saleRaton={habilitarScroll}
          on:click={menuAlternar}
        />
      {/if}
    </div>
  {/if}
</header>

<style>
  * {
    box-sizing: border-box;
  }
  header.Cabecera {
    position: relative;
    background-color: var(--theme-cabeceras-principal-fondo);
    padding: var(--theme-espaciados-padding) 0;
    height: var(--theme-cabeceras-principal-altura);
    width: 100%;
  }

  .contenedor {
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
    height: 100%;
    width: 100%;
  }
  .contenedor :global(.Logotipos) {
    width: auto;
  }
  .contenedor :global(.Logo) {
    max-width: 4rem;
  }
  .informacion {
    display: flex;
  }
  .texto {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 var(--theme-espaciados-padding);
    border-left: 1px solid #aaa;
  }
  .texto :global(span) {
    font-size: calc(var(--theme-textos-parrafo-tamanno) * 1.5);
    text-transform: uppercase;
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
  .Cabecera :global(.iconoContenedor img) {
    object-position: right;
  }
  .logos {
    display: flex;
  }
  .Navegacion {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .iconoMenu {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .iconoMenu:hover {
    opacity: 0.75;
  }
  .Herramientas {
    display: flex;
    align-items: center;
    padding: 0 calc(var(--theme-espaciados-padding) / 1);
  }
  .sombra {
    box-shadow: 0 4px 3px rgba(0, 0, 0, 0.5);
  }
  .componentesMovil {
    display: flex;
    padding: 0 var(--theme-espaciados-padding);
  }
  @media screen and (max-width: 1024px) {
    .Herramientas {
      order: -1;
    }
  }
</style>
