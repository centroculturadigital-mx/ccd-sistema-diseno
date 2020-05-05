<script>
  import Campo from "../../formularios/Campo/Campo.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";

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

  let imagen;
  let input;

  const seleccionarImagen = async e => {
    let files = e.target.files;

    if (FileReader && files && files.length) {
      var fr = new FileReader();
      fr.onload = function() {
        imagen = fr.result;
        console.log("string", imagen);
      };
      fr.readAsDataURL(files[0]);
    }
    // imagen = e.target.value;
  };

  const abrir = () => input.click();
</script>

<style>
  .ImagenSubir {
    height: 13rem;
    width: 13rem;
    position: relative;
  }
  input[type="file"] {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  .Contenedor {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #b9b9b9;
    cursor: pointer;
  }
  .Contenedor {
    padding: 0.5rem;
    background-color: #b9b9b9;
    box-sizing: border-box;
  }
</style>

<section class="ImagenSubir">
  <!-- <div class="Campo"> -->
  <input type="file" on:change={seleccionarImagen} bind:this={input} />
  <!-- </div> -->
  <div class="Contenedor" on:click={abrir}>
    {#if !imagen}
      <Icono icono={'imagen'} tamanno={'2rem'} />
      <Parrafo texto={etiqueta ? etiqueta : 'Agrega Fotos'} />
    {:else}
      <Imagen imagenUrl={imagen} ajuste={"contain"} altTexto={"Sube imagen"}/>
    {/if}
  </div>
</section>
