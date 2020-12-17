<script>
  export let data;
</script>

<style>
  h1 {
    font-size: var(--theme-textos-titulo-h1-tamanno);
    font-family: var(--theme-textos-titulo-tipografia);
    color: var(--theme-textos-titulo-color);
    font-weight: var(--theme-textos-titulo-peso);
  }
</style>

<h1 class="Titulo" {...data}>
  <slot />
</h1>
