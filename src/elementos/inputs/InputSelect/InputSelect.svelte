<script>
  export let textoPlaceholder;
  export let opciones;
  export let accion;

  const ejecutarAccion = e => {
    if(typeof accion == "function") {
      accion(e)
    }
  }
  
</script>

<style>
  div {
    width: 100%;
  }
  select {
    border: 1px solid gray;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>

    <select on:change={ejecutarAccion}>

      {#if !!opciones}
        <!-- primer elemento de placeholder -->
        {#if !!textoPlaceholder}
          <option class="placeholder" disabled selected>
            {textoPlaceholder}
          </option>
        {/if}
        <!-- Si elementos que monstrar se popula la lista de opciones -->
        {#each opciones as opcion}
          <option value={opcion.valor}>{opcion.texto}</option>
        {/each}
      {/if}

    </select>
