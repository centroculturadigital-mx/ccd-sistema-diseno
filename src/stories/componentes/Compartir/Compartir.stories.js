import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Compartir from '../../../componentes/Compartir/Compartir.svelte';

export default { title: 'Componentes/Compartir' }


export const CompartirDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Compartir,
        datos: {
            url: "https://www.lospinos.cultura.gob.mx",
            titulo: "Texto a compartir",
            usuario: "IllSlide",
            compartir: ({ red, url }) => console.log("Analytics: ", red, url)
        }
    },
});