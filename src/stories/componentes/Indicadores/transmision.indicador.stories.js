import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TransmisionIndicador from '../../../componentes/Indicadores/TransmisionIndicador/TransmisionIndicador.svelte';

let eventos = [{
    nombre: "Nombre evento",
    transmisión: "",
    descripción: "",
    fecha: "",
    fecha: "",
    imagen: "",
    participantes: "",
    partes: {
        nombre: "Nombre parte evento",
        descripción: "",
        participantes: "",
        tipo: {
            estado: "en curso",
            nombre: "Nombre tipo de evento",
            transmisión: "",
            descripción: "",
            fechaInicio: "",
            fechaFinal: "",
            imagen: "",
            participantes: "",

        },
    },

}, ]

export default { title: "Componentes/Indicadores/TransmisionIndicador" }


export const transmisionDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {}
    }
});
export const transmisionEventoEnCurso = () => ({
    Component: ThemeTester,
    props: {
        componente: TransmisionIndicador,
        datos: {
            eventos
        }
    }
});