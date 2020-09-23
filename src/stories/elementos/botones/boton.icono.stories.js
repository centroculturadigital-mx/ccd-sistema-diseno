import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import BotonIcono from '../../../elementos/botones/BotonIcono/BotonIcono.svelte';

export default { title: 'Elementos/Botones/BotonIcono' }

export const botonIconoDefaul = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            texto: 'Botón Ícono',
            icono: 'cerrar',
            click: () => console.log("click")
        }
    },
});
export const botonIconoSinTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            icono: 'cerrar'
        }
    },
});
export const botonIconoSinIcono = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            texto: 'Boton solo texto'
        }
    },
});
export const botonIconoBorde = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            texto: 'Boton solo texto',
            icono: 'cerrar',
            borde: true
        }
    },
});





export const botonIconoCss = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            texto: 'Boton Icono Bold',
            icono: 'cerrar',
            css: {
                'text-transform': 'uppercase',
                'font-size': '0.5rem',
                'letter-spacing': '3px',
                'background': "#fa0"
            }
        },
    }
});
