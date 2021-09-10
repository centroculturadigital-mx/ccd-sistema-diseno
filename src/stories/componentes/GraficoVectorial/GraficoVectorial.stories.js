import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import GraficoVectorial from '../../../componentes/GraficoVectorial/GraficoVectorial.svelte'; 
import GraficoVectorialContexto from '../../../componentes/GraficoVectorial/GraficoVectorialContexto/GraficoVectorialContexto.svelte'; 
import GraficoVectorialMarcadoresPrueba from '../../../componentes/GraficoVectorial/GraficoVectorialMarcadores/GraficoVectorialMarcadoresPrueba.svelte'; 

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
            actualizarPanZoom: datos => console.log("actualizarPanZoom", datos),
            seleccionarPath: path => console.log("seleccionarPath", path.getAttribute("id") ),
        }
    },
});



export const graficoVectorialMarcadoresPrueba = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorialMarcadoresPrueba,
        datos:{
            svg: mapa_mexico,
        }
    },
});