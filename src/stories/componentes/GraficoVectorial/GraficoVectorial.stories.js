import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import GraficoVectorial from '../../../componentes/GraficoVectorial/GraficoVectorial.svelte'; 

import mapa_mexico from "../../../../public/recursos/imagenes/vectores/mapa_mexico.svg"

export default { title: 'Componentes/GraficoVectorial' }


export const textoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorial,
        datos:{
            svg: mapamx
        }
    },
});