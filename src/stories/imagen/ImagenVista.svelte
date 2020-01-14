<script>
import Imagen from './Imagen.svelte';

export let imagenUrl;
export let alt;
export let ajuste;
</script>

<Imagen {imagenUrl} {alt} {ajuste} />