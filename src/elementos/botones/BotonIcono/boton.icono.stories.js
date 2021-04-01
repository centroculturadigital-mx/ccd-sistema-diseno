import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import BotonIcono from './BotonIcono.svelte';

export default {
    title: 'Elementos/Botones/BotonIcono'
}

export const botonIconoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            texto: 'Texto de botón',
            icono: 'mas',
            click: () => console.log("click")
        }
    },
});

export const botonIconoDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            texto: 'Texto de botón',
            icono: 'mas',
            deshabilitado: true
        }
    },
});

export const varianteRedondo = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            variante: 'REDONDO',
            icono: 'irDerecha',
            texto: 'Texto de Botón',
        }
    }
});
export const varianteRedondoDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            variante: 'REDONDO',
            icono: 'irIzquierda',
            texto: 'Texto de Botón',
            deshabilitado: true,
        }
    }
});
// export const botonIconoSinTexto = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: BotonIcono,
//         datos: {
//             icono: 'cerrar'
//         }
//     },
// });
// export const botonIconoSinIcono = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: BotonIcono,
//         datos: {
//             texto: 'Texto de botón'
//         }
//     },
// });
// export const botonIconoBorde = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: BotonIcono,
//         datos: {
//             texto: 'Texto de botón',
//             icono: 'cerrar',
//             borde: true
//         }
//     },
// });





// export const botonIconoCss = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: BotonIcono,
//         datos: {
//             texto: 'Texto de botón',
//             icono: 'cerrar',
//             css: {
//                 'text-transform': 'uppercase',
//                 'font-size': '0.5rem',
//                 'letter-spacing': '3px',
//                 'background': "#fa0"
//             }
//         },
//     }
// });