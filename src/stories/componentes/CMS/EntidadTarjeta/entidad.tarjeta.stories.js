import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import EntidadTarjeta from '../../../../componentes/CMS/EntidadTarjeta/EntidadTarjeta.svelte';


export default { title: 'CMS/Componentes/EntidadTarjeta' }
const datos = {
    icono: "avatar",
    nombre: "Mi entidad",
    cantidad: 666,
    clave: "mi-entidad",
    clave_plural: "mis-entidades"
};

export const EntidadTarjetaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: EntidadTarjeta,
        datos
    }
});

export const EntidadTarjetaIcono = () => ({
    Component: ThemeTester,
    props: {
        componente: EntidadTarjeta,
        // datos
        datos: {
            icono: datos.icono
        },
    }
});

export const EntidadTarjetaTitulo = () => ({
    Component: ThemeTester,
    props: {
        componente: EntidadTarjeta,
        datos: {
            nombre: datos.nombre,
        }
    }
});
export const EntidadTarjetaCantidad = () => ({
    Component: ThemeTester,
    props: {
        componente: EntidadTarjeta,
        datos: {
            nombre: datos.nombre,
            cantidad: datos.cantidad,
        }
    }
});