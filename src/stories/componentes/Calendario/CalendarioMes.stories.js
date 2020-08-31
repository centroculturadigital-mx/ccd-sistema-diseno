import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import CalendarioMes from '../../../componentes/Calendario/CalendarioMes/CalendarioMes.svelte';

import moment from "moment" 

import fechas from "../../../data/info/fechas.json"

export default {title: 'Componentes/Calendario/CalendarioMes'}

let eventos = []


const seleccionar=(dia)=>console.log(dia)


export const FieldDefault = () => ({
    Component: ThemeTester,
    props: {
      componente: CalendarioMes,
      datos: {
          fecha: new Date(),
          // eventos,
          seleccionar
      }
    },
});