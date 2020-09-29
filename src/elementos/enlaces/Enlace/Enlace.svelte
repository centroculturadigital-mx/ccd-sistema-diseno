<script>
  import Bloque from "../../../componentes/Bloque/Bloque.svelte";

  export let enlace;
  export let texto;
  export let contenido;
  export let blank;

  const atributos = {
    enlace
  };

  $: (target => {
    atributos["target"] = !!target ? "_blank" : "";
  })(blank);
</script>

<style>
  a {
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
  a :global(span) {
    cursor: pointer;
    color: var(--theme-textos-enlaces-color);
    font-family: var(--theme-textos-enlaces-familia);
    font-size: var(--theme-textos-enlaces-tamanno);
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  a:hover {
    color: var(--theme-textos-enlaces-hover);
  }
  a :global(span:hover) {
    color: inherit;
  }
</style>

<a href={enlace} {...atributos}>
  <Bloque {contenido} {texto} />
</a>
