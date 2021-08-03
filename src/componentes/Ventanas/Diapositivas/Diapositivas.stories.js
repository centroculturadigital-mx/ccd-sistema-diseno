import ThemeTester from '../../ThemeTester/ThemeTester.svelte';
import Diapositivas from "./Diapositivas"


let diapositivas =  [{
        imagen: "https://fakeimg.pl/350x200/?text=Diapositiva",
        alt: "Una imagen",
}]

export default { title: 'Componentes/Ventanas/Diapositivas' }

export const diapositivasDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Diapositivas,
        datos: {
            diapositivas
        }
    },
});