import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Cita from '../../../elementos/texto/Cita/Cita.svelte'; 

export default { title: 'Elementos/Texto/Cita' }


export const textoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Cita,
        datos:{
        texto: 'Amet et est minim quis enim laborum id voluptate. Enim tempor proident deserunt duis nisi non officia enim nisi deserunt. Do labore elit anim adipisicing anim reprehenderit culpa occaecat sit consequat laborum ex.',
    }
    },
});