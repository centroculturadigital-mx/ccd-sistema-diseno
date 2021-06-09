import ThemeTester from '../ThemeTester/ThemeTester';
import Acordeon from './Acordeon.svelte';
import Tarjeta from "../Tarjetas/Tarjeta/Tarjeta";

import imagen from "../../data/recursos/placeholder.png";

const elementos = [{
        componente: Tarjeta,
        data: {
            nombre: "Voluptate velit laborum voluptate excepteur velit commodo aute.",
            imagen
        }
    },
    {
        componente: Tarjeta,
        data: {
            nombre: "Est consectetur aliqua ipsum et consectetur duis est dolor.",
            imagen
        }
    },
    {
        componente: Tarjeta,
        data: {
            nombre: "Laborum magna cupidatat exd aute elit cupidatat.",
            imagen
        }
    },
]

export default {
    title: 'Componentes/Acordeon'
}

export const acordeonDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Acordeon,
        datos: {
            titulo: "Título de un acordeón",
            nivel: 5,
        }
    },
});
export const acordeonComponentes = () => ({
    Component: ThemeTester,
    props: {
        componente: Acordeon,
        datos: {
            titulo: "Título de un acordeón",
            nivel: 5,
            elementos
        }
    },
});
export const acordeonContenido = () => ({
    Component: ThemeTester,
    props: {
        componente: Acordeon,
        datos: {
            titulo: "Título de un acordeón",
            nivel: 5,
            contenido: "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem.</p>"
        }
    },
});