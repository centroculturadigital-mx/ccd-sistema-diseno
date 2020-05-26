<script> 
    export let numero
    export let activo
    $: clases = activo ? "activo" : ""
</script>

<style>
  button{
      background-color: var(--theme-botones-primario-fondo);
      color: var(--theme-botones-primario-color);
      font-family: var(--theme-botones-primario-familia);
      cursor: pointer;
      size: var(--theme-tipografia-tamannos-xxl);
      padding: 2rem;
      border-radius: 50%;
      border-style: none;
  }

   button:hover {
    background-color: var(--theme-botones-primario-hover);
    border-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-secundario-color);
  }
  button:focus,
  button:visited,
  button:active {
    background-color: var(--theme-botones-primario-activo);
    border-color:  var(--theme-botones-primario-activo);
    color: var(--theme-botones-primario-claro);
  }

  /*.activo {
 background-color: #000;
 color: #fff;

  }*/
</style>

<button class={clases} on:click>
    {numero}
</button>