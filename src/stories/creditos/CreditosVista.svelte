<script>
  import Creditos from "./Creditos.svelte";

  export let titulo;
  export let nivelTitulo;
  export let colorTitulo;
  export let textoAutor;
</script>

<Creditos {titulo} {textoAutor} {nivelTitulo} {colorTitulo} />