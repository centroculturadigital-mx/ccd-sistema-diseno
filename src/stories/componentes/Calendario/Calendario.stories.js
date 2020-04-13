import Calendario from '../../../componentes/Calendario/Calendario.svelte';

export default {title: 'Componentes/Calendario/Calendario'}

const eventos = []

const seleccionarMes = i => {
    console.log("Seleccionaste ->", i);    
}

export const FieldDefault = () => ({
    Component: Calendario,
    props: {
        eventos,
        seleccionarMes
    },
});