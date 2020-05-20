<script>
  export let data;
</script>

<style>
  h4 {
    font-size: var(--theme-textos-titulo-h4-tamanno);
    font-family: var(--theme-textos-titulo-tipografia);
    color: var(--theme-textos-titulo-color);
    font-weight: var(--theme-textos-titulo-peso);
  }
</style>

<h4 {...data}>
  <slot />
</h4>
