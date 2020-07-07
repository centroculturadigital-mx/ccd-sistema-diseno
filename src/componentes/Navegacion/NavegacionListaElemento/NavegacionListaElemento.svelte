 <script>
  import Bloque from "../../../componentes/Bloque/Bloque.svelte"; 
  import Icono from "../../../elementos/Icono/Icono"; 
  export let elemento={};
  export let colapsado=false;
  export let accion=()=>console.log("una accion");
  let iconoExpandido="derecha";
  let iconoColapsado="abajo";

  $: subElementos = Array.isArray(elemento.elementos) ? elemento.elementos : [];
  
  
  const activar = () => {
    colapsado=!colapsado
    accion()
  }
</script>

<style>
.elementoLista :global( button){
  border-style: none;
  padding-bottom: var(--theme-tamannos-sm);
  padding-top: var(--theme-tamannos-sm);
  background-color: var(--theme-tarjetas-transparente);
}

.flecha{
  background-color: var(--theme-tarjetas-fondo);
}

.flecha :global(.iconoContenedor img){
  height:var(--theme-tamannos-sm) !important;
  margin-right: 0.5rem;
  }

span{
  display: inline-block;
  font-size: var(--theme-tamannos-md);
  font-family: var(--theme-botones-primario-familia);
  color: var(--theme-textos-parrafo-neutro); 
}

li {
  list-style: none;
}

ul {
 list-style: none;  
}

</style>

<li class="elementoLista">
  <button on:click={activar}>
    {#if Array.isArray(subElementos) && subElementos.length > 0}
    <span class="flecha">
      <Icono icono={'derecha'}/>
    </span>
    {/if}
    <span>
      {elemento.texto}
    </span>
  </button>

  {#if !colapsado && Array.isArray(subElementos) && subElementos.length > 0}
    <ul>
      {#each subElementos as subElemento}
        <svelte:self elemento={subElemento} {accion}/>
      {/each}
    </ul>
  {/if}

</li>