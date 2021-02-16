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
    width: 100%;
    box-sizing: border-box;
  }
</style>

<div class="Logotipos">
  {#if Array.isArray(logotipos)}
    {#each logotipos as logo, i ('logo_' + i)}
        <Logo {...logo} />
    {/each}
  {/if}
</div>
