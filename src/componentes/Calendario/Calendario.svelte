<script>
  import moment from "moment";

  import { onMount } from "svelte";

  import Aviso from "../../elementos/texto/Aviso/Aviso";

  import CalendarioAnno from "./CalendarioAnno/CalendarioAnno";
  import CalendarioMes from "./CalendarioMes/CalendarioMes";
  import CalendarioSemana from "./CalendarioSemana/CalendarioSemana";
  import CalendarioDia from "./CalendarioDia/CalendarioDia";
  import CalendarioCabecera from "./CalendarioCabecera/CalendarioCabecera";

  let vistaActual = 1;

  export let seleccionar;
  export let eventos;

  moment.locale("es_MX");

  const desseleccionar = () => {
    diaActual = null;
    semanaActual = null;
    mesActual = null;
    annoActual = null;
  };

  const vistaSeleccionar = i => {
    vistaActual = i;
  };

  let annoActual = moment().year();
  let mesActual = moment().month();
  let semanaActual = moment().week();
  let diaActual = moment().date();

  const calcularFecha = ({ anno, mes, dia }) =>
    moment({
      day: dia,
      month: mes,
      year: anno
    });

  $: fecha = calcularFecha({
    anno: annoActual,
    mes: mesActual,
    dia: diaActual
  });

  $: vistaMostrar = vistas[vistaActual];

  // $: acciones = { ...seleccionar }

  $: vistas = [
    {
      clave: "anno",
      nombre: "Año",
      componente: CalendarioAnno,
      data: {
        // accion: seleccionarAnnoActual,
        fecha,
        eventos
      }
    },
    {
      clave: "mes",
      nombre: "Mes",
      componente: CalendarioMes,
      data: {
        // accion: seleccionarMesActual,
        fecha,
        seleccionar: {
          dia: i => {
            seleccionarDiaActual(i);
            seleccionar.dia(i);
          },
          mes: () => {
            llamarAccion();
            seleccionar.mes(fecha.set("date", 1).toDate());
          }
        },
        eventos
      }
    },
    {
      clave: "semana",
      nombre: "Semana",
      componente: CalendarioSemana,
      data: {
        accion: seleccionar,
        fecha,
        eventos
      }
    },
    {
      clave: "clave",
      nombre: "Dia",
      componente: CalendarioDia,
      data: {
        accion: seleccionar,
        fecha,
        eventos
      }
    }
  ];

  const anterior = () => {
    switch (vistaMostrar.clave) {
      case "anno":
        annoActual--;
        break;
      case "mes":
        mesActual--;
        if (mesActual < 0) {
          annoActual--;
          mesActual = 11;
        }
        break;
      case "semana":
        semanaActual--;
        break;
      case "dia":
        diaActual--;
        if (diaActual < 0) {
          mesActual--;
          diaActual = moment({
            month: mesActual,
            year: annoActual
          }).daysInMonth();
        }
        break;
    }
  };

  const siguiente = () => {
    switch (vistaMostrar.clave) {
      case "anno":
        annoActual++;
        seleccionarAnnoActual(annoActual);
        break;
      case "mes":
        mesActual++;
        if (mesActual > 11) {
          annoActual++;
          mesActual = 0;
        }
        seleccionarMesActual(mesActual);
        break;
      case "semana":
        semanaActual++;
        seleccionarSemanaActual(semanaActual);
        break;
      case "dia":
        diaActual++;
        if (
          diaActual >
          moment({ month: mesActual, year: annoActual }).daysInMonth()
        ) {
          mesActual++;
          diaActual = 0;
        }
        seleccionarDiaActual(diaActual);
        break;
    }
  };

  let pasos = {
    anterior: {
      nombre: "Anterior",
      accion: anterior
    },
    siguiente: {
      nombre: "Siguiente",
      accion: siguiente
    }
  };

  const llamarAccion = (inicio, final) => {
    if (typeof seleccionar == "function") {
      // let inicio = {
      //     anno: annoActual,
      //     mes: mesActual,
      //     dia: diaActual,
      // }

      // let final

      // switch( vistaActual ) {
      //     case 0:
      //         final = {
      //             anno: annoActual+1,
      //             mes,
      //             dia: 1
      //         }
      //         break;
      //     case 1:

      //         inicio.dia = 1;

      //         final = {
      //             anno: annoActual,
      //             mes: mesActual,
      //             dia: moment({month:mesActual}).daysInMonth
      //         }
      //         break;
      // }

      final = calcularFecha(final).toDate();

      seleccionar({
        inicio,
        final
      });
    }
  };

  const seleccionarAnnoActual = i => {
    annoActual = i;
    llamarAccion();
  };
  const seleccionarMesActual = i => {
    mesActual = i;
    // llamarAccion()
  };
  const seleccionarSemanaActual = i => {
    semanaActual = i;
    llamarAccion();
  };
  const seleccionarDiaActual = i => {
    diaActual = i;
    llamarAccion();
  };
</script>

<style>
  .Calendario {
    padding: calc(var(--theme-espaciados-padding) * 2);
    /* height: 100%;
    width: 100%; */
    box-sizing: border-box;
  }
  .Calendario :global(li) {
    cursor: pointer;
  }
  .Calendario :global(li:hover) {
    opacity: 0.75;
  }
  ul {
    display: flex;
    font-family: var(--theme-textos-parrafo-tipografia);
    box-sizing: border-box;
  }

  li {
    list-style: none;
    font-family: var(--theme-textos-parrafo-tipografia);
    box-sizing: border-box;
  }

  button {
    background: none;
    border: none;
    font-family: var(--theme-textos-parrafo-tipografia);
  }
  .Vista {
    font-family: var(--theme-textos-parrafo-tipografia);
  }
  h1 {
    font-family: var(--theme-textos-parrafo-tipografia);
  }
  nav {
    font-family: var(--theme-textos-parrafo-tipografia);
  }
</style>

<section class="Calendario">

  <!-- <nav>
        <ul>
        {#each vistas as vista, i ("vista_+i")}
            <li on:click={(e)=>vistaSeleccionar(i)}>
                <button>
                    { vista.nombre }
                </button>
            </li>
        {/each}
        </ul>
    </nav> -->
  {#if !!fecha && vistaMostrar}
    <div class="Vista">
      <!-- <header>

            <nav>
                <ul>
                    <li on:click={pasos.anterior.accion}>
                        <button>
                            { pasos.anterior.nombre }
                        </button>
                    </li>
                    <li on:click={pasos.siguiente.accion}>
                        <button>
                            { pasos.siguiente.nombre }
                        </button>
                    </li>
                </ul>
            </nav>
            </header> -->

      <CalendarioCabecera
        titulo={fecha.format('MMMM D, YYYY')}
        vista={vistaMostrar.nombre}
        seleccionar={vistaMostrar.data.seleccionar[vistaMostrar.clave]}
        rango={fecha.format('MMMM')}
        anterior={pasos.anterior.accion}
        siguiente={pasos.siguiente.accion} />

      <svelte:component this={vistaMostrar.componente} {...vistaMostrar.data} />

    </div>
  {:else}
    <!-- test -->
    <Aviso />
  {/if}
</section>
