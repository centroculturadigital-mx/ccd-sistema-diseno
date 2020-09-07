import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import UsuarioAcceso from '../../../componentes/Usuarios/UsuarioAcceso/UsuarioAcceso.svelte';

import usuario from "../../../data/usuario";

export default { title: 'Componentes/Usuarios/UsuarioAcceso' }

export const usuarioAccesoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuarioAcceso,
        datos: {
            ...usuario,
            menu: [{
                texto: "Menu 1",
                enlace: "/menu1",
            }]
        }
    }
});