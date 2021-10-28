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
            marcadores: marcadoresMapaMexico,
            seleccionar: datos => console.log("seleccionar", datos)
        }
    },
});

export const graficoVectorialMarcadoresSeleccionado = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorialMarcadores,
        datos:{
            svg: mapa_mexico,
            marcadores: marcadoresMapaMexico,
            seleccionado: "Puebla"
        }
    },
});




export const graficoVectorialMarcadoresActivosVsInactivos = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorialMarcadores,
        datos:{
            svg: mapa_mexico,
            marcadores: [
                marcadoresMapaMexico[1],
                marcadoresMapaMexico[6],
                marcadoresMapaMexico[11],
                marcadoresMapaMexico[16],
                marcadoresMapaMexico[22],
            ],
            configuracion: {
                activos: {
                    mostrar: true,
                    color: "#00ff33"
                }
            }
        }
    },
});