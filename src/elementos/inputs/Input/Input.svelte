<script>
  export let placeholder;
  export let type = "text";

  let name = type;

  let valor;
  let color;

  const validaEntrada = e => {
    let caracteresEspeciales = new RegExp("[!@#$%^&*()+={};':|,.<>/?]"); //solo acepta guion medio y bajo
    let evento = e.target.value;
    let validado = caracteresEspeciales.test(evento);

    if (validado != true) {
      valor = false;
      color = "ok";
    } else {
      valor = true;
      color = "error";
    }
    if (evento == "") {
      valor = false;
      color = "";
    }
  };
</script>

<style>
  input {
    border: 1px solid gray;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    min-height: 2rem;
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

<input
  on:keyup={validaEntrada}
  id="text"
  class={color}
  {type}
  {name}
  {placeholder} />
<div id="mensaje" class={color}>
  {#if valor === true}
    <p>No acepta caracteres especiales.</p>
  {/if}
</div>
