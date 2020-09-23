import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Avatar from '../../../componentes/Usuarios/Avatar/Avatar';

import usuario from "../../../data/usuario";

export default { title: 'Componentes/Usuarios/Avatar' }

export const avatarDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Avatar,
        datos: {
            ...usuario
        }
    }
});
export const avatarMostrarNombre = () => ({
    Component: ThemeTester,
    props: {
        componente: Avatar,
        datos: {
            ...usuario,
            mostrarNombre: true
        }
    }
});