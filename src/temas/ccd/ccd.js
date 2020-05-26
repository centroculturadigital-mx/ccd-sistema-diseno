import variables from './variables';
import estilos from './estilos';

const tema = {
    name: 'CCD',
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
                fondo: variables.colores.texto.base,
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
                color: variables.colores.texto.base,
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
            margen: variables.espaciados.sm,
        },
        campos: {
            fondo: variables.campos.fondo,
            color: variables.campos.color,
            espacio: variables.campos.espacio,
            borde: variables.campos.borde,
            activo: variables.campos.activo,
            esquinas: variables.espaciados.none,
        },
        tarjetas: {
            fondo: estilos.colores.fondo,
            esquina: variables.tamannos.none
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
                tamanno: variables.tipografia.tamannos.xxl,
            },
            secundario: {
                color: variables.colores.icono.primario,
                tamanno: variables.tipografia.tamannos.xxl,
            }
        },
        enlaces: {
            color: variables.colores.enlace,
            tamanno: variables.tipografia.tamannos.sm,
            familia: estilos.tipografia.parrafo,
        }
    },
    fontFamilies: {
        principal: variables.tipografia.familias.principal,
        secundaria: variables.tipografia.familias.secundaria,
        complementaria: variables.tipografia.familias.complementaria
    },

};

export default tema;