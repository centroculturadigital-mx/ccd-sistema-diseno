<script>
    import ListaComponentes from '../ListaComponentes/ListaComponentes'
    import Parrafo from '../../../elementos/texto/Parrafo/Parrafo'

    export let layout = "flex"

    $: layoutActual = (
        layout == "flex" || layout == "grid"
    ) ? layout: "flex"

    export let elementos;
    export let mensajeVacio

</script>

<style>

    
    .Reticula.flex :global( .ListaComponentes > ul ) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
    }

    .Reticula.grid :global( .ListaComponentes > ul ) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2rem;
        padding: 0;
    }


</style>

<div class={ ("Reticula "+layout) }>
    <ListaComponentes {elementos} {mensajeVacio}/>
</div>

