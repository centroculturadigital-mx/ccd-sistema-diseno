<script>
  import MyButton from "./Boton.svelte";

  export let buttonText;
  export let rounded;

</script>

<MyButton {rounded} {buttonText} on:click />
