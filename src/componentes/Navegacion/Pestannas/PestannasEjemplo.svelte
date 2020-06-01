<script>
  import Pestannas from "./Pestannas.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let opciones = [];
  export let actual = 0;
  export let accion;
  export let textos = ["texto 1", "texto 2", "texto 3"];

  let texto;

  accion = (tab) => {
    console.log("Accion!", tab);
    texto = textos[tab];
  };
</script>

<section class="PestannasEjemplo">
  <Pestannas {opciones} {actual} {accion} />
  <section class="contenedorTextos">

    <Parrafo {texto} />

  </section>
</section>
