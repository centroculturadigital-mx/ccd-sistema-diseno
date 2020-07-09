import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import CalendarioCabecera from '../../../componentes/Calendario/CalendarioCabecera/CalendarioCabecera.svelte';

export default { title: 'Componentes/Calendario/Cabecera' }

const opciones = [{
        valor: 'dia',
        texto: 'Día'
    },
    {
        valor: 'mes',
        texto: 'Mes'
    },
    {
        valor: 'año',
        texto: 'Año'
    }
];

export const calendarioCabeceraDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: CalendarioCabecera,
        datos: {
            titulo: "Título de la sección",
            anterior: () => console.log("Cabecera Regesa"),
            siguiente: () => console.log("Cabecera Avanza"),
            opciones,
        }
    },
});