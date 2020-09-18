<script>
  import ChatMensaje from "./ChatMensaje/ChatMensaje.svelte";
  import ChatEntrada from "./ChatEntrada/ChatEntrada.svelte";

  export let reacciones = [];
  export let mensajes = [];
  export let enviar = () => console.log("enviar");
  export let enfocar = () => console.log("enfocar");
  export let reaccionar = () => console.log("reaccionar");
  export let objetoAccion

  
  const actualizar = mensajes => {
    setTimeout(()=>{

      let msj = document.querySelector(".ChatMensaje:last-child")
      msj && msj.scrollIntoView({
        behavior: 'smooth',
      })

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

</style>

<section class="Chat">

  <section class="ChatMensajes">

    {#if Array.isArray(mensajes)}
      {#each mensajes as mensaje (mensaje)}
        <ChatMensaje {mensaje} {reacciones} {reaccionar} {objetoAccion}/>
      {/each}
    {/if}
  </section>
  <section class="ChatEnviar">
    <ChatEntrada enviar={enviarAccion} {enfocar}/>
  </section>

</section>
