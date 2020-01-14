<script>
import Imagen from './Imagen.svelte';

export let imagenUrl;
export let altTexto;
export let ajuste;
export let altura;
</script>

<Imagen {imagenUrl} {altTexto} {ajuste} {altura} />