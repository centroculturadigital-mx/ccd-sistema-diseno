import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TransmisionesIndicador from '../../../componentes/Indicadores/TransmisionesIndicador/TransmisionesIndicador.svelte';
import moment from 'moment';

let fecha_pasada = moment().subtract(1, "seconds");
let fecha_1 = moment().add(15, 'seconds');
let fecha_2 = moment().add(30, 'seconds');
let fecha_3 = moment().add(1, 'days');
let fecha_4 = moment().add(15, 'days');

let eventos = [{
        id: "ID",
        titulo: "Yami Ichi",
        fechaInicio: fecha_pasada,
        slug: "nombre-de-evento",
    },
    {
        id: "ID",
        titulo: "Nombre evento quince segundos",
        fechaInicio: fecha_1,
        slug: "nombre-de-evento",
    },
    {
        id: "ID",
        titulo: "Algorave",
        fechaInicio: fecha_2,
        slug: "segundo-evento",
    },
    {
        id: "ID",
        titulo: "Yami Ichi",
        fechaInicio: fecha_3,
        slug: "nombre-de-evento-largo-en-stream",
    },
    {
        id: "ID",
        titulo: "Nombre de evento",
        fechaInicio: fecha_4,
        slug: "nombre-de-evento-largo-en-stream",
    },
]

export default { title: "Componentes/Indicadores/TransmisionesIndicador" }

export const transmisionesNoExistentes = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionesIndicador,
        datos: {
            estado: false,
        }
    }
});
export const transmisionesVariosEventosEnCurso = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionesIndicador,
        datos: {
            estado: true,
            eventos,
        }
    }
});