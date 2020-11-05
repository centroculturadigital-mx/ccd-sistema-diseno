<script>
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";

  export let texto;
  export let estado;
  export let click;


  $: clases = `BotonAlternar ${estado ? "encendido" : "apagado"}`;

</script>

<style>
  button {
    position: relative;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--theme-espaciados-padding);
    height: auto;
    width: 100%;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
    box-sizing: border-box;
  }
  .apagado :global(svg) {
    fill: white !important;
  }
</style>

<!-- <label for={nombre}> -->

<!-- <input type="checkbox" id={nombre} name={nombre} value={valor} on:click={click}/> -->

<button class={clases} on:click|preventDefault={click}>
  
  <Icono icono={estado ? 'casillallena' : 'casillavacia'} />

  {#if !!texto}
    <Texto {texto} />
  {/if}

</button>
<!-- </label> -->
