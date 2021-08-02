import ThemeTester from '../ThemeTester/ThemeTester.svelte';
import Etiqueta from "./Etiqueta"

export default { title: 'Componentes/Etiqueta' }

export const EtiquetaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Etiqueta,
        datos: {
            texto: "Etiqueta genérica",
            cerrar: true
        }
    },
});

export const EtiquetaSinCerrar = () => ({
    Component: ThemeTester,
    props: {
        componente: Etiqueta,
        datos: {
            texto: "Etiqueta genérica",
            cerrar: false
        }
    },
});