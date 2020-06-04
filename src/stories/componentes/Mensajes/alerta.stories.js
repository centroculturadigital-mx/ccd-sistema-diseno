import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Alerta from '../../../componentes/Mensajes/Alerta/Alerta.svelte';

export default { title: "Componentes/Mensajes/Alerta" }


export const alertaInformacion = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "informacion",
            titulo: "Titulo de alerta información",
            contenido: 'Texto con un <a href="#">link información</a> entre el texto',
            accion_1: () => { console.log("Accion 1") },
            accion_2: () => { console.log("Accion 2") }
        }
    }
});
export const alertaExito = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "exito",
            titulo: "Titulo de alerta éxito",
            contenido: 'Texto con un <a href="#">link éxito</a> entre el texto',
            accion_1: () => { console.log("Accion 1") },
            accion_2: () => { console.log("Accion 2") }
        }
    }
});
export const alertaAviso = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "aviso",
            titulo: "Titulo de alerta aviso",
            contenido: 'Texto con un <a href="#">link aviso</a> entre el texto',
            accion_1: () => { console.log("Accion 1") },
            accion_2: () => { console.log("Accion 2") }
        }
    }
});
export const alertaAlerta = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "alerta",
            titulo: "Titulo de alerta alerta",
            contenido: 'Texto con un <a href="#">link alerta</a> entre el texto',
            accion_1: () => { console.log("Accion 1") },
            accion_2: () => { console.log("Accion 2") }
        }
    }
});
export const alertaAccion = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "accion",
            titulo: "Titulo de alerta acción",
            contenido: 'Texto con un <a href="#">link acción</a> entre el texto',
            accion_1: () => { console.log("Accion 1") },
            accion_2: () => { console.log("Accion 2") }
        }
    }
});
export const alertaSinAccionUno = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "accion",
            titulo: "Titulo de alerta sin botones",
            contenido: 'Texto con un <a href="#">link acción</a> entre el texto',
            accion_2: () => { console.log("Accion 2") }

        }
    }
});
export const alertaSinAccionDos = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "accion",
            titulo: "Titulo de alerta sin botones",
            contenido: 'Texto con un <a href="#">link acción</a> entre el texto',
            accion_1: () => { console.log("Accion 1") },
        }
    }
});
export const alertaSinAcciones = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "accion",
            titulo: "Titulo de alerta sin botones",
            contenido: 'Texto con un <a href="#">link acción</a> entre el texto',
        }
    }
});
export const alertaSinContenido = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "accion",
            titulo: "Titulo de alerta texto",
        }
    }
});
export const alertaSinTitulo = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "accion",
            contenido: "Titulo de alerta sin titulo",
        }
    }
});
export const alertaSinTextos = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "accion",
        }
    }
});
export const alertaDefaul = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            // tipo: "accion",
            titulo: "Titulo de alerta acción",
            contenido: 'Texto con un <a href="#">link acción</a> entre el texto',
            accion_1: () => { console.log("Accion 1") },
            accion_2: () => { console.log("Accion 2") }
        }
    }
});
export const alertaNoExiste = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: false,
        }
    }
});