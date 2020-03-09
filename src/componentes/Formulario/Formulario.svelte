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

{#if Array.isArray(campos)}
    {#if campos.length > 0}


        <form on:submit|preventDefault={enviarFuncion}>

            {#each campos as campo,i ("formulario_campo_"+i) }
                
                <Campo ...campo/>

            {/each}
            
            <input type="submit"/>

        </form>

    {/if}
{/if}