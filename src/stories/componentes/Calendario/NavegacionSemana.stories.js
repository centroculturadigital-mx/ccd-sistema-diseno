import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import NavegacionSemana from '../../../componentes/Calendario/Navegacion/NavegacionSemana/NavegacionSemana.svelte';

export default { title: 'Componentes/Calendario/Navegacion/Semana' }

export const navegacionSemanaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: NavegacionSemana,
        datos: {
            // seleccionar: e => {
            //     console.log("e", e);
            // }
        }
    },
});

// export const navegacionSemanaActual = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: NavegacionSemana,
//         datos: {
//             mesActual: 4
//         }
//     },
// });

// export const navegacionSemanaSeleccionar = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: NavegacionSemana,
//         datos: {
//             seleccionar: e => {
//                 console.log("Ejemplo navegación mes");
//             }
//         }
//     },
// });