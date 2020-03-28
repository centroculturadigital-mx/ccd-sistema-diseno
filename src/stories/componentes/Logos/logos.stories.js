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

const logos = [ logo1, logo2 ]


export const logosDefault = () => ({
    Component: Logos,
    props: {
        logos
    }
});

export const logosVacio = () => ({
    Component: Logos,
    props: {}
});

export const logosArregloVacio = () => ({
    Component: Logos,
    props: {
        logos: []
    }
});