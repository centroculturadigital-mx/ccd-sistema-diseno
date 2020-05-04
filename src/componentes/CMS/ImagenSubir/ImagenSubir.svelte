<script>
  import Campo from "../../formularios/Campo/Campo.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let etiqueta;
  export let nombre;
  export let requerido;
  export let placeholder;
  export let valor;
  export let error;
  export let cambiar;
  export let status;
  export let opciones;

  $: props = {
    nombre,
    requerido,
    placeholder,
    valor,
    error,
    cambiar,
    status,
    opciones
  };

const seleccionaImagen = () => {
  console.log("Sube");
  
}
</script>

<style>
.ImagenSubir {
  height: 13rem;
  width: 13rem;
}
.Campo {
  visibility: hidden;
  height: 0;
}
.Contenedor {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  cursor: pointer;
}
</style>

<section class="ImagenSubir">
  <div class="Campo">
    <Campo tipo={'archivo'} {...props} />
  </div>
  <div class="Contenedor" on:click={seleccionaImagen}>
    <Icono icono={'imagen'} tamanno={'2rem'}/>
    <Parrafo texto={etiqueta?etiqueta:"Agrega Fotos"}/>
  </div>
</section>
