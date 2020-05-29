import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Calendario from '../../../componentes/Calendario/Calendario.svelte';

import moment from "moment" 

import fechas from "../../../data/info/fechas.json"

export default {title: 'Componentes/Calendario/Calendario'}

let eventos = []


const seleccionarMes=(mes)=>{
    
    eventos = fechas.filter(f=>moment(f.fecha).isBetween(
            moment({month:mes,day:1}).toDate(),
            moment({month:mes,day:moment({month:mes}).daysInMonth()}).toDate(),
        )
    )

}


export const FieldDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Calendario,
        datos: {
        eventos,
        seleccionarMes
    }
    },
});