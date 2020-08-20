<script>

import moment from "moment" 

import { onMount } from "svelte"

import Aviso from "../../elementos/texto/Aviso/Aviso";

import CalendarioAnno from "./CalendarioAnno/CalendarioAnno";
import CalendarioMes from "./CalendarioMes/CalendarioMes";
import CalendarioSemana from "./CalendarioSemana/CalendarioSemana";
import CalendarioDia from "./CalendarioDia/CalendarioDia";
import CalendarioCabecera from "./CalendarioCabecera/CalendarioCabecera"

let vistaActual = 1

export let eventos
export let seleccionarMes

const vistaSeleccionar = i => { 
    vistaActual = i
}


let annoActual=moment().year()
let mesActual=moment().month()
let semanaActual=moment().week()
let diaActual=moment().date()


const calcularFecha = ({
    annoActual,
    mesActual,
    diaActual
}) => moment({
    day: diaActual,
    month: mesActual,
    year: annoActual
})




$: fecha = calcularFecha({
    annoActual,
    mesActual,
    diaActual
})




$: vistaMostrar = vistas[vistaActual]




$: vistas = [
    {
        clave: "anno",
        nombre: "Año",
        componente: CalendarioAnno,
        data: {
            accion: seleccionarMesActual,
            fecha,
            eventos
        },
    },
    {
        clave: "mes",
        nombre: "Mes",
        componente: CalendarioMes,
        data: {
            accion: seleccionarDiaActual,
            fecha,
            eventos
        }
    },
    {
        clave: "semana",
        nombre: "Semana",
        componente: CalendarioSemana,
        data: {
            accion: seleccionarDiaActual,
            fecha,
            eventos
        }
    },
    {
        clave: "clave",
        nombre: "Dia",
        componente: CalendarioDia,
        data: {
            fecha,
            eventos
        }
    },
]




const anterior = () => {
    switch( vistaMostrar.clave ) {
        case 'anno': 
            annoActual--
            break;
        case 'mes': 
            mesActual--
            if( mesActual < 0 ) {
                annoActual--
                mesActual = 11
            }
            break;
        case 'semana': 
            semanaActual--
            break;
        case 'dia': 
            diaActual--
            if( diaActual < 0 ) {
                mesActual--
                diaActual = moment({month: mesActual, year: annoActual}).daysInMonth()
            }   
            break;
    }
    console.log("anterior");
}

const siguiente = () => {
    switch( vistaMostrar.clave ) {
        case 'anno': 
            annoActual++
            break;
        case 'mes': 
            mesActual++
            if( mesActual > 11 ) {
                annoActual++
                mesActual = 0
            }            
            break;
        case 'semana': 
            semanaActual++
            break;
        case 'dia': 
            diaActual++
            if( diaActual > moment({month: mesActual, year: annoActual}).daysInMonth() ) {
                mesActual++
                diaActual = 0
            }   
            break;
    }
    console.log("siguiente");
}




let pasos = {
    anterior: {
        nombre: "Anterior",
        accion: anterior
    },
    siguiente: {
        nombre: "Siguiente",
        accion: siguiente
    },

}



const seleccionarAnnoActual = i => {
    
    annoActual = i;

    if( typeof seleccionarAnno == "function" ) {
        seleccionarAnno(i)
    }
}
const seleccionarMesActual = i => {
    
    mesActual = i;

    if( typeof seleccionarMes == "function" ) {
        seleccionarMes(i)
    }
}
const seleccionarSemanaActual = i => {
    
    semanaActual = i;

    if( typeof seleccionarSemana == "function" ) {
        seleccionarSemana(i)
    }
}
const seleccionarDiaActual = i => {
    
    diaActual = i;

    if( typeof seleccionarDia == "function" ) {
        seleccionarDia(i)
    }
}





</script>

<style>

    ul {
        display: flex;
        font-family: var(--theme-textos-parrafo-tipografia);
    }

    li {
        list-style: none;
        font-family: var(--theme-textos-parrafo-tipografia);
    }

    button {
        background: none;
        border: none;
        font-family: var(--theme-textos-parrafo-tipografia);     
    }
    .Vista{
        font-family: var(--theme-textos-parrafo-tipografia);
    }
    h1 {
       font-family: var(--theme-textos-parrafo-tipografia);  
    }
    nav {
        font-family: var(--theme-textos-parrafo-tipografia);
    }


</style>

<section>

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
    {#if !! fecha && vistaMostrar }

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
            titulo={fecha.format("MMMM D, YYYY")}
            rango={fecha.format("MMMM")}
            anterior={pasos.anterior.accion}
            siguiente={pasos.siguiente.accion}
            />

            <svelte:component
                this={vistaMostrar.componente}
                {...vistaMostrar.data}
            />

        </div>

    {:else}
<!-- test -->
        <Aviso/>

    {/if}
</section>
