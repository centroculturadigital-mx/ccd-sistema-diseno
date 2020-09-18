<script>

    import Chat from '../../../componentes/Mensajeria/Chat/Chat.svelte';


    export let mensajes
    export let reacciones
    export let enviar = mensaje => console.log("Enviaste mensaje", mensaje)

    const mensajesMostrar = []
    const reaccionesMostrar = []


    const simular = ()=>{
        if( mensajes.length > mensajesMostrar.length ) {
            mensajesMostrar.push( mensajes[ Math.max(0,mensajesMostrar.length-1) ] )
            mensajesMostrar = mensajesMostrar
            setTimeout(simular,100)
        }
    }
    
    setTimeout(simular,1000)

</script>



<Chat mensajes={mensajesMostrar} reacciones={reaccionesMostrar} {enviar}/>