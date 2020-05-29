import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TransmisionIndicador from '../../../componentes/Indicadores/TransmisionIndicador/TransmisionIndicador.svelte';

let eventos = [{
        id: "ID",
        titulo: "Nombre de Evento",
        fechaInicio: "YYY:MM:DD? (ISO DATE)",
    },
    {
        id: "ID",
        titulo: "Segundo evento",
        fechaInicio: "YYY:MM:DD? (ISO DATE)",
    },
    {
        id: "ID",
        titulo: "Nombre de evento largo en tiempo real",
        fechaInicio: "YYY:MM:DD? (ISO DATE)",
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
                fechaInicio: "YYY:MM:DD? (ISO DATE)",
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