import Parrafo from '../../../elementos/texto/Parrafo/Parrafo.svelte';

export default { title: 'Elementos/Texto/Parrafo' }


export const parrafoDefault = () => ({
    Component: Parrafo,
    props: {
        texto: 'Ad do officia ex amet excepteur cupidatat labore anim cillum dolore sunt voluptate sint. Proident aute ut officia veniam nisi aliqua aliquip Lorem in. Pariatur pariatur consequat aliqua ex exercitation sint mollit ipsum sit. Labore eiusmod occaecat culpa ad. Dolor esse enim laborum consequat eiusmod ea ex quis sit excepteur aliqua.',
    },
});
export const parrafoColor = () => ({
    Component: Parrafo,
    props: {
        texto: 'Ad do officia ex amet excepteur cupidatat labore anim cillum dolore sunt voluptate sint. Proident aute ut officia veniam nisi aliqua aliquip Lorem in. Pariatur pariatur consequat aliqua ex exercitation sint mollit ipsum sit. Labore eiusmod occaecat culpa ad. Dolor esse enim laborum consequat eiusmod ea ex quis sit excepteur aliqua.',
        color: "gray"
    },
});
export const parrafoChico = () => ({
    Component: Parrafo,
    props: {
        texto: 'Ad do officia ex amet excepteur cupidatat labore anim cillum dolore sunt voluptate sint. Proident aute ut officia veniam nisi aliqua aliquip Lorem in. Pariatur pariatur consequat aliqua ex exercitation sint mollit ipsum sit. Labore eiusmod occaecat culpa ad. Dolor esse enim laborum consequat eiusmod ea ex quis sit excepteur aliqua.',
        tamanno: ".65rem"
    },
});
export const parrafoGrande = () => ({
    Component: Parrafo,
    props: {
        texto: 'Ad do officia ex amet excepteur cupidatat labore anim cillum dolore sunt voluptate sint. Proident aute ut officia veniam nisi aliqua aliquip Lorem in. Pariatur pariatur consequat aliqua ex exercitation sint mollit ipsum sit. Labore eiusmod occaecat culpa ad. Dolor esse enim laborum consequat eiusmod ea ex quis sit excepteur aliqua.',
        tamanno: "1.65rem"
    },
});