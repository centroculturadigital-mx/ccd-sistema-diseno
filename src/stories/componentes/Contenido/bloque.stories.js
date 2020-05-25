import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Bloque from '../../../componentes/Bloque/Bloque.svelte';

export default { title: 'Componentes/Bloque/Bloque' }

const documento = `
{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"heading\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"Experiencias \",\"marks\":[]},{\"object\":\"text\",\"text\":\"Colectivas\",\"marks\":[{\"object\":\"mark\",\"type\":\"italic\",\"data\":{}}]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"... abc \",\"marks\":[]},{\"object\":\"text\",\"text\":\"def \",\"marks\":[{\"object\":\"mark\",\"type\":\"bold\",\"data\":{}}]},{\"object\":\"text\",\"text\":\"ghi \",\"marks\":[{\"object\":\"mark\",\"type\":\"bold\",\"data\":{}},{\"object\":\"mark\",\"type\":\"italic\",\"data\":{}}]},{\"object\":\"inline\",\"type\":\"link\",\"data\":{\"href\":\"google.com\"},\"nodes\":[{\"object\":\"text\",\"text\":\"jk \",\"marks\":[]},{\"object\":\"text\",\"text\":\"b \",\"marks\":[{\"object\":\"mark\",\"type\":\"bold\",\"data\":{}}]},{\"object\":\"text\",\"text\":\"i bi \",\"marks\":[{\"object\":\"mark\",\"type\":\"bold\",\"data\":{}},{\"object\":\"mark\",\"type\":\"italic\",\"data\":{}}]},{\"object\":\"text\",\"text\":\"nrml \",\"marks\":[]}]},{\"object\":\"text\",\"text\":\"\",\"marks\":[{\"object\":\"mark\",\"type\":\"italic\",\"data\":{}}]}]},{\"object\":\"block\",\"type\":\"blockquote\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"una cita\",\"marks\":[]}]}]},{\"object\":\"block\",\"type\":\"ordered-list\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"list-item\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"uno\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"list-item\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"dos\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"list-item\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"tres\",\"marks\":[]}]}]},{\"object\":\"block\",\"type\":\"unordered-list\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"list-item\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"lista\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"list-item\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"desordenada\",\"marks\":[]}]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"abc \",\"marks\":[{\"object\":\"mark\",\"type\":\"underline\",\"data\":{}}]},{\"object\":\"text\",\"text\":\"def\",\"marks\":[{\"object\":\"mark\",\"type\":\"underline\",\"data\":{}},{\"object\":\"mark\",\"type\":\"strikethrough\",\"data\":{}}]}]}]}
`
export const BloqueDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Bloque,
        datos: {
            texto: "Hola Mundo",
        }
    },
});

export const BloqueChico = () => ({
    Component: ThemeTester,
    props: {
        componente: Bloque,
        datos: {
            texto: "Hola Mundo",
            estilos: {
                tamanno: ".75rem",
            }
        },
    },
});
export const BloqueColor = () => ({
    Component: ThemeTester,
    props: {
        componente: Bloque,
        datos: {
            texto: "Hola Mundo",
            estilos: {
                tamanno: "4.8rem",
                color: "aquamarine"
            }
        },
    },
});
export const BloqueContenido = () => ({
    Component: ThemeTester,
    props: {
        componente: Bloque,
        datos: {
            contenido: "Hola Mundo",
            estilos: {
                tamanno: "4.8rem",
                color: "aquamarine"
            }
        },
    },
});