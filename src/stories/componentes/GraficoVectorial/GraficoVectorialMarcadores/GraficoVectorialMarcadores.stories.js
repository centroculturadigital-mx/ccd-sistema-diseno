import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import GraficoVectorialMarcadores from '../../../../componentes/GraficoVectorial/GraficoVectorialMarcadores/GraficoVectorialMarcadores.svelte'; 

import mapa_mexico from "../../../../../public/recursos/imagenes/vectores/mapa_mexico.svg"
import marcadoresMapaMexico from "../../../../data/marcadoresMapaMexico"

export default { title: 'Componentes/GraficoVectorial/GraficoVectorialMarcadores' }


export const graficoVectorialMarcadoresDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorialMarcadores,
        datos:{
            svg: mapa_mexico,
            marcadores: marcadoresMapaMexico
        }
    },
});