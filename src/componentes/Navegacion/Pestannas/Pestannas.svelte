<script>
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let opciones = [];
  export let actual = 0;
  export let accion = console.log("Función");


</script>

<style>
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  li {
    background-color: var(--theme-pestannas-fondo-color);
    padding: calc(var(--theme-espaciados-padding) * 1.5);
    cursor: pointer;
    border-bottom: 3px solid var(--theme-pestannas-borde-color);
  }
  li:hover,
  li:active,
  li:focus {
    background-color: var(--theme-pestannas-fondo-hover);
    border-bottom: 3px solid var(--theme-pestannas-borde-hover);
  }
  li :global(p span) {
    color: var(--theme-pestannas-texto-color);
    font-weight: bolder;
  }
  li:hover :global(p span),
  li:active :global(p span),
  li:focus :global(p span) {
    color: var(--theme-pestannas-texto-hover);
  }
  li :global(p) {
    margin: calc(var(--theme-espaciados-margen) / 2);
  }
  .actual {
    background-color: var(--theme-pestannas-fondo-hover);
    border-bottom: 3px solid var(--theme-pestannas-borde-hover);
  }
  .actual :global(p span) {
    color: var(--theme-pestannas-texto-hover);
    font-weight: 900;
  }
</style>

{#if !!opciones}
  <ul>
    {#each opciones as opcion, i ('pestana_' + i)}
      <li on:click={accion(i)} class={i == actual ? "actual": ""}>
        <Parrafo texto={opcion} />
      </li>
    {/each}
  </ul>
{/if}
