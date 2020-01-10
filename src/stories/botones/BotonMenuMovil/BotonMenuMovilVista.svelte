<script>
  import BotonMenuMovil from "./BotonMenuMovil.svelte";

  export let estado;

  const estadoBoton = () => {
    if (!!estado) {
      estado = false;
      console.log("cerrado");
    } else {
      estado = true;
      console.log("abierto");
    }
  };

</script>

  <BotonMenuMovil {estado} on:click={estadoBoton} />

