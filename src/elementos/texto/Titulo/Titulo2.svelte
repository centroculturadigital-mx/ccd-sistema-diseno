<script>
  export let data;
</script>

<style>
  h2 {
    font-size: var(--theme-textos-titulo-h2-tamanno);
    font-family: var(--theme-textos-titulo-tipografia);
    color: var(--theme-textos-titulo-color);
    font-weight: var(--theme-textos-titulo-peso);
  }
</style>

<h2 {...data}>
  <slot />
</h2>
