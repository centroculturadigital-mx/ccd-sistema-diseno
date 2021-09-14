import ThemeTester from '../../ThemeTester/ThemeTester'
import GloboInformacionPrueba from './GloboInformacionPrueba';
import UsuariosLista from "../../Usuarios/UsuariosLista/UsuariosLista";

import usuario from "../../../data/usuario";

export default { title: 'Componentes/GlobosInformación/GloboInformacionPrueba' }

export const globoInformacionPruebaElementoIzquierda = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "CENTRO_IZQUIERDA"//Posicion del documento prueba
            
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
            posicionContenido: "CENTRO_DERECHA"// Debug
        }
    },
});

export const globoInformacionPruebaElementoArribaCentro = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "ARRIBA_CENTRO"// Debug
            
        }
    },
});
export const globoInformacionPruebaElementoAbajoCentro = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "ABAJO_CENTRO"// Debug
            
        }
    },
});
export const globoInformacionPruebaElementoAbajoCentroArribaIzquierda = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "ARRIBA_IZQUIERDA"// Debug
            
        }
    },
});
// export const globoInformacionPruebaElementoArriba = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: GloboInformacionPrueba,
//         datos: {
//             componente: UsuariosLista,
//             datos: {
//                 usuarios: [usuario],
//                 apariencia: "VERTICAL",
//             },
//             posicionContenido: "ARRIBA"
//         }
//     },
// });
// export const globoInformacionPruebaElementoAbajo = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: GloboInformacionPrueba,
//         datos: {
//             componente: UsuariosLista,
//             datos: {
//                 usuarios: [usuario],
//                 apariencia: "VERTICAL",
//             },
//             posicionContenido: "ABAJO"
//         }
//     },
// });
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
