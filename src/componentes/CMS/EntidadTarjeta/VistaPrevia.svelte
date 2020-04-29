<script>
import ListaComponentes from '../../Listados/ListaComponentes/ListaComponentes.svelte';

export let elementos;
export let mensajeVacio = "No hay Entidades";
 
</script>



<section id="VistaPrevia">

<ListaComponentes {elementos} {mensajeVacio}/>

</section>