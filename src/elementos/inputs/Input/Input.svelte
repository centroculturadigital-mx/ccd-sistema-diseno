<script>
  export let placeholder;
  export let tipo = "text";

  export let valor;
  export let validacion;

  export let status;

  $: clases = 'Input' + (status ? " " + status : '' );

  $: seleccionarTipo(tipo)

  const seleccionarTipo = (tipo) => {
    switch( tipo ) {
      case "texto":
        tipo = "text"
        break;
      case "numero":
        tipo = "number"
        break;
      case "contrasenna":
        tipo = "password"
        break;
      case "email":
        tipo = "email"
        break;
    }
  }

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


{#if tipo == "text"}

  <input
    on:keyup={validacion}
    class={clases}
    type="text" 
    {placeholder}
    bind:value={valor}
  />

{/if}

{#if tipo == "email"}

  <input
    on:keyup={validacion}
    class={clases}
    type="email" 
    {placeholder}
    bind:value={valor}
  />

{/if}

{#if tipo == "textarea"}

  <textarea
    on:keyup={validacion}
    class={clases}
    {placeholder}
    bind:value={valor}
  />

{/if}

{#if tipo == "numero"}

  <input
    on:keyup={validacion}
    class={clases}
    type="number" 
    {placeholder}
    bind:value={valor}
  />

{/if}

{#if tipo == "archivo"}

  <input
    on:keyup={validacion}
    class={clases}
    type="file" 
    {placeholder}
    bind:value={valor}
  />

{/if}