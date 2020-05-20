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
            altTexto: "Aquí vá una imagen"
        },
    }
});
export const imagenAjuste = () => ({
    Component: ThemeTester,
    props: {
        componente: Imagen,
        datos: {
            imagen: ImagenArchivo,
            altTexto: "Aquí va una imagen",
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
            imagenUrl: ImagenArchivo, //comprueba funcionalidad de prop obsoleta proxima a desaparecer
            altTexto: "Aquí va una imagen",
            estilos: {
                ajuste: 'fill',
                altura: '320px',
            }
        }
    }
});