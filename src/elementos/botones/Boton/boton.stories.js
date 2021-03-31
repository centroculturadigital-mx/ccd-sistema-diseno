import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Boton from './Boton.svelte';

export default { title: 'Elementos/Botones/Botón' }


export const botonDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Texto de Botón',
            click: () => console.log("click"),
        }
    },
});

export const botonDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Texto de Botón',
            click: () => console.log("no debería loggear click"),
            deshabilitado: true
        },
    }
});

export const varianteSecundario = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            variante: 'SECUNDARIO',
            texto: 'Texto de Botón',
        }
    }
})

export const varianteSecundarioDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            variante: 'SECUNDARIO',
            texto: 'Texto de Botón',
            deshabilitado: true
        },
    }
});

// export const botonCss = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: Boton,
//         datos: {
//             texto: 'Texto de Botón',
//             click: () => console.log("click"),
//             css: {
//                 'text-transform': 'uppercase',
//                 'font-size': '0.5rem',
//                 'letter-spacing': '3px',
//             }
//         },
//     }
// });