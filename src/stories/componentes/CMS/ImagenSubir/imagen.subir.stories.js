import ImagenSubir from '../../../../componentes/CMS/ImagenSubir/ImagenSubir.svelte';
import ImagenSubirProbar from '../../../../componentes/CMS/ImagenSubir/ImagenSubirProbar.svelte';
import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';

export default { title: 'CMS/Componentes/ImagenSubir' }

export const imagenSubirInicial = () => ({
    Component: ThemeTester,
    props: {
        componente: ImagenSubir,
        datos: {
            cambiar: datos => console.log("IMAGEN CAMBIAR", datos)
        }
    }
});

export const imagenSubirCircular = () => ({
    Component: ThemeTester,
    props: {
        componente: ImagenSubir,
        datos: {
            borrarPermitir: false,
            formato: "CIRCULAR"
        }
    }
});

export const imagenSubirEtiqueta = () => ({
    Component: ThemeTester,
    props: {
        componente: ImagenSubir,
        datos: {
            etiqueta: "Sube una imagen",
        }
    }
});

export const imagenSubirCircularEtiqueta = () => ({
    Component: ThemeTester,
    props: {
        componente: ImagenSubir,
        datos: {
            borrarPermitir: false,
            etiqueta: "Sube una imagen",
            formato: "CIRCULAR"
        }
    }
});

export const imagenSubirIcono = () => ({
    Component: ThemeTester,
    props: {
        componente: ImagenSubir,
        datos: {
            icono: "avatar"
        }
    }
});

export const imagenSubirNoBorrable = () => ({
    Component: ThemeTester,
    props: {
        componente: ImagenSubir,
        datos: {
            borrarPermitir: false
        }
    }
});

export const imagenSubirClickExterno = () => ({
    Component: ThemeTester,
    props: {
        componente: ImagenSubirProbar,
        datos: {

        }
    }
});