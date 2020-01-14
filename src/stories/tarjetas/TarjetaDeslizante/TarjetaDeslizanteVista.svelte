<script>
import TarjetaDeslizante from "./TarjetaDeslizante.svelte";

export let imagenUrl;
export let titulo;
export let textoParrafo;
</script>

<TarjetaDeslizante {imagenUrl} {titulo} {textoParrafo}/>