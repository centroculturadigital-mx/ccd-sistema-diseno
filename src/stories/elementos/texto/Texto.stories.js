import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Texto from '../../../elementos/texto/Texto/Texto.svelte';

export default { title: 'Elementos/Texto/Texto' }

export const textoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto Default',
        },
    },
});

export const textoBold = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto Bold',
            estilos: [
                "bold"
            ]
        },
    }
});

export const textoCss = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto Bold',
            css: {
                'text-transform': 'uppercase',
                'font-size': '0.5rem',
                'letter-spacing': '3px',
            }
        },
    }
});

export const textoItalic = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto Italic',
            estilos: [
                "italic"
            ]
        },
    },
});

export const textoBoldItalic = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto Bold Italic',
            estilos: [
                "bold",
                "italic",
            ]
        },
    }
});

export const textoSubrayado = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto Subrayado',
            estilos: [
                "underline",
            ]
        },
    }
});

export const textoTachado = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto Tachado',
            estilos: [
                "strikethrough",
            ]
        },
    }
});

export const textoVarianteNormal = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto con variante',
            variante: "NORMAL",
        },
    }
});
export const textoVarianteAuxiliar = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto con variante',
            variante: "AUXILIAR",
            // variante: "SECUNDARIO",
        },
    }
});
export const textoVarianteSecundario = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto con variante',
            variante: "SECUNDARIO",
        },
    }
});

export const textoTodos = () => ({
    Component: ThemeTester,
    props: {
        componente: Texto,
        datos: {
            texto: 'Texto Todos',
            estilos: [
                "bold",
                "italic",
                "underline",
                "strikethrough",
            ]
        },
    }
});