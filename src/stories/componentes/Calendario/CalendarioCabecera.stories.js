import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import CalendarioCabecera from '../../../componentes/Calendario/CalendarioCabecera/CalendarioCabecera.svelte';

export default { title: 'Componentes/Calendario/Cabecera' }

export const calendarioCabeceraDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: CalendarioCabecera,
        datos: {

        }
    },
});