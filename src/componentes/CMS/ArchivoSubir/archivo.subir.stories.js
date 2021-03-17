import ArchivoSubir from './ArchivoSubir.svelte';
import ArchivoSubirProbar from './ArchivoSubirProbar.svelte';
import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';

export default { title: 'CMS/Componentes/ArchivoSubir' }

export const archivoSubirInicial = () => ({
    Component: ThemeTester,
    props: {
        componente: ArchivoSubir,
        datos: {
            cambiar: datos => console.log("ARCHIVO CAMBIAR", datos)
        }
    }
});
export const archivoSubirEtiqueta = () => ({
    Component: ThemeTester,
    props: {
        componente: ArchivoSubir,
        datos: {
            etiqueta: "Sube una archivo",
        }
    }
});


export const archivoSubirIcono = () => ({
    Component: ThemeTester,
    props: {
        componente: ArchivoSubir,
        datos: {
            icono: "cv"
        }
    }
});

export const archivoSubirClickExterno = () => ({
    Component: ThemeTester,
    props: {
        componente: ArchivoSubirProbar,
        datos: {

        }
    }
});