 <script>
  import Bloque from "../../../componentes/Bloque/Bloque.svelte"; 
  import Icono from "../../../elementos/Icono/Icono"; 
  export let elemento={};
  export let colapsado=false;
  export let accion=console.log("una accion");
  let iconoExpandido="derecha";
  let iconoColapsado="abajo";

  $: subElementos = Array.isArray(elemento.elementos) ? elemento.elementos : [];
  
  
  const activar = () => {
    colapsado=!colapsado
    accion()
  }
</script>

<style>

.flecha{
  background-color: var(--theme-tarjetas-fondo);
 /* border-style: none;
  width: var(--theme-tamannos-lg);*/ 
}
li {
  
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--theme-textos-parrafo-color);
}

.elementoLista :global(.iconoContenedor img){
  height: 0.9rem ;
  
}

span
{
  display: inline-block;
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
        <svelte:self elemento={subElemento} />
      {/each}
    </ul>
  {/if}

</li>