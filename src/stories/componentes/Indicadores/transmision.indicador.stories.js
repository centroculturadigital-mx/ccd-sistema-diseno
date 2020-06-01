import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TransmisionIndicador from '../../../componentes/Indicadores/TransmisionIndicador/TransmisionIndicador.svelte';
import moment from 'moment';

let fecha_pasada = moment().subtract(1, "seconds");
let fecha_1 = moment().add(15, 'seconds');
let fecha_2 = moment().add(30, 'seconds');
let fecha_3 = moment().add(1, 'days');
let fecha_4 = moment().add(15, 'days');

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
            estado: true,
            evento: {
                id: "ID",
                titulo: "Nombre de evento",
                fechaInicio: fecha_pasada,
                slug: "nombre-de-evento",
            }
        }
    }
});
export const transmisionEventoAQuinceSegundos = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            estado: true,
            evento: {
                id: "ID",
                titulo: "Nombre de evento",
                fechaInicio: fecha_1,
                slug: "nombre-de-evento",
            },
        }
    }
});
export const transmisionEventoATreintaSegundos = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            estado: true,
            evento: {
                id: "ID",
                titulo: "Nombre de evento",
                fechaInicio: fecha_2,
                slug: "nombre-de-evento",
            },
        }
    }
});
export const transmisionEventoAUnDia = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            estado: true,
            evento: {
                id: "ID",
                titulo: "Nombre de evento",
                fechaInicio: fecha_3,
                slug: "nombre-de-evento",
            }
        }
    }
});
export const transmisionEventoAQuinceDias = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            estado: true,
            evento: {
                id: "ID",
                titulo: "Nombre de evento",
                fechaInicio: fecha_4,
                slug: "nombre-de-evento",
            },
        }
    }
});