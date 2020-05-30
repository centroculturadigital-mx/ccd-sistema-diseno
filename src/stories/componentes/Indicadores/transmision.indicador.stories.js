import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TransmisionIndicador from '../../../componentes/Indicadores/TransmisionIndicador/TransmisionIndicador.svelte';

let eventos = [{
        id: "ID",
        titulo: "Cinco Meses",
        fechaInicio: "2020-10-29T15:24:31.2311892-06:00",
        slug: "nombre-de-evento",
    },
    {
        id: "ID",
        titulo: "Seis Meses",
        fechaInicio: "2020-11-29T15:24:31.2311892-06:00",
        slug: "segundo-evento",
    },
    {
        id: "ID",
        titulo: "A un año del evento",
        fechaInicio: "2021-09-29T15:24:31.2311892-06:00",
        slug: "nombre-de-evento-largo-en-stream",
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
                titulo: "A un Mes",
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