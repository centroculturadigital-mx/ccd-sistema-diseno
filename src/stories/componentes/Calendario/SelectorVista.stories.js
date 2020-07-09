import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import SelectorVista from '../../../componentes/Calendario/SelectorVista/SelectorVista.svelte';

export default { title: 'Componentes/Calendario/Navegacion/SelectorVista' }

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
]

export const calendarioCabeceraDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: SelectorVista,
        datos: {
            opciones: opciones,
            cambiar: () => console.log("Selector"),
        }
    },
});