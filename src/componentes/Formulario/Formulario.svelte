<script>
  import Campo from "../Campo/Campo.svelte";

  export let campos;
  export let enviar;

  const enviarFuncion = () => {
      console.log("enviar");
      if( typeof enviar == "function" ) {
          enviar()
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

    {#each campos as campo,i ("formulario_campo_"+i) }
        
        <Campo ...campo/>
        
    {/each}

    <input type="submit"/>

</form>