import RegistrosLista from '../../../../componentes/CMS/RegistrosLista/RegistrosLista.svelte';
import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';

export default { title: 'CMS/Componentes/RegistrosLista' }

const elementos = new Array(12).fill(true).map((e, i) => ({
    "id": "mi-id",
    "nombre": "Nombre de registro",
    "entidad": "mi-entidad",
    "imagen": "https://fakeimg.pl/100x100?texto=registro-" + i,
    "eliminar": () => { confirm("Quieres eliminar el registro " + i + " ?") },
}));

export const RegistrosListaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: RegistrosLista,
        datos: {
            elementos
        }
    }
});
export const RegistrosListaVacia = () => ({
    Component: ThemeTester,
    props: {
        componente: RegistrosLista,
        datos: {
            elementos: [],
            mensajeVacio: "Aún no tienes registros en tu cuenta"
        }
    }
});

export const RegistrosListaNula = () => ({
    Component: ThemeTester,
    props: {
        componente: RegistrosLista,
        datos: {
            mensajeVacio: "Aún no tienes registros en tu cuenta"
        }
    }
});