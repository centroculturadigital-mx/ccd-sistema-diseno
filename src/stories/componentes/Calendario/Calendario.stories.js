import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Calendario from '../../../componentes/Calendario/Calendario.svelte';

import moment from "moment"

import fechas from "../../../data/info/fechas.json"

export default { title: 'Componentes/Calendario/Calendario' }

let eventos = []


const seleccionar = {
    dia: (fecha) => console.log("seleccionar dia", fecha),
    semana: (fecha) => console.log("seleccionar semana", fecha),
    mes: (fecha) => console.log("seleccionar mes", fecha),
    anno: (fecha) => console.log("seleccionar anno", fecha),
}

export const calendarioDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Calendario,
        datos: {
            eventos,
            seleccionar
        }
    },
});

export const calendarioSeleccionarMes = () => ({
    Component: ThemeTester,
    props: {
        componente: Calendario,
        datos: {
            eventos,
            seleccionar,
            configuracion: {
                acciones: {
                    seleccionar: {
                        dia: true,
                        mes: true,
                    }
                }
            },
        }
    },
});