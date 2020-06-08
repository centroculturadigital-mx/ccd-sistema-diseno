<script>
  import ChatMensaje from "./ChatMensaje/ChatMensaje.svelte";
  import ChatEntrada from "./ChatEntrada/ChatEntrada.svelte";

  export let mensajes = [];
  export let enviar;
</script>

<style>
  .Chat {
    background-color: var(--theme-colores-fondo);
    padding: calc(var(--theme-espaciados-padding) * 2);
    height: 100%;
    width: 100%;
  }
  .ChatMensajes {
    padding: var(--theme-espaciados-padding);
  }
  hr {
    border-color: lightgray;
  }
</style>

<section class="Chat">

  <section class="ChatMensajes">

    {#if !!mensajes}
      {#each mensajes as mensaje}
        <ChatMensaje {mensaje} />
      {/each}
    {/if}
  </section>
  <hr />
  <section class="ChatEnviar">
    <ChatEntrada {enviar} />
  </section>

</section>
