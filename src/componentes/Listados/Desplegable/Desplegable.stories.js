import ThemeTester from '../../ThemeTester/ThemeTester';
import Desplegable from './Desplegable';

import desplegable from "../../../data/desplegable"

export default { title: 'Componentes/Listados/Desplegable' }

let desplegableIcono = {
    ...desplegable,
    icono: "charla"
}

export const desplegableDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Desplegable,
        datos: {
            ...desplegable
        }
    },
});
export const desplegableCambioIcono = () => ({
    Component: ThemeTester,
    props: {
        componente: Desplegable,
        datos: {
            ...desplegableIcono
        }
    },
});