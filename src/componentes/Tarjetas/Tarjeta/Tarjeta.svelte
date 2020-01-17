<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import BotonVista from "../../../elementos/botones/Boton/Boton.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import TarjetaHorizontal from "../TarjetaHorizontal/TarjetaHorizontal.svelte";
  import TarjetaVertical from "../TarjetaVertical/TarjetaVertical.svelte";

  export let imagenUrl;
  export let titulo;
  export let nivelTitulo;
  export let colorTitulo;
  export let texto;
  export let color;
  export let colorBG;
  export let sombra;

  let ventana;
  let breakpoint = 720;
</script>

<style>

</style>

<svelte:window bind:innerWidth={ventana} />

{#if ventana > breakpoint}
  <TarjetaHorizontal
    {imagenUrl}
    {titulo}
    {nivelTitulo}
    {colorTitulo}
    {texto}
    {color}
    {colorBG}
    {sombra} />
{:else}
  <TarjetaVertical
    {imagenUrl}
    {titulo}
    {nivelTitulo}
    {colorTitulo}
    {texto}
    {color}
    {colorBG}
    {sombra} />

{/if}
