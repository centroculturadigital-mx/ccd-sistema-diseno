<script>
  import Logo from "../Logo/Logo";

  export let logotipos;
</script>

<style>
  .Logotipos {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
  }
</style>

{#each logotipos as logo, i ('logo_' + i)}
  <div class="Logotipos">
    {#if Array.isArray(logotipos)}
      <Logo {...logo} />
    {/if}
  </div>
{/each}
