import avatar from './recursos/avatar.png';

export default {
    usuario: {
        id: "abc",
        nombre: "Nombre usuario",
        imagen: avatar,
        enlace: "/usuarios/nombre-usuario"
    },
    mensaje: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    reacciones: [{
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
    }]
}