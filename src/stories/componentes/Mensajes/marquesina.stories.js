import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Marquesina from '../../../componentes/Mensajes/Marquesina/Marquesina.svelte';

export default { title: 'Componentes/Navegacion/Marquesina' }

const partes = [{
        texto: "hola mundo ipsum dolor sit amet",
        enlace: "/link-interno"
    },
    {
        texto: "adios mundo ipsum",
        enlace: "http://linkexterno.cmo"
    }
]

export const MarquesinaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Marquesina,
        datos: {
            partes
            // accion: i => console.log("Marquesina:::", i)
        }
    },
});