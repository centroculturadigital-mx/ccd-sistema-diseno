import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Alerta from '../../../componentes/Mensajes/Alerta/Alerta.svelte';

export default { title: "Componentes/Mensajes/Alerta" }


export const alertaInformacion = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "informacion"
        }
    }
});
export const alertaExito = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "exito"
        }
    }
});
export const alertaAviso = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "aviso"
        }
    }
});
export const alertaAlerta = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "alerta"
        }
    }
});
export const alertaAccion = () => ({
    Component: ThemeTester,
    props: {
        componente: Alerta,
        datos: {
            estado: true,
            tipo: "alerta"
        }
    }
});