import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import UsuarioAcceso from '../../../componentes/Usuarios/UsuarioAcceso/UsuarioAcceso.svelte';

export default { title: 'Componentes/Usuarios/UsuarioAcceso' }

export const usuarioAccesoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuarioAcceso,
        datos: {
            imagen: "https://place-hold.it/64x64",
            nombre: "Usaurio",
            menu: [
                {
                    texto: "Menu 1",
                    enlace: "/menu1",
                }
            ]
        }
    }
});