<script>


  import { onMount } from "svelte"

  import scrollTo from "../../../funciones/scrollTo"

  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import ChatMensaje from "./ChatMensaje/ChatMensaje.svelte";
  import ChatEntrada from "./ChatEntrada/ChatEntrada.svelte";

  export let reacciones = [];
  export let mensajes = [];
  export let enviar = () => console.log("enviar");
  export let enfocar = () => console.log("enfocar");
  export let reaccionar = () => console.log("reaccionar");
  export let objetoAccion
  
  export let activo = false
  export let textoActivo = "Enviar mensaje"
  export let textoInactivo = "Inicia sesión para chatear"

  export let anonimoPermitir = false


  const scrollearUltimo = () => {
    if(typeof document != "undefined") {

      let msjs = document.querySelector(".ChatMensajes")
      let msj = document.querySelector(".ChatMensaje:last-child")

      msj && scrollTo( msjs, msjs.scrollHeight)

    }
  }
  
  const actualizar = mensajes => {

    hayNuevos = true

    setTimeout(()=>{
      
      if( deberiaScrollear ) {
        scrollearUltimo()
      }
      
    })
  }


  $: actualizar(mensajes)



  const reaccionarAccion = (mensaje) => {
    if (mensaje && typeof reaccionar == "function") {
      reaccionar(mensaje);
    }
  };
  const enviarAccion = (mensaje) => {
    if (mensaje && typeof enviar == "function") {
      enviar(mensaje);
    }
  };


  $: deberiaScrollear = false
  
  let hayNuevos = false

  onMount(()=>{

    if(typeof document != "undefined") {

      let msjs = document.querySelector(".ChatMensajes")

      msjs.addEventListener("scroll", ()=>{
        deberiaScrollear = msjs.scrollTop  + 100 >= msjs.scrollHeight - msjs.clientHeight        
      })

    }

  })







</script>

<style>
  .Chat {
    display: flex;
    flex-direction: column;
    background-color: var(--theme-colores-fondo);
    border-width: 0.05rem;
    border-color: var(--theme-bordes-neutro);
    border-style: solid;
    border-radius: 0.2rem;
    height: 100%;
    max-height: 80vh;
    width: 100%;
  }
  .ChatMensajes {
    padding: var(--theme-espaciados-padding);
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

.Nuevos {
  position: absolute;
  right: 0;
  bottom: -3rem;
}

.Chat {
  position: relative;
  max-width: 40rem;
}

</style>


<section class="Chat">
  {#if hayNuevos && ! deberiaScrollear} 
    <div class="Nuevos">
      <Boton texto="Nuevos" variante="COMPACTO" click={()=>{
        scrollearUltimo()
        setTimeout(()=>{
          deberiaScrollear = true        
        },300)
      }
    }/>
    </div>
  {/if}
  <section class="ChatMensajes">

    {#if Array.isArray(mensajes)}
      {#each mensajes as mensaje (mensaje.id)}
        <ChatMensaje {mensaje} {reacciones} {reaccionar} {objetoAccion}/>
      {/each}
    {/if}
  </section>
  <section class="ChatEnviar">
    <ChatEntrada
      enviar={enviarAccion}
      {enfocar}
      activo={activo || anonimoPermitir}
      {textoActivo}
      {textoInactivo}
    />
  </section>

</section>
