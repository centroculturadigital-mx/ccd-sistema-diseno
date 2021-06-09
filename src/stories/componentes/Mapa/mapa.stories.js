import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Mapa from '../../../componentes/Mapa/Mapa.svelte';

export default { title: 'Componentes/Complejos/Mapa/Mapa' }

import mapa from "../../../../public/recursos/imagenes/vectores/mapamx.js";
import datos from "../../../data/info/estados.js";

const encontrarClave = seleccion => datos.find(d => d.nombre == seleccion).clave

const seleccionar = seleccion => console.log("Nombre:", seleccion, "Clave", encontrarClave(seleccion))

export const MapaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Mapa,
        datos: {
            mapa
        }
    },
});

export const MapaAccion = () => ({
    Component: ThemeTester,
    props: {
        componente: Mapa,
        datos: {
            mapa,
            datos,
            seleccionar
        },
    },
});


export const MapaTamanno = () => ({
    Component: ThemeTester,
    props: {
        componente: Mapa,
        datos: {
            mapa,
            ancho: 300,
            alto: 150,
        },
    },
});


export const MapaHabilitados = () => ({
    Component: ThemeTester,
    props: {
        componente: Mapa,
        datos: {
            mapa,
            ancho: 600,
            alto: 450,
            datos: {
                habilitados: ['Chihuahua', 'Oaxaca', 'Ciudad de México']
            }
        }
    },
});

export const MapaSeleccionado = () => ({
    Component: ThemeTester,
    props: {
        componente: Mapa,
        datos: {
            mapa,
            ancho: 600,
            alto: 450,
            seleccionado: 'Puebla'
        },
    },
});