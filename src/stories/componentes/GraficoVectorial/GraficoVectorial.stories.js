import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import GraficoVectorial from '../../../componentes/GraficoVectorial/GraficoVectorial.svelte'; 
import GraficoVectorialContexto from '../../../componentes/GraficoVectorial/GraficoVectorialContexto/GraficoVectorialContexto.svelte'; 

import mapa_mexico from "../../../../public/recursos/imagenes/vectores/mapa_mexico.svg"
import mapa_mexico_atributo_name from "../../../../public/recursos/imagenes/vectores/mapa_mexico_atributo_name.svg"

export default { title: 'Componentes/GraficoVectorial' }


export const graficoVectorialDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorial,
        datos:{
            svg: mapa_mexico,
            seleccionar: datos => console.log("seleccionar", datos)
        }
    },
});



export const graficoVectorialHabilitados = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorial,
        datos:{
            svg: mapa_mexico,
            seleccionar: datos => console.log("seleccionar", datos),
            habilitados: ['Chihuahua', 'Oaxaca', 'Ciudad de México'],
        }
    },
});


export const graficoVectorialHabilitadosAtributoName = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorial,
        datos:{
            svg: mapa_mexico_atributo_name,
            seleccionar: datos => console.log("seleccionar", datos),
            habilitados: ['Chihuahua', 'Oaxaca', 'Ciudad de México'],
            configuracion: {
                habilitados: {
                    atributo: "name"
                }
            }
        }
    },
});


export const graficoVectorialHabilitadosConfiguracion = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorial,
        datos:{
            svg: mapa_mexico,
            seleccionar: datos => console.log("seleccionar", datos),
            habilitados: ['Chihuahua', 'Oaxaca', 'Ciudad de México'],
            configuracion: {
            }
        }
    },
});



export const graficoVectorialSeleccionarSinCentrar = () => ({
    Component: ThemeTester,
    props: {
        componente: GraficoVectorial,
        datos:{
            svg: mapa_mexico,
            seleccionar: datos => console.log("seleccionar", datos),
            configuracion: {
                centrarAlSeleccionar: false
            }
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