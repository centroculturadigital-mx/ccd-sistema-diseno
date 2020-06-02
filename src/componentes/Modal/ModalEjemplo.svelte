<script>
  import Boton from "../../elementos/botones/Boton/Boton.svelte";
  import Modal from "../../componentes/Modal/Modal.svelte";
  import Tarjeta from "../../componentes/Tarjetas/Tarjeta/Tarjeta.svelte";

  export let estado;
  export let componente;
  export let datos;

  let abrirModal = () => {
    //obliga al boton a regresar a su estado inicial
    if (estado == true) {
      estado = false;
    }
    estado = !estado; //toggle del estado
  };
</script>

<Boton texto={'Abre Modal'} click={abrirModal} />

<Modal {estado} {componente} {datos} />
