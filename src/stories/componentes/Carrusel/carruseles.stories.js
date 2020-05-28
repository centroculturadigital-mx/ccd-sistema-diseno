import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Carruseles from "../../../componentes/Carrusel/Carruseles.svelte";
import Logo from '../../../componentes/Logo/Logo.svelte';
import Parrafo from '../../../elementos/texto/Parrafo/Parrafo.svelte';
import Imagen from '../../../elementos/media/Imagen/Imagen.svelte';

import ImagenArchivo from '../../../../public/placeholder.jpg';

export default { title: "Componentes/Carruseles" }

const elementos = [{
        componente: Logo,
        data: {
            logotipo: ImagenArchivo,
            enlace: "http://enlace.com",
            nombre: "Un Logo"
        }
    },
    {
        componente: Parrafo,
        data: {
            texto: "Et aliqua nisi pariatur laboris aliquip mollit qui dolore enim anim est exercitation adipisicing pariatur."
        }
    },
    {
        componente: Imagen,
        data: {
            imagen: ImagenArchivo,
            alt: "Una imagen",
            altura: "10rem",
        }
    }
]

// let carruseles = new Array(2);

export const carruselesDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Carruseles,
        datos: {
            carruseles: elementos
        }
    }
});