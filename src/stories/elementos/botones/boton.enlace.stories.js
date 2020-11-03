import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import BotonEnlace from '../../../elementos/botones/BotonEnlace/BotonEnlace.svelte';

export default { title: 'Elementos/Botones/Botón' } 


export const botonEnlaceDefault = () => ({
    Component: ThemeTester, 
    props: {
        componente: BotonEnlace,
        datos: {
            texto: 'Botón',
            enlace: '/enlace',
            click: ()=>console.log("click"),
        }
    },
});


export const botonEnlaceExterno = () => ({
    Component: ThemeTester, 
    props: {
        componente: BotonEnlace,
        datos: {
            texto: 'Botón',
            enlace: 'https://enlace.com',
            externo: true,
            click: ()=>console.log("click"),
        }
    },
});


export const botonEnlaceCss = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonEnlace,
        datos: {
            texto: 'BotonEnlace Bold',
            enlace: '/enlace',
            css: {
                'text-transform': 'uppercase',
                'font-size': '0.5rem',
                'letter-spacing': '3px',
            }
        },
    }
});

export const botonEnlaceDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonEnlace,
        datos: {
            texto: 'BotonEnlace Deshabilitado',
            enlace: '/enlace',
            deshabilitado: true
        },
    }
});