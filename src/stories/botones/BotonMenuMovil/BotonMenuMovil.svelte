<script>
  import { createEventDispatcher } from "svelte";
  import MenuIcon from "../../../../node_modules/svelte-feather-icons/src/icons/MenuIcon.svelte";
  import XIcon from "../../../../node_modules/svelte-feather-icons/src/icons/XIcon.svelte";

  let estadoBoton = false; //boton cerrado

  const dispatch = createEventDispatcher();

  function estadoBotonMenu() {

    !!estadoBoton ? estadoBoton = false : estadoBoton = true;
    
    dispatch("eventoBotonMenu",estadoBoton);
    
  }
</script>

<style>
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 3rem;
    margin: 0;
  }
  :global(.feather) {
    stroke: black;
  }
  :global(.feather:hover) {
    stroke: red;
  }
</style>

<button on:click={estadoBotonMenu}>
  {#if !!estadoBoton}
    <XIcon />
  {:else}
    <MenuIcon />
  {/if}
</button>
