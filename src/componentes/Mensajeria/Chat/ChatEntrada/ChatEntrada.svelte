<script>
  import Formulario from "../../../formularios/Formulario/Formulario";
  import BotonIcono from "../../../../elementos/botones/BotonIcono/BotonIcono";

  export let enviar;

  let mensaje = "";

  const enviarMensaje = () => {
    if (typeof enviar == "function") {
      enviar(mensaje);
    }
  };
</script>

<style>
  .ChatEntrada {
    display: flex;
    padding: var(--theme-espaciados-padding);
    box-sizing: border-box;
  }
  input {
    padding: calc(var(--theme-espaciados-padding) * 0.75);
    background-color: lightgray;
    /* border-left-top-radius: 0.5rem;
    border-left-bottom-radius: 0.5rem; */
    border: none;
    margin: 0;
    width: 100%;
  }
    .ChatEntrada :global(button) {
        background-color: lightgray;
    }
    .ChatEntrada :global(button img) {
        height: 2.5rem;
    }
</style>

<div class="ChatEntrada">
  <input type="text" bind:value={mensaje} placeholder="Enviar mensaje"/>
  <BotonIcono icono={'enviar'} on:click={enviarMensaje}/>
</div>
