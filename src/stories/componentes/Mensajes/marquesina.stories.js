import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Marquesina from '../../../componentes/Mensajes/Marquesina/Marquesina.svelte';

export default { title: 'Componentes/Navegacion/Marquesina' }


const obtenerHorario = (d1,d2) => {
    return (
        new Date(d1).getHours() + ":" + ('0'+new Date(d1).getMinutes()).slice(-2)
        + " - " +
        new Date(d2).getHours() + ":" + ('0'+new Date(d2).getMinutes()).slice(-2)
    )
}

let partesEvento = [
    {
        nombre: "adios mundo ipsum",
        id: "1",
        fechaInicio: "2020-06-04T00:00:00.000Z",
        fechaFinal: "2020-06-04T00:30:00.000Z",
    },
    {
        nombre: "Hola de nuevo mundo ipsum",
        id: "2",
        fechaInicio: "2020-06-04T00:30:00.000Z",
        fechaFinal: "2020-06-04T01:00:00.000Z",
    },
    {
        nombre: "adios otra vez mundo ipsum",
        id: "3",
        fechaInicio: "2020-06-04T01:00:00.000Z",
        fechaFinal: "2020-06-04T01:30:00.000Z",
    }
].map(pE=>({
    texto: pE.nombre + ": " + obtenerHorario(pE.fechaInicio,pE.fechaFinal),
    id: pE.id
}))


console.log(partesEvento);


const partes = [
    {
        texto: "Labore elit sit et duis in Lorem commodo minim voluptate nisi."
    },
    {
        texto: "Quis laborum mollit exercitation est laborum anim fugiat nisi exercitation culpa ut occaecat sunt."
    },
    {
        texto: "Veniam incididunt amet aute adipisicing ipsum est minim magna excepteur veniam."
    },
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

export const MarquesinaPartesEvento = () => ({
    Component: ThemeTester,
    props: {
        componente: Marquesina,
        datos: {
            partes: partesEvento,
            accion: id => console.log("Marquesina activo elemento:::", id)
        }
    },
});