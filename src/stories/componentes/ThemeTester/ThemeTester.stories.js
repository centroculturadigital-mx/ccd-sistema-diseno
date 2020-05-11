import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Boton from '../../../elementos/botones/Boton/Boton.svelte';

export default { title: "Componentes/ThemeTester" }

export const themeTesterDefault = () => ({
    Component: ThemeTester,
});

export const themeTesterBoton = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: "Hola Boton Theme"
        }
    },
});