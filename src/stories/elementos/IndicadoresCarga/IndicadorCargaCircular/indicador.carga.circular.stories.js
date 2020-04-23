import IndicadorCargaCircular from '../../../../elementos/IndicadoresCarga/IndicadorCargaCircular/IndicadorCargaCircular.svelte';

export default { title: 'Elementos/IndicadoresCarga/Circular' }

export const CirculoDefault = () => ({
    Component: IndicadorCargaCircular,
    props: {},
});
export const CirculoColor = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: 'purple',
    },
});
export const CirculoColorFondo = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: 'orange',
        colorFondo: '#000'
    },
});
export const CirculoColorTamanno = () => ({
    Component: IndicadorCargaCircular,
    props: {
        color: 'orange',
        colorFondo: '#000',
        tamanno: '0.25rem'
    },
});