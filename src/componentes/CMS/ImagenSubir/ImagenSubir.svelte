<script>
  import Aviso from "../../../elementos/texto/Aviso/Aviso.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";

  export let icono = "imagensubir";
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
  export let maximo = 2;
  export let imagen;
  export let abierto;
  export let formato = 'CUADRADO';//CIRCULAR

  let input;
  
  const cambiarAccion = datos => {
    
    
    try {
      
      if( typeof cambiar == "function" ) {
        cambiar(datos)
      }
      
      error = null
      
    } catch(err) {
      
      error = new Error("Hubo un error")
      
      console.log(err);
      
    }
    
  }

  const seleccionarImagen = async e => {

    try {
      
      let files = e.target.files;
      
      if (files && files.length) {
        let file = files[0]
        const filesize = ((file.size/1024)/1024).toFixed(4); // MB
        if (filesize <= maximo) { 
          
          if (FileReader) {
            let fileReader = new FileReader();
            
            let imagenValida


            fileReader.onload = async () => {
              
              if (imagenValida) {
                
                const blob = fileReader.result;
                imagen = blob

              }

            };
            
            // fileReader.readAsDataURL(file)


            fileReader.onloadend = function (e) {

                let arr = (new Uint8Array(e.target.result)).subarray(0, 4);
                let header = "";


                for(let i = 0; i < arr.length; i++) {
                    header += arr[i].toString(16);
                }

                // Check the file signature against known types
                let tipo = 'unknown';
                switch (header) {
                  case "89504e47":
                      tipo = "image/png";
                      break;
                  case "47494638":
                      tipo = "image/gif";
                      break;
                  case "ffd8ffe0":
                  case "ffd8ffe1":
                  case "ffd8ffe2":
                  case "ffd8ffe3":
                  case "ffd8ffe8":
                      tipo = "image/jpeg";
                      break;
                  default:
                      tipo = "unknown";
                      break;
              }

                if (file.type === tipo) {
                  
                  imagenValida = true
                  fileReader.readAsDataURL(file)                          
                  
                } else {
                  if( !imagenValida ) {

                    error = new Error("Archivo no válido")
                    imagen = null

                  }
                }

            };

            fileReader.readAsArrayBuffer(file);

            cambiarAccion(file)
            
          }
          
          
        } else {
          
          const textoError = "Imagen supera " + (maximo || 2) + 'mb';
          
          error = new Error(textoError)
          
        } 
      }
    } catch(err) {

      // 

    }

    abierto = false
      
  };

  const abrir = () => input.click();

  const eliminarImagen = () => {
    imagen = null;
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
  .ImagenSubir {
    height: auto;
    width: auto;
    position: relative;
    padding: 0 !important;
  }
  input[type="file"] {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  .Contenedor {
    background-color: #b9b9b9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 !important;
    height: 8.5rem;
    width: 8.5rem;
    cursor: pointer;
    overflow: hidden;
  }
  .ImagenPreparada {
    height: 100%;
    width: 100%;
    position: relative;
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
    background-color: #EDE9FB;
    border: 1px dashed #666;
  }
  .circular {
    border-radius: 50%;
  }
  .Contenedor .icono :global(svg) {
    height: 100%;
    width: 100%;
    fill: #CCCCCC !important;
  }
  .ImagenSubir :global(.Aviso *) {
    color: #f00;
    margin: 0;
  }
  .CambiarIcono {
    position: absolute;
    right: 0rem;  
    bottom: 0rem;
    padding: 0 !important;
    background-color: var(--theme-colores-primario);
    border: 2px solid #fff;
    box-shadow: 0.1rem 0.1rem 0.15rem rgba(0,0,0,0.1);
    border-radius: 50%;
  }

  .CambiarIcono :global( button ) {
    padding: 0.25rem;
    margin: 0 !important;
    
  }
  .CambiarIcono :global( button .iconoContenedor) {
    height: 1.75rem !important;
    width: 1.75rem !important;
  }
  .CambiarIcono :global( button * ) {
    padding: 0 !important;
    margin: 0 !important;
  }

  .CambiarIcono :global( svg ) {
    height: 1.75rem;
    fill: #FFF !important;
  }
  .texto {
    display: flex;
    justify-content: center;
    padding: 0.25rem;
  }
  .texto :global(span) {
    color: var(--theme-colores-primario);
    font-size: 0.875rem;
  }
  .error {
    border: 1px dashed #f00;
  }
  .contenido {
    position: relative;
  }
</style>

<section class="ImagenSubir">
  
  <input
  type="file"
  accept="image/x-png,image/gif,image/jpeg"
  on:change={seleccionarImagen} 
  bind:this={input}
  />

  <div class="contenido" >

  <div class="Contenedor {formato == "CIRCULAR" ? "circular" : ""} {error ? "error": ""}" on:click={abrir}>
  {#if !imagen}


      <div class="icono">
        <Icono {icono} tamanno={'4.25rem'} />
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
    </div>
      
  {#if iconoCambiar}

    <div class="CambiarIcono">
      <BotonIcono icono={'adjuntarFoto'} click={abrir}/>
    </div>
    
  {/if}

  </div>

  <div class="texto">
    {#if error}
    
      <Aviso texto={error}/>
    
    {:else}
    
      {#if etiqueta}
      <Texto texto={ etiqueta ? etiqueta : 'Agregar Imagen.'} />
      <!-- <Texto texto={ maximo ? 'Máx. ' + maximo + 'mb' : 'Máx. 2mb' }/> -->
      {/if}
   
    {/if}
      
    </div>

</section>
