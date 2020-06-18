<script>
  import ChatMensaje from "./ChatMensaje/ChatMensaje.svelte";
  import ChatEntrada from "./ChatEntrada/ChatEntrada.svelte";

  export let mensajes = [];
  export let enviar = () => console.log("enviando");
  export let enfocar = () => console.log("enfocar");

  let mensaje = "";

  const enviarAccion = () => {
    if (mensaje && typeof enviar == "function") {
      enviar(mensaje);
      mensaje = "";
    }
  };

</script>

<style>
  .Chat {
    background-color: var(--theme-colores-fondo);
    /*padding: calc(var(--theme-espaciados-padding) * 2);*/
    border-width: 0.05rem;
    border-color: var(--theme-bordes-neutro);
    border-style: solid;
    border-radius: 0.2rem;
    height: auto;
    width: 30rem;
  }
  .ChatMensajes {
    padding: var(--theme-espaciados-padding);
  }
  /*hr {
    border-color: lightgray;
  }*/
</style>

<section class="Chat">

  <section class="ChatMensajes">

    {#if !!mensajes}
      {#each mensajes as mensaje}
        <ChatMensaje {mensaje} />
      {/each}
    {/if}
  </section>
  <section class="ChatEnviar">
    <ChatEntrada {enviar} {enfocar}  />
  </section>

</section>
