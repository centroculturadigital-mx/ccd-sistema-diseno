<script>
  import play from "./iconos/play.svg";
  import menu from "./iconos/menu.svg";
  import cerrar from "./iconos/cerrar.svg";
  import mas from "./iconos/mas.svg";
  import imagen from "./iconos/imagen.svg";
  import avatar from "./iconos/avatar.svg";

  import Imagen from "../media/Imagen/Imagen";

  export let icono;
  export let tamanno = "2rem";
  export let color = "#000";

  const iconos = {
    play,
    menu,
    cerrar,
    mas,
    imagen,
    avatar
  };

  $: iconoMostrar = iconos[icono];
</script>

<style>
  .iconoContenedor {
    display: flex;
    align-items: center; 
    cursor: pointer;
    height:2rem ;
  }
  .iconoContenedor :global(*) {
    fill: inherit;
  }
  .iconoContenedor :global(img) {
    object-fit: contain;
  }
</style>

{#if icono && Object.keys(iconos).includes(icono)}
  <div class="iconoContenedor" style={`fill:${color};`}>
    <Imagen
      on:click
      imagen={iconoMostrar}
      altTexto={`Ícono ${icono}`}
      altura={tamanno} />
  </div>
{/if}
