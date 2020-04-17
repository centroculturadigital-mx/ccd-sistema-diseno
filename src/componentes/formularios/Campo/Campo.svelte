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



</script>

<style>
  label, label > * {
    
    width: 100%;
    max-width: 15rem;
    height: auto;
    display: flex;
    flex-direction: column;

  }
  
</style>

{#if !! tipo}
  <label>
    
    {#if !!etiqueta}{etiqueta}{/if}
    {#if requerido }
      <span>*requerido</span>
    {/if}
    
    <Input
    {tipo}
    {nombre}
    valor={valor}
    {placeholder} on:keyup
    {cambiar}
    {status}
    />
    {#if error instanceof Error }
      <Parrafo texto={error.message} color="#f00"/>
    {/if}

  </label>
{/if}
