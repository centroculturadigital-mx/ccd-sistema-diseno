import RegistrosLista from '../../../../componentes/CMS/RegistrosLista/RegistrosLista.svelte';
import TarjetaRegistro from '../../../../componentes/CMS/RegistroTarjeta/RegistroTarjeta.svelte';
export default { title: 'CMS/Componentes/RegistrosLista' }

const elementos = new Array(12).fill(true).map((e, i) => ({
    "id": "mi-id",
    "nombre": "Nombre de registro",
    "entidad": "mi-entidad",
    "imagen": "https://fakeimg.pl/100x100?texto=registro-" + i,
    "eliminar": () => { confirm("Quieres eliminar el registro " + i + " ?") },
}));

export const RegistrosListaDefault = () => ({
    Component: RegistrosLista, 
    props: {
        elementos
    }
});
export const RegistrosListaVacia = () => ({
    Component: RegistrosLista,
    props: {
        elementos: [],
        mensajeVacio: "Aún no tienes registros en tu cuenta"
    }
});

export const RegistrosListaNula = () => ({
    Component: RegistrosLista,
    props: {
        mensajeVacio: "Aún no tienes registros en tu cuenta"
    }
});