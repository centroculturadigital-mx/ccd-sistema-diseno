<script>
  import Campo from "../../formularios/Campo/Campo.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";

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

  const eliminaImagen = () => {
    imagen = null;
  };
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
  .ImagenPreparada {
    height: 100%;
    width: 100%;
    position: relative;
    /* display: flex;
    justify-content: flex-end; */
  }
  .ImagenPreparada div {
    height: auto;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
  .ImagenPreparada div :global(.iconoContenedor) {
    transition: 0.5s;
    background-color: rgba(255, 255, 255, 0.25);
    padding: 0.25rem;
  }
  .ImagenPreparada div :global(.iconoContenedor:hover) {
    filter: invert();
  }
  .ImagenPreparada div :global(button) {
    padding: 0;
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
  {#if !imagen}
    <div class="Contenedor" on:click={abrir}>
      <Icono icono={'imagen'} tamanno={'2rem'} />
      <Parrafo texto={etiqueta ? etiqueta : 'Agrega Fotos'} />
    </div>
  {:else}
    <div class="ImagenPreparada">
      <div on:click={eliminaImagen}>
        <BotonIcono icono={'cerrar'} />
      </div>
      <Imagen imagenUrl={imagen} ajuste={'cover'} altTexto={'Sube imagen'} />
    </div>
  {/if}
</section>
