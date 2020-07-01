import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Cabecera from '../../../componentes/Cabecera/Cabecera.svelte';
import ImagenArchivo from '../../../../public/placeholder.jpg';

export default { title: 'Componentes/Cabecera/Cabecera' }

let rutas = [{
        texto: "Ruta",
        enlace: "#"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    }
];

let logo = [{
    logotipo: ImagenArchivo,
    enlace: "#",
    nombre: "Storybook"
}, ];
let logos = [{
        logotipo: ImagenArchivo,
        enlace: "#",
        nombre: "Storybook"
    },
    {
        logotipo: ImagenArchivo,
        enlace: "#",
        nombre: "Storybook"
    }
];

export const cabeceraDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Cabecera,
        datos: {}
    }
});
export const cabeceraLogo = () => ({
    Component: ThemeTester,
    props: {
        componente: Cabecera,
        datos: {
            elementos: rutas,
            logotipos: logo,
        }
    }
});
export const cabeceraLogos = () => ({
    Component: ThemeTester,
    props: {
        componente: Cabecera,
        datos: {
            elementos: rutas,
            logotipos: logos,
        }
    }
});

export const cabeceraSombra = () => ({
    Component: ThemeTester,
    props: {
        componente: Cabecera,
        datos: {
            elementos: rutas,
            logotipos: logo,
            sombra: true,
        }
    }
});
export const cabeceraFixed = () => ({
    Component: ThemeTester,
    props: {
        componente: Cabecera,
        datos: {
            elementos: rutas,
            logotipos: logo,
            sombra: true,
            fixed: true,
        }
    }
});