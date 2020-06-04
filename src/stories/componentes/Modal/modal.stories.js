import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Modal from '../../../componentes/Modal/Modal.svelte';
import ModalEjemplo from '../../../componentes/Modal/ModalEjemplo.svelte';
import Tarjeta from '../../../componentes/Tarjetas/Tarjeta/Tarjeta.svelte';

import placeholder from '../../../../public/placeholder.jpg'

export default { title: 'Componentes/Ventanas/Modal' }

export const modalAbrir = () => ({
    Component: ThemeTester,
    props: {
        estado: false,
        componente: ModalEjemplo,
        datos: {
            componente: Tarjeta,
            datos: {
                imagen: placeholder,
                titulo: "Titulo de tarjeta",
                nivelTitulo: 3,
                // texto: "Nam in timeam commodo numquam, eu sed dolore vivendum reprimique. Cibo referrentur id pri, ei sea placerat adipisci.",
                sombra: true,
            }
        },
    },
});

export const modalAbierto = () => ({
    Component: ThemeTester,
    props: {
        componente: ModalEjemplo,
        datos: {
            estado: true,
            componente: Tarjeta,
            datos: {
                imagen: placeholder,
                titulo: "Titulo de tarjeta",
                nivelTitulo: 3,
                // texto: "Nam in timeam commodo numquam, eu sed dolore vivendum reprimique. Cibo referrentur id pri, ei sea placerat adipisci.",
                sombra: true,
            }
        },
    },
});

export const modalCerrado = () => ({
    Component: ThemeTester,
    props: {
        componente: Modal,
        datos: {
            estado: false,
            componente: Tarjeta,
            datos: {
                imagen: placeholder,
                titulo: "Titulo de tarjeta",
                nivelTitulo: 3,
                texto: "Nam in timeam commodo numquam, eu sed dolore vivendum reprimique. Cibo referrentur id pri, ei sea placerat adipisci.",
                sombra: true,
            }
        }
    },
});