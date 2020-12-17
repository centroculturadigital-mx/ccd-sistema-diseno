<script>
  export let data;
</script>

<style>
  h5 {
    font-size: var(--theme-textos-titulo-h5-tamanno);
    font-family: var(--theme-textos-titulo-tipografia);
    color: var(--theme-textos-titulo-color);
    font-weight: var(--theme-textos-titulo-peso);
  }
</style>

<h5 class="Titulo" {...data}>
  <slot />
</h5>
