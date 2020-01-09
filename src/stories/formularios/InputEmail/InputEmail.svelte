<script>
  export let textoPlaceholder;
  export let textoLabel;

  let valor;
  let color;

  const validaCorreo = e => {
    let evento = e.target.value;
    let arroba = new RegExp('@');
    let punto = new RegExp('[.]');
    let arrobaEstado = arroba.test(evento);
    let puntoEstado = punto.test(evento);

    if (arrobaEstado != false && puntoEstado != false) {
      valor = true;
      color = "ok";
    } else {
      valor = false;
      color = "error";
    }
    if (evento == "") {
      valor = true;
      color = "";
    }
  };
</script>

<label>
  {#if !!textoLabel}{textoLabel}{/if}
  <input
    on:keyup={validaCorreo}
    class={color}
    type="email"
    name="email"
    placeholder={textoPlaceholder} />
</label>
<div id="mensaje" class={color}>
  {#if valor === false}
    <p>Solo Correos eletrónicos.</p>
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
  p { 
    font-size: 0.75rem;
  }
</style>