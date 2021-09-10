import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import GraficoVectorialContexto from '../../../../componentes/GraficoVectorial/GraficoVectorialContexto/GraficoVectorialContexto.svelte'; 

import mapa_mexico from "../../../../../public/recursos/imagenes/vectores/mapa_mexico.svg"

export default { title: 'Componentes/GraficoVectorial/GraficoVectorialContexto' }


export const graficoVectorialContextoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorialContexto,
        datos:{
            svg: mapa_mexico
        }
    },
});