import variables from './variables';

const estilos = {
    tipografia: {
        parrafo: {
            fuente: variables.tipografia.fuentes.secundaria.nombre,
            tamanno: variables.tipografia.tamannos.md,
            peso: variables.tipografia.fuentes.principal.regular
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
        }
    },
};

export default estilos