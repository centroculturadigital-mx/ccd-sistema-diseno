import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MensajeReacciones from '../../../componentes/Mensajeria/MensajeReacciones/MensajeReacciones.svelte';

export default { title: "Componentes/Mensajeria/MensajeReacciones" }

let reaccion = [{
    id: "id0",
    imagen: "https://placeimg.com/32/32/reactions",
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
    imagen: "https://placeimg.com/32/32/reactions",
    usuarios: [{
            id: "id1"
        },
        {
            id: "id2"
        }
    ]
}, {
    id: "id0",
    imagen: "https://placeimg.com/32/32/reactions",
    usuarios: [{ //cantidad de usuarios que reaccionaron 
            id: "id1"
        },
        {
            id: "id2"
        },
        {
            id: "id3"
        },
        {
            id: "id4"
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

export const mensajeReaccionesVarias = () => ({
    Component: ThemeTester,
    props: {
        componente: MensajeReacciones,
        datos: {
            reacciones
        }
    }
});