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
  import feliz from "./iconos/feliz.svg";
  import reaccion from "./iconos/reaccion.svg";
  import adjuntar from "./iconos/adjuntar.svg";
  import sumar from "./iconos/sumar.svg";
  import confirma from "./iconos/confirma.svg";
  import irIzquierda from "./iconos/ir.izquierda.svg";
  import irDerecha from "./iconos/ir.derecha.svg";
  import ojoAbierto from "./iconos/ojo.abierto.svg";
  import ojoCerrado from "./iconos/ojo.cerrado.svg";
  import compartir from "./iconos/compartir.svg";
  import google from "./iconos/google.svg";
  import charla from "./iconos/charla.svg";
  import adjuntarFoto from "./iconos/adjuntar.foto.svg";
  import mano from "./iconos/mano.svg";
  import avanzarArriba from "./iconos/avanzar.arriba.svg";
  import avanzarAbajo from "./iconos/avanzar.abajo.svg";
  import avanzarIzquierda from "./iconos/avanzar.izquierda.svg";
  import avanzarDerecha from "./iconos/avanzar.derecha.svg";
  import soundcloud from "./iconos/soundcloud.svg";
  import documento from "./iconos/documento.svg";
  import tiempo from "./iconos/tiempo.svg";
  import camara from "./iconos/camara.svg";
  import subir from "./iconos/subir.svg";
  import externo from "./iconos/externo.svg";
  import enlace from "./iconos/enlace.svg";
  import youtube from "./iconos/youtube.svg";
  import linkedin from "./iconos/linkedin.svg";
  import restar from "./iconos/restar.svg";
  import seguridad from "./iconos/seguridad.svg";
  import casilla from "./iconos/casilla.svg";
  import nube from "./iconos/nube.svg";
  import configuracion from "./iconos/configuracion.svg";
  import inicio from "./iconos/inicio.svg";
  import flechaArriba from "./iconos/flecha.arriba.svg";
  import flechaIzquierda from "./iconos/flecha.izquierda.svg";
  import ordenar from "./iconos/ordenar.svg";
  import notificacion from "./iconos/notificacion.svg";
  import calendario from "./iconos/calendario.svg";
  import lista from "./iconos/lista.svg";
  import ubicacion from "./iconos/ubicacion.svg";
  import telefono from "./iconos/telefono.svg";
  import contacto from "./iconos/contacto.svg";
  import eliminar from "./iconos/eliminar.svg";
  import descargar from "./iconos/descargar.svg";
  import buscar from "./iconos/buscar.svg";
  import irArriba from "./iconos/ir.arriba.svg";
  import irAbajo from "./iconos/ir.abajo.svg";
  import calendarioAgregar from "./iconos/calendario.agregar.svg";
  import gestores from "./iconos/gestores.svg";
  import minimizar from "./iconos/minimizar.svg";
  import maximizar from "./iconos/maximizar.svg";
  
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
    enviar,
    feliz,
    reaccion,
    adjuntar,
    sumar,
    confirma,
    irIzquierda,
    irDerecha,
    ojoAbierto,
    ojoCerrado,
    compartir,
    google,
    charla,
    adjuntarFoto,
    mano,
    avanzarArriba,
    avanzarAbajo,
    avanzarIzquierda,
    avanzarDerecha,
    soundcloud,
    documento,
    tiempo,
    camara,
    subir,
    externo,
    enlace,
    youtube,
    linkedin,
    restar,
    seguridad,
    casilla,
    nube,
    configuracion,
    inicio,
    flechaArriba,
    flechaIzquierda,
    ordenar,
    notificacion,
    calendario,
    lista,
    ubicacion,
    telefono,
    contacto,
    eliminar,
    descargar,
    buscar,
    irArriba,
    irAbajo,
    calendarioAgregar,
    gestores,
    minimizar,
    maximizar,
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
      estilos={{
        altura:tamanno
      }} />
  </div>
{/if}

