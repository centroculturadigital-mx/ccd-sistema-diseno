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
  .Cabecera :global(.iconoContenedor img) {
    object-position: right;
  }
  .Navegacion {
    display: flex;
    flex-direction: row;
  }
  .Herramientas {
    display: flex;
    align-items: center;
    padding: 0 calc(var(--theme-espaciados-padding) / 1);
  }
  @media screen and (max-width: 1024px) {
    .Herramientas {
      order: -1;
    }
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
    <div class="Navegacion">
      {#if responsivo < breakpoint}
        {#if !!elementos}
          <Icono on:click={menuAlternar} icono={!estado ? 'menu' : 'cerrar'} />
        {/if}
      {:else if !!elementos}
        <MenuEscritorio {elementos} {segment} />
      {/if}
      <div class="Herramientas">
        {#if !!componentes && Array.isArray(componentes)}
          {#each componentes as componente}
            <svelte:component
              this={componente.componente}
              {...componente.datos} />
          {/each}
        {/if}
      </div>
    </div>

  </div>

  <!-- Menu Movil  -->
  {#if responsivo < breakpoint}
    {#if !!elementos}
      <MenuMovil
        on:eventoEstadoMenu
        {estado}
        {elementos}
        {sombra}
        {segment}
        on:click={menuAlternar} />
    {/if}
  {/if}

</header>
