<script>
  import Boton from "./Boton.svelte";

  export let buttonText;
  export let rounded;

</script>

<Boton {rounded} {buttonText} on:click />
