<script>
  import Boton from "./Boton.svelte";

  export let texto;
  export let color;
  export let colorBG;
  export let paddingX;
  export let radius;
</script>

<Boton {texto} {color} {colorBG} {paddingX} {radius} on:click />
