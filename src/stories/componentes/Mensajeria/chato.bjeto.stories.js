import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ChatObjeto from '../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjeto.svelte';
import Tarjeta from "../../../componentes/Tarjetas/Tarjeta/Tarjeta";

import imagen from "../../../data/recursos/placeholder.png";

export default { title: "Componentes/Mensajeria/Chat/ChatObjeto" }

export const reaccionesDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: ChatObjeto,
        datos: {
            componente: Tarjeta,
            datos: {
                apariencia: "Chica",
                imagen,
                nombre: "Titulo objeto",
                extracto: "Lorem ipsum dolor sit amet."
            }
        }
    }
});