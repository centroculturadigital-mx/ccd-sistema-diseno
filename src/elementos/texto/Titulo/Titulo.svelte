<script>
  import Bloque from "../../../componentes/Bloque/Bloque.svelte";
  import Titulo1 from "../../../elementos/texto/Titulo/Titulo1.svelte";
  import Titulo2 from "../../../elementos/texto/Titulo/Titulo2.svelte";
  import Titulo3 from "../../../elementos/texto/Titulo/Titulo3.svelte";
  import Titulo4 from "../../../elementos/texto/Titulo/Titulo4.svelte";
  import Titulo5 from "../../../elementos/texto/Titulo/Titulo5.svelte";
  import Titulo6 from "../../../elementos/texto/Titulo/Titulo6.svelte";

  export let nivel;
  export let color = "#000";
  export let texto;
  export let contenido;
  export let data;

  $: atributos = atributosGenerar(data, color);

  const atributosGenerar = (data, color) => {
    const nuevosAtributos = typeof data == "object" ? { ...data } : {};
    if (!!color) {
      nuevosAtributos["style"] = `color: ${color}`;
    }
    return nuevosAtributos;
  };

  const titulares = [Titulo1, Titulo2, Titulo3, Titulo4, Titulo5, Titulo6];

  $: elemento =
    parseInt(nivel) >= 1 && parseInt(nivel) < 6
      ? titulares[nivel - 1]
      : Titulo3;
</script>

<svelte:component this={elemento} data={atributos}>
  <Bloque {contenido} {texto} />
</svelte:component>
