<script>
  import ChatMensaje from "./ChatMensaje/ChatMensaje.svelte";
  import ChatEntrada from "./ChatEntrada/ChatEntrada.svelte";

  export let mensajes = [];
  export let enviar = () => console.log("enviando");
  export let enfocar = () => console.log("enfocar");

  $: Array.isArray(mensajes) && mensajes.length > 0 ? console.log("ultimo mensaje", mensajes[0].mensaje) : null
  


  const enviarAccion = () => {
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
    /*padding: calc(var(--theme-espaciados-padding) * 2);*/
    border-width: 0.05rem;
    border-color: var(--theme-bordes-neutro);
    border-style: solid;
    border-radius: 0.2rem;
    height: 100%;
    width: 100%;
  }
  .ChatMensajes {
    padding: var(--theme-espaciados-padding);
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  /*hr {
    border-color: lightgray;
  }*/
</style>

<section class="Chat">

  <section class="ChatMensajes">

    {#if !!mensajes}
      {#each mensajes as mensaje,i ("mensaje"+i)}
        <ChatMensaje {mensaje} />
      {/each}
    {/if}
  </section>
  <section class="ChatEnviar">
    <ChatEntrada {enviar} {enfocar} />
  </section>

</section>
