<script>
  import Aviso from "../../../elementos/texto/Aviso/Aviso.svelte";
  import Campo from "../../formularios/Campo/Campo.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";

  export let icono = "subir";
  export let iconoDescargar = "descargar";
  export let etiqueta = 'Adjunta un PDF aquí.';
  export let tipos = "application/pdf";
  export let etiquetaDescargar = 'Descargable.';
  export let nombre;
  export let requerido;
  export let ejemplo;
  export let valor;
  export let error;
  export let cambiar;
  export let estado;
  export let abierto;


  export let maximo=8;
  export let mensajeError="Su PDF sobrepasa el peso permitido.";

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

  export let archivo;
  let input;


  const seleccionarArchivo = async e => {
    let files = e.target.files;

    // call them as such; files[0].size will get you the file size of the 0th file

    if (files && files.length) {
        const filesize = ((files[0].size/1024)/1024).toFixed(4); // MB
        if (filesize <= maximo) { 


          if (FileReader) {
            let fr = new FileReader();
            
            fr.onload = async () => {
              const blob = fr.result;
              archivo = blob// e.target.files[0].name;
            };
            
            if( typeof cambiar == "function" ) {
              cambiar(files[0])
            }
            fr.readAsDataURL(files[0]);

          }


      } else {

        error = new Error(mensajeError)

      } 
    }

    abierto = false
    
  };

  const abrir = () => input.click();

  const eliminarArchivo = () => {
    archivo = null;
    error = null
    if (typeof cambiar == "function") {
      cambiar(null)
    } 
  };

  $: abierto && abrir()
  
</script>

<style>
  * {
    box-sizing: border-box;
  }
  .ArchivoSubir {
    display: flex;
    flex-direction: column;
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
    border-radius: 0.25rem;
    border: 1px dashed var(--theme-colores-primario);
  }
  .ArchivoPreparado {
    height: 100%;
    width: 100%;
    position: relative;
    display: grid;
    place-items: center;
  }
  .ArchivoPreparado a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: var(--theme-colores-primario);
  }
  .ArchivoPreparado :global(.iconoContenedor.cerrar) {
    height: auto;
    transition: 0.5s;
    background-color: rgba(255, 255, 255, 0.25);
    padding: 0.25rem;
  }
  .ArchivoPreparado :global(.iconoContenedor.cerrar:hover) {
    filter: invert(50%);
  }
  .ArchivoPreparado :global(button) {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    padding: 0;
  }
  .Contenedor {
    padding: 0.5rem;
    background-color: #b9b9b9;
  }
  .error {
    padding: var(--theme-espaciados-padding) 0;
  }
  .errorCarga {
    border-color: red !important;
  }

  .ArchivoSubir :global(.Aviso) {
    position: relative;
    height: auto;
    color: #f00;
  }
  .ArchivoSubir :global(.Aviso) {
    justify-content: flex-start;

  }
  .ArchivoSubir :global(.Aviso *) {
    color: #f00;
    margin: 0;
    font-size: .75rem;
  }
  


</style>

<section class="ArchivoSubir">
  
  <input
  type="file"
  accept={tipos}
  on:change={seleccionarArchivo} bind:this={input}
  />
  
  {#if !archivo}
    <div class="Contenedor {error ? "errorCarga" : ""}" on:click={abrir}>
      <Icono {icono} tamanno={'2rem'} />
      <Parrafo texto={ etiqueta } />
      <Texto texto={ maximo ? 'Máx. ' + maximo + 'mb' : 'Máx. 8mb' }  variante="CHICO"/>
  
      
    </div>
    <div class={error ? "error" : ""}>
      {#if error}
        <Aviso texto={error}/>
      {/if}
    </div>
  {:else}
    
  
  <div class="ArchivoPreparado">
      <BotonIcono icono={'cerrar'} click={eliminarArchivo}/>
      {#if archivo}
        <a href={archivo} target="_blank">
            <Icono icono={iconoDescargar} tamanno={'2rem'} />
            <Parrafo texto={ etiquetaDescargar } />
        </a>
      {/if}
    </div>
    
  {/if}

</section>
