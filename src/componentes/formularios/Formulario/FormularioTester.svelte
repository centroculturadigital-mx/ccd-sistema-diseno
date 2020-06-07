<script>
    
    import Formulario from "./Formulario.svelte";

    export let error
    export let enviar
    export let cambiar
    
    export let campos

    let respuesta


</script>


<Formulario {enviar} {cambiar} {respuesta} {campos}/>