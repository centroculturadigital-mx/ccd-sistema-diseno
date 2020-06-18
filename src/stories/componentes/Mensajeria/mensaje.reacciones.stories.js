import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MensajeReacciones from '../../../componentes/Mensajeria/MensajeReacciones/MensajeReacciones.svelte';

export default { title: "Componentes/Mensajeria/MensajeReacciones" }

let reaccion = [{
    id: "id0",
    imagen: "https://placeimg.com/32/32/reactions",
    usuarios: [{
            id: "id1",
            nombre: "Nombre"
        },
        {
            id: "id2",
            nombre: "Nombre"
        }
    ]
}];

let reacciones = [{
    id: "id0",
    imagen: "https://placeimg.com/32/32/reactions",
    usuarios: [{
            id: "id1",
            nombre: "Nombre",
        },
        {
            id: "id2",
            nombre: "Nombre",
        }
    ]
}, {
    id: "id0",
    imagen: "https://placeimg.com/32/32/meme",
    usuarios: [{ //cantidad de usuarios que reaccionaron 
            id: "id1",
            nombre: "Nombre"
        },
        {
            id: "id2",
            nombre: "Nombre"
        },
        {
            id: "id3",
            nombre: "Nombre"
        },
        {
            id: "id4",
            nombre: "Nombre"
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