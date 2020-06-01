import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import Redes from '../../../../componentes/Navegacion/Redes/Redes.svelte';

export default { title: 'Componentes/Navegacion/Redes' }

const redes = [{
        icono: "twitter",
        enlace: "https://twitter.com/"
    },
    {
        icono: "facebook",
        enlace: "https://facebook.com/"
    },
    {
        icono: "instagram",
        enlace: "https://instagram.com"
    }
];

export const RedesDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Redes,
        datos: {}

    },
});
export const RedesComparte = () => ({
    Component: ThemeTester,
    props: {
        componente: Redes,
        datos: {
            redes
        }

    },
});