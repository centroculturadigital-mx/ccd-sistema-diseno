import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MensajeReacciones from '../../../componentes/Mensajeria/MensajeReacciones/MensajeReacciones.svelte';

export default { title: "Componentes/Mensajeria/MensajeReacciones" }

let reaccion = [{
    id: "id0",
    icono: "feliz",
    usuarios: [{
            id: "id1"
        },
        {
            id: "id2"
        }
    ]
}];

let reacciones = [{
    id: "id0",
    icono: "feliz",
    usuarios: [{
            id: "id1"
        },
        {
            id: "id2"
        }
    ]
}, {
    id: "id0",
    icono: "triste",
    usuarios: [{ //cantidad de usuarios que reaccionaron 
            id: "id1"
        },
        {
            id: "id2"
        },
        {
            id: "id3"
        }
    ]
}];


export const mensajeReaccionesDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: MensajeReacciones,
        datos: {
            reacciones: reaccion
        }
    }
});