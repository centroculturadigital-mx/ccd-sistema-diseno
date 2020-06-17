<script>


export let reacciones = []
</script>


{#each reacciones as reaccions, i ('reaccion_' + i)}
Hola soy mensaje reacciones
{/each}