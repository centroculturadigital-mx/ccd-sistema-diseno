import Enlace from '../../../elementos/enlaces/Enlace/Enlace.svelte';

export default {title: 'Elementos/Enlaces/Enlace '}

export const EnlaceDefault = () => ({
    Component: Enlace,
    props: {
        texto:"Hola Mundo",
        href: "http://wikipedia.org",
        blank: true,
    }
});
