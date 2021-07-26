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
export const avatarHover = () => ({
    Component: ThemeTester,
    props: {
        componente: Avatar,
        datos: {
            ...usuario,
            hover: n => console.log(n + " Avatar")
        }
    }
});
// export const avatarMostrarNombre = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: Avatar,
//         datos: {
//             ...usuario,
//             mostrarNombre: true
//         }
//     }
// });
// export const avatarMostrarNombreCorto = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: Avatar,
//         datos: {
//             ...usuario,
//             mostrarNombre: true,
//             nombre: "Xyz"
//         }
//     }
// });
// export const avatarMostrarNombreLargo = () => ({
//     Component: ThemeTester,
//     props: {
//         componente: Avatar,
//         datos: {
//             ...usuario,
//             mostrarNombre: true,
//             nombre: "Jose Luís Rodriguez"
//         }
//     }
// });