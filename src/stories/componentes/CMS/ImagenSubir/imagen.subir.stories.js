import ImagenSubir from '../../../../componentes/CMS/ImagenSubir/ImagenSubir.svelte';
import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';

export default { title: 'CMS/Componentes/ImagenSubir' }

export const imagenSubirInicial = () => ({
    Component: ThemeTester,
    props: {
        componente: ImagenSubir,
        datos: {
            cambiar: datos => console.log("IMAGEN CAMBIAR",datos)
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