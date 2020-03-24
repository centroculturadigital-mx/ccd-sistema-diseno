<script>
import Imagen from '../../../elementos/media/Imagen/Imagen.svelte';
import Titulo from '../../../elementos/texto/Titulo/Titulo.svelte';
import BotonIcono from '../../../elementos/botones/BotonIcono/BotonIcono.svelte';


export let titulo;
export let imagen;
export let abrir;


let alturaImagen = '400px';

</script>

<article class="videoTarjeta">

    <div class="imagen">
        <Imagen 
        imagenUrl={imagen}
        altTexto={titulo}
        alineacion={"center"}
        altura={alturaImagen}
        />

        <a href="#" on:click|preventDefault={abrir}>
        <BotonIcono iconoBotonEstadoUnoUrl="play.svg"/>
        </a>

    </div>


<Titulo nivel={1} texto={titulo}/>


</article>