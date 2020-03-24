<script>
import Insertar from '../../../elementos/media/Insertar/Insertar.svelte';

export let url = "https://www.youtube.com/embed/rZUGniKYuZg";
export let alto = "315";
export let ancho  = "560";
</script>



<Insertar {url} {alto} {ancho}/>