import variables from './variables';

const estilos = {
    tipografia: {
        parrafo: {
            fuente: variables.tipografia.fuentes.principal.nombre,
            tamanno: variables.tipografia.tamannos.md,
            peso: variables.tipografia.fuentes.principal.regular
        },
        citas: {
            fuente: variables.tipografia.fuentes.complementaria2.nombre,
            tamanno: variables.tipografia.tamannos.xxl,

        },
        titulo: {
            fuente: variables.tipografia.fuentes.titulo.nombre,
            peso: variables.tipografia.fuentes.titulo.negrita,
            h1: { 
                tamanno: variables.tipografia.tamannos.xxxl,
            },
            h2: {
                tamanno: variables.tipografia.tamannos.xxl,
            },
            h3: {
                tamanno: variables.tipografia.tamannos.xl,
            },
            h4: {
                tamanno: variables.tipografia.tamannos.lg,
            },
            h5: {
                tamanno: variables.tipografia.tamannos.md,
            },
            h6: {
                tamanno: variables.tipografia.tamannos.sm,
            },
        },
        menu: {
            movil: {
                color: variables.colores.texto.oscuro,
                hover: variables.colores.primario.base,
                fuente: variables.tipografia.fuentes.secundaria.nombre,
                tamanno: variables.tipografia.tamannos.md,
                peso: variables.tipografia.fuentes.principal.regular
            },
            escritorio: {
                color: variables.colores.texto.oscuro,
                hover: variables.colores.primario.base,
                fuente: variables.tipografia.fuentes.secundaria.nombre,
                tamanno: variables.tipografia.tamannos.md, 
                peso: variables.tipografia.fuentes.principal.regular
            }
        },
        enlaces: {
            familia: variables.tipografia.fuentes.principal.nombre,
            color: variables.colores.primario.base,
            hover: variables.colores.primario.claro,
        }
    },
    cabecera: {
        principal: {
            fondo: variables.colores.fondo.claro,
            altura: variables.alturas.cabecera,
        }
    },
    pestannas: {
        fondo: variables.colores.fondo.claro,
        fondoHover: variables.colores.primario.claro,
        borde: variables.colores.fondo.claro,
        bordeHover: variables.colores.primario.base,
        texto: variables.colores.texto.oscuro,
        textoHover: variables.colores.primario.base,
    },
    colores: {
        fondo: variables.colores.fondo.claro,
        primario: variables.colores.primario.base,
        secundario1: variables.colores.secundario1.base,
        secundario2: variables.colores.secundario2.base,
        complementario: variables.colores.complementario.base
    },
    alertas: {
        informacion: variables.colores.alerta.informacion,
        exito: variables.colores.alerta.exito,
        aviso: variables.colores.alerta.aviso,
        alerta: variables.colores.alerta.alerta,
        accion: variables.colores.alerta.accion,
    },

    bordes: { 
        neutro: variables.colores.borde.neutro,
        oscuro: variables.colores.borde.oscuro,
    }
};

export default estilos