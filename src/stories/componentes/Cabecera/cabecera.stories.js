import Header from '../../../componentes/Cabecera/Cabecera.svelte';
import imagenEjemplo from '../../../../public/placeholder.jpg';

export default { title: 'Componentes/Header/Header' }

let rutas = [{
        label: "Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Ruta",
        ruta: "una-ruta"
    }
];

export const headerDefault = () => ({
    Component: Header,
    props: {
        objetosMenu: rutas,
        logoImagenUrl: imagenEjemplo,
        logoTexto: 'Logo Sitio',
    }
});
export const headerIconoDiccionario = () => ({
    Component: Header,
    props: {
        objetosMenu: rutas,
        logoImagenUrl: imagenEjemplo,
        logoTexto: 'Logo Sitio',
        iconoMenu: {
            abrir: 'menu',
            cerrar: 'cerrar'
        }
    }
});
export const headerColorBG = () => ({
    Component: Header,
    props: {
        objetosMenu: rutas,
        logoImagenUrl: imagenEjemplo,
        logoTexto: 'Logo Sitio',
        colorFondo: 'lightgray',
        altura: '100px',
    }
});
export const headerColorTexto = () => ({
    Component: Header,
    props: {
        objetosMenu: rutas,
        logoImagenUrl: imagenEjemplo,
        logoTexto: 'Logo Sitio',
        colorFondo: 'lightgray',
        altura: '100px',
        color: 'orange'
    }
});
export const headerAltura = () => ({
    Component: Header,
    props: {
        objetosMenu: rutas,
        logoImagenUrl: imagenEjemplo,
        logoTexto: 'Logo Sitio',
        colorFondo: 'lightgray',
        altura: '200px',
    }
});
export const headerSombra = () => ({
    Component: Header,
    props: {
        objetosMenu: rutas,
        logoImagenUrl: imagenEjemplo,
        logoTexto: 'Logo Sitio',
        colorFondo: 'white',
        altura: '70px',
        sombra: true,
    }
});
export const headerFixed = () => ({
    Component: Header,
    props: {
        objetosMenu: rutas,
        logoImagenUrl: imagenEjemplo,
        logoTexto: 'Logo Sitio',
        colorFondo: 'white',
        altura: '70px',
        sombra: true,
        fixed: true,
    }
});
export const headerLogoImagen = () => ({
    Component: Header,
    props: {
        objetosMenu: rutas,
        logoImagenUrl: imagenEjemplo,
        colorFondo: 'white',
        logoTexto: 'Logo Sitio',
        altura: '70px',
        sombra: true,
        fixed: true,
    }
});