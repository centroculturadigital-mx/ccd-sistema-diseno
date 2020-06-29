import ThemeTester from '../../../componentes/ThemeTester/ThemeTester';
import TarjetHorizontalChica from '../../../componentes/Tarjetas/TarjetaHorizontalChica/TarjetaHorizontalChica.svelte';

import imagen from '../../../data/recursos/placeholder.png';

export default { title: "Componentes/Tarjetas/TarjetaHorizontalChica" }

export const tarjetaHorizontalChicaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetHorizontalChica,
        datos: {
            imagen: imagen,
            titulo: "Titulo de tarjeta vertical chica",
            texto: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ...",
            textoSecundario: "Sed ut perspiciatis: unde omnis",
        }
    }
});
export const tarjetaHorizontalChicaTitulo = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetHorizontalChica,
        datos: {
            imagen: imagen,
            titulo: "Titulo de tarjeta vertical chica",
            // texto: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ...",
            // textoSecundario: "Sed ut perspiciatis: unde omnis",
        }
    }
});
export const tarjetaHorizontalChicaTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetHorizontalChica,
        datos: {
            imagen: imagen,
            texto: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ...",
            // textoSecundario: "Sed ut perspiciatis: unde omnis",
        }
    }
});
export const tarjetaHorizontalChicaTextoSecundario = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetHorizontalChica,
        datos: {
            imagen: imagen,
            textoSecundario: "Sed ut perspiciatis: unde omnis",
        }
    }
});