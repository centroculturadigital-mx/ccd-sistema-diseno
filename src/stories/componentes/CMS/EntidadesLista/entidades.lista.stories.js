import EntidadesLista from '../../../../componentes/CMS/EntidadesLista/EntidadesLista.svelte';
import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';

export default { title: 'CMS/Componentes/EntidadesLista' }

const elementos = new Array(12).fill(true).map((e, i) => ({
    icono: "avatar",
    nombre: "Mi entidad " + i,
    cantidad: "12" + i,
    clave: "mi-entidad",
    clave_plural: "mis-entidades"
}));



export const EntidadesListaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: EntidadesLista,
        datos: {
            elementos
        }
    }
});

export const EntidadesListaVacia = () => ({
    Component: ThemeTester,
    props: {
        componente: EntidadesLista,
        datos: {
            elementos: [],
            mensajeVacio: "Mensaje de lista vacia personalizado"
        }
    }
});