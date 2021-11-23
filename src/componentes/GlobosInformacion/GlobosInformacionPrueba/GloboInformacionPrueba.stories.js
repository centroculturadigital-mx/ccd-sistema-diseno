import ThemeTester from '../../ThemeTester/ThemeTester'
import GloboInformacionPrueba from './GloboInformacionPrueba';
import UsuariosLista from "../../Usuarios/UsuariosLista/UsuariosLista";

import usuario from "../../../data/usuario";

let usuarioTextoLargo = {
    ...usuario,
    nombre: " Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt"
}

export default { title: 'Componentes/GlobosInformación/GloboInformacionPrueba' }

export const globoInformacionPruebaElementoCentroCentro = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "CENTRO_CENTRO"
            
        }
    },
});
export const globoInformacionPruebaElementoCentroCentroDireccionVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuarioTextoLargo],
                apariencia: "VERTICAL",
            },
            direccion: 'VERTICAL',
            posicionContenido: "CENTRO_CENTRO"
        }
    },
});
export const globoInformacionPruebaElementoCentroIzquierda = () => ({
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
export const globoInformacionPruebaElementoCentroIzquierdaDireccionVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuarioTextoLargo],
                apariencia: "VERTICAL",
            },
            direccion: 'VERTICAL',
            posicionContenido: "CENTRO_IZQUIERDA"
            
        }
    },
});

export const globoInformacionPruebaElementoCentroDerecha = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "CENTRO_DERECHA"
        }
    },
});
export const globoInformacionPruebaElementoCentroDerechaDireccionVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuarioTextoLargo],
                apariencia: "VERTICAL",
            },
            direccion: 'VERTICAL',
            posicionContenido: "CENTRO_DERECHA"
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
            posicionContenido: "ARRIBA_CENTRO"
            
        }
    },
});
export const globoInformacionPruebaElementoArribaCentroDireccionVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuarioTextoLargo],
                apariencia: "VERTICAL",
            },
            direccion: 'VERTICAL',
            posicionContenido: "ARRIBA_CENTRO"
            
        }
    },
});

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
            posicionContenido: "ARRIBA_IZQUIERDA"
            
        }
    },
});
export const globoInformacionPruebaElementoArribaIzquierdaDireccionVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuarioTextoLargo],
                apariencia: "VERTICAL",
            },
            direccion: "VERTICAL",
            posicionContenido: "ARRIBA_IZQUIERDA"
            
        }
    },
});
export const globoInformacionPruebaElementoArribaDerecha = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "ARRIBA_DERECHA"
            
        }
    },
});
export const globoInformacionPruebaElementoArribaDerechaDireccionVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuarioTextoLargo],
                apariencia: "VERTICAL",
            },
            direccion: "VERTICAL",
            posicionContenido: "ARRIBA_DERECHA"
            
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
            posicionContenido: "ABAJO_CENTRO"
            
        }
    },
});

export const globoInformacionPruebaElementoAbajoCentroDireccionVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuarioTextoLargo],
                apariencia: "VERTICAL",
            },
            direccion: 'VERTICAL',
            posicionContenido: "ABAJO_CENTRO"
            
        }
    },
});
export const globoInformacionPruebaElementoAbajoIzquierda = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "ABAJO_IZQUIERDA"
            
        }
    },
});
export const globoInformacionPruebaElementoAbajoIzquierdaDireccionVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuarioTextoLargo],
                apariencia: "VERTICAL",
            },
            direccion: 'VERTICAL',
            posicionContenido: "ABAJO_IZQUIERDA"
            
        }
    },
});
export const globoInformacionPruebaElementoAbajoDerecha = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuario],
                apariencia: "VERTICAL",
            },
            posicionContenido: "ABAJO_DERECHA"
            
        }
    },
});
export const globoInformacionPruebaElementoAbajoDerechaDireccionVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacionPrueba,
        datos: {
            componente: UsuariosLista,
            datos: {
                usuarios: [usuarioTextoLargo],
                apariencia: "VERTICAL",
            },
            direccion: 'VERTICAL',
            posicionContenido: "ABAJO_DERECHA"
            
        }
    },
});