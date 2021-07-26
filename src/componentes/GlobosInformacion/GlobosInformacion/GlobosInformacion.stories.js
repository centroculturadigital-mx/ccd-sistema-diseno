import ThemeTester from '../../ThemeTester/ThemeTester'
import GlobosInformacion from './GlobosInformacion';

const globos = Array(Math.ceil(Math.random()*8)).fill(true).map(g => ({
    texto: "Lorem ipsum dolor",
    posicionFlecha: "ARRIBA_CENTRO",
    coordenadas: {
        x: Math.ceil(Math.random() * 320),
        y: Math.ceil(Math.random() * 480)
    }
}));

export default {
    title: 'Componentes/GlobosInformación/GlobosInformacion'
}

export const globosInformacionDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: GlobosInformacion,
        datos: {
            globos,
        }
    },
});
export const globosInformacion = () => ({
    Component: ThemeTester,
    props: {
        componente: GlobosInformacion,
        datos: {
            globos,
            estado: true
        }
    },
});
export const globosInformacionConFondo = () => ({
    Component: ThemeTester,
    props: {
        componente: GlobosInformacion,
        datos: {
            globos,
            estado: true,
            fondoMostrar: true
        }
    },
});