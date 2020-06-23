<script>
  import { onMount } from "svelte";
  import { slide, fade } from "svelte/transition";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace.svelte";

  import moment from "moment";

  export let estado = false;
  export let evento = {};

  $: contador = {
    dias: "",
    horas: "",
    minutos: "",
    segundos: ""
  };

  let falta;

  const calculaFecha = fecha => {
    let fechaActual = moment();
    let fechaEvento = moment(fecha);
    let diferencia = fechaActual.diff(fechaEvento, "milliseconds");
    let intervalo = 1000;

    falta = moment.duration(diferencia, "milliseconds");

    setInterval(() => {
      falta = moment.duration(falta + intervalo, "milliseconds");

      contador.dias = Math.abs(falta.days());
      contador.horas = Math.abs(falta.hours());
      contador.minutos = Math.abs(falta.minutes());
      contador.segundos = Math.abs(falta.seconds());
    }, intervalo);
  };

  onMount(() => {
    calculaFecha(evento.fechaInicio);
  });
</script>

<style>
  li.EventoEnCurso {
    height: auto;
    width: auto;
    /* max-width: calc(var(--theme-tamannos-lg) * 18 ); */
    list-style-type: none;
    padding: calc(var(--theme-espaciados-padding) * 2.5) calc(var(--theme-espaciados-padding) * 2.5) var(--theme-espaciados-padding) calc(var(--theme-espaciados-padding) * 2.5) ;
    border-bottom: 2px solid lightgray;
    position: relative;
    box-sizing: border-box;
  }
  li:before {
    content: "";
    position: absolute;
    right: 0%;
    left: 0;
    height: 57%;
    border-right: 2px solid lightgray;
  }
  .EstadoIndicador {
    display: flex;
    justify-content: space-between;
  }
  .EstadoIndicador :global(p) {
    flex-shrink: 0;
    margin: calc(var(--theme-espaciados-margen) / 2) 0;
  }
  .Led {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding-left: 2rem;
  }
  .Led span {
    border-radius: 50%;
    height: 0.75rem;
    width: 0.75rem;
  }
  .EventoEnCurso :global(h3) {
    margin: 0.25rem 0;
  }
  .EventoEnCurso :global(p) {
    font-weight: bolder;
    margin: 0.25rem 0;
  }
  .EnVivo {
    background-color: var(--theme-alertas-transmitiendo);
  }
  /* .Espera {
    background-color: var(--theme-alertas-inactivo);
  } */
</style>

{#if !!estado}
  <li class="EventoEnCurso">
    {#if falta < 0}
      <div transition:slide>
        <Parrafo texto={evento.nombre + ' comienza en'} />
        <Titulo
          texto={`${contador.dias}d : ${contador.horas}h : ${contador.minutos}m : ${contador.segundos}s`}
          nivel={3} />
        <Enlace enlace={`evento/${evento.slug}`} texto={'Ver más detalles ->'} />
      </div>
    {:else}
      <div transition:slide>
        <div class="EstadoIndicador" transition:fade>
          <Parrafo texto={'En Vivo'} />
          <div class="Led">
            <span class="EnVivo" />
          </div>
        </div>
        <Titulo texto={evento.nombre} nivel={3} />
        <Enlace enlace={`evento/${evento.slug}`} texto={'Ir ->'} />
      </div>
    {/if}
  </li>
{/if}
