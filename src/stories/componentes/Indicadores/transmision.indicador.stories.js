import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TransmisionIndicador from '../../../componentes/Indicadores/TransmisionIndicador/TransmisionIndicador.svelte';

let eventos = [{
        id: "ID",
        titulo: "Nombre de Evento",
        fechaInicio: "2020-10-29T15:24:31.2311892-06:00",
    },
    {
        id: "ID",
        titulo: "Segundo evento",
        fechaInicio: "2020-11-29T15:24:31.2311892-06:00",
    },
    {
        id: "ID",
        titulo: "Nombre de evento largo en tiempo real",
        fechaInicio: "2021-09-29T15:24:31.2311892-06:00",
    },
]

export default { title: "Componentes/Indicadores/TransmisionIndicador" }


export const transmisionDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            estado: false
        }
    }
});
export const transmisionEventoEnCurso = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            eventos: [{
                id: "ID",
                titulo: "Nombre de Evento",
                fechaInicio: "2020-06-29T15:24:31.2311892-06:00",
            }],
            estado: true,
        }
    }
});

export const transmisionEventosEnCurso = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            eventos,
            estado: true,
        }
    }
});