import ThemeTester from '../../ThemeTester/ThemeTester'
import GloboInformacionPrueba from './GloboInformacionPrueba';
import UsuariosLista from "../../Usuarios/UsuariosLista/UsuariosLista";

import usuario from "../../../data/usuario";

export default { title: 'Componentes/GlobosInformación/GloboInformacionPrueba' }
export const globoInformacionPruebaElementoArribaIzquierda = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "ARRIBA_IZQUIERDA"//Posicion del documento prueba
            
        }
    },
});

export const globoInformacionPruebaElementoAlCentro = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "CENTRO"// Debug
            
        }
    },
});
export const globoInformacionPruebaElementoALaDerecha = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "DERECHA"// Debug
        }
    },
});
export const globoInformacionPruebaElementoArriba = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "ARRIBA"
        }
    },
});
export const globoInformacionPruebaElementoAbajo = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "ABAJO"
        }
    },
});
// export const globoInformacionPruebaVariosElementosHorizontal = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: GloboInformacionPrueba,
//         datos: {
//             componente: UsuariosLista,
//             datos: {
//                 usuarios: [usuario, usuario,usuario, usuario,usuario, usuario,usuario, usuario],
//                 apariencia: "HORIZONTAL"
//                 posicionContenido: "CENTRO"// Debug
//             }
            
//         }
//     },
// });
// export const globoInformacionPruebaVariosElementosVertical = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: GloboInformacionPrueba,
//         datos: {
//             componente: UsuariosLista,
//             datos: {
//                 usuarios: [usuario, usuario,usuario, usuario,usuario, usuario,usuario, usuario],
//                 apariencia: "VERTICAL"
//             }
        
//         }
//     },
// });
