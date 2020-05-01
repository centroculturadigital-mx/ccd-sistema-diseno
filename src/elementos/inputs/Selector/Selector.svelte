<script>
  export let textoPlaceholder;
  export let opciones;
  export let status;
  export let nombre;
  export let cambiar;
  export let vacioPermitido=true;

  export let value

  $: clases = 'Selector' + (status ? " " + status : '' );

  const actualizarValor = v => {
    value = v
  }

  let valorLocal

  $: actualizarValor(value)

  
</script>

<style>
  .Selector {
    border: 1px solid gray;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .Selector:focus,
  .Selector:active {
    border-color: #000;   
    outline: none; 
  }

  .Selector.error {
    border-color: red;    
  }

  .Selector.ok {
    outline: 1px solid green;
  }
</style>

    <select
      class={clases}
      name={nombre}
      on:change={e=>cambiar(e.target.value)}
      bind:value={valorLocal}
    >

      {#if !!opciones}
        <!-- primer elemento de placeholder -->
          <option
          class="placeholder"
          selected
          disabled={ vacioPermitido ? false : true }
          >
            {#if !!textoPlaceholder}
                {textoPlaceholder}
            {/if}
          </option>
        <!-- Si elementos que monstrar se popula la lista de opciones -->
        {#each opciones as opcion}
          <option
          value={opcion.valor}
          selected={ opcion.valor === valorLocal }>
            {opcion.texto} { valorLocal }
          </option>
        {/each}
      {/if}

    </select>
