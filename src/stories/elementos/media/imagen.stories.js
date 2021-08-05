import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Imagen from '../../../elementos/media/Imagen/Imagen.svelte';
import ImagenArchivo from '../../../../public/placeholder.jpg';

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

    export default {
        title: "Elementos/Media/Imagen"
    }

export const imagenDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            imagen: ImagenArchivo,
            maximizar: () => console.log("Maximizado"),
        }
    },
});

export const imagenAltTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            alt: "Aquí va una imágen",
            maximizar: () => console.log("Maximizado"),
        },
    }
});
export const imagenAjuste = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            imagen: ImagenArchivo,
            alt: "Aquí va una imágen",
            estilos: {
                ajuste: 'cover',
                altura: '200px',
            },
            maximizar: () => console.log("Maximizado"),
        },
    }
});
export const imagenAltura = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            imagen: ImagenArchivo, //comprueba funcionalidad de prop obsoleta proxima a desaparecer
            alt: "Aquí va una imágen",
            estilos: {
                ajuste: 'fill',
                altura: '320px',
            },
            maximizar: () => console.log("Maximizado"),
        }
    }
});
export const imagenTamannosResponsivos = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            tamannos,
            maximizar: () => console.log("Maximizado"),
        }
    },
});
export const imagenConDescripcion = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            tamannos,
            nombre: "Lorem Ipsum Dolor",
            descripcion: "Lorem Ipsum Dolor sit amet tiniebla sonorum inferno",
            maximizar: () => console.log("Maximizado"),
        }
    },
});
export const imagenConDescripcionAfuera = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            tamannos,
            nombre: "Lorem Ipsum Dolor",
            descripcion: "Lorem Ipsum Dolor sit amet tiniebla sonorum inferno",
            descripcionPosicion: true,
            maximizar: () => console.log("Maximizado"),
        }
    },
});
export const imagenMaximizar = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            tamannos,
            nombre: "Lorem Ipsum Dolor",
            descripcion: "Lorem Ipsum Dolor sit amet tiniebla sonorum inferno",
            descripcionPosicion: false,
            maximizar: () => console.log("Maximizado"),
        }
    },
});