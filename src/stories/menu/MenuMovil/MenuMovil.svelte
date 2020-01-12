<script>
  export let estadoMenu;
  export let objetosMenu;
  export let colorFondo;
  export let alturaObjetoMenu;
</script>

<style>
  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
  }
  li {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

{#if !!estadoMenu}
  <ul style="background-color:{colorFondo}:height:{alturaObjetoMenu}">

    {#each objetosMenu as objeto}
      <li>{objeto}</li>
    {/each}

  </ul>
{:else}

  <p>ksjnfijfn</p>
  
{/if}
