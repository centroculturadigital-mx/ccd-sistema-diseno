import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TransmisionIndicador from '../../../componentes/Indicadores/TransmisionIndicador/TransmisionIndicador.svelte';
import moment from 'moment';

let fecha_pasada = moment().subtract(1, "minutes");
let fecha_1 = moment().add(15, 'seconds');
let fecha_2 = moment().add(1, 'days');
let fecha_3 = moment().add(15, 'days');

let eventos = [{
        id: "ID",
        titulo: "Evento a quince segundos",
        fechaInicio: fecha_1,
        slug: "nombre-de-evento",
    },
    {
        id: "ID",
        titulo: "Evento a un día",
        fechaInicio: fecha_2,
        slug: "segundo-evento",
    },
    {
        id: "ID",
        titulo: "Evento a quince dias",
        fechaInicio: fecha_3,
        slug: "nombre-de-evento-largo-en-stream",
    },
]

export default { title: "Componentes/Indicadores/TransmisionIndicador" }


export const transmisionNoExiste = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            estado: false
        }
    }
});
export const transmisionEnCurso = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            estado: false,
            eventos: [{
                id: "ID",
                titulo: "Nombre de evento",
                fechaInicio: fecha_pasada,
                slug: "nombre-de-evento",
            }]
        }
    }
});
export const transmisionEventoADiezSegundos = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            eventos: [eventos[0]],
            estado: true,
        }
    }
});
export const transmisionEventoAUnDia = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            eventos: [eventos[1]],
            estado: true,
        }
    }
});
export const transmisionEventoAQuinceDias = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            eventos: [eventos[2]],
            estado: true,
        }
    }
});

// export const transmisionVariosEventosEnCurso = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: TransmisionIndicador,
//         datos: {
//             eventos,
//             estado: true,
//         }
//     }
// });