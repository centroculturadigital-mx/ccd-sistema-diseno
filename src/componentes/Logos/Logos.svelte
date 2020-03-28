<script>
  import Logo from '../Logo/Logo'

  export let logos;
  export let alineacion;

  if (!alineacion) {
    alineacion = "left";
  }


</script>

<style>
  div {
    display: flex;
    height: 100%;
    width: 100%;
    min-width: 12rem;
    align-items: center;
    justify-content: left;
    
  }
  a {
    box-sizing: border-box;
    padding: 0.5rem;
    height: 100%;
    width: 100%;
  }
</style>

<div>
  {#if Array.isArray(logos)}
    {#each logos as logo, i ("logo_"+i )}
      <Logo {...logo}/>
    {/each}
  {/if}
</div>
