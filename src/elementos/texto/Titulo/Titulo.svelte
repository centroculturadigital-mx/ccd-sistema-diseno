<script>
  export let nivelTitulo;
  export let titulo;
  export let texto;

  $: textoRenderear = !! texto ? texto : titulo

  export let color="#000";
</script>

<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
  }
  .titulo-grande {
    font-size: 2.7rem;
    max-width: 19rem;
  }
</style>

{#if !!nivelTitulo}
  {#if nivelTitulo === 'h1'}
    <h1 style="color:{color};">{textoRenderear}</h1>
  {/if}
  {#if nivelTitulo === 'h2'}
    <h2 style="color:{color};">{textoRenderear}</h2>
  {/if}
  {#if nivelTitulo === 'h3'}
    <h3 style="color:{color};">{textoRenderear}</h3>
  {/if}
  {#if nivelTitulo === 'h4'}
    <h4 style="color:{color};">{textoRenderear}</h4>
  {/if}
  {#if nivelTitulo === 'h5'}
    <h5 style="color:{color};">{textoRenderear}</h5>
  {/if}
  {#if nivelTitulo === 'h6'}
    <h6 style="color:{color};">{textoRenderear}</h6>
  {/if}
{:else }
    <h1 class="titulo-grande" style="color:{color};">{textoRenderear}</h1>
{/if}
