<script>
import TarjetaDeslizante from "./TarjetaDeslizante.svelte";

export let imagenUrl;
export let textoParrafo;
export let titulo;
export let nivelTitulo;
export let colorTitulo
</script>

<TarjetaDeslizante {imagenUrl} {textoParrafo} {titulo} {nivelTitulo} {colorTitulo}/>