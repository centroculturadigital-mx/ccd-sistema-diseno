import Carruseles from "../../../componentes/Carrusel/Carruseles.svelte";

export default {title: "Componentes/Carruseles"}


export const carruselesDefault = () => ({
    Component: Carruseles,
    props: {
        elementos: [
            {
                a: "b"
            }
        ]
    }
});