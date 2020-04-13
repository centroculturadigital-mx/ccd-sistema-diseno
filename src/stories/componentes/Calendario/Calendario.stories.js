import Calendario from '../../../componentes/Calendario/Calendario.svelte';

export default {title: 'Componentes/Calendario/Calendario'}

const eventos = []

export const FieldDefault = () => ({
    Component: Calendario,
    props: {
        eventos
    },
});