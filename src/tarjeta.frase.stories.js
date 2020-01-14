import TarjetaFraseVista from "./stories/tarjetas/TarjetaFrase/TarjetaFraseVista.svelte";
import ImagenFondo from '../public/placeholder.no.texto.jpg';

export default {title: 'Tarjeta Frase'}

export const TarjetaFraseImagen = () => ({
    Component: TarjetaFraseVista,
    props: {
        imagenUrl: ImagenFondo,
        textoFrase: "Nisi ut culpa pariatur commodo ad cillum ea ut pariatur.",
        textoAutor: "-Eiusmod pariatur.",
        posicionTexto: 'center',
        fontStyle: 'italic'
    }
    
});

export const TarjetaFraseColor = () => ({
    Component: TarjetaFraseVista,
    props: {
        colorFondo: 'blue',
        textoFrase: "Nisi ut culpa pariatur commodo ad cillum ea ut pariatur.",
        textoAutor: "-Eiusmod pariatur.",
        posicionTexto: 'center',
        color: 'white',
        fontStyle: 'italic'
    }
    
});