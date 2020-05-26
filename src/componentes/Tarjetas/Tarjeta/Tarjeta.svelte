<script>
  import TarjetaHorizontal from "../TarjetaHorizontal/TarjetaHorizontal.svelte";
  import TarjetaVertical from "../TarjetaVertical/TarjetaVertical.svelte";
 
  export let imagen;
  export let titulo;
  export let nivelTitulo;
  export let texto;
  export let sombra;

  let ventana;
  let breakpoint = 720;
</script>

<style>

</style>

<svelte:window bind:innerWidth={ventana} />

{#if ventana > breakpoint}
  <TarjetaHorizontal
    {imagen}
    {titulo}
    {nivelTitulo}
    {texto}
    {sombra} />
{:else}
  <TarjetaVertical
    {imagen}
    {titulo}
    {nivelTitulo}
    {texto}
    {sombra} />

{/if}
