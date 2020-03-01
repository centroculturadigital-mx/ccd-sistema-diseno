<script>

  import MenuIcon from "svelte-feather-icons/src/icons/MenuIcon.svelte";
  import XIcon from "svelte-feather-icons/src/icons/XIcon.svelte";
  
  export let estado=false;

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

<button on:click>
  {#if !! estado}
    <XIcon />
  {:else}
    <MenuIcon />
  {/if}
</button>
