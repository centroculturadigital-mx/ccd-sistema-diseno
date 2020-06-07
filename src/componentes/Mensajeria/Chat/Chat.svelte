<script>
  import ChatMensaje from "./ChatMensaje/ChatMensaje.svelte";
  import ChatEntrada from "./ChatEntrada/ChatEntrada.svelte";
  import ChatObjeto from "./ChatObjeto/ChatObjeto.svelte";

</script>

<style>
.Chat {
  background-color: var(--theme-colores-fondo);
  padding: calc( var(--theme-espaciados-padding) * 2);
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
    <ChatMensaje />
    <ChatObjeto />
  </section>
  <hr>
  <section class="ChatEnviar">
  <ChatEntrada/>  
  </section>

</section>
