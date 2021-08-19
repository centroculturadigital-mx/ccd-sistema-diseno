import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Logo from '../../../componentes/Logo/Logo.svelte';
import ImagenFondo from '../../../../public/placeholder.jpg';
import ImagenVector from '../../../../public/ccd.svg';

export default { title: "Componentes/Logos/Logo" }


export const logoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Logo,
        datos: {
            nombre: 'LOGO',
            imagen: ImagenFondo,
            enlace: "http://centroculturadigital.mx",
            estilos: {
                ancho: '40%',
                alineacion: 'right',
            }
        }
    }
});


export const logoSoloTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: Logo,
        datos: {
            nombre: 'LOGO',
            estilos: {
                alineacion: "center",
            }
        }
    }
});
export const logoSinImagen = () => ({
    Component: ThemeTester,
    props: {
        componente: Logo,
        datos: {
            componente: Logo,
            nombre: 'LOGO',
            enlace: "http://centroculturadigital.mx",
            estilos: {
                alineacion: "center",
            }
        }
    }
});

export const logoImagen = () => ({
    Component: ThemeTester,
    props: {
        componente: Logo,
        datos: {
            componente: Logo,
            nombre: 'LOGO',
            imagen: ImagenFondo,
            estilos: {
                ancho: '40%',
            }
        }
    }
});
export const logoAnchoFila = () => ({
    Component: ThemeTester,
    props: {
        componente: Logo,
        datos: {
            componente: Logo,
            imagen: ImagenFondo,
            nombre: 'LOGO',
            estilos: {
                ancho: '33%',
            }
        }
    }
});
export const logoSinEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Logo,
        datos: {
            componente: Logo,
            nombre: 'LOGO',
            imagen: ImagenFondo,
            estilos: {
                ancho: '40%',
                alineacion: "center",
            }
        }
    }
});
export const logoVectorConEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Logo,
        datos: {
            nombre: 'LOGO',
            tipo: "vector",
            imagen: ImagenVector,
            enlace: "http://centroculturadigital.mx",
            estilos: {
                ancho: '40%',
                alineacion: 'right',
            }
        }
    }
});
export const logoVectorSinEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Logo,
        datos: {
            nombre: 'LOGO',
            tipo: "vector",
            imagen: ImagenVector,
            estilos: {
                ancho: '40%',
                alineacion: 'right',
            }
        }
    }
});

export const logoVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: Logo,
        datos: {}
    }
});
