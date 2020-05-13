import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Boton from '../../../elementos/botones/Boton/Boton.svelte';

export default { title: 'Elementos/Botones/Botón' }

export const botonDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: 'Botón',
        }
    },
});
export const botonTemas = () => ({
    Component: ThemeTester,
    props: {
        componente: Boton,
        datos: {
            texto: "Boton con tema",
        }
    },
});
export const botonColorTexto = () => ({
    Component:ThemeTester ,
    props: {
        componente: Boton,
    datos:{
        texto: 'Color de texto',
        color: 'orange',}    
        
    },
});
export const botonColorFondo = () => ({
    Component: Boton,
    props: {
        texto: 'Color de fondo',
        colorBG: 'orange',
    },
});
export const botonPaddingX = () => ({
    Component: Boton,
    props: {
        texto: 'Padding X',
        paddingX: '6rem',
    },
});
export const botonRadius = () => ({
    Component: Boton,
    props: {
        texto: '!',
        radius: '10px',
    },
});