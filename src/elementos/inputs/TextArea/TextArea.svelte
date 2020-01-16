<script>
  export let textoPlaceholder;
  export let ancho;
  export let altura;
  let valor;

const validaEntrada = e => {
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

<textarea
  name="text-area"
  on:keyup={validaEntrada}
  placeholder={textoPlaceholder}
  style="width:{ancho};height:{altura};"></textarea>



