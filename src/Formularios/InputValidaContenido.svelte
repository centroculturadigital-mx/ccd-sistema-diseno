<script>
  let valor;
  let color;
  let final = "Hola mundo";

  const validaDato = e => {
    let evento = e.target.value;

    if (evento === final) {
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

<style>
  input {
    border: 1px solid gray;
    border-radius: 0.25rem;
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

<section>
  <h3>Validación de 1 input texto</h3>
  <form action="">
    <label>
      <input
        on:keyup={validaDato}
        id="text"
        class={color}
        type="text"
        name="text"
        placeholder={final} />
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
        <small>Escribe: {final}</small>
      {/if}
    </div>

  </form>

</section>
