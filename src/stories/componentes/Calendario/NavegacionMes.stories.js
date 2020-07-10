import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import NavegacionMes from '../../../componentes/Calendario/Navegacion/NavegacionMes/NavegacionMes.svelte';

export default { title: 'Componentes/Calendario/Navegacion/Mes' }

export const NavegacionMesDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: NavegacionMes,
        datos: {
            // seleccionar: e => {
            //     console.log("e", e);
            // }
        }
    },
});
export const NavegacionMesActual = () => ({
    Component: ThemeTester,
    props: {
        componente: NavegacionMes,
        datos: {
            mesActual: 4
        }
    },
});

export const NavegacionMesSeleccionar = () => ({
    Component: ThemeTester,
    props: {
        componente: NavegacionMes,
        datos: {
            seleccionar: e => {
                console.log("Ejemplo navegación mes");
            }
        }
    },
});