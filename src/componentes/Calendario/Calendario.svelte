<script>

import moment from "moment" 

import Aviso from "../../elementos/texto/Aviso/Aviso";

import CalendarioAnno from "./CalendarioAnno/CalendarioAnno";
import CalendarioMes from "./CalendarioMes/CalendarioMes";
import CalendarioSemana from "./CalendarioSemana/CalendarioSemana";
import CalendarioDia from "./CalendarioDia/CalendarioDia";

let vistaActual = 0

const vistaSeleccionar = i => { 
    vistaActual = i
}


$: vistaMostrar = vistas[vistaActual]




const anterior = () => console.log("anterior");

const siguiente = () => console.log("siguiente");



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


let vistas = [
    {
        nombre: "Año",
        componente: CalendarioAnno,
        data: {
            anno: moment(new Date()).format("YYYY")
        }
    },
    {
        nombre: "Mes",
        componente: CalendarioMes,
        data: {
            anno: moment(new Date()).format("MM")
        }
    },
    {
        nombre: "Semana",
        componente: CalendarioSemana,
        data: {
            anno: moment(new Date()).format("WW")
        }
    },
    {
        nombre: "Dia",
        componente: CalendarioDia,
        data: {
            anno: moment(new Date()).format("DD")
        }
    },
]


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

        <svelte:component this={vistaMostrar.componente}/>

    </div>

{:else}

    <Aviso/>

{/if}