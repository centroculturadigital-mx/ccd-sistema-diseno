import CreditosVista from "./stories/creditos/CreditosVista.svelte";

export default {title: 'Creditos'}

export const Creditos = () => ({
    Component: CreditosVista,
    props: {
        titulo: 'Et aliquip',
        textoAutor:'Autor: Sanctus Delenit',
        nivelTitulo: 'h4'
    }
});