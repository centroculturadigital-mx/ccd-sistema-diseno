import Enlace from '../../../elementos/enlaces/Enlace/Enlace.svelte';
import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Titulo from '../../../elementos/texto/Titulo/Titulo';

export default {title: 'Elementos/Enlaces/Enlace '}

export const EnlaceDefault = () => ({
    Component: ThemeTester,    
    props: {
        componente: Enlace,
        datos:{
        texto:"Hola Mundo",
        href: "http://wikipedia.org",
        blank: true,
    }
    }
});

export const EnlaceContenidoHTML = () => ({
    Component: ThemeTester,
    props: {
        componente: Enlace,
        datos: {
        contenido:"<button>contenido HTML</button>",
        href: "http://wikipedia.org",
        blank: true,
    }
    }
});

export const EnlaceContenidoBloques = () => ({
    Component: ThemeTester,
    props: {
        componente: Enlace,
        datos: {
        contenido: [{
            componente: Titulo,
            data: {
                texto: "Hola Mundo",
            }
        }],
        href: "http://wikipedia.org",
        blank: true,
    }
    }
});


