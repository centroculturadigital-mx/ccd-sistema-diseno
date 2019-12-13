<script>
  export let textoValidado;
  export let textoLabel;
  let valor;
  let color;
  const validaDato = e => {
    
    let textoEvalua = textoValidado.toLowerCase();
    let evento = e.target.value.toLowerCase();

    if (evento === textoEvalua) {
      valor = true;
      color = "ok";
    } else if (evento === "" || evento === 0) {
      valor = 0;
      color = "";
    } else {
      valor = false;
      color = "error";
    }
  };
</script>

<label>
  {textoLabel}
  <input
    on:keyup={validaDato}
    id="text"
    class={color}
    type="text"
    name="text"
    placeholder={textoValidado} />
</label>
<div id="mensaje" class={color}>
  {#if !!valor}
    <!-- valor correcto -->
    <p>Gracias!</p>
  {:else if valor === false}
    <!-- valor error -->
    <p>Valor no válido</p>
  {:else if !valor || valor === ''}
    <!-- valor default -->
    <p>Escribe: {textoValidado}</p>
  {/if}
</div>

<style>
  input {
    border: 1px solid gray;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .error {
    border: 1px solid red;
    color: red;
  }
  .ok {
    border: 1px solid green;
    color: green;
  }
  #mensaje {
    border: none;
  }
</style>
