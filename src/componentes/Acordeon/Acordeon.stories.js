import ThemeTester from '../ThemeTester/ThemeTester';
import Acordeon from './Acordeon.svelte';
import Tarjeta from "../Tarjetas/Tarjeta/Tarjeta";

import imagen from "../../data/recursos/placeholder.png";

export default { title: 'Componentes/Acordeon' }


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
export const acordeonComponente = () => ({
    Component: ThemeTester,
    props: {
        componente: Acordeon,
        datos: {
            titulo: "Título de un acordeón",
            nivel: 5,
            elemento: {
                componente: Tarjeta,
                datos: {
                    imagen,
                    nombre: "Título de tarjeta",
                    leyenda: "Perspiciatis unde omnis iste natus",
                    acciones: [{
                        texto: "Botón",
                        enlace: "#"
                    }]
                }
            }
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