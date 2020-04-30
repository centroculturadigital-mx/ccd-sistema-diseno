import RegistroTarjeta from '../../../../componentes/CMS/RegistroTarjeta/RegistroTarjeta.svelte';


export default { title: 'CMS/Componentes/RegistroTarjeta' }
const datos = {
    id: "...",
    nombre: "Nombre de registro",
    imagen: "http://fakeimg.pl/200?text=Registro",
    entidad: "mi-entidad",
    eliminar: () => {
        console.log("eliminar");
    },
};

export const EntidadTarjetaDefault = () => ({
    Component: RegistroTarjeta,
    props: datos
});

// export const EntidadTarjetaIcono = () => ({
//     Component: RegistroTarjeta,
//     props: {
//         icono: datos.icono,
//     }
// });