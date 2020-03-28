<script>
  import Logo from '../Logo/Logo'

  export let logos;
  export let alineacion;

  if (!alineacion) {
    alineacion = "left";
  }


</script>

<style>
  .Logotipos {
    display: flex;
    height: 100%;
    min-width: 12rem;
    align-items: center;
    justify-content: flex-start;
    
  }
</style>

<div class="Logotipos">
  {#if Array.isArray(logos)}
    {#each logos as logo, i ("logo_"+i )}
      <Logo {...logo}/>
    {/each}
  {/if}
</div>
