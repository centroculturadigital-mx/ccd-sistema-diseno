<script>
  export let textoPlaceholder;
  export let opciones;
  export let status;
  export let nombre;
  export let cambiar;
  export let vacioPermitido = true;

  export let value;

  $: clases = "Selector" + (status ? " " + status : "");

  const actualizarValor = v => {
    value = v;
  };

  let valorLocal;

  $: actualizarValor(value);
</script>

<style>
  .Selector {
    background-color: var(--theme-campos-fondo);
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    border: 1px solid var(--theme-campos-borde);
    border-radius: var(--theme-campos-esquinas);
    padding: calc(var(--theme-campos-espacio) * 1.67);
    margin-top: var(--theme-espaciados-margin);
    margin-bottom: var(--theme-espaciados-margin);
    min-height: 2rem;
  }

  .Selector:focus,
  .Selector:active {
    border-color: var(--theme-campos-activo);
    outline: none;
  }

  .Selector.error {
    border-color: var(--theme-alertas-error);
  }

  .Selector.ok {
    outline: 1px solid var(--theme-alertas-exito);
  }
</style>

<select
  class={clases}
  name={nombre}
  on:change={e => cambiar(e.target.value)}
  bind:value={valorLocal}>

  {#if !!opciones}
    <!-- primer elemento de placeholder -->
    <option
      class="placeholder"
      selected
      disabled={vacioPermitido ? false : true}>
      {#if !!textoPlaceholder}{textoPlaceholder}{/if}
    </option>
    <!-- Si elementos que monstrar se popula la lista de opciones -->
    {#each opciones as opcion}
      <option value={opcion.valor} selected={opcion.valor === value}>
        {opcion.texto}
      </option>
    {/each}
  {/if}

</select>
