import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Dialogo from '../../../componentes/Mensajes/Dialogo/Dialogo.svelte';
import Modal from '../../../componentes/Ventanas/Modal/Modal.svelte';
import ModalEjemplo from '../../../componentes/Ventanas/Modal/ModalEjemplo.svelte';

export default { title: 'Componentes/Mensajes/Dialogo' }

let estado = false;
let texto = "Esta es una explicación de lo que implicaría realizar esta acción";
let acciones = [{
        texto: "Cancelar",
        accion: () => console.log("Cancelaste"),
        boton: {
            variante: "HUECO"
        }
    },
    {
        texto: "Aceptar",
        accion: () => console.log("Aceptaste"),
    }
];
let confirmar = [{
    texto: "Confirmar",
    accion: () => console.log("Confirmaste"),
}];
let accionesVarias = [{
        texto: "Acción 1",
        accion: () => console.log("Cancelaste"),
    },
    {
        texto: "Acción 2",
        accion: () => console.log("Aceptaste"),
    }, {
        texto: "Acción 3",
        accion: () => console.log("Cancelaste"),
    },
    {
        texto: "Acción 4",
        accion: () => console.log("Aceptaste"),
    }, {
        texto: "Acción 5",
        accion: () => console.log("Cancelaste"),
    },
    {
        texto: "Acción 6",
        accion: () => console.log("Aceptaste"),
    }, {
        texto: "Acción 7",
        accion: () => console.log("Cancelaste"),
    },
    {
        texto: "Acción 8",
        accion: () => console.log("Aceptaste"),
    }, {
        texto: "Acción 9",
        accion: () => console.log("Cancelaste"),
    },
];

export const DialogoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Dialogo,
        datos: {
            titulo: "Titulo de Alerta",
            texto,
            acciones
        }
    },
});

export const DialogoConfirmar = () => ({
    Component: ThemeTester,
    props: {
        componente: Dialogo,
        datos: {
            titulo: "Titulo de Alerta",
            texto,
            acciones: confirmar
        }
    },
});

export const DialogoEnModal = () => ({
    Component: ThemeTester,
    props: {
        componente: ModalEjemplo,
        datos: {
            estado: estado,
            componente: Dialogo,
            datos: {
                titulo: "Titulo de Alerta",
                texto,
                acciones
            }
        }
    },
});

export const DialogoDistintasAcciones = () => ({
    Component: ThemeTester,
    props: {
        componente: ModalEjemplo,
        datos: {
            estado: estado,
            componente: Dialogo,
            datos: {
                titulo: "Titulo de Alerta",
                texto,
                acciones: accionesVarias
            }
        }
    },
});