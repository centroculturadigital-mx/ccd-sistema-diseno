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
            color: variables.colores.primario4.base,
            hover: variables.colores.primario4.claro,
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
        textoHover: variables.colores.texto.claro,
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
    redes: {
        twitter: variables.colores.redes.twitter,
        facebook: variables.colores.redes.facebook,
        youtube: variables.colores.redes.yotube,
        soundcloud: variables.colores.redes.soundcloud,
        linkedin: variables.colores.redes.linkedin,
    },

    fondos: {
        fondo1: variables.colores.fondo.base,
        fondo2: variables.colores.fondo.base2,
        fondo3: variables.colores.fondo.base3,
        fondo4: variables.colores.fondo.base4,
        fondo5: variables.colores.fondo.claro,
        fondo6: variables.colores.fondo.oscuro,
        fondo7: variables.colores.fondo.transparente,
    },

    bordes: {
        neutro: variables.colores.borde.neutro,
        oscuro: variables.colores.borde.oscuro,
    }
};

export default estilos