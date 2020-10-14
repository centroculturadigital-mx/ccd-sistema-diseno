import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Entrada from '../../../elementos/formularios/Entrada/Entrada.svelte';

export default { title: 'Elementos/Formularios/Entrada' }

export const entradaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Introduce Texto',
        }
    },
});

export const entradaCorreo = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Correo Electronico',
            tipo: "email",
        }
    },
});
export const entradaNumero = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega un numero',
            tipo: "numero",
        }
    },
});

export const entradaNumeroMinMax = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega minimo 1 + maximo 10',
            tipo: "numero",
            minimo: 1,
            maximo: 10
        }
    },
});

export const entradaContrasenna = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega tu contrasenna',
            tipo: "contrasenna",
        }
    },
});

export const entradaTextArea = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega tu contraseña',
            tipo: "textarea",
        }
    },
});
export const entradaTelefono = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega tu teléfono',
            tipo: "telefono",
        }
    },
});

export const entradaCasilla = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Una Casilla',
            tipo: "casilla",
            valorEstatico: "Automovil"
        }
    },
});
export const entradaCircular = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Una entrada circular',
            tipo: "radio",
            valorEstatico: "Automovil"
        }
    },
});

export const entradaArchivo = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Sube un archivo',
            tipo: "archivo",
        }
    },
});
export const entradaCalendario = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Selecciona una fecha',
            tipo: "fecha",
            seleccionar: {
                dia: (fecha) => console.log("seleccionar dia", fecha),
                semana: (fecha) => console.log("seleccionar semana", fecha),
                mes: (fecha) => console.log("seleccionar mes", fecha),
                anno: (fecha) => console.log("seleccionar anno", fecha),
            }
        }
    },
});
export const entradaCasillas = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Selecciona un variedad',
            tipo: "casillas",
            seleccionar: [
                {
                    valor: "GrKu",
                    texto: "Green 69 Kush",
                },
                {
                    valor: "ChOG",
                    texto: "Chamuko XXX OG",
                },
                {
                    valor: "PuHa",
                    texto: "Satan Purple Haze",
                },
                {
                    valor: "PaKu",
                    texto: "Panteon Kush",
                },
            ]
        }
    },
});