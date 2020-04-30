import RegistrosLista from '../../../../componentes/CMS/RegistrosLista/RegistrosLista.svelte';

export default { title: 'CMS/Componentes/RegistrosLista' }

const elementos = new Array(12).fill(true).map((e, i) => ({
    "id": "...",
    "nombre": "...",
    "imagen": "http...",
    "eliminar": () => {},
}));
export const RegistrosListaDefault = () => ({
    Component: RegistrosLista
});