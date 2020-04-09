<script>
  import play from "./iconos/play.svg";
  import menu from "./iconos/menu.svg";
  import cerrar from "./iconos/cerrar.svg";

  import Imagen from "../media/Imagen/Imagen";

  export let icono;

  const iconos = {
    play,
    menu,
    cerrar
  };

  $: iconoMostrar = iconos[icono];
</script>
<style>

</style>
{#if icono && Object.keys(iconos).includes(icono)}
  <Imagen imagenUrl={iconoMostrar} altTexto={`Ícono ${icono}`} altura={"32px"}/>
{/if}
