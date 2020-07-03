import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Avatar from '../../../componentes/Usuarios/Avatar/Avatar';

export default { title: 'Componentes/Usuarios/Avatar' }

export const avatarDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Avatar,
        datos: {
            imagen: "https://fakeimg.pl/64x64?text=A",
            nombre: "Usaurio"
        }
    }
});