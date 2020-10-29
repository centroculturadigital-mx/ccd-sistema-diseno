<script>

    import Campo from "./Campo"

    export let campo

    export let valor

    setTimeout(() => {
        valor = "hashid-1"
        setTimeout(() => {
            valor = "hashid-3"
        }, 1500);
    }, 1500);

</script>


<Campo {...campo} {valor}/>