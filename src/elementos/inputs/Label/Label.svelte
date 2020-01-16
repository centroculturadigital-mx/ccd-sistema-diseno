<script>
  export let input;
  export let textoLabel;
</script>
<style>
label {
  width: 100%;
}
</style>
<label>
  {#if !!textoLabel}{textoLabel}{/if}
  {#if !!input}{input}{/if}
</label>
