import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Boton from '../../../elementos/botones/Boton/Boton.svelte';

export default { title: 'Elementos/Botones/Botón' } 


export const botonDefault = () => ({
    Component: ThemeTester, 
    props: {
        componente: Boton,
        datos: {
            texto: 'Botón',
            click: ()=>console.log("click"),
        }
    },
});


export const botonCss = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Boton Bold',
            click: ()=>console.log("click"),
            css: {
                'text-transform': 'uppercase',
                'font-size': '0.5rem',
                'letter-spacing': '3px',
            }
        },
    }
});

export const botonDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Boton Deshabilitado',
            click: ()=>console.log("no debería loggear click"),
            deshabilitado: true
        },
    }
});

export const botonEstilosVariante = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Boton estilos variante',
            click: ()=>console.log("no debería loggear click"),
            variante: "SECUNDARIO"
        },
    }
});