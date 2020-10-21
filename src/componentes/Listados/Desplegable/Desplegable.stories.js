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