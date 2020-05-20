import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Titulo from '../../../elementos/texto/Titulo/Titulo.svelte';

export default { title: 'Elementos/Texto/Titulo' } 


export const tituloDefault = () => ({
    Component: ThemeTester,
    props: {
    componente: Titulo,
            datos:{
            texto: 'Título Default',
            color: '#000'
            }    
    },
});

export const tituloColor = () => ({
    Component: ThemeTester,
    props: {
        componente: Titulo,
        datos:{
        texto: 'Título Color',
        color: '#f0a'
        }
    },
});

export const titulo1 = () => ({
    Component: ThemeTester,
    props: {
        componente: Titulo,
        datos:{
        texto: 'Título 1',
        nivel: 1
        }
    },
});

export const titulo2 = () => ({
    Component: ThemeTester,
    props: {
        componente: Titulo,
        datos:{
        texto: 'Título 2',
        nivel: 2
        }
    },
});

export const titulo3 = () => ({
    Component: ThemeTester,
    props: {
        componente: Titulo,
        datos:{
        texto: 'Título 3',
        nivel: 3
        }
    },
});

export const titulo4 = () => ({
    Component: ThemeTester,
    props: {
        componente: Titulo,
        datos:{
        texto: 'Título 4',
        nivel: 4
        }
    },
});

export const titulo5 = () => ({
    Component: ThemeTester,
    props: {
        componente: Titulo,
        datos:{
        texto: 'Título 5',
        nivel: 5
        }
    },
});

export const titulo6 = () => ({
    Component: ThemeTester,  
    props: {
        componente: Titulo,
        datos:{
        texto: 'Título 6',
        nivel: 6
        }
    },
});