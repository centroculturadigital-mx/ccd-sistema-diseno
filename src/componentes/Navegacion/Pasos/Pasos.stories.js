import ThemeTester from '../../ThemeTester/ThemeTester';
import Pasos from './Pasos';

import pasos from '../../../data/pasos'

let pasosConError = pasos.map((p, i) => ({
    ...p,
    error: i == 1 ? true : false
}))

export default {
    title: 'Componentes/Navegacion/Pasos'
}

export const pasosDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Pasos,
        datos: {
            pasos,
            activo: 1,
        }
    },
});
export const pasosActivo = () => ({
    Component: ThemeTester,
    props: {
        componente: Pasos,
        datos: {
            pasos,
            activo: 2,
        }
    },
});
export const pasosAvanza = () => ({
    Component: ThemeTester,
    props: {
        componente: Pasos,
        datos: {
            pasos,
            activo: 3,
        }
    },
});
export const pasosUltimoPaso = () => ({
    Component: ThemeTester,
    props: {
        componente: Pasos,
        datos: {
            pasos,
            activo: 4,
        }
    },
});
export const pasosConErrores = () => ({
    Component: ThemeTester,
    props: {
        componente: Pasos,
        datos: {
            pasos: pasosConError,
            activo: 2,
        }
    },
});
export const pasosTextoAuxiliar = () => ({
    Component: ThemeTester,
    props: {
        componente: Pasos,
        datos: {
            pasos,
            activo: 2,
            mostrarTextoAuxiliar: true
        }
    },
});
export const pasosTextoAuxiliarPrimerPosicion = () => ({
    Component: ThemeTester,
    props: {
        componente: Pasos,
        datos: {
            pasos,
            activo: 4,
            mostrarTextoAuxiliar: true
        }
    },
});
