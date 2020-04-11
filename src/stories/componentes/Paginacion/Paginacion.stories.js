import Paginacion from '../../../componentes/Navegacion/Paginacion/Paginacion.svelte';

export default { title: 'Componentes/Navegacion/Paginacion' }

export const PaginacionDefault = () => ({
    Component: Paginacion,
    props: {
        elementos: 24, // total de elementos a representar
        elementosPagina: 4, // cuantos se muestran por pag.
        pagina: 0, // el índice de pag actual
        seleccionar: i => console.log(i) // función que consume el índice
    },
});




export const PaginacionArreglo = () => ({
    Component: Paginacion,
    props: {
        elementos: ["hola", "soy", "un", "array"], // total de elementos a representar
        elementosPagina: 4, // cuantos se muestran por pag.
        pagina: 0, // el índice de pag actual
        seleccionar: i => console.log(i) // función que consume el índice
    },
});



// errores

export const PaginacionNoMostrar = () => ({
    Component: Paginacion,
    props: {
        seleccionar: i => console.log(i) // función que consume el índice
    },
});

export const PaginacionNoMostrar2 = () => ({
    Component: Paginacion,
    props: {
        elementos: 10,
    },
});