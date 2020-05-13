import variables from './variables';
import estilos from './estilos';

const tema = {
    name: 'CCD Claro',
    properties: {
        colores: variables.colores,
        textos: {
            parrafo: {
                tipografia: estilos.tipografia.parrafo,
                color: variables.colores.texto.oscuro
            }
        },
        botones: {
            fondo: variables.colores.primario.base,
            color: variables.colores.texto.oscuro,
            espacio: variables.espaciados.md,
            tipografia: estilos.tipografia.parrafo,
            secundario: {
                // aqui otro tipo de boton
            }
        },
        espaciado: {
            padding: variables.espaciados.md,
        },
    },
};

export default tema;