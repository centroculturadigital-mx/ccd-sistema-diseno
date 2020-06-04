<script>
  import Bloque from "../../../componentes/Bloque/Bloque.svelte"; 
  import Icono from "../../../elementos/Icono/Icono"; 
  export let elemento;
  export let icono;


  $: subElementos = Array.isArray(elemento.elementos) ? elemento.elementos : [];

</script>

<style>

button{
 
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
  {#if Array.isArray(subElementos) && subElementos.length > 0}
  <span ><Icono icono= {'derecha'} /></span>

  {/if}
  <a href={elemento.enlace}>{elemento.texto}</a>
  {#if Array.isArray(subElementos) && subElementos.length > 0}
    <ul>
      {#each subElementos as subElemento}
        <svelte:self elemento={subElemento} />
      {/each}
    </ul>
  {/if}
</li>
