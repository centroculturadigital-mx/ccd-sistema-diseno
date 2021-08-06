import ThemeTester from '../../ThemeTester/ThemeTester.svelte';
import Diapositivas from "./Diapositivas"

let tamannos = {
    cargando: "https://fakeimg.pl/320x320/?text=Cargando",
    xl: {
        x1: "https://fakeimg.pl/1680x1680/ff0000/?text=1x",
        x2: "https://fakeimg.pl/1680x1680/ff0000/?text=2x",
        x3: "https://fakeimg.pl/1680x1680/ff0000/?text=3x",
    },
    lg: {
        x1: "https://fakeimg.pl/1220x1220/00ff00/?text=1x",
        x2: "https://fakeimg.pl/1220x1220/00ff00/?text=2x",
        x3: "https://fakeimg.pl/1220x1220/00ff00/?text=3x",
    },
    md: {
        x1: "https://fakeimg.pl/768x768/0000ff/?text=1x",
        x2: "https://fakeimg.pl/768x768/0000ff/?text=2x",
        x3: "https://fakeimg.pl/768x768/0000ff/?text=3x",
    },
    sm: {
        x1: "https://fakeimg.pl/465x465/0f0f0f/?text=1x",
        x2: "https://fakeimg.pl/465x465/0f0f0f/?text=2x",
        x3: "https://fakeimg.pl/465x465/0f0f0f/?text=3x",
    },
    xs: {
        x1: "https://fakeimg.pl/320x320/f0f0ff/?text=1x",
        x2: "https://fakeimg.pl/465x465/0f0f0f/?text=2x",
        x3: "https://fakeimg.pl/465x465/0f0f0f/?text=3x",
    }
}

let diapositivas = [{
    // imagen: "https://fakeimg.pl/350x200/?text=Diapositiva",
    tamannos,
    nombre: "Lorem Ipsum Dolor",
    descripcion: "Lorem Ipsum Dolor sit amet tiniebla sonorum inferno",
    alt: "Una imagen",
}]

export default {
    title: 'Componentes/Ventanas/Diapositivas'
}

export const diapositivasDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Diapositivas,
        datos: {
            diapositivas,
            estado: true,
            // cerrar: () => console.log("cerrar desde SB")
        }
    },
});