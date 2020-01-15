<script>
  export let nivelTitulo;
  export let titulo;
  export let color;
</script>

<style>
h1,h2,h3,h4,h5,h6  {
    color:black;
    margin: 0;
}
</style>
{#if !!nivelTitulo}
  {#if nivelTitulo === 'h1'}
    <h1 style="color:{color};">{titulo}</h1>
  {/if}
  {#if nivelTitulo === 'h2'}
    <h2 style="color:{color};">{titulo}</h2>
  {/if}
  {#if nivelTitulo === 'h3'}
    <h3 style="color:{color};">{titulo}</h3>
  {/if}
  {#if nivelTitulo === 'h4'}
    <h4 style="color:{color};">{titulo}</h4>
  {/if}
  {#if nivelTitulo === 'h5'}
    <h5 style="color:{color};">{titulo}</h5>
  {/if}
  {#if nivelTitulo === 'h6'}
    <h6 style="color:{color};">{titulo}</h6>
  {/if}
{/if}
