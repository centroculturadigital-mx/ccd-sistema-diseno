import Enlace from '../../../elementos/enlaces/Enlace/Enlace.svelte';
import Titulo from '../../../elementos/texto/Titulo/Titulo';

export default {title: 'Elementos/Enlaces/Enlace '}

export const EnlaceDefault = () => ({
    Component: Enlace,
    props: {
        texto:"Hola Mundo",
        href: "http://wikipedia.org",
        blank: true,
    }
});

export const EnlaceContenidoHTML = () => ({
    Component: Enlace,
    props: {
        contenido:"<button>contenido HTML</button>",
        href: "http://wikipedia.org",
        blank: true,
    }
});

export const EnlaceContenidoBloques = () => ({
    Component: Enlace,
    props: {
        contenido: [{
            componente: Titulo,
            data: {
                texto: "Hola Mundo",
            }
        }],
        href: "http://wikipedia.org",
        blank: true,
    }
});


