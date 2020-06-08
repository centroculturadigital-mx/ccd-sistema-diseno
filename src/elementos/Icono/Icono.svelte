<script>
  import play from "./iconos/play.svg";
  import menu from "./iconos/menu.svg";
  import cerrar from "./iconos/cerrar.svg";
  import mas from "./iconos/mas.svg";
  import imagen from "./iconos/imagen.svg";
  import avatar from "./iconos/avatar.svg";
  import Imagen from "../media/Imagen/Imagen";
  import facebook from "./iconos/facebook.svg";
  import twitter from "./iconos/twitter.svg";
  import instagram from "./iconos/instagram.svg";
  import agregar from "./iconos/agregar.svg";
  import alerta from "./iconos/alerta.svg";
  import aviso from "./iconos/aviso.svg";
  import exito from "./iconos/exito.svg";
  import informacion from "./iconos/informacion.svg";
  import pregunta from "./iconos/pregunta.svg";
  import derecha from "./iconos/flecha.derecha.svg";
  import abajo from "./iconos/flecha.abajo.svg";
  import enviar from "./iconos/enviar.svg";

  export let icono;
  export let tamanno = "2rem";
  export let color = "#000";

  const iconos = {
    play,
    menu,
    cerrar,
    mas,
    imagen,
    avatar,
    facebook,
    twitter,
    instagram,
    agregar,
    alerta,
    aviso,
    exito,
    informacion,
    pregunta,
    derecha,
    abajo,
    enviar
  };

  $: iconoMostrar = iconos[icono];
</script>

<style>
  .iconoContenedor {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: auto;
  }
  .iconoContenedor :global(*) {
    fill: inherit;
  }
  .iconoContenedor :global(img) {
    object-fit: contain;
    height: var(--theme-iconos-primario-tamanno);
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
