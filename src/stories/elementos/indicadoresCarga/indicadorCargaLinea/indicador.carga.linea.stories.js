import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import IndicadorCargaLinea from '../../../../elementos/IndicadoresCarga/IndicadorCargaLinea/IndicadorCargaLinea.svelte';

export default { title: 'Elementos/IndicadoresCarga/Linea' }

export const lineaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: IndicadorCargaLinea,
    }
});
export const lineaColor = () => ({
    Component: ThemeTester,
    props: {
        componente: IndicadorCargaLinea,
        datos: {
            estilos: {
                color: 'purple',
            }
        },
    },
});
export const lineaTamanno = () => ({
    Component: ThemeTester,
    props: {
        componente: IndicadorCargaLinea,
        datos: {
            estilos: {
                tamanno: "21rem",
            },
        },
    },
});

export const lineaTamannoDelgado = () => ({
    Component: ThemeTester,
    props: {
        componente: IndicadorCargaLinea,
        datos: {
            estilos: {
                grosor: "0.1rem"
            },
        },
    },
});