import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import UsuariosLista from '../../../componentes/Usuarios/UsuariosLista/UsuariosLista.svelte';

import usuarios from "../../../data/usuarios";

export default { title: 'Componentes/Usuarios/UsuariosLista' }

export const usuariosListaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuariosLista,
        datos: {
            usuarios,
        }
    }
});
export const usuariosListaVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuariosLista,
        datos: {
            apariencia: "Vertical",
            usuarios,
        }
    }
});