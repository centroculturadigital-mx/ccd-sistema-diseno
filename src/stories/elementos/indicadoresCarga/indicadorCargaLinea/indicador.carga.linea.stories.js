import IndicadorCargaLinea from '../../../../elementos/IndicadoresCarga/IndicadorCargaLinea/IndicadorCargaLinea.svelte';

export default { title: 'Elementos/IndicadoresCarga/Linea' }

export const lineaDefault = () => ({
    Component: IndicadorCargaLinea,
});
export const lineaColor = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: 'purple',
    },
});
export const lineaColorFondo = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: '#000',
        colorFondo: '#000'
    },
});
export const lineaColorFondo2 = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: '#FFF',
        colorFondo: '#FFF'
    },
});
export const lineaColorFondo3 = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: 'orange',
        colorFondo: '#000'
    },
});
export const lineaTamannoGrande = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: 'gray',
        colorFondo: '#000',
        tamanno: "21rem",
    },
});
export const lineaTamannoChico = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: 'gray',
        colorFondo: '#000',
        tamanno: "1rem"
    },
});
export const lineaTamannoDelgado = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: 'gray',
        colorFondo: '#000',
        grosor: "0.05rem"
    },
});
export const lineaGrueso = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: 'gray',
        colorFondo: '#000',
        grosor: "1rem"
    },
});