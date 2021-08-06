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
            x2: "https://fakeimg.pl/465x465/f0f0ff/?text=320-2x",
            x3: "https://fakeimg.pl/465x465/f0f0ff/?text=320-3x",
        }
    }
let imagenesReales = {
        cargando: "https://fakeimg.pl/320x320/?text=Cargando",
        xl: {
            x1: "https://i.pinimg.com/originals/2e/51/a9/2e51a9d793bbfe4266ad8fc3dee81c4f.jpg",
            x2: "https://i.pinimg.com/originals/2e/51/a9/2e51a9d793bbfe4266ad8fc3dee81c4f.jpg",
            x3: "https://i.pinimg.com/originals/2e/51/a9/2e51a9d793bbfe4266ad8fc3dee81c4f.jpg",
        },
        lg: {
            x1: "https://i.ytimg.com/vi/FL3A4GaihNA/maxresdefault.jpg",
            x2: "https://i.ytimg.com/vi/FL3A4GaihNA/maxresdefault.jpg",
            x3: "https://i.ytimg.com/vi/FL3A4GaihNA/maxresdefault.jpg",
        },
        md: {
            x1: "https://theiphonewalls.com/wp-content/uploads/2018/01/Wolf-galaxy.jpg",
            x2: "https://theiphonewalls.com/wp-content/uploads/2018/01/Wolf-galaxy.jpg",
            x3: "https://theiphonewalls.com/wp-content/uploads/2018/01/Wolf-galaxy.jpg",
        },
        sm: {
            x1: "https://vignette.wikia.nocookie.net/dragonball/images/b/b8/465px-ExplosiveDemonWaveStanceSyn.Ep.58.GT.png/revision/latest?cb=20120218172346&path-prefix=es",
            x2: "https://vignette.wikia.nocookie.net/dragonball/images/b/b8/465px-ExplosiveDemonWaveStanceSyn.Ep.58.GT.png/revision/latest?cb=20120218172346&path-prefix=es",
            x3: "https://vignette.wikia.nocookie.net/dragonball/images/b/b8/465px-ExplosiveDemonWaveStanceSyn.Ep.58.GT.png/revision/latest?cb=20120218172346&path-prefix=es",
        },
        xs: {
            x1: "http://4.bp.blogspot.com/-gvhqUXb9w0c/TvkdhgSxA7I/AAAAAAAAA4M/HR_dUvL_C-o/s1600/Lion_king_wallpaper.jpg",
            x2: "http://4.bp.blogspot.com/-gvhqUXb9w0c/TvkdhgSxA7I/AAAAAAAAA4M/HR_dUvL_C-o/s1600/Lion_king_wallpaper.jpg",
            x3: "http://4.bp.blogspot.com/-gvhqUXb9w0c/TvkdhgSxA7I/AAAAAAAAA4M/HR_dUvL_C-o/s1600/Lion_king_wallpaper.jpg",
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
export const imagenPruebaImagenesDistintosTamannos = () => ({
    Component: ThemeTester,
    props: {
        componente: ImagenPrueba,
        datos: {
            tamannos: imagenesReales,
            nombre: "Lorem Ipsum Dolor",
            descripcion: "Lorem Ipsum Dolor sit amet tiniebla sonorum inferno",
            descripcionPosicion: false,
        }
    },
});