import ThemeTester from '../ThemeTester/ThemeTester.svelte';
import Etiqueta from "./Etiqueta"

export default { title: 'Componentes/Etiqueta' }

export const etiquetaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Etiqueta,
        datos: {
            texto: "Etiqueta genérica",
            cerrar: true
        }
    },
});

export const etiquetaSinCerrar = () => ({
    Component: ThemeTester,
    props: {
        componente: Etiqueta,
        datos: {
            texto: "Etiqueta genérica",
            cerrar: false
        }
    },
});
export const etiquetaConIcono = () => ({
    Component: ThemeTester,
    props: {
        componente: Etiqueta,
        datos: {
            texto: "Etiqueta genérica",
            cerrar: false,
            icono: "avatar"
        }
    },
});
export const etiquetaConIconoYCerrar = () => ({
    Component: ThemeTester,
    props: {
        componente: Etiqueta,
        datos: {
            texto: "Etiqueta genérica",
            cerrar: true,
            icono: "avatar"
        }
    },
});
export const etiquetaConImagen = () => ({
    Component: ThemeTester,
    props: {
        componente: Etiqueta,
        datos: {
            texto: "Etiqueta genérica",
            cerrar: false,
            imagen:"https://fakeimg.pl/350x200/?text=Diapositiva"
        }
    },
});
export const etiquetaConImagenYCerrar = () => ({
    Component: ThemeTester,
    props: {
        componente: Etiqueta,
        datos: {
            texto: "Etiqueta genérica",
            cerrar: true,
            imagen:"https://fakeimg.pl/350x200/?text=Diapositiva"
        }
    },
});