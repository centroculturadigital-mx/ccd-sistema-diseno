<script>
  export let componente;
  export let datos = {};
</script>

<style>
  .ChatObjeto {
    display: flex;
    height: 6rem;
    background-color: var(--theme-alertas-inactivo);
    width: 100%;
    box-sizing: border-box;
  }
</style>

{#if componente}
  <section class="ChatObjeto">
    <svelte:component this={componente} {...datos} />
  </section>
{/if}
