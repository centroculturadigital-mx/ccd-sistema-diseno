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
            espacio: variables.espaciados.md,
            tipografia: estilos.tipografia.parrafo,
            familia: variables.tipografia.fuentes.complementaria.nombre    
            },
            secundario: {
            fondo: variables.colores.primario.oscuro,
            color: variables.colores.texto.claro,
            espacio: variables.espaciados.sm,
            tipografia: estilos.tipografia.parrafo,
            familia: variables.tipografia.fuentes.complementaria.nombre
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