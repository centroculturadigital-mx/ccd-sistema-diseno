<script>
  export let textoPlaceholder;
  export let textoLabel;
  export let ancho;
  export let altura;
  let valor;

const validaEventoEntrada = e => {
  let evento = e.target.value;
  if (evento == "") {
    valor = false;
    color = "";
  }
};

</script>

<style>
 textarea {
    width: 18.5rem;
    height: 10.5rem;
    border: 1px solid gray;
    border-radius: 0.5rem;
    padding: 0.75rem;
    resize: none;
  }
  label {
    display: flex;
    justify-content: flex-start;
    padding: 0.25rem 0.5rem;
  }
</style>

<label for="nombre-area">
  {#if !!textoLabel}
    {textoLabel}
  {/if}
</label>
<textarea
  name="area-texto"
  id="texto"
  on:keyup={validaEventoEntrada}
  placeholder={textoPlaceholder}
  style="width:{ancho};height:{altura};"></textarea>



