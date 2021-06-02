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
            texto: 'Botón',
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
            texto: 'Botón',
            icono: 'mas',
            deshabilitado: true
        }
    },
});

export const botonIconoPrimario = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            variante: 'PRIMARIO',
            icono: 'irIzquierda',
            // texto: 'Botón',
        }
    }
});
export const botonIconoPrimarioConTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            variante: 'PRIMARIO',
            icono: 'irIzquierda',
            texto: 'Botón',
        }
    }
});

export const botonIconoPrimarioDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            variante: 'PRIMARIO',
            icono: 'irIzquierda',
            // texto: 'Botón',
            deshabilitado: true,
        }
    }
});
export const botonIconoSecundario = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            variante: 'SECUNDARIO',
            icono: 'irIzquierda',
            // texto: 'Botón',
        }
    }
});
export const botonIconoSecundarioConTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            variante: 'SECUNDARIO',
            icono: 'irIzquierda',
            texto: 'Botón',
        }
    }
});

export const botonIconoSecundarioDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            variante: 'SECUNDARIO',
            icono: 'irIzquierda',
            // texto: 'Botón',
            deshabilitado: true,
        }
    }
});

export const botonIconoRedondo = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            variante: 'REDONDO',
            icono: 'irIzquierda',
        }
    }
});
export const botonIconoRedondoConTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            variante: 'REDONDO',
            icono: 'irIzquierda',
            texto: 'Botón',
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
            texto: 'Botón',
            deshabilitado: true,
        }
    }
});

export const botonIconoCss = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonIcono,
        datos: {
            texto: 'botón',
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