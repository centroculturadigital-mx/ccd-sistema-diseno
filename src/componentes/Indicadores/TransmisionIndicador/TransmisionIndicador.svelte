<script>
  import { onMount } from "svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace.svelte";

  import moment from "moment";

  export let estado = false;
  export let eventos = [];

  let dif;
  $: contador = {
    dias: "",
    horas: "",
    minutos: "",
    segundos: "",
  };

  const obtieneFechas = fecha => {
    let fechaActual = moment();
    let fechaEvento = moment(fecha);
    let diferencia = fechaActual.diff(fechaEvento, "seconds");

    let falta = moment.duration(diferencia, "seconds");

    setInterval(() => {
      
      contador.dias = falta.get('d');
      contador.horas = falta.get('h');
      contador.minutos = falta.get('m');
      contador.segundos = falta.get('s');
      
      console.log("Duration",falta.get('Y'),falta.get('M'),falta.get('d'),falta.get('h'),falta.get('m'),falta.get('s'));

    }, 1000);
  };

  let caja;

  onMount(() => {
    eventos.forEach(evento => {
      obtieneFechas(evento.fechaInicio);
    });
  });
</script>

<style>
  .TransmisionIndicador {
    height: auto;
    width: 9rem;
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
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .Led span {
    border-radius: 50%;
    height: 0.75rem;
    width: 0.75rem;
  }
  .EventoEnCurso :global(h5) {
    margin: 0;
  }
  .Espera {
    background-color: var(--theme-alertas-inactivo);
  }
  .EnVivo {
    background-color: var(--theme-alertas-transmitiendo);
  }
</style>

<section class="TransmisionIndicador">
  {#if Array.isArray(eventos)}
    <div class="EstadoIndicador">
      {#if !!estado}
        <Parrafo texto={'En Vivo'} />
        <div class="Led">
          <span class="EnVivo" />
        </div>
      {:else}
        <Parrafo texto={'En Espera'} />
        <div class="Led">
          <span class="Espera" />
        </div>
      {/if}
    </div>
    <!--  -->
    {#if !!estado}
      <ul>
        {#each eventos as evento}
          <li class="EventoEnCurso" bind:this={caja}>
            <Titulo texto={evento.titulo} nivel={5} />
            <div>
              {#if dif > 0}
                <Enlace href={`evento/${evento.slug}`} texto={'Ir ->'} />
              {:else}
                <Parrafo texto={contador.dias} />
              {/if}
            </div>
          </li>
        {/each}
        <!--  -->
      </ul>
    {/if}
  {/if}
</section>
