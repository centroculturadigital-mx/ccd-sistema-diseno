<script>

  import Selector from "../Selector/Selector.svelte";

  export let ejemplo="Introduce un valor";
  export let tipo = "texto";

  // propiedades
  export let nombre="";
  export let opciones=[];
  export let estado="";

  // propiedades para lógica
  export let valor;
  export let cambiar;



  let valorLocal

  $: valorActualizar(valor)

  const valorActualizar = v => {
    valorLocal = v
  }

  
  // $: (typeof cambiar == "function" && !! valorLocal) ? cambiar(valorLocal) : null
  
  // $: cambiarValorDesdeFuera( valor )

  $: clases = 'Input' + (estado ? " " + estado : '' );

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
    placeholder={ejemplo}
    bind:value={valorLocal}
  />

{/if}

{#if tipo == "contrasenna"}

  <input
    class={clases}
    on:keyup={e=>cambiar(e.target.value)}
    name={nombre}
    type="password" 
    placeholder={ejemplo}
    bind:value={valorLocal}
  />

{/if}

{#if tipo == "email"}

  <input
    class={clases}
    on:keyup={e=>cambiar(e.target.value)}
    name={nombre}
    type="email" 
    placeholder={ejemplo}
    bind:value={valorLocal}
  />

{/if}


{#if tipo == "numero"}

  <input
    class={clases}
    on:keyup={e=>cambiar(e.target.value)}
    name={nombre}
    type="number" 
    placeholder={ejemplo}
    bind:value={valorLocal}
  />

{/if}

{#if tipo == "archivo"}

  <input
    class={clases}
    on:keyup={e=>cambiar(e.target.value)}
    name={nombre}
    type="file" 
    placeholder={ejemplo}
    bind:value={valorLocal}
  />

{/if}

{#if tipo == "textarea"}

  <textarea
    class={clases}
    on:keyup={e=>cambiar(e.target.value)}
    name={nombre}
    placeholder={ejemplo}
    bind:value={valorLocal}
  ></textarea>

{/if}

{#if tipo == "selector" && Array.isArray(opciones) }

  <Selector
    bind:value={valorLocal}
    {nombre}
    {opciones}
    {estado}
    {cambiar}
  />

{/if}
