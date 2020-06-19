import ThemeTester from '../../../../src/componentes/ThemeTester/ThemeTester.svelte';
import Parrafo from '../../../elementos/texto/Parrafo/Parrafo.svelte';

export default { title: 'Elementos/Texto/Parrafo' }

export const parrafoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Parrafo,
        datos: {
            texto: 'Ad do officia ex amet excepteur cupidatat labore anim cillum dolore sunt voluptate sint. Proident aute ut officia veniam nisi aliqua aliquip Lorem in. Pariatur pariatur consequat aliqua ex exercitation sint mollit ipsum sit. Labore eiusmod occaecat culpa ad. Dolor esse enim laborum consequat eiusmod ea ex quis sit excepteur aliqua.',
        }
    },
});

export const parrafoColor = () => ({
    Component: ThemeTester,
    props: {
        componente: Parrafo,
        datos: {
            texto: 'Ad do officia ex amet excepteur cupidatat labore anim cillum dolore sunt voluptate sint. Proident aute ut officia veniam nisi aliqua aliquip Lorem in. Pariatur pariatur consequat aliqua ex exercitation sint mollit ipsum sit. Labore eiusmod occaecat culpa ad. Dolor esse enim laborum consequat eiusmod ea ex quis sit excepteur aliqua.',
            estilos: {
                color: '#EF4B48',
            }
        }
    },
});

export const parrafoTamanno = () => ({
    Component: ThemeTester,
    props: {
        componente: Parrafo,
        datos: {
            texto: 'Ad do officia ex amet excepteur cupidatat labore anim cillum dolore sunt voluptate sint. Proident aute ut officia veniam nisi aliqua aliquip Lorem in. Pariatur pariatur consequat aliqua ex exercitation sint mollit ipsum sit. Labore eiusmod occaecat culpa ad. Dolor esse enim laborum consequat eiusmod ea ex quis sit excepteur aliqua.',
            estilos: {
                color: '#EF4B48',
                tamanno: '2rem'
            }
        }
    },
});