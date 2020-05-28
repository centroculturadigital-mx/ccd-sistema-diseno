<script>
    import Carrusel from "./Carrusel"

    export let carruseles;

</script>


{#each carruseles as carrusel}
    <Carrusel elementos={carrusel}/>
{/each}