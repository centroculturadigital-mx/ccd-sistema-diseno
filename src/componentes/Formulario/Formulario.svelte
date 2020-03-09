<script>
  import Campo from "../Campo/Campo.svelte";

  export let campos;
  export let enviar;

  const enviarFuncion = ( evento ) => {
      console.log("enviar");
      if( typeof enviar == "function" ) {
          enviar( evento )
      }
  }

</script>

<style>
  form {
    width: 100%;
    height: auto;
  }
</style>


<form on:submit|preventDefault={enviarFuncion}>

    {#if Array.isArray(campos)}
        {#each campos as campo,i ("formulario_campo_"+i) }
            
            <Campo ...campo/>

        {/each}
    {/if}

    <input type="submit"/>

</form>