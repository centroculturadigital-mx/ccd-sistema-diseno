import EntidadesLista from '../../../../componentes/CMS/EntidadesLista/EntidadesLista.svelte';
import EntidadTarjeta from '../../../../componentes/CMS/EntidadTarjeta/EntidadTarjeta.svelte';

export default { title: 'CMS/Componentes/EntidadesLista' }

const elementos = new Array(12).fill(true).map((e, i) => ({
    componente: EntidadTarjeta,
    data: {
        icono: "cerrar",
        nombre: "Mi entidad " + i,
        cantidad: "12" + i,
        clave: "mi-entidad",
        clave_plural: "mis-entidades"
    }
}));


export const EntidadesListaDefault = () => ({
    Component: EntidadesLista
});

export const EntidadesListaVacia = () => ({
    Component: EntidadesLista,
    props: {
        elementos: [],
        mensajeVacio: "Mensaje de lista vacia personalizado"
    }
});

export const EntidadesListaLlena = () => ({
    Component: EntidadesLista,
    props: {
        mensajeVacio: "Mensaje personalizado de lista entidades vacia",
        elementos,
    }
});