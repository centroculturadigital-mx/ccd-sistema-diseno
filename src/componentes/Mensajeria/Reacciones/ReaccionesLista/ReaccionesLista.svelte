<script>
  import { fade } from "svelte/transition";
  import Icono from "../../../../elementos/Icono/Icono";

  export let reacciones;
  export let estado;

  const cierra = () => {
      estado = false;
  }
</script>

<style>
.ReaccionesLista {
    position: absolute;
    top: 2rem;
    right: 0rem;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    background-color: var(--theme-tarjetas-fondo);
    padding: var(--theme-espaciados-padding);
    margin: 0;
    box-sizing: border-box;
}
li {
    margin: 0 var(--theme-espaciados-margen);
}
li :global(img) {
   height: 1.5rem;
   width: 1.5rem;
}
li:hover {
    opacity: 0.75;
}

</style>

{#if !!estado}
  <ul class="ReaccionesLista" transition:fade>

    {#each reacciones as reaccion, i ('reaccion_' + i)}
      <li><Icono icono={reaccion.icono} on:click={cierra}/></li>
    {/each}
  </ul>
{/if}
