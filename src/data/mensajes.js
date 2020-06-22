import moment from 'moment';
import imagen from './recursos/placeholder.png';
import avatar from './recursos/avatar.png';

moment.locale('es_MX')

export default new Array(25).fill(true).map((e, i) => ({
    usuario: {
        id: "abc",
        nombre: "Nombre usuario",
        imagen: avatar,
        enlace: "/usuarios/nombre-usuario"
    },
    mensaje: "Lorem ipsum dolor sit amet consectetur adipisicingSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    fechaCreacion: moment().subtract(i*20,'s').fromNow(),
    reacciones: [{
            id: "id0",
            imagen,
            texto: "Reacción 2",
            nombre: "reaccion-2",
            usuarios: Math.ceil(Math.random()*6)
        },
        {
            id: "id2",
            imagen,
            texto: "Reacción 1",
            nombre: "reaccion-1",
            usuarios: Math.ceil(Math.random()*6)
        }
    ]
}));