<script>
  import TarjetaHorizontal from "../TarjetaHorizontal/TarjetaHorizontal.svelte";
  import TarjetaVertical from "../TarjetaVertical/TarjetaVertical.svelte";
 
  export let enlace;
  export let imagen;
  export let nombre;
  export let subtitulo;
  export let nivelTitulo;
  export let descripcion;
  export let sombra;
  export let leyenda;
  export let enlaces = [];
  export let acciones = [];

  let ventana;
  let breakpoint = 720;
</script>

<style>

</style>

<svelte:window bind:innerWidth={ventana} />

{#if ventana > breakpoint}
  <TarjetaHorizontal
    {enlace}
    {imagen}
    {nombre}
    {subtitulo}
    {nivelTitulo}
    {descripcion}
    {sombra}
    {leyenda}
    {enlaces}
    {acciones} />
{:else}
  <TarjetaVertical
    {enlace}
    {imagen}
    {nombre}
    {subtitulo}
    {nivelTitulo}
    {descripcion}
    {sombra}
    {leyenda}
    {enlaces}
    {acciones} />

{/if}
