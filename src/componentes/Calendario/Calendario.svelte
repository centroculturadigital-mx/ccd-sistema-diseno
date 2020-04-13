<script>

import moment from "moment" 


import Aviso from "../../elementos/texto/Aviso/Aviso";

import CalendarioAnno from "./CalendarioAnno/CalendarioAnno";
import CalendarioMes from "./CalendarioMes/CalendarioMes";
import CalendarioSemana from "./CalendarioSemana/CalendarioSemana";
import CalendarioDia from "./CalendarioDia/CalendarioDia";

let vistaActual = 0

export let seleccionarMes

const vistaSeleccionar = i => { 
    vistaActual = i
}


$: vistaMostrar = vistas[vistaActual]



let annoActual=moment().year()
let mesActual=moment().month()
let semanaActual=moment().week()
let diaActual=moment().date()

$: fecha = moment({
    day: diaActual,
    month: mesActual,
    year: annoActual
})




$: vistas = [
    {
        clave: "anno",
        nombre: "Año",
        componente: CalendarioAnno,
        data: {
            accion: seleccionarMesActual,
            fecha
        },
    },
    {
        clave: "mes",
        nombre: "Mes",
        componente: CalendarioMes,
        data: {
            accion: seleccionarSemanaActual,
            fecha
        }
    },
    {
        clave: "semana",
        nombre: "Semana",
        componente: CalendarioSemana,
        data: {
            accion: seleccionarDiaActual,
            fecha
        }
    },
    {
        clave: "clave",
        nombre: "Dia",
        componente: CalendarioDia,
        data: {
            fecha
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
            break;
        case 'semana': 
            semanaActual--
            break;
        case 'dia': 
            diaActual--
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
            break;
        case 'semana': 
            semanaActual++
            break;
        case 'dia': 
            diaActual++
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
    }

    li {
        list-style: none
    }

    button {
        background: none;
        border: none;
    }
</style>

<h1>Calendario</h1>

<nav>
    <ul>
    {#each vistas as vista, i ("vista_+i")}
        <li on:click={(e)=>vistaSeleccionar(i)}>
            <button>
                { vista.nombre }
            </button>
        </li>
    {/each}
    </ul>
</nav>

{#if vistaMostrar }

    <div class="Vista">

        <header>

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
        </header>

        <svelte:component
            this={vistaMostrar.componente}
            {...vistaMostrar.data}
        />

    </div>

{:else}

    <Aviso/>

{/if}