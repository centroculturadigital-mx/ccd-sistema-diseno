<script>
  export let estadoMenu;
  export let objetosMenu;
  export let colorFondo;
  export let alturaObjetoMenu;
</script>

<style>
  ul {
    height: auto;
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
    position: absolute;
    z-index: 1000;
  }
  li {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

{#if estadoMenu === true}
  <ul style="background-color:{colorFondo}">

    {#each objetosMenu as objeto}
      <li style="height:{alturaObjetoMenu}">{objeto}</li>
    {/each}

  </ul>
{:else}
  <!-- DEBUG -->
  <p>ksjnfijfn</p>
{/if}
