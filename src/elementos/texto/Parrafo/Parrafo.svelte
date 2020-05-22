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

<p {...atributos}>
  <Bloque {contenido} {texto} tamanno={estilos.tamanno} color={estilos.color} />
</p>
