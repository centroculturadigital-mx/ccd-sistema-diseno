<script>
  import Bloque from "../../../componentes/Bloque/Bloque.svelte";
  export let elemento;

  $: subElementos = Array.isArray(elemento.elementos) ? elemento.elementos : [];

</script>

<li>
  {#if Array.isArray(subElementos) && subElementos.length > 0}
    <button>></button>
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
