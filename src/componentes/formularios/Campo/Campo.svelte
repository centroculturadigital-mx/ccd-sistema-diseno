<script>
  import Input from "../../../elementos/inputs/Input/Input.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let etiqueta;
  export let nombre;
  export let requerido;
  export let tipo;
  export let placeholder;
  export let valor;
  export let error;
  export let cambiar;
  export let status;
  export let opciones;
</script>

<style>
  label,
  label > * {
    width: 100%;
    max-width: 15rem;
    height: auto;
    display: flex;
    flex-direction: column;
    /*  */
    font-size: calc( var(--theme-textos-parrafo-tamanno) / 1.5);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    padding: var(--theme-campos-espacio);
  }
  label :global(p span) {
    color: var(--theme-alertas-error);
  }
</style>

{#if !!tipo}
  <label>

    {#if !!etiqueta}{etiqueta}{/if}
    {#if requerido}
      <span>*requerido</span>
    {/if}

    <Input
      {tipo}
      {nombre}
      {valor}
      {placeholder}
      {status}
      {cambiar}
      {opciones} />
    <!-- on:keyup= -->
    {#if error instanceof Error}
      <Parrafo texto={error.message} />
    {/if}

  </label>
{/if}
