import EntidadTarjeta from '../../../../componentes/CMS/EntidadTarjeta/EntidadTarjeta.svelte';


export default { title: 'CMS/Componentes/EntidadTarjeta' }
const datos = {
    icono: "cerrar",
    nombre: "Mi entidad",
    cantidad: 302,
    clave: "mi-entidad",
    clave_plural: "mis-entidades"
};

export const EntidadTarjetaDefault = () => ({
    Component: EntidadTarjeta,
    props: datos
});

export const EntidadTarjetaIcono = () => ({
    Component: EntidadTarjeta,
    props: {
        icono: datos.icono,
    }
});

export const EntidadTarjetaTitulo = () => ({
    Component: EntidadTarjeta,
    props: {
        nombre: datos.nombre,
        icono: datos.icono,
    }
});

// export const EntidadTarjetaRegistros = () => ({
//     Component: EntidadTarjeta,
//     props: {
//         nombre: datos.nombre,
//         icono: datos.icono,
//         cantidad: 123
//     }
// });