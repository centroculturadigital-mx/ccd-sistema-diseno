import TarjetaFotoVista from "./stories/tarjetas/TarjetaFoto/TarjetaFotoVista.svelte";
import Placeholder from '../public/placeholder.texto.jpg';

export default {title: 'Tarjeta Foto'}

export const TarjetaFoto = () => ({
    Component: TarjetaFotoVista,
    props: {
        imagenUrl: Placeholder,
        sombra: true,
    }
});