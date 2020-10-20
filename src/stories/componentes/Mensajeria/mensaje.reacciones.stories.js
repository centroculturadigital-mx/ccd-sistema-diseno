import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MensajeReacciones from '../../../componentes/Mensajeria/MensajeReacciones/MensajeReacciones.svelte';

export default { title: "Componentes/Mensajeria/Chat/MensajeReacciones" }

import mensajes from '../../../data/mensajes';

const mensaje = mensajes[0]



export const mensajeReaccionesDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: MensajeReacciones,
        datos: {
            reacciones: [mensaje.reacciones[0]]
        }
    }
});

export const mensajeReaccionesPocas = () => ({
    Component: ThemeTester,
    props: {
        componente: MensajeReacciones,
        datos: {
            reacciones: mensaje.reacciones
        }
    }
});

export const mensajeReaccionesDemasiadas = () => ({
    Component: ThemeTester,
    props: {
        componente: MensajeReacciones,
        datos: {
            reacciones: new Array(45).fill(mensaje.reacciones[0])
        }
    }
});