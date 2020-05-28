import RegistroTarjeta from '../../../../componentes/CMS/RegistroTarjeta/RegistroTarjeta.svelte';
import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';

import ImagenArchivo from '../../../../../public/placeholder.jpg';

export default { title: 'CMS/Componentes/RegistroTarjeta' }
const datos = {
    id: "...",
    nombre: "Nombre de registro",
    imagen: ImagenArchivo,
    entidad: "mi-entidad",
    eliminar: (e) => {
        console.log("eliminar", e);
    },
};

export const RegistroTarjetaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: RegistroTarjeta,
        datos
    }
});