<script>

    import Carrusel from "./Carrusel"

    const elementos = [
        {
            a: "b"
        },
        {
            a: "b"
        }
    ]

    let carruseles = new Array(3);

</script>


{#each carruseles as carrusel}
    <Carrusel {elementos}/>
{/each}