<script>
  import Bloque from "../../../componentes/Bloque/Bloque.svelte";

  export let href;
  export let texto;
  export let contenido;
  export let blank;

  const atributos = {
    href
  };

  $: (target => {
    atributos["target"] = !!target;
  })(blank);
</script>

<style>
  a {
    text-decoration: none;
  }
  a :global(span) {
    color: var(--theme-textos-enlaces-color);
    font-family: var(--theme-textos-enlaces-familia);
    cursor: pointer;
  }
  a :global(span:hover) {
    color: var(--theme-textos-enlaces-hover);
  }
</style>

<a href="..." {...atributos}>
  <Bloque {contenido} {texto} />
</a>
