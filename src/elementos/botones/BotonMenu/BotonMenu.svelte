<script>

  import MenuIcon from "svelte-feather-icons";
  import XIcon from "svelte-feather-icons";
  
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
