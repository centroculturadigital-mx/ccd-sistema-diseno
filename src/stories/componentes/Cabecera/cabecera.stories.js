import ThemeTester from '../../../componentes/ThemeTester/ThemeTester';
import Cabecera from '../../../componentes/Cabecera/Cabecera';
import CabeceraPrueba from '../../../componentes/Cabecera/CabeceraPruebaScrollMovil';
import UsuarioAcceso from '../../../componentes/Usuarios/UsuarioAcceso/UsuarioAcceso';
import Boton from "../../../elementos/botones/Boton/Boton"

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

let datosCabeceraScroll = {
    logotipos: logo,
            sombra: true,
            fixed: false,
            elementos: rutas,
            componentes: [{
                componente: UsuarioAcceso,
                datos: {
                    nombre: "Nombre usuaria",
                    imagen: ImagenArchivo,
                }
            }],
            texto: "Exposiciones"
}
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
export const cabeceraConMenuYComponente = () => ({
    Component: ThemeTester,
    props: {
        componente: Cabecera,
        datos: {
            elementos: rutas,
            logotipos: logo,
            sombra: true,
            fixed: true,
            componentes: [{
                componente: UsuarioAcceso,
                datos: {
                    nombre: "Nombre usuaria",
                    imagen: ImagenArchivo,
                }
            }]
        }
    }
});
export const cabeceraConComponenteSinMenu = () => ({
    Component: ThemeTester,
    props: {
        componente: Cabecera,
        datos: {
            logotipos: logo,
            sombra: true,
            fixed: true,
            componentes: [{
                componente: UsuarioAcceso,
                datos: {
                    nombre: "Nombre usuaria",
                    imagen: ImagenArchivo,
                }
            }]
        }
    }
});
export const cabeceraConTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: Cabecera,
        datos: {
            logotipos: logo,
            sombra: true,
            fixed: true,
            componentes: [{
                componente: UsuarioAcceso,
                datos: {
                    nombre: "Nombre usuaria",
                    imagen: ImagenArchivo,
                }
            }],
            texto: "Exposiciones"
        }
    }
});
export const cabeceraMuestraComponentesMovil = () => ({
    Component: ThemeTester,
    props: {
        componente: Cabecera,
        datos: {
            elementos: rutas,
            logotipos: logo,
            sombra: true,
            componentes: [
            {
                componente: Boton,
                datos: {
                    texto: "Ingreso",
                    click: () => console.log("Clicaste componente en menu movil"),
                }
            }],
            componentesMovil: [{
                componente: Boton,
                datos: {
                    texto: "Registro",
                    click: () => console.log("Clicaste componente movil"),
                }
            }]
            
        }
    }
});
export const cabeceraMovilBloqueaScroll = () => ({
    Component: ThemeTester,
    props: {
        componente: CabeceraPrueba,
        datos: {
            datos: {
                ...datosCabeceraScroll,
            }
            
        }
    }
});
