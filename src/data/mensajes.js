import moment from 'moment';
import imagen from './recursos/placeholder.png';
import avatar from './recursos/avatar.png';

moment.locale('es_MX');

let mensajeLargo = "Lorem ipsum dolor sit amet consectetur adipisicingSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo."
let mensajeMedio = "Lorem ipsum dolor sit amet consectetur adipisicingSed ut perspiciatis unde omnis iste natus error"
let mensajeCorto = "Lorem ipsum dolor ."
let mensajeMuyCorto = "Hola"

let mensajes = [mensajeLargo, mensajeMedio, mensajeCorto, mensajeMuyCorto];

export default new Array(50).fill(true).map((e, i) => ({
    id: "id" + i,
    usuario: {
        id: "abc",
        nombre: "Nombre usuario",
        imagen: avatar,
        enlace: "/usuarios/nombre-usuario"
    },
    mensaje: i + ": " + mensajes[Math.floor(Math.random() * mensajes.length)],
    fechaCreacion: moment().subtract(i * 20, 's').toISOString(),
    reacciones: [{
            id: "id0",
            imagen,
            texto: "Reacción 2",
            nombre: "reaccion-2",
            usuarios: Math.ceil(Math.random() * 6)
        },
        {
            id: "id2",
            imagen,
            texto: "Reacción 1",
            nombre: "reaccion-1",
            usuarios: Math.ceil(Math.random() * 6)
        }
    ]
}));