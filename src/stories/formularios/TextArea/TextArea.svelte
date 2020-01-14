<script>
  export let textoPlaceholder;
  export let textoLabel;
  let valor;

const validaEventoEntrada = e => {
  let evento = e.target.value;
  if  (evento == "") {
    valor = false;
    color = "";
  }
};

</script>

<style>
 textarea {
    border: 1px solid gray;
    border-radius: 0.5rem;
    width: 18.5rem;
    height: 10.5rem;
    padding: 0.75rem;
  }
  label {
    display: flex;
    justify-content: flex-start;
    padding: 0.25rem 0.5rem;
  }
</style>

<label for="nombre-area">
  {#if !!textoLabel}{textoLabel}{/if}
</label>
<textarea
  on:keyup={validaEventoEntrada}
  name="area-texto"
  id="texto"
  placeholder={textoPlaceholder}></textarea>



