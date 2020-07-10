import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import NavegacionPasos from '../../../componentes/Calendario/Navegacion/NavegacionPasos/NavegacionPasos.svelte';

import moment from 'moment';

export default { title: 'Componentes/Calendario/Navegacion/Pasos' }

export const calendarioCabeceraDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: NavegacionPasos,
        datos: {
            rangoVista: moment().format("MMMM YYYY"),
            rangoAccion: () => console.log("RANGO"),
            anterior: () => console.log("ANTERIOR"),
            siguiente: () => console.log("REGRESA"),
        }
    },
});