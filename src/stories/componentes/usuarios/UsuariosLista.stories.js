import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import UsuariosLista from '../../../componentes/Usuarios/UsuariosLista/UsuariosLista.svelte';

import usuarios from "../../../data/usuarios";

export default { title: 'Componentes/Usuarios/UsuariosLista' }

// const usuariosPreparados = usuarios.map(u => ({
//     ...u,
// }))

export const usuariosListaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuariosLista,
        datos: {
            usuarios,
            hover: evento => console.log(evento, "Hover Usuarios Lista")
        }
    }
});

export const usuariosListaVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuariosLista,
        datos: {
            apariencia: "VERTICAL",
            usuarios,
            hover: evento => console.log(evento, "Hover Usuarios Lista")

        }
    }
});