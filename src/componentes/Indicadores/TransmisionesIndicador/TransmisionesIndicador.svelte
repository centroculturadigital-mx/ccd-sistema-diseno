<script>
  import { onMount } from "svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace.svelte";

  import moment from "moment";

  export let estado = false;
  export let eventos;

  $: contador = {
    dias: "",
    horas: "",
    minutos: "",
    segundos: ""
  };

  let falta;

  const calculaFechas = fecha => {
    let fechaActual = moment();
    let fechaEvento = moment(fecha);
    let diferencia = fechaActual.diff(fechaEvento, "milliseconds");
    let intervalo = 1000;

    falta = moment.duration(diferencia, "milliseconds");

    setInterval(() => {
      falta = moment.duration(falta + intervalo, "milliseconds");

      contador.dias = falta.days();
      contador.horas = falta.hours();
      contador.minutos = falta.minutes();
      contador.segundos = falta.seconds();
    }, intervalo);
  };

  let caja;

  onMount(() => {
    eventos.forEach(evento => {
      console.log("fecha:::", evento.fechaInicio);

      calculaFechas(evento.fechaInicio);
    });
  });
</script>

<style>
  .TransmisionIndicador {
    height: auto;
    width: auto;
    max-width: 16rem;
    box-sizing: border-box;
    padding: var(--theme-espaciados-padding);
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li.EventoEnCurso {
    list-style-type: none;
    padding: var(--theme-espaciados-padding) 0;
    border-bottom: 2px solid lightgray;
    position: relative;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  li:before {
    content: "";
    position: absolute;
    right: 0%;
    left: 0;
    height: 70%;
    border-right: 2px solid lightgray;
  }
  .EstadoIndicador {
    display: flex;
    justify-content: space-between;
  }
  .EstadoIndicador :global(p) {
    flex-shrink: 0;
    margin: calc(var(--theme-espaciados-margin) / 2) 0;
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
  .EventoEnCurso :global(h4) {
    margin: 0.25rem 0;
  }
  .EventoEnCurso :global(p) {
    font-weight: bolder;
    margin: 0.25rem 0;
  }
  /* .Espera {
    background-color: var(--theme-alertas-inactivo);
  } */
  .EnVivo {
    background-color: var(--theme-alertas-transmitiendo);
  }
</style>

<section class="TransmisionIndicador">
  {#if Array.isArray(eventos)}
    <ul>
      {#each eventos as evento}
        <li class="EventoEnCurso" bind:this={caja}>
          {#if falta < 0}
            <Parrafo texto={evento.titulo + ' comenza en'} />
            <Titulo
              texto={`${contador.dias}d : ${contador.horas}h : ${contador.minutos}m : ${contador.segundos}s`}
              nivel={4} />
            <Enlace
              href={`evento/${evento.slug}`}
              texto={'Ver más detalles ->'} />
          {:else}
            <div class="EstadoIndicador">
              <Parrafo texto={'En Vivo'} />
              <div class="Led">
                <span class="EnVivo" />
              </div>
            </div>
            <Titulo texto={evento.titulo} nivel={4} />
            <Enlace href={`evento/${evento.slug}`} texto={'Ir ->'} />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</section>
