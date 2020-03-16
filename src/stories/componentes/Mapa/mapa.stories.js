import Mapa from '../../../componentes/Mapa/Mapa.svelte';

export default {title: 'Componentes/Mapa/Mapa'}

import mapa from "../../../../public/recursos/imagenes/vectores/mapamx.js";
import datos from "../../../data/info/estados.js";
    
const encontrarClave = seleccion => datos.find(d=>d.nombre==seleccion).clave

const seleccionar = seleccion => console.log("Nombre:",seleccion,"Clave",encontrarClave(seleccion))

export const MapaDefault = () => ({
    Component: Mapa,
    props: {
        mapa
    },
});

export const MapaAccion = () => ({
    Component: Mapa,
    props: {
        mapa,
        datos,
        seleccionar
    },
});


export const MapaTamanno = () => ({
    Component: Mapa,
    props: {
        mapa,
        ancho:300,
        alto:150,
    },
});


export const MapaHabilitados = () => ({
    Component: Mapa,
    props: {
        mapa,
        ancho:600,
        alto:450,
        datos: {
            habilitados:['Chihuahua','Oaxaca','CDMX']
        }
    },
});

