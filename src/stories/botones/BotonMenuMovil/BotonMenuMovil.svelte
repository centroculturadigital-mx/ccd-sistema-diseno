<script>
  import MenuIcon from "../../../../node_modules/svelte-feather-icons/src/icons/MenuIcon.svelte";
  import XIcon from "../../../../node_modules/svelte-feather-icons/src/icons/XIcon.svelte";

  export let estado;
</script>

<style>
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 3rem;
  }
  :global(.feather) {
    stroke: black;
  }
  :global(.feather:hover) {
    stroke: red;
  }
</style>

  <button on:click>
    {#if !!estado}
      <XIcon />
    {:else}
      <MenuIcon />
    {/if}
  </button>
