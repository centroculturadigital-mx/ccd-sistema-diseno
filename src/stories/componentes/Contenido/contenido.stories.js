import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Contenido from '../../../componentes/Contenido/Contenido.svelte';

export default { title: 'Componentes/Contenido/Contenido' }

const documento = `
{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"heading\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"Experiencias \",\"marks\":[]},{\"object\":\"text\",\"text\":\"Colectivas\",\"marks\":[{\"object\":\"mark\",\"type\":\"italic\",\"data\":{}}]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"... abc \",\"marks\":[]},{\"object\":\"text\",\"text\":\"def \",\"marks\":[{\"object\":\"mark\",\"type\":\"bold\",\"data\":{}}]},{\"object\":\"text\",\"text\":\"ghi \",\"marks\":[{\"object\":\"mark\",\"type\":\"bold\",\"data\":{}},{\"object\":\"mark\",\"type\":\"italic\",\"data\":{}}]},{\"object\":\"inline\",\"type\":\"link\",\"data\":{\"href\":\"google.com\"},\"nodes\":[{\"object\":\"text\",\"text\":\"jk \",\"marks\":[]},{\"object\":\"text\",\"text\":\"b \",\"marks\":[{\"object\":\"mark\",\"type\":\"bold\",\"data\":{}}]},{\"object\":\"text\",\"text\":\"i bi \",\"marks\":[{\"object\":\"mark\",\"type\":\"bold\",\"data\":{}},{\"object\":\"mark\",\"type\":\"italic\",\"data\":{}}]},{\"object\":\"text\",\"text\":\"nrml \",\"marks\":[]}]},{\"object\":\"text\",\"text\":\"\",\"marks\":[{\"object\":\"mark\",\"type\":\"italic\",\"data\":{}}]}]},{\"object\":\"block\",\"type\":\"blockquote\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"una cita\",\"marks\":[]}]}]},{\"object\":\"block\",\"type\":\"ordered-list\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"list-item\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"uno\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"list-item\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"dos\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"list-item\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"tres\",\"marks\":[]}]}]},{\"object\":\"block\",\"type\":\"unordered-list\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"list-item\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"lista\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"list-item\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"desordenada\",\"marks\":[]}]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"abc \",\"marks\":[{\"object\":\"mark\",\"type\":\"underline\",\"data\":{}}]},{\"object\":\"text\",\"text\":\"def\",\"marks\":[{\"object\":\"mark\",\"type\":\"underline\",\"data\":{}},{\"object\":\"mark\",\"type\":\"strikethrough\",\"data\":{}}]}]}]}
`

export const ContenidoBloques = () => ({
    Component: ThemeTester,
    props: {
        componente: Contenido,
        datos: {
            documento,
        }
    },
});
export const ContenidoHTML = () => ({
    Component: ThemeTester,
    props: {
        componente: Contenido,
        datos: {
            html: `<h1>Título principal</h1>

<iframe src="https://www.youtube.com/embed/C0DPdy98e4c" width="100%" height="480px" frameborder="0" allowfullscreen=""></iframe>

<p>Ad dolore deserunt elit culpa commodo sint id cillum eiusmod ut tempor nisi.</p>
<ul>
    <li>Fugiat sunt occaecat labore do duis magna incididunt sint cupidatat Lorem mollit.</li>
    <li>Tempor culpa sit tempor exercitation nisi ut occaecat proident.</li>
</ul>
<p>Ipsum do commodo ullamco fugiat occaecat aute officia cupidatat qui eu veniam dolor excepteur. Culpa non ipsum id minim Lorem. Esse esse culpa culpa sunt proident officia sunt adipisicing ad ex commodo aute esse. Laborum do laboris id commodo ad veniam adipisicing velit do.</p>
<p><img src="http://fakeimg.pl/600x400" alt="Imagen falsa"></p>
<hr>
<p>Un enlace a <a href="https://wikipedia.org/">un sitio</a>.</p>`
        }
    }
});
export const ContenidoVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: Contenido,
        datos: {

        }
    }
});