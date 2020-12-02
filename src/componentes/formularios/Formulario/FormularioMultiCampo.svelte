<script>
    
    import Formulario from "./Formulario.svelte";

    export let error
    // export let enviar
    export let cambiar
    
    export let campos
    export let pasos

    let respuesta


const cambiarAccion = datos => {
    // console.log("cambiarAccion", datos);
    // campos.find(campos.nombre=)
}


let enviarConTiempo = datos => {

    
    setTimeout(() => {
        
        console.log("enviar", datos)
        
        respuesta = "Enviado!"
        
    }, 1500)

}

</script>


<Formulario enviar={enviarConTiempo} cambiar={cambiarAccion} {respuesta} {campos} {pasos}/>