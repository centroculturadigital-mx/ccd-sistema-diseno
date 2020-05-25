import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import IndicadorCargaCirculo from '../../../../elementos/IndicadoresCarga/IndicadorCargaCirculo/IndicadorCargaCirculo.svelte';

export default { title: 'Elementos/IndicadoresCarga/Circulo' }

export const circuloDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: IndicadorCargaCirculo,
    }
});
export const circuloColor = () => ({
    Component: ThemeTester,
    props: {
        componente: IndicadorCargaCirculo,
        estilos: {
            color: 'orange',
        }
    },
});

export const circuloTamanno = () => ({
    Component: ThemeTester,
    props: {
        componente: IndicadorCargaCirculo,
        estilos: {
            tamanno: "6rem",
        },
    },
});
export const circuloGrosor = () => ({
    Component: ThemeTester,
    props: {
        componente: IndicadorCargaCirculo,
        estilos: {
            grosor: "1rem"
        },
    },
});