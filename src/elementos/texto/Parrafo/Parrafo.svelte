<script>
  import Bloque from "../../../componentes/Bloque/Bloque.svelte";

  export let texto;
  export let contenido;
  export let data;

  export let estilos = {
    tamanno: "",
    color: ""
  };

  $: atributos =
    typeof data == "object"
      ? data
      : {
          // style: `font-size: ${tamanno}`
        };
</script>

<style>
  p :global(span) {
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    color: var(--theme-textos-parrafo-color);
    font-weight: var(--theme-textos-parrafo-peso);
  }
</style>

<p {...atributos}>
  <Bloque {contenido} {texto} tamanno={estilos.tamanno} color={estilos.color} />
</p>
