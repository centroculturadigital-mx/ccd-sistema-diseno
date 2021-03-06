import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Imagen from '../../../elementos/media/Imagen/Imagen.svelte';
import ImagenArchivo from '../../../../public/placeholder.jpg';

export default { title: "Elementos/Media/Imagen" }

export const imagenDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            imagen: ImagenArchivo
        }
    },
});
export const imagenAltTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            alt: "Aquí va una imágen"
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
            }
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
            }
        }
    }
});