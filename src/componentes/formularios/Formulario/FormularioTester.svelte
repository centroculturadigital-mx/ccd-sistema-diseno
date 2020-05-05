<script>
    
    import Formulario from "./Formulario.svelte";

    export let error
    export let enviar
    export let cambiar
    



    let respuesta

    export let campos

</script>


<Formulario {enviar} {cambiar} {respuesta} {campos}/>