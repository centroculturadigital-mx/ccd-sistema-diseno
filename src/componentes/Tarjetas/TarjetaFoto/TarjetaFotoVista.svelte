<script>
import TarjetaFoto from "./TarjetaFoto.svelte";

export let imagenUrl;
export let titulo;
export let sombra;

</script>

<TarjetaFoto {imagenUrl} {titulo} {sombra}/>