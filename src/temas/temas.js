const variables = {
    colores: {
        texto: {
            claro: '#FFF',
            oscuro: '#282230',
        },
        fondo: "#ddd",
        primario: {
            base: "#4C4CFF",
            claro: "#CDCCFF",
            oscuro: "#2700CA",
        },
        secundario_a: {
            base: "#AC4CFF",
            claro: "#DDCCFF",
            oscuro: "#6700CA",
        },
        secundario_b: {
            base: "#4C4AFF",
            claro: "#CDDCFF",
            oscuro: "#2760CA",
        },
        complementario: {
            base: "#4C4CAF",
            claro: "#CDCCFF",
            oscuro: "#2700CA",
        }
    },
    tipografia: {
        fuentes: {
            principal: {
                nombre: "Nunito Sans",
                regular: 400,
                ligero: 300,
                negrita: 700,
                grueso: 900
            },
            secundaria: {
                nombre: "Open Sans",
                regular: 400,
                ligero: 300,
                negrita: 700,
                grueso: 900
            },
        },
        tamannos: {
            xs: "0.5rem",
            sm: "0.75rem",
            md: "1rem",
            lg: "1.25rem",
            xl: "1.5rem",
        }
    },
    espaciados: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
    }
}

const estilos = {
    tipografia: {
        parrafo: {
            fuente: variables.tipografia.fuentes.principal,
            tamanno: variables.tipografia.tamannos.md
        }
    },
};

const tema = {
    name: 'CCDSD',
    properties: {
        colores: variables.colores,
        textos: {
            parrafo: {
                tipografia: estilos.tipografia.parrafo,
                color: variables.colores.texto
            }
        },
        botones: {
            fondo: variables.colores.primario.base,
            color: variables.colores.texto.claro,
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

export default [
    tema
];