import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import BotonAlternar from './BotonAlternar';
import BotonAlternarProbar from './BotonAlternarProbar';

export default { title: 'Componentes/UI/BotonAlternar' }

export const botonAlternarDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonAlternar,
        datos: {
            tipo: "casilla",
            texto: "Alternar",
            click: () => console.log("Está apagado")
        }
    }
});
export const botonAlternarEncendido = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonAlternar,
        datos: {
            texto: "Alternar",
            estado: true,
            click: () => console.log("Está encendido")
        }
    }
});
export const botonAlternarProbar = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonAlternarProbar,
        datos: {
            texto: "Probar",
            click: (estado) => console.log("estado", estado)
        }
    }
});
export const botonAlternarTextoLargo = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonAlternarProbar,
        datos: {
            texto: "Lorem ipsum dolor si amet precialis ember doritum ges un it volare oscilis cuadrato ltio ritah signoru, sobrilisti uncamini dotin. Lorem ipsum dolor si amet precialis ember doritum ges un it volare oscilis cuadrato ltio ritah signoru, sobrilisti uncamini dotin",
            click: (estado) => console.log("estado", estado)
        }
    }
});
export const botonAlternarTipoCirculo = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonAlternarProbar,
        datos: {
            tipo: "circulo",
            texto: "Este es un 'Radio Button'",
            click: (estado) => console.log("estado", estado)
        }
    }
});