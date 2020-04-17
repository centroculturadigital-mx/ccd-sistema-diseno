<script>
  export let placeholder;
  export let tipo = "texto";

  export let valor;
  export let cambiar;
  export let nombre;

  export let status;

  let valorLocal
  
  // $: (typeof cambiar == "function" && !! valorLocal) ? cambiar(valorLocal) : null
  
  // $: cambiarValorDesdeFuera( valor )

  $: clases = 'Input' + (status ? " " + status : '' );

  $: seleccionarTipo(tipo)

  // const cambiarValorDesdeFuera = nuevoValor => {
  //   valorLocal = nuevoValor
  // }
  
  const seleccionarTipo = (tipo) => {
    switch( tipo ) {
      case "texto":
        tipo = "texto"
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


{#if tipo == "texto"}

  <input
    class={clases}
    on:keyup={e=>cambiar(e.target.value)}
    name={nombre}
    type="text" 
    {placeholder}
    bind:value={valorLocal}
  />

{/if}

{#if tipo == "email"}

  <input
    class={clases}
    on:keyup={e=>cambiar(e.target.value)}
    name={nombre}
    type="email" 
    {placeholder}
    bind:value={valorLocal}
  />

{/if}

{#if tipo == "textarea"}

  <textarea
    class={clases}
    on:keyup={e=>cambiar(e.target.value)}
    name={nombre}
    {placeholder}
    bind:value={valorLocal}
  ></textarea>

{/if}

{#if tipo == "numero"}

  <input
    class={clases}
    on:keyup={e=>cambiar(e.target.value)}
    name={nombre}
    type="number" 
    {placeholder}
    bind:value={valorLocal}
  />

{/if}

{#if tipo == "archivo"}

  <input
    class={clases}
    on:keyup={e=>cambiar(e.target.value)}
    name={nombre}
    type="file" 
    {placeholder}
    bind:value={valorLocal}
  />

{/if}