<script>
import TarjetaFrase from "./TarjetaFrase.svelte";

export let imagenUrl;
export let textoFrase;
export let textoAutor;
export let posicionTexto;
export let color;
export let fontStyle;
export let colorFondo;

</script>

<TarjetaFrase
    {imagenUrl}
    {textoFrase}
    {textoAutor}
    {posicionTexto}
    {color}
    {fontStyle} 
    {colorFondo} 
/>