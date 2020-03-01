import Contenido from '../../../componentes/Contenido/Contenido.svelte';

export default {title: 'Componentes/Contenido/Contenido'}

const documento = `
{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"heading\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"Experiencias Colectivas\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"... abc \",\"marks\":[]},{\"object\":\"text\",\"text\":\"def \",\"marks\":[{\"object\":\"mark\",\"type\":\"bold\",\"data\":{}}]},{\"object\":\"text\",\"text\":\"ghi \",\"marks\":[{\"object\":\"mark\",\"type\":\"bold\",\"data\":{}},{\"object\":\"mark\",\"type\":\"italic\",\"data\":{}}]},{\"object\":\"inline\",\"type\":\"link\",\"data\":{\"href\":\"google.com\"},\"nodes\":[{\"object\":\"text\",\"text\":\"jkl\",\"marks\":[]}]},{\"object\":\"text\",\"text\":\"\",\"marks\":[]}]}]}
`
export const ContenidoVacio = () => ({
    Component: Contenido,
    props: {},
});

export const ContenidoBloques = () => ({
    Component: Contenido,
    props: {
        documento,
    },
});
