import ThemeTester from '../../../componentes/ThemeTester/ThemeTester';
import Imagen from '../../../elementos/media/Imagen/Imagen';
import ImagenPrueba from "../../../elementos/media/Imagen/ImagenPrueba"

let tamannos = {
        cargando: "https://fakeimg.pl/320x320/?text=Cargando",
        xl: {
            x1: "https://fakeimg.pl/1680x1680/ff0000/?text=1680-1x",
            x2: "https://fakeimg.pl/1680x1680/ff0000/?text=1680-2x",
            x3: "https://fakeimg.pl/1680x1680/ff0000/?text=1680-3x",
        },
        lg: {
            x1: "https://fakeimg.pl/1220x1220/00ff00/?text=1220-1x",
            x2: "https://fakeimg.pl/1220x1220/00ff00/?text=1220-2x",
            x3: "https://fakeimg.pl/1220x1220/00ff00/?text=1220-3x",
        },
        md: {
            x1: "https://fakeimg.pl/768x768/0000ff/?text=768-1x",
            x2: "https://fakeimg.pl/768x768/0000ff/?text=768-2x",
            x3: "https://fakeimg.pl/768x768/0000ff/?text=768-3x",
        },
        sm: {
            x1: "https://fakeimg.pl/465x465/0f0f0f/?text=465-1x",
            x2: "https://fakeimg.pl/465x465/0f0f0f/?text=465-2x",
            x3: "https://fakeimg.pl/465x465/0f0f0f/?text=465-3x",
        },
        xs: {
            x1: "https://fakeimg.pl/320x320/f0f0ff/?text=320-1x",
            x2: "https://fakeimg.pl/465x465/0f0f0f/?text=320-2x",
            x3: "https://fakeimg.pl/465x465/0f0f0f/?text=320-3x",
        }
    }

    export default {
        title: "Elementos/Media/ImagenPrueba"
    }

export const imagenPruebaMaximizar = () => ({
    Component: ThemeTester,
    props: {
        componente: ImagenPrueba,
        datos: {
            tamannos,
            nombre: "Lorem Ipsum Dolor",
            descripcion: "Lorem Ipsum Dolor sit amet tiniebla sonorum inferno",
            descripcionPosicion: false,
        }
    },
});