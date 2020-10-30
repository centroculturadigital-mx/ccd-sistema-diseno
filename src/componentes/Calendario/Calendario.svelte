<script>
  import moment from "moment";

  import { onMount } from "svelte";

  import Aviso from "../../elementos/texto/Aviso/Aviso";

  import CalendarioAnno from "./CalendarioAnno/CalendarioAnno";
  import CalendarioMes from "./CalendarioMes/CalendarioMes";
  import CalendarioSemana from "./CalendarioSemana/CalendarioSemana";
  import CalendarioDia from "./CalendarioDia/CalendarioDia";
  import CalendarioCabecera from "./CalendarioCabecera/CalendarioCabecera";

  moment.locale("es_MX");


  let vistaActual = 1;

  export let seleccionar;
  export let eventos;
  export let configuracion;
  export let fecha;


  // TODO: implementar deshabilitado
  // export let deshabilitado


  let seleccionActual = {}
  let seleccionActualValor

  let configuracionDefault = {
    acciones: {
      seleccionar: {
        dia: true,
        mes: false
      }
    }
  };



  const selecciones = {
      mes: () => {
        // seleccionarMesActual(?)
        seleccionar && seleccionar.mes(fechaLocal.set("date", 1).toDate());
      },
      dia: i => {
        seleccionarDiaActual(i);
        setTimeout(()=>{
          seleccionar(fechaLocal.toDate())
        })
      },
  }



  // const hidratarConfiguracion = configuracion => {};

  $: configuracion = {
    ...configuracionDefault,
    ...configuracion ? configuracion : {}
  };


  const desseleccionar = () => {
    diaActual = null;
    semanaActual = null;
    mesActual = null;
    annoActual = null;
  };

  const vistaSeleccionar = i => {
    vistaActual = i;
    seleccionActual = null
  };



  let annoActual = moment().year();
  let mesActual = moment().month();
  let semanaActual = moment().week();
  let diaActual = moment().date();

  const recibirFecha = fecha => {
    annoActual = moment(fecha).year();
    mesActual = moment(fecha).month();
    diaActual = moment(fecha).date();

    // TODO: Actualmente solamente soporta Calendario mes:
    seleccionActualValor = diaActual

  }

  $: recibirFecha(fecha)

  $: fechaLocal = moment({
    year: annoActual,
    month: mesActual,
    day: diaActual
  });


  $: vistaMostrar = {
    ...vistas[vistaActual],
    data: {
      ...vistas[vistaActual].data,
      seleccion: seleccionActualValor
    },
  };

  // $: acciones = { ...seleccionar }


  $: vistas = [
    {
      clave: "anno",
      nombre: "Año",
      componente: CalendarioAnno,
      data: {
        // accion: seleccionarAnnoActual,
        fecha: fechaLocal,
        eventos
      }
    },
    {
      clave: "mes",
      nombre: "Mes",
      componente: CalendarioMes,
      calcularTitulo: fecha => fechaLocal.format('MMMM YYYY'),
      seleccionar: configuracion && configuracion.acciones.seleccionar.mes && (i=>seleccionarMesActual(i)),
      data: {
        // accion: seleccionarMesActual,
        fecha: fechaLocal,
        seleccionar: configuracion.acciones.seleccionar.dia && selecciones.dia,
        eventos
      }
    },
    {
      clave: "semana",
      nombre: "Semana",
      componente: CalendarioSemana,
      data: {
        accion: seleccionar,
        fecha: fechaLocal,
        eventos
      }
    },
    {
      clave: "clave",
      nombre: "Dia",
      componente: CalendarioDia,
      seleccionar: configuracion.acciones.seleccionar.dia && selecciones.dia,
      data: {
        accion: seleccionar,
        fecha: fechaLocal,
        eventos
      }
    }
  ];



  let pasos = {
    anterior: {
      nombre: "Anterior",
      accion: () => {
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
            seleccionarMesActual(mesActual);
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
      }
    },
    siguiente: {
      nombre: "Siguiente",
      accion: () => {
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
      }
    }
  };

  // const llamarAccion = (inicio, final) => {


  //   if (typeof seleccionar == "function") {
  //     let inicio = moment({
  //         year: annoActual,
  //         month: mesActual,
  //         date: diaActual,
  //     })

  //     let final

  //     switch( vistaActual ) {
  //         case 0:
  //             final = {
  //                 anno: annoActual+1,
  //                 mes,
  //                 dia: 1
  //             }
  //             break;
  //         case 1:

  //             // inicio.set("date",1)

  //             final = {
  //                 anno: annoActual,
  //                 mes: mesActual,
  //                 dia: moment({month:mesActual}).daysInMonth
  //             }
  //             break;
  //     }

  //     final = calcularFecha(final).toDate();

  //     seleccionar({
  //       inicio: inicio.toDate(),
  //       final
  //     });
  //   }
  // };

  const seleccionarAnnoActual = i => {
    annoActual = i;
    // llamarAccion();
  };
  const seleccionarMesActual = i => {
    mesActual = i;
    seleccionActualValor = null
    diaActual = null
    // llamarAccion()
  };
  const seleccionarSemanaActual = i => {
    semanaActual = i;
    // llamarAccion();
  };
  const seleccionarDiaActual = i => {
    
    diaActual = i;
    seleccionActual.dia = diaActual
    seleccionActualValor = diaActual

    // llamarAccion();
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
    font-family: var(--thee-textos-parrafo-tipografia);
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


  input.oculto {
    /* visibility: hidden; */
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
  {#if !!fechaLocal && vistaMostrar}
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
        titulo={vistaMostrar.calcularTitulo(fechaLocal)}
        vista={vistaMostrar.nombre}
        seleccionar={vistaMostrar.seleccionar}
        rango={fechaLocal.format('MMMM')}
        anterior={pasos.anterior.accion}
        siguiente={pasos.siguiente.accion} />

      <svelte:component this={vistaMostrar.componente} {...vistaMostrar.data} />

    </div>
  {:else}
    <!-- test -->
    <Aviso />
  {/if}

</section>
