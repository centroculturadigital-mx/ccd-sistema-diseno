import variables from './variables';

const estilos = {
    tipografia: {
        parrafo: {
            fuente: variables.tipografia.fuentes.principal.nombre,
            tamanno: variables.tipografia.tamannos.md,
            peso: variables.tipografia.fuentes.principal.regular
        },
        citas: {
            fuente: variables.tipografia.fuentes.secundaria.nombre,
            tamanno: variables.tipografia.tamannos.md,

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
            }
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
        }
    },
    cabecera: {
        principal: {
            fondo: variables.colores.fondo.claro,
            altura: variables.alturas.cabecera,
        }
    },
    colores: {
        fondo: variables.colores.fondo.claro,
        primario: variables.colores.primario.base,
        secundario_a: variables.colores.secundario_a.base,
        secundario_b: variables.colores.secundario_b.base,
        complementario: variables.colores.complementario.base
    }
};

export default estilos