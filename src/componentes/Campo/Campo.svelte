<script>
  import Input from "../../elementos/inputs/Input/Input.svelte";

  export let textoLabel;
  export let type;
  export let placeholder;

</script>

<style>
  label {
    width: 100%;
    height: auto;
  }
</style>

<label>
  {#if !!textoLabel}{textoLabel}{/if}
  <Input {type} {placeholder} on:keyup/>
</label>
