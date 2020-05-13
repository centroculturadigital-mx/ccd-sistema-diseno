import variables from './variables';
import estilos from './estilos';

const tema = {
    name: 'CCD Oscuro',
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
            },
            secundario: {
            fondo: variables.colores.primario.oscuro,
            color: variables.colores.texto.claro,
            espacio: variables.espaciados.sm,
            tipografia: estilos.tipografia.parrafo,
            } 
        },
        espaciado: {
            padding: variables.espaciados.md,
        },
    },
};

export default tema;