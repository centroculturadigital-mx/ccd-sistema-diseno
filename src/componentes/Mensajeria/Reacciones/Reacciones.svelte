<script>
  import Icono from "../../../elementos/Icono/Icono";
  import ReaccionesLista from "";

  export let reacciones = [
    {
      id: "id0",
      nombre: "me-gusta",
      texto: "Me Gusta",
      icono: ""
    }
  ];
  export let accion = e => console.log(e);
</script>

<style>
  .Reacciones {
    height: auto;
    width: auto;
  }
</style>

<div class="Reacciones">
  <Icono icono={'reaccion'} on:click={accion}/>
  <!-- <ReaccionesLista {reacciones}/> -->
</div>
