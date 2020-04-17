<script>
  import Input from "../../elementos/inputs/Input/Input.svelte";
  import Parrafo from "../../elementos/texto/Parrafo/Parrafo.svelte";

  export let etiqueta;
  export let tipo;
  export let placeholder;
  export let valor;
  export let error;
  export let validacion;
  export let status;


  $: console.log("valor",valor);
  $: console.log("error_____?????",error);
  


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
    
    <Input
    {tipo}
    valor={valor}
    {placeholder} on:keyup
    {validacion}
    {status}
    />
    {#if error instanceof Error }
      <Parrafo texto={error.message} color="#f00"/>
    {/if}

  </label>
{/if}
