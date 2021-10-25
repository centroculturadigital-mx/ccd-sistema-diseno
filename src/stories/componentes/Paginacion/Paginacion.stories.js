import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Paginacion from '../../../componentes/Navegacion/Paginacion/Paginacion.svelte';
import PaginacionPrueba from '../../../componentes/Navegacion/Paginacion/PaginacionPrueba.svelte';

export default { title: 'Componentes/Navegacion/Paginacion' }

export const PaginacionDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Paginacion,
        datos: {
            elementos: 24, 
            elementosPagina: 4,
            pagina: 0, // el índice de pag actual
            seleccionar: i => console.log(i) // función que consume el índice
        },
    },
});



export const PaginacionSinDatos = () => ({
    Component: ThemeTester,
    props: {
        componente: Paginacion,
        datos: {
        },
    },
});


export const PaginacionNumeroCasiAlInicio = () => ({
    Component: ThemeTester,
    props: {
        componente: PaginacionPrueba,
        datos: {
            elementos: 100,
            elementosPagina: 4,
            pagina: 4,
            seleccionar: i => console.log(i) // función que consume el índice
        },
    },
});

export const PaginacionNumeroEnMedio = () => ({
    Component: ThemeTester,
    props: {
        componente: PaginacionPrueba,
        datos: {
            elementos: 100,
            elementosPagina: 4,
            pagina: 13,
            seleccionar: i => console.log(i) // función que consume el índice
        },
    },
});

export const PaginacionNumeroCasiAlFinal = () => ({
    Component: ThemeTester,
    props: {
        componente: PaginacionPrueba,
        datos: {
            elementos: 100,
            elementosPagina: 4,
            pagina: 21,
            seleccionar: i => console.log(i) // función que consume el índice
        },
    },
});


export const PaginacionNumeroAlFinal = () => ({
    Component: ThemeTester,
    props: {
        componente: PaginacionPrueba,
        datos: {
            elementos: 100,
            elementosPagina: 4,
            pagina: 25,
            seleccionar: i => console.log(i) // función que consume el índice
        },
    },
});

