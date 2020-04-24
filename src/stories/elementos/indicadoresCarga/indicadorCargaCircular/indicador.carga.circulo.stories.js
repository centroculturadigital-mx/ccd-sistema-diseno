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
export const circuloColorFondo = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: '#000',
        colorFondo: '#000'
    },
});
export const circuloColorFondo2 = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: '#FFF',
        colorFondo: '#FFF'
    },
});
export const circuloColorFondo3 = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: 'orange',
        colorFondo: '#000'
    },
});
export const circuloTamannoGrande = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: 'gray',
        colorFondo: '#000',
        tamanno: "6rem",
    },
});
export const circuloTamannoChico = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: 'gray',
        colorFondo: '#000',
        tamanno: "1rem"
    },
});
export const circuloTamannoDelgado = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: 'gray',
        colorFondo: '#000',
        tamanno: "4rem",
        grosor: "0.05rem"
    },
});
export const circuloTamannoGrueso = () => ({
    Component: IndicadorCargaCirculo,
    props: {
        color: 'blue',
        colorFondo: '#000',
        tamanno: "4rem",
        grosor: "1rem"
    },
});