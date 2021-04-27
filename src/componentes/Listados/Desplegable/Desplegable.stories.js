import ThemeTester from '../../ThemeTester/ThemeTester';
import Desplegable from './Desplegable';

import desplegable from "../../../data/desplegable"

export default { title: 'Componentes/Listados/Desplegable' }

export const desplegableDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Desplegable,
        datos: {
            ...desplegable
        }
    },
});
export const desplegableEsEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Desplegable,
        datos: {
            ...desplegable,
            enlaces: [],
            texto: "Soy enlace",
            enlace: "#"
        }
    },
});
export const desplegableSinCierreAutomatico = () => ({
    Component: ThemeTester,
    props: {
        componente: Desplegable,
        datos: {
            ...desplegable,
            estado: true,
            cierreAutomatico: false,
        }
    },
});