<script>
  export let data;
</script>

<style>
  h6 {
    font-size: var(--theme-textos-titulo-h6-tamanno);
    font-family: var(--theme-textos-titulo-tipografia);
    color: var(--theme-textos-titulo-color);
    font-weight: var(--theme-textos-titulo-peso);
  }
</style>

<h6 class="Titulo" {...data}>
  <slot />
</h6>
