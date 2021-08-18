<script>
  import Bloque from "../../../componentes/Bloque/Bloque.svelte";

  export let enlace;
  export let texto;
  export let contenido;
  export let blank;
  export let nuevaPestanna;

  $: nuevaPestanna = typeof blank != "undefined" ? blank : nuevaPestanna;

  const atributos = {
    enlace
  };

  $: (nuevaPestanna => {
    if( !! nuevaPestanna ) {
      atributos["target"] = "_blank";
    }
  })(nuevaPestanna);
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

<a class="Enlace" href={enlace} {...atributos}>
  <Bloque {contenido} {texto} />
</a>
