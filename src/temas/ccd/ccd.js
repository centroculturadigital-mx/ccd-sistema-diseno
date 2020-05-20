import variables from './variables';
import estilos from './estilos';

const tema = {
    name: 'CCD',
    properties: {
        colores: variables.colores,
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
                fondo: variables.colores.texto.claro,
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
                color: variables.colores.texto.claro,
                espacio: variables.espaciados.sm,
                familia: estilos.tipografia.parrafo,
                borde: variables.colores.secundario_a.oscuro,
                activo: variables.colores.secundario_a.claro,
                hover: variables.colores.secundario_a.oscuro,
                esquinas: variables.espaciados.none,
            }
        },
        espaciado: {
            padding: variables.espaciados.md,
        },
        campos: {
            fondo: variables.campos.fondo,
            color: variables.campos.color,
            espacio: variables.campos.espacio,
            borde: variables.campos.borde,
            activo: variables.campos.activo,
            esquinas: variables.espaciados.none,
        },
        alertas: {
            exito: variables.colores.alerta.ok,
            error: variables.colores.alerta.error,
            aviso: variables.colores.alerta.aviso,
            informa: variables.colores.alerta.informa,
        }
    },
    fontFamilies: {
        principal: variables.tipografia.familias.principal,
        secundaria: variables.tipografia.familias.secundaria,
        complementaria: variables.tipografia.familias.complementaria
    }
};

export default tema;