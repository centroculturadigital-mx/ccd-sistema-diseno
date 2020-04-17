<script>
    
    import Formulario from "./Formulario.svelte";

    export let error
    


    let enviar = e => {

        respuesta = "Enviando..."

        setTimeout(()=>{

            if( error ) {
                respuesta = new Error(error)
            } else {
                respuesta = "El formulario se ha enviado con éxito"
            }

        }, 400 )
    }

    let respuesta

    export let campos

</script>


<Formulario {enviar} {respuesta} {campos}/>