import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import BotonIcono from '../../../elementos/botones/BotonIcono/BotonIcono.svelte';

export default { title: 'Elementos/Botones/BotonIcono' }

export const botonIconoDefaul = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            texto: 'Botón Ícono',
            icono: 'cerrar'
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
export const botonIconoSinBorde = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            texto: 'Boton solo texto',
            icono: 'cerrar',
            borde: false
        }
    },
});