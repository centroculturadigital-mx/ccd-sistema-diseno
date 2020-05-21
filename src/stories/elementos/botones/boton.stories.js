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