<script>
  import Input from "../../elementos/inputs/Input/Input.svelte";

  export let etiqueta;
  export let tipo;
  export let placeholder;

</script>

<style>
  label {
    width: 100%;
    height: auto;
  }
</style>

{#if !! tipo}
  <label>
    {#if !!etiqueta}{etiqueta}{/if}
    <Input {tipo} {placeholder} on:keyup/>
  </label>
{/if}
