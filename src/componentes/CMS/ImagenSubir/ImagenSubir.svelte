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

  let input;

  $: textoError = maximo ? "Elige una imagen menor a " + maximo + 'mb' : 'Elige una imagen menor a 2mb';

  const seleccionarImagen = async e => {
    let files = e.target.files;

    if (files && files.length) {
        const filesize = ((files[0].size/1024)/1024).toFixed(4); // MB
        if (filesize <= maximo) { 


          if (FileReader) {
            let fr = new FileReader();
            
            fr.onload = async () => {
              const blob = fr.result;
              imagen = blob
            };
            
            if( typeof cambiar == "function" ) {
              cambiar(files[0])
            }
            fr.readAsDataURL(files[0]);

          }

          error = false

      } else {

        error = new Error(textoError)

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
  * {
    box-sizing: border-box;
  }
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
    background-color: #b9b9b9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 !important;
    height: 100%;
    width: 100%;
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
    border-radius: 7rem;
    border: 1px dashed var(--theme-colores-primario);
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
    right: 0;  
    bottom: 1rem;
    padding: 0 !important;
    background-color: var(--theme-colores-primario);
    border: 2px solid #fff;
    box-shadow: 0 .15rem .15rem .15rem rgba(0,0,0,0.1);
    border-radius: 50%;
  }

  .CambiarIcono :global( button ) {
    padding: 0.25rem;
    margin: 0 !important;
    
  }
  .CambiarIcono :global( button .iconoContenedor) {
    height: 2.5rem !important;
    width: 2.5rem !important;
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
</style>

<section class="ImagenSubir">
  
  <input
  type="file"
  accept="image/x-png,image/gif,image/jpeg"
  on:change={seleccionarImagen} bind:this={input}
  />
  
  <div class="Contenedor {error ? "error": ""}" on:click={abrir}>
  {#if !imagen}


      <div class="icono">
        <Icono {icono} tamanno={'6rem'} />
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
