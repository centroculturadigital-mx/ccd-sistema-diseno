import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import UsuarioAcceso from '../../../componentes/Usuarios/UsuarioAcceso/UsuarioAcceso.svelte';

import usuario from "../../../data/usuario";

export default { title: 'Componentes/Usuarios/UsuarioAcceso' }

let usuarioVacio = {
    ...usuario,
    nombre: ""
}

export const usuarioAccesoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuarioAcceso,
        datos: {
            usuario: usuarioVacio,
        }
    }
});
export const usuarioAccesoConNombre = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuarioAcceso,
        datos: {
            ...usuario,
        }
    }
});

export const usuarioAccesoConMenuDesplegable = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuarioAcceso,
        datos: {
            ...usuario,
            elementos: [{
                    texto: "Ver perfil",
                    enlace: "#",
                    icono: "avatar"
                },
                {
                    texto: "Configuraciones",
                    enlace: "#",
                    icono: "configuracion"
                },
                {
                    texto: "salir",
                    enlace: "#",
                    icono: "flechaDerecha"
                }
            ]
        }
    }
});


export const usuarioAccesoConMenuDesplegableAcciones = () => ({
    Component: ThemeTester,
    props: {
        componente: UsuarioAcceso,
        datos: {
            ...usuario,
            elementos: [{
                    texto: "Ver perfil",
                    accion: () => console.log("Ver perfil"),
                    icono: "avatar"
                },
                {
                    texto: "Configuraciones",
                    accion: () => console.log("Configuraciones"),
                    icono: "configuracion"
                },
                {
                    texto: "salir",
                    accion: () => console.log("salir"),
                    icono: "flechaDerecha"
                }
            ]
        }
    }
});