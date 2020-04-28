import IndicadorCargaCirculo from '../../../../elementos/IndicadoresCarga/IndicadorCargaCirculo/IndicadorCargaCirculo.svelte';

export default { title: 'Elementos/IndicadoresCarga/Circulo' }

export const circuloDefault = () => ({
    Component: IndicadorCargaCirculo,
});
export const circuloColor = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: 'purple',
    },
});
export const circuloTamannoGrande = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: 'gray',
        tamanno: "6rem",
    },
});
export const circuloTamannoChico = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: 'gray',
        tamanno: "1rem"
    },
});
export const circuloTamannoDelgado = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: 'gray',
        tamanno: "4rem",
        grosor: "0.05rem"
    },
});
export const circuloTamannoGrueso = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: 'blue',
        tamanno: "4rem",
        grosor: "1rem"
    },
});