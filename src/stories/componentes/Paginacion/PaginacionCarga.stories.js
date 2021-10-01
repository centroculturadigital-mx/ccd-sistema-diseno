import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import PaginacionCarga from '../../../componentes/Navegacion/PaginacionCarga/PaginacionCarga.svelte';

export default { title: 'Componentes/Navegacion/PaginacionCarga' }


export const PaginacionVarianteCarga = () => ({
    Component: ThemeTester,
    props: {
        componente: PaginacionCarga,
        datos: {
            elementos: 100,
            elementosPagina: 10,
            cargarResultados: () => console.log("Carga nueva página")
        },
    },
});

export const PaginacionVarianteCargaOtrosValores = () => ({
    Component: ThemeTester,
    props: {
        componente: PaginacionCarga,
        datos: {
            elementos: 1245,
            elementosPagina: 145,
            cargarResultados: () => console.log("Carga nueva página")
        },
    },
});
export const PaginacionVarianteCargaValoresGrandes = () => ({
    Component: ThemeTester,
    props: {
        componente: PaginacionCarga,
        datos: {
            elementos: 10245,
            elementosPagina: 100,
            cargarResultados: () => console.log("Carga nueva página")
        },
    },
});