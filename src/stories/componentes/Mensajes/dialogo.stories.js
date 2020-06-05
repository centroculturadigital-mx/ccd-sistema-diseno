import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Dialogo from '../../../componentes/Mensajes/Dialogo/Dialogo.svelte';
import Modal from '../../../componentes/Ventanas/Modal/Modal.svelte';
import ModalEjemplo from '../../../componentes/Ventanas/Modal/ModalEjemplo.svelte';

export default { title: 'Componentes/Mensajes/Dialogo' }

let estado = false;
let texto = "Esta es una explicación de lo que implicaría realizar esta acción";
const confirmar = () => {
    console.log("Confirmado story");
};
const cancelar = () => {
    console.log("Cancelado story");
};

export const DialogoAlerta = () => ({
    Component: ThemeTester,
    props: {
        componente: Dialogo,
        datos: {
            tipo: "alerta",
            titulo: "Titulo de Alerta",
            texto,
            confirmar
        }
    },
});

export const DialogoAlertaEnModal = () => ({
    Component: ThemeTester,
    props: {
        componente: ModalEjemplo,
        datos: {
            estado: estado,
            componente: Dialogo,
            datos: {
                tipo: "alerta",
                titulo: "Titulo de Alerta",
                texto,
                confirmar
            }
        }
    },
});

export const DialogoConfirmacion = () => ({
    Component: ThemeTester,
    props: {
        componente: Dialogo,
        datos: {
            titulo: "Titulo de Confirmación",
            tipo: "confirmacion",
            texto,
            confirmar,
            cancelar
        }
    },
});

export const DialogoConfirmacionEnModal = () => ({
    Component: ThemeTester,
    props: {
        componente: ModalEjemplo,
        datos: {
            estado: estado,
            componente: Dialogo,
            datos: {
                tipo: "confirmacion",
                titulo: "Titulo de Confirmación",
                texto,
                confirmar,
                cancelar
            }
        }
    },
});