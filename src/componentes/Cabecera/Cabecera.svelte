<script>
  import Logo from "../Logo/Logo.svelte";
  import Logos from "../Logos/Logos.svelte";
  import BotonIcono from "../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import MenuEscritorio from "../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte";
  import MenuMovil from "../../elementos/menu/MenuMovil/MenuMovil.svelte";
  import Icono from "../../elementos/Icono/Icono";

  export let segment;
  export let logotipos;
  export let elementos;
  export let componentes;
  export let fixed;
  export let sombra;
  export let estado;

  $: clases = `Cabecera ${!!fixed ? "fixed" : ""}`;

  let responsivo;
  let breakpoint = 1024;

  const menuAlternar = () => {
    console.log("DEBUG", estado);
    estado = !estado;
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

  .contenedor {
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
  .Cabecera :global(.iconoContenedor img) {
    object-position: right;
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
  @media screen and (max-width: 1024px) {
    .Herramientas {
      order: -1;
    }
  }
</style>

<svelte:window bind:innerWidth={responsivo} />

<header class={!!sombra ? 'sombra ' + clases : clases}>
  <div class="contenedor">

    {#if Array.isArray(logotipos)}
      <Logos {logotipos} />
    {/if}

    <div class="Navegacion">
      {#if responsivo < breakpoint}
        {#if !!elementos}
          <div class="iconoMenu" on:click={menuAlternar}>
            <Icono icono={!estado ? 'menu' : 'cerrar'} />
          </div>
        {/if}
      {:else if !!elementos}
        <MenuEscritorio {elementos} {segment} />
        {#if !!componentes && Array.isArray(componentes)}
          <div class="Herramientas">
            {#each componentes as componente}
              <svelte:component
                this={componente.componente}
                {...componente.datos} />
            {/each}
          </div>
        {/if}
      {/if}
    </div>

  </div>

  <!-- Navegacion Movil  -->
  {#if responsivo < breakpoint}
    {#if !!elementos}
      <MenuMovil
        on:eventoEstadoMenu
        {estado}
        {elementos}
        {sombra}
        {segment}
        {componentes}
        on:click={menuAlternar} />
    {/if}
  {/if}

</header>
