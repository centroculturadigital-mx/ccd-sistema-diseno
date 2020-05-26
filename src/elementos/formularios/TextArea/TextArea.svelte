<script>
  export let ejemplo;

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
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    border: 1px solid var(--theme-campos-borde);
    border-radius: var(--theme-campos-esquinas);
    padding: var(--theme-campos-espacio);
    margin-top: calc(var(--theme-espaciados-margen) / 2 );
    margin-bottom: var(--theme-espaciados-margen);
    min-height: 8rem;
  }
</style>

<textarea
  name="text-area"
  on:keyup={validaEntrada}
  placeholder={ejemplo}>
  </textarea>



