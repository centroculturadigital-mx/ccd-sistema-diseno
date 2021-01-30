<script>
  import Aviso from "../../../elementos/texto/Aviso/Aviso.svelte";
  import Campo from "../../formularios/Campo/Campo.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";

  export let icono = "camara";
  export let etiqueta;
  export let nombre;
  export let requerido;
  export let ejemplo;
  export let valor;
  export let error;
  export let cambiar;
  export let estado;
  export let borrarPermitir = true;
  export let iconoCambiar = true;
  
  
  export let maximo=2;

  // export let opciones;


  $: props = {
    nombre,
    requerido,
    ejemplo,
    valor,
    error,
    cambiar,
    estado,
    // opciones
  };

  export let imagen;
  let input;


  const seleccionarImagen = async e => {
    let files = e.target.files;

    // call them as such; files[0].size will get you the file size of the 0th file

    if (files && files.length) {
        const filesize = ((files[0].size/1024)/1024).toFixed(4); // MB
        if (filesize <= maximo) { 


          if (FileReader) {
            let fr = new FileReader();
            
            fr.onload = async () => {
              const blob = fr.result;
              imagen = blob// e.target.files[0].name;
            };
            
            if( typeof cambiar == "function" ) {
              cambiar(files[0])
            }
            fr.readAsDataURL(files[0]);

          }


      } else {

        error = new Error("Elige una imagen menor a 2mb.")

      } 
    }
  };

  const abrir = () => input.click();

  const eliminarImagen = () => {
    imagen = null;
    error = null
    cambiar(null)
  };

</script>

<style>
  .ImagenSubir {
    height: 13rem;
    width: 13rem;
    position: relative;
    padding: 0 !important;
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
    padding: 0 !important;
  }
  .ImagenPreparada {
    height: 100%;
    width: 100%;
    position: relative;
    /* display: flex;
    justify-content: flex-end; */
  }


  .ImagenPreparada :global(.iconoContenedor) {
    height: auto;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    transition: 0.5s;
    background-color: rgba(255, 255, 255, 0.25);
    padding: 0.25rem;
  }
  .ImagenPreparada :global(.iconoContenedor:hover) {
    filter: invert();
  }
  .ImagenPreparada :global(button) {
    padding: 0;
  }
  .Contenedor {
    padding: 0.5rem;
    background-color: #b9b9b9;
    box-sizing: border-box;
  }

  .ImagenSubir :global(.Aviso) {
    position: absolute;
    bottom: .25rem;
    height: auto;
    color: #f00;
  }
  .ImagenSubir :global(.Aviso *) {
    color: #f00;
    margin: 0;
    font-size: .8rem;
  }
  
  .CambiarIcono {
    position: absolute;
    right: 1rem;  
    bottom: 1rem;
    padding: 0 !important;
    background-color: #fff;
    box-shadow: .1225rem .1225rem .1225rem .1225rem rgba(0,0,0,0.1);
    border-radius: 50%;
  }

  .CambiarIcono :global( button ) {
    padding: 0.25rem;
    margin: 0 !important;
    
  }
  .CambiarIcono :global( button * ) {
    padding: 0 !important;
    margin: 0 !important;
  }

  .CambiarIcono :global( svg ) {
    height: 1rem;
  }

</style>

<section class="ImagenSubir">
  
  <input
  type="file"
  accept="image/x-png,image/gif,image/jpeg"
  on:change={seleccionarImagen} bind:this={input}
  />
  
  {#if !imagen}
    <div class="Contenedor" on:click={abrir}>
      <Icono {icono} tamanno={'2rem'} />
      <Parrafo texto={ etiqueta ? etiqueta : 'Agregar Imagen.'} />
      <Texto texto={ maximo ? 'Máx. ' + maximo + 'mb' : 'Máx. 2mb' }  variante="CHICO"/>
  
      {#if error}
        <Aviso texto={error}/>
      {/if}
      
    </div>
  {:else}
    
  
  <div class="ImagenPreparada">
      
      {#if borrarPermitir}
        <BotonIcono icono={'cerrar'} click={eliminarImagen}/>
      {/if}

      {#if imagen}
      <Imagen {imagen} ajuste={'contain'} altTexto={'Subir imagen'} />
      {/if}
      
    </div>
    
  {/if}
  
  {#if iconoCambiar}

    <div class="CambiarIcono">
      <BotonIcono icono={'adjuntarFoto'} click={abrir}/>
    </div>
    
  {/if}

</section>
