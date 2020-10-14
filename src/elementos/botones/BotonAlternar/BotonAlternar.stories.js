import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import BotonAlternar from './BotonAlternar';
import BotonAlternarProbar from './BotonAlternarProbar';

export default { title: 'Componentes/UI/BotonAlternar' }

export const botonAlternarDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonAlternar,
        datos: {
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