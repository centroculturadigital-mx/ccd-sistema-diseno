import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Logos from '../../../componentes/Logos/Logos.svelte';
import ImagenFondo from '../../../../public/placeholder.jpg';

export default { title: "Componentes/Logos/Logos" }

const logo1 = {
    logotipo: ImagenFondo,
    nombre: 'Nombre Enlace 1',
    enlace: "http://enlace1.com"
}
const logo2 = {
    logotipo: ImagenFondo,
    nombre: 'Nombre Enlace 2',
    enlace: "http://otroenlace2.org"
}
const logo3 = {
    logotipo: ImagenFondo,
    nombre: 'Nombre Enlace 3',
    enlace: "http://otroenlace3.org"
}

const logos = [logo1, logo2, logo3]

export const logosVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: Logos,
        datos: {}
    }
});

export const logosArregloVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: Logos,
        datos: {
            logos: []
        }
    }
});

export const logosImagen = () => ({
    Component: ThemeTester,
    props: {
        componente: Logos,
        datos: {
            logos
        }
    }
});