<script>
import Insertar from '../../../elementos/media/Insertar/Insertar.svelte';

export let url;
export let titulo;
export let alto = "315";
export let ancho  = "560";
</script>


<article>

<Insertar {url} {alto} {ancho}/>

</article>
