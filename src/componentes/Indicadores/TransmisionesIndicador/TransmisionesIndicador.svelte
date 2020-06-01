<script>
  import TransmisionIndicador from "../TransmisionIndicador/TransmisionIndicador.svelte";
  
  export let eventos = [];
</script>

<style>
  .TransmisionesIndicador {
    height: auto;
    width: 100%;
    max-width: calc(var(--theme-tamannos-lg) * 17 );
    padding: var(--theme-espaciados-padding);
    box-sizing: border-box;
  }
  ul {
    padding: 0;
    margin: 0;
  }
</style>

{#if Array.isArray(eventos)}
  <section class="TransmisionesIndicador">
    <ul>
      {#each eventos as evento, i ('evento_envivo' + i)}
        <TransmisionIndicador evento={evento} estado={true} />
      {/each}
    </ul>
  </section>
{/if}
