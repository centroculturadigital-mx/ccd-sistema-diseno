<script>
  export let data;
</script>

<style>
  h3 {
    font-size: var(--theme-textos-titulo-h3-tamanno);
    font-family: var(--theme-textos-titulo-tipografia);
    color: var(--theme-textos-titulo-color);
    font-weight: var(--theme-textos-titulo-peso);
  }
</style>

<h3 {...data}>
  <slot />
</h3>
