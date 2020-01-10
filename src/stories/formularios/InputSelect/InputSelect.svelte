<script>
  export let textoPlaceholder;
  export let textoLabel;
  export let opciones;
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
  .placeholder {
    color: #9fa7a7;
  }
</style>

<div class="custom-select">

  <label>

    {#if !!textoLabel}{textoLabel}{/if}

    <select>

      {#if !!opciones}
        <!-- primer elemento de placeholder -->
        {#if !!textoPlaceholder}
          <option class="placeholder" disabled selected>
            {textoPlaceholder}
          </option>
        {/if}
        <!-- Si elementos que monstrar se popula la lista de opciones -->
        {#each opciones as opcion}
          <option value={opcion}>{opcion}</option>
        {/each}
      {/if}

    </select>

  </label>

</div>
