import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import GraficoVectorial from '../../../componentes/GraficoVectorial/GraficoVectorial.svelte'; 
import GraficoVectorialContexto from '../../../componentes/GraficoVectorial/GraficoVectorialContexto/GraficoVectorialContexto.svelte'; 

import mapa_mexico from "../../../../public/recursos/imagenes/vectores/mapa_mexico.svg"

export default { title: 'Componentes/GraficoVectorial' }


export const graficoVectorialDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorial,
        datos:{
            svg: mapa_mexico
        }
    },
});



export const graficoVectorialContexto = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorialContexto,
        datos:{
            svg: mapa_mexico,
            actualizarGraficoVectorial: datos => console.log("actualizarGraficoVectorial", datos),
            seleccionarPath: path => console.log("seleccionarPath", path.getAttribute("id") ),
        }
    },
});