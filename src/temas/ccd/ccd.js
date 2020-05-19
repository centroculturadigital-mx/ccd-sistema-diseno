import variables from './variables';
import estilos from './estilos';

const tema = {
    name: 'CCD',
    properties: {
        colores: variables.colores,
        textos: {
            parrafo: {
                tipografia: estilos.tipografia.parrafo,
                color: variables.colores.texto.oscuro
            }
        },
        botones: {
            primario: {
                fondo: variables.colores.primario.base,
                color: variables.colores.texto.claro,
                espacio: variables.espaciados.sm,
                tipografia: estilos.tipografia.parrafo,
                familia: variables.tipografia.fuentes.complementaria.nombre,
                borde: variables.colores.secundario_a.claro,
                activo: variables.colores.primario.claro,
                esquinas: variables.espaciados.none,
            },
            secundario: {
                fondo: variables.colores.primario.transparente,
                color: variables.colores.texto.claro,
                espacio: variables.espaciados.sm,
                tipografia: estilos.tipografia.parrafo,
                familia: variables.tipografia.fuentes.complementaria.nombre,
                borde: variables.colores.secundario_a.oscuro,
                activo: variables.colores.secundario_a.claro,
                esquinas: variables.espaciados.none,
            }
        },
        espaciado: {
            padding: variables.espaciados.md,
        },
    },
    fontFamilies: {
        principal: variables.tipografia.familias.principal,
        secundaria: variables.tipografia.familias.secundaria,
        complementaria: variables.tipografia.familias.complementaria
    }
};

export default tema;