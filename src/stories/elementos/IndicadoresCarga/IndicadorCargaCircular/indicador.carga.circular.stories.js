import IndicadorCargaCircular from '../../../../elementos/IndicadoresCarga/IndicadorCargaCircular/IndicadorCargaCircular.svelte';

export default { title: 'Elementos/IndicadoresCarga/Circular' }

export const circuloDefault = () => ({
    Component: IndicadorCargaCircular,
});
export const circuloColor = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: 'purple',
    },
});
export const circuloColorFondo = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: '#000',
        colorFondo: '#000'
    },
});
export const circuloColorFondo2 = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: '#FFF',
        colorFondo: '#FFF'
    },
});
export const circuloColorFondo3 = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: 'orange',
        colorFondo: '#000'
    },
});
export const circuloGrande = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: 'gray',
        colorFondo: '#000',
        tamanno: "6rem",
    },
});
export const circuloChico = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: 'gray',
        colorFondo: '#000',
        tamanno: "1rem"
    },
});
export const circuloDelgado = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: 'gray',
        colorFondo: '#000',
        tamanno: "4rem",
        grosor: "0.05rem"
    },
});
export const circuloGrueso = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: 'blue',
        colorFondo: '#000',
        tamanno: "4rem",
        grosor: "1rem"
    },
});