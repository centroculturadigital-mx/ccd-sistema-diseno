<script>
  import getEventsAction from "../../../../funciones/getEventsAction";

  import Formulario from "../../../formularios/Formulario/Formulario";
  import BotonIcono from "../../../../elementos/botones/BotonIcono/BotonIcono";

  export let enviar = () => console.log("enviado");
  export let enfocar = () => console.log("enfocar");
  
  let mensaje = "";

  const enviarMensaje = () => {
    if (typeof enviar == "function") {
      enviar(mensaje);
    }
  };

  const eventos = getEventsAction();
</script>

<style>
  input {
    padding: calc(var(--theme-espaciados-padding) * 1);
    background-color: var(--theme-colores-fondo-transparente);
    /*border-left-top-radius: 0.5rem;
    border-left-bottom-radius: 0.5rem; */
    font-size: var(--theme-tamannos-md);
    border: none;
    margin: 0;
    width: 100%;
  }
  .ChatEntrada {
    display: flex;
    padding: var(--theme-espaciados-padding);
    box-sizing: border-box;
    background-color: var(--theme-tarjetas-fondo);
    border-top-width: thin;
    border-top-color: var(--theme-bordes-neutro);
    border-top-style: solid;
  }
  .ChatEntrada :global(button) {
    background-color: var(--theme-colores-fondo-transparente);
  }

  .ChatEntrada :global(.iconoContenedor img) {
    height: var(--theme-tamannos-lg);
    color: var(--theme-textos-parrafo-colorNeutro);
  }
</style>

<div class="ChatEntrada">
  <input
    type="text"
    bind:value={mensaje}
    placeholder="Enviar mensaje"
    use:eventos
    on:focus={enfocar} 
    />

  <BotonIcono icono={'enviar'} on:click={enviarMensaje} />
</div>
