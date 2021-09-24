import campos from "../../../../data/campos/";

import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import Campo from '../../../../componentes/formularios/Campo/Campo.svelte';
import GrupoDesplegable from '../../../../componentes/formularios/GrupoDesplegable/GrupoDesplegable.svelte';
import Boton from '../../../../elementos/botones/Boton/Boton.svelte';

export default {
    title: 'Componentes/Formularios/GrupoDesplegable/GrupoDesplegable'
}



const elementos = [
    {
        componente: Campo,
        datos: campos[0] 
    },
    {
        componente: Boton,
        datos: {
            texto: "Un botón",
            click: e => {
                console.log("Un botón")
                e.preventDefault()
                e.stopPropagation()
            }
        }
    },
    {
        componente: Campo,
        datos: campos[1] 
    },
]


export const grupoDesplegableDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: GrupoDesplegable,
        datos: {
            texto: "Mostrar grupo de campos",
            textoCerrar: "Ocultar grupo de campos",
            elementos
        },
    }
});


export const grupoDesplegableSinTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: GrupoDesplegable,
        datos: {
            estado: true,
            elementos
        },
    }
});