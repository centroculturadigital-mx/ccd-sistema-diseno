import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Logos from '../../../componentes/Logos/Logos.svelte';
import imagen from '../../../../public/placeholder.jpg';
import imagenVector from '../../../../public/ccd.svg';

export default { title: "Componentes/Logos/Logos" }

let logos = new Array(4).fill(true).map((l, i) => ({
    imagen: imagen,
    nombre: 'NombreLogo' + i,
    enlace: "#"
}))

let vectores = new Array(4).fill(true).map((l, i) => ({
    imagen: imagenVector,
    nombre: 'NombreLogo' + i,
    enlace: "#",
    tipo: "vector",
}))

let variosTipos = new Array(8).fill(true).map((l, i) => ({
    imagen: i % 2 == 0 ? imagenVector : imagen,
    nombre: 'NombreLogo' + i,
    enlace: "#",
    tipo: i % 2 == 0 ? "vector" : "imagen",
}))

export const logosVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: Logos,
        datos: {
            logotipos: []
        }
    }
});

export const logosImagenes = () => ({
    Component: ThemeTester,
    props: {
        componente: Logos,
        datos: {
            logotipos: logos
        }
    }
});

export const logosVectores = () => ({
    Component: ThemeTester,
    props: {
        componente: Logos,
        datos: {
            logotipos: vectores
        }
    }
});

export const logosImagenYVector = () => ({
    Component: ThemeTester,
    props: {
        componente: Logos,
        datos: {
            logotipos: variosTipos
        }
    }
});