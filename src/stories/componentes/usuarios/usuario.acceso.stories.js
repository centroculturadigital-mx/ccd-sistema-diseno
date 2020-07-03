import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import UsuarioAcceso from '../../../componentes/Usuarios/UsuarioAcceso/UsuarioAcceso.svelte';

export default { title: 'Componentes/Usuarios/UsuarioAcceso' }

export const usuarioAccesoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuarioAcceso,
        datos: {
            imagen: "https://fakeimg.pl/64x64?text=A",
            nombre: "Usaurio"
        }
    }
});