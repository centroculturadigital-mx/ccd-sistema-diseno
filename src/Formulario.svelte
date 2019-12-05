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
  .error {
    border: 1px solid red;
  }
  .ok {
    border: 1px solid green;
  }
  input {
    border: 1px solid gray;
    border-radius: 0.25rem;
  }
</style>

<section>
    <h3>Validación de 1 input texto</h3>
  <form action="">
    <label for="text">
      <input
        on:keyup={validaDato}
        id="text"
        class={color}
        type="text"
        name="text"
        placeholder={final}/>
      {#if !!valor}
      <!-- valor correcto -->
        <div>
          <p>Gracias!</p>
        </div>
      {:else if valor === false}
      <!-- valor error -->
        <div>
          <p>Valor no válido</p>
        </div>
      {:else if !valor || valor === ''}
      <!-- valor default -->
        <div>
          <small>Escribe: {final}</small>
        </div>
      {/if}
    </label>

  </form>

</section>
