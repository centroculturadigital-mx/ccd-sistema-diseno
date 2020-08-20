import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Calendario from '../../../componentes/Calendario/Calendario.svelte';

import moment from "moment" 

import fechas from "../../../data/info/fechas.json"

export default {title: 'Componentes/Calendario/Calendario'}

let eventos = []


const seleccionar=(fecha)=>{
    
    console.log("seleccionar fecha", fecha);
    
}


export const FieldDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Calendario,
        datos: {
            eventos,
            seleccionar
        }
    },
});