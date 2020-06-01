import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Modal from '../../../componentes/Modal/Modal.svelte';
import Tarjeta from '../../../componentes/Tarjetas/Tarjeta/Tarjeta.svelte';

import placeholder from '../../../../public/placeholder.jpg'

export default { title: 'Componentes/Modal' }

export const modalAbierto = () => ({
    Component: ThemeTester,
    props: {
        componente: Modal,
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
        }

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