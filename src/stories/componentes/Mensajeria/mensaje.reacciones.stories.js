import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MensajeReacciones from '../../../componentes/Mensajeria/Reacciones/MensajeReacciones/MensajeReacciones.svelte';

export default { title: "Componentes/Mensajeria/MensajeReacciones" }

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
}];


export const mensajeReaccionesDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: MensajeReacciones,
        datos: {
            reacciones
        }
    }
});