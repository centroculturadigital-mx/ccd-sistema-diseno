<script>
  import getEventsAction from "../../../../funciones/getEventsAction";

  import Formulario from "../../../formularios/Formulario/Formulario";
  import BotonIcono from "../../../../elementos/botones/BotonIcono/BotonIcono";

  export let enviar = () => console.log("enviado");
  export let enfocar = () => console.log("enfocar");
  export let numMaxCaracteres = 140;

  const contieneSoloEspacios = (str) => !str.replace(/\s/g, '').length;
  
  const excedeExtension = (str) => str.length > 140;

  let mensaje = "";

  const enviarMensaje = (e) => {

    if(contieneSoloEspacios(mensaje)) {

      alert("No puedes mandar un mensaje vacío");
      
      return 
    };

    if(excedeExtension(mensaje)) {

      alert("No puedes mandar un mensaje mayor a " + numMaxCaracteres);
      
      return 
    };

    if (typeof enviar == "function") {
      enviar(mensaje);
    }

    mensaje = '';
  };

  const eventos = getEventsAction();

  const enter = (e) => {
      
      if (e.keyCode == 13) {
        enviarMensaje();
        // e.target.value = '';
      }

  }
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
    padding: 0;
  }

  .ChatEntrada :global(.iconoContenedor img) {
    height: var(--theme-tamannos-lg);
    color: var(--theme-textos-parrafo-neutro);
  }
</style>
 
<div class="ChatEntrada">
  <input
    type="text"
    bind:value={mensaje}
    placeholder="Enviar mensaje"
    use:eventos
    on:focus={enfocar}
    on:keyup={enter} />

  <BotonIcono icono={'enviar'} on:click={enviarMensaje} />
</div>
