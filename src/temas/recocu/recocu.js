import variables from './variables';
import estilos from './estilos';

const tema = {
    name: 'Recocu',
    properties: {
        colores: {
            primario: estilos.colores.primario,
            secundario_a: estilos.colores.secundario_a,
            secundario_b: estilos.colores.secundario_b,
            complementario: estilos.colores.complementario
        },
        textos: {
            parrafo: {
                tipografia: estilos.tipografia.parrafo.fuente,
                tamanno: estilos.tipografia.parrafo.tamanno,
                color: variables.colores.texto.oscuro,
                peso: estilos.tipografia.parrafo.peso,
            },
            titulo: {
                tipografia: estilos.tipografia.titulo.fuente,
                color: variables.colores.texto.oscuro,
                peso: estilos.tipografia.titulo.peso,
                h1: {
                    tamanno: estilos.tipografia.titulo.h1.tamanno,
                },
                h2: {
                    tamanno: estilos.tipografia.titulo.h2.tamanno,
                },
                h3: {
                    tamanno: estilos.tipografia.titulo.h3.tamanno,
                },
                h4: {
                    tamanno: estilos.tipografia.titulo.h4.tamanno,
                },
                h5: {
                    tamanno: estilos.tipografia.titulo.h5.tamanno,
                },
                h6: {
                    tamanno: estilos.tipografia.titulo.h6.tamanno,
                }
            }
        },
        botones: {
            primario: {
                fondo: variables.colores.primario.base,
                color: variables.colores.texto.claro,
                espacio: variables.espaciados.sm,
                familia: estilos.tipografia.parrafo.fuente,
                borde: variables.colores.primario.base,
                activo: variables.colores.primario.claro,
                hover: variables.colores.primario.oscuro,
                esquinas: variables.espaciados.none,
            },
            secundario: {
                fondo: variables.colores.primario.transparente,
                color: variables.colores.primario.base,
                espacio: variables.espaciados.sm,
                familia: estilos.tipografia.parrafo,
                borde: variables.colores.primario.oscuro,
                activo: variables.colores.primario.claro,
                hover: variables.colores.primario.oscuro,
                esquinas: variables.espaciados.none,
            },
            paso: {
                fondo: variables.colores.primario.transparente,
                color: variables.colores.texto.base,
                familia: estilos.tipografia.parrafo,
                activo: variables.colores.primario.claro,
                hover: variables.colores.primario.oscuro,
                tamanno: variables.tipografia.tamannos.xxl,
            }
        },
        espaciados: {
            padding: variables.espaciados.md,
            margin: variables.espaciados.sm,
        },
        campos: {
            fondo: variables.campos.fondo,
            color: variables.campos.color,
            espacio: variables.campos.espacio,
            borde: variables.campos.borde,
            activo: variables.campos.activo,
            esquinas: variables.espaciados.xs,
        },
        tarjetas: {
            fondo: estilos.colores.fondo,
            esquina: variables.tamannos.sm
        },
        alertas: {
            exito: variables.colores.alerta.ok,
            error: variables.colores.alerta.error,
            aviso: variables.colores.alerta.aviso,
            informa: variables.colores.alerta.informa,
        },
        iconos: {
            primario: {
                color: variables.colores.icono.primario,
                tamanno: variables.tipografia.tamannos.sm,
            },
            secundario: {
                color: variables.colores.icono.primario,
                tamanno: variables.tipografia.tamannos.sm,
            }
        },
        esquinas: {
            todas: variables.espaciados.xs,
            superiorIzquierda: variables.espaciados.xs,
            superiroDerecha: variables.espaciados.xs,
            inferiorDerecha: variables.espaciados.xs,
            inferiorIzquierda: variables.espaciados.xs
        },
        transiciones: {
            lenta: variables.transiciones.lenta,
            normal: variables.transiciones.normal,
            rapida: variables.transiciones.rapida,
        },
        tamannos: {
            xs: variables.tamannos.xs,
            sm: variables.tamannos.sm,
            md: variables.tamannos.md,
            lg: variables.tamannos.lg,
            xl: variables.tamannos.xl,
            xxl: variables.tamannos.xxl,
            xxxl: variables.tamannos.xxxl,
        }
    },
    fontFamilies: {
        principal: variables.tipografia.familias.principal,
        secundaria: variables.tipografia.familias.secundaria,
        complementaria: variables.tipografia.familias.complementaria
    }
};

export default tema;