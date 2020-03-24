<script>
import Imagen from '../../../elementos/media/Imagen/Imagen.svelte';

export let url "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png";
export let titulo = "Video Tarjeta";

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

        <img src="play.svg" alt="Play">
    </div>


    <h1>{titulo}</h1>


</article>