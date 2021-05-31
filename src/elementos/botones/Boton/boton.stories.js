import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Boton from './Boton.svelte';

export default { title: 'Elementos/Botones/Botón' }


export const botonDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Botón',
            click: () => console.log("click"),
        }
    },
});
export const botonTextoLargo = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Esto es un texto largo de Botón',
            click: () => console.log("click"),
        }
    },
});

export const botonDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Botón',
            click: () => console.log("no debería loggear click"),
            deshabilitado: true
        },
    }
});

export const botonVarianteSecundario = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            variante: 'SECUNDARIO',
            texto: 'Botón',
        }
    }
});

export const botonSecundarioTextoLargo = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Texto largo de Botón variante secundario',
            variante: "SECUNDARIO",
            click: () => console.log("click"),
        }
    },
});

export const varianteSecundarioDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            variante: 'SECUNDARIO',
            texto: 'Botón',
            deshabilitado: true
        },
    }
});

export const botonVarianteEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            variante: 'ENLACE',
            texto: 'Botón',
        }
    }
});

export const botonEnlaceTextoLargo = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Texto largo de Botón que parece enlace',
            variante: "ENLACE",
            click: () => console.log("click"),
        }
    },
});

export const varianteEnlaceDeshabilitado = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            variante: 'ENLACE',
            texto: 'Botón',
            deshabilitado: true
        },
    }
});

export const botonConCSS = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Texto de Botón',
            click: () => console.log("click"),
            css: {
                'text-transform': 'uppercase',
                'font-size': '0.5rem',
                'letter-spacing': '3px',
            }
        },
    }
});