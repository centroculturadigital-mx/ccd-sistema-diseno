import EntidadesLista from '../../../../componentes/CMS/EntidadesLista/EntidadesLista.svelte';
import EntidadTarjeta from '../../../../componentes/CMS/EntidadTarjeta/EntidadTarjeta.svelte';

export default { title: 'CMS/Componentes/EntidadesLista' }

const elementos = new Array(12).fill(true).map((e, i) => ({
    icono: "cerrar",
    nombre: "Mi entidad " + i,
    cantidad: "12" + i,
    clave: "mi-entidad",
    clave_plural: "mis-entidades"
}));



export const EntidadesListaDefault = () => ({
    Component: EntidadesLista,
    props: {
        elementos
    }
});

export const EntidadesListaVacia = () => ({
    Component: EntidadesLista,
    props: {
        elementos: [],
        mensajeVacio: "Mensaje de lista vacia personalizado"
    }
});