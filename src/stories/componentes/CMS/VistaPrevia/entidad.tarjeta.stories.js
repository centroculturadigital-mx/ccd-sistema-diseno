import EntidadTarjeta from '../../../../componentes/CMS/EntidadTarjeta/EntidadTarjeta.svelte';
// import VistaPreviaTarjeta from '../../../../componentes/CMS/EntidadTarjeta/VistaPreviaTarjeta/VistaPreviaTarjeta.svelte';


export default { title: 'CMS/Componentes/EntidadTarjeta' }
const datos = {
    icono: "cerrar",
    titulo: "Titulo de entidad",
    registrosNumero: 302,
    abrir: (e) => { console.log("Abrir Entidad Tarjeta") },
    crear: (e) => { console.log("Crea Entidad Tarjeta") }
};

export const EntidadTarjetaDefault = () => ({
    Component: EntidadTarjeta,
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
        titulo: datos.titulo,
        icono: datos.icono,
    }
});

export const EntidadTarjetaRegistros = () => ({
    Component: EntidadTarjeta,
    props: {
        titulo: datos.titulo,
        icono: datos.icono,
        registrosNumero: 123
    }
});