import ThemeTester from '../../ThemeTester/ThemeTester'
import GloboInformacion from './GloboInformacion';

export default { title: 'Componentes/GlobosDeInformación/GloboInformacion' }

export const globoInformacionDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
        }
    },
});
export const globoInformacionFlechaArribaCentro = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "ARRIBA_CENTRO",
        }
    },
});
export const globoInformacionFlechaArribaIzquierda = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "ARRIBA_IZQUIERDA",
        }
    },
});
export const globoInformacionFlechaArribaDerecha = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "ARRIBA_DERECHA",
        }
    },
});

export const globoInformacionFlechaAbajoCentro = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "ABAJO_CENTRO",
        }
    },
});
export const globoInformacionFlechaAbajoIzquierda = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "ABAJO_IZQUIERDA",
        }
    },
});
export const globoInformacionFlechaAbajoDerecha = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "ABAJO_DERECHA",
        }
    },
});
export const globoInformacionFlechaDerechaCentro = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "DERECHA_CENTRO",
        }
    },
});
export const globoInformacionFlechaDerechaArriba = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "DERECHA_ARRIBA",
        }
    },
});
export const globoInformacionFlechaDerechaAbajo = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "DERECHA_ABAJO",
        }
    },
});
export const globoInformacionFlechaIzquierdaCentro = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "IZQUIERDA_CENTRO",
        }
    },
});
export const globoInformacionFlechaIzquierdaArriba = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "IZQUIERDA_ARRIBA",
        }
    },
});
export const globoInformacionFlechaIzquierdaAbajo = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Nombre de usuaria",
            posicion: "IZQUIERDA_ABAJO",
        }
    },
});
export const globoInformacionTextoLargo = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Este globo funciona como un elemento informativo con texto largo para indicar instrucciones u otro dato importante.",
        }
    },
});
export const globoInformacionTextoLargoConFlecha = () => ({
    Component: ThemeTester,
    props: {
        componente: GloboInformacion,
        datos: {
            texto: "Este globo funciona como un elemento informativo con texto largo para indicar instrucciones u otro dato importante.",
            posicion: "IZQUIERDA_ABAJO",
        }
    },
});