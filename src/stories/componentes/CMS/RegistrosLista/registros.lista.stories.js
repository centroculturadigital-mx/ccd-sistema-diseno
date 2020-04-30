import RegistrosLista from '../../../../componentes/CMS/RegistrosLista/RegistrosLista.svelte';
import TarjetaRegistro from '../../../../componentes/CMS/RegistroTarjeta/RegistroTarjeta.svelte';
export default { title: 'CMS/Componentes/RegistrosLista' }

const elementos = new Array(12).fill(true).map((e, i) => ({
    componente: TarjetaRegistro,
    data: {
        "id": "mi-id",
        "nombre": "Nombre de registro",
        "imagen": "https://fakeimg.pl/100?=registro" + i,
        "eliminar": () => { confirm("Quieres eliminar el registro " + i + " ?") },
    }
}));
export const RegistrosListaDefault = () => ({
    Component: RegistrosLista
});
export const RegistrosListaVacia = () => ({
    Component: RegistrosLista,
    props: {
        mensajeVacio: "Aún no tienes registros en tu cuenta"
    }
});

export const RegistrosListaLlena = () => ({
    Component: RegistrosLista,
    props: {
        elementos: elementos,
        mensajeVacio: "Aún no tienes registros en tu cuenta"
    }
});