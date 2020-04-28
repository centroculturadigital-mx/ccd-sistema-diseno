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
export const lineaTamannoGrande = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: 'gray',
        tamanno: "21rem",
    },
});
export const lineaTamannoChico = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: 'gray',
        tamanno: "1rem"
    },
});
export const lineaTamannoDelgado = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: 'gray',
        grosor: "0.1rem"
    },
});
export const lineaGrueso = () => ({
    Component: IndicadorCargaLinea,
    props: {
        color: 'gray',
        grosor: "1rem"
    },
});