<script>
  import Icono from "../../../elementos/Icono/Icono";
  import ReaccionesLista from "./ReaccionesLista/ReaccionesLista";

  export let reacciones = [];

  let estado = false;

  let accion = () => {
    estado ? (estado = false) : "";//forza estado
    estado = !estado;
  };
</script>

<style>
  .Reacciones {
    position: relative;
    height: auto;
    width: auto;
  }
</style>

<div class="Reacciones">
  <Icono icono={'reaccion'} on:click={accion} />
  <ReaccionesLista {reacciones} {estado} />
</div>
