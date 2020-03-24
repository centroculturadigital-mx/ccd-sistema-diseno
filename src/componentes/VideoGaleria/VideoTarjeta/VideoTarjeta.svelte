<script>
import Imagen from '../../../elementos/media/Imagen/Imagen.svelte';
import BotonIcono from '../../../elementos/botones/BotonIcono/BotonIcono.svelte';


export let url = "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png";
export let titulo = "Video Tarjeta";
export let abre;


let alturaImagen = '400px';

</script>

<article class="videoTarjeta">

    <div class="imagen">
        <Imagen 
        imagenUrl={url}
        altTexto={titulo}
        alineacion={"center"}
        altura={alturaImagen}
        />

        <a href="#" on:click|preventDefault={abre}>
        <BotonIcono iconoBotonEstadoUnoUrl="play.svg"/>
        </a>

    </div>


    <h1>{titulo}</h1>


</article>