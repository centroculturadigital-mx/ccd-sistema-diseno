<script>
  import Logo from '../Logo/Logo'

  export let logotipos;

</script>

<style>
  .Logotipos {
    display: flex;
    height: 100%;
    min-width: 12rem;
    align-items: center;
    justify-content: flex-start;
  }
  .Logotipos :global(.Logo)  {
    /* width: 33%; */
  }
</style>

<div class="Logotipos">
  {#if Array.isArray(logotipos)}
    {#each logotipos as logo, i ("logo_"+i )}
      <Logo {...logo}/>
    {/each}
  {/if}
</div>
