import ImagenSubir from '../../../../componentes/CMS/ImagenSubir/ImagenSubir.svelte';

export default { title: 'CMS/Componentes/ImagenSubir' }

export const imagenSubirInicial = () => ({
    Component: ImagenSubir,
    props: {
        etiqueta: "Sube una imagen",
    }
});