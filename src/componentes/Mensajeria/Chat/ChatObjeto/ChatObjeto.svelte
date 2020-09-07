<script>
  export let componente;
  export let datos = {};
</script>

<style>
  .ChatObjeto {
    display: flex;
    min-height: 6rem;
    padding: var(--theme-espaciados-padding);
    width: 100%;
    box-sizing: border-box;
  }
</style>

{#if componente}
  <section class="ChatObjeto">
    <svelte:component this={componente} {...datos} />
  </section>
{/if}
