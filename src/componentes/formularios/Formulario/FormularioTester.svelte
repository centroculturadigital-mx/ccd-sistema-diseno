<script>
    
    import Formulario from "./Formulario.svelte";

    export let error
    // export let enviar
    export let cambiar
    
    export let campos
    export let pasos
    export let datos
    export let configuracion

    let respuesta



let enviarConTiempo = datos => {

    
    setTimeout(() => {
        
        console.log("enviar", datos)
        
        respuesta = "Enviado!"
        
    }, 1500)

}

</script>


<Formulario enviar={enviarConTiempo} {cambiar} {respuesta} {datos} {campos} {pasos} {configuracion}/>