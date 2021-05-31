const variables = {
    colores: {
        texto: {
            base: "#4C4CFF",
            claro: '#FFF',
            oscuro: '#282230',
            transparente: "transparent",
            neutro: "#666666",
            inactivo: "#CCCCCC"
        },
        fondo: {
            base: "#CCCCCC",
            base2: "#AAAAAA",
            base3: "#666666",
            base4: "#F2F2F2",
            claro: "#FFF",
            oscuro: "#212121",
            transparente: "transparent",
            inactivo: "#CCCCCC"
        },
        borde: {
            base: "#CDCCFF",
            claro: "#FFF",
            oscuro: "#212121",
            transparente: "transparent",
            neutro: "#AAAAAA",
            inactivo: "#CCCCCC"
        },
        primario: {
            base: "#652D90",
            claro: "#965AC1",
            oscuro: "#360062",
            transparente: "transparent",
            visitado: "#4D376D",
            inactivo: "#CCCCCC",
            foco: "#360062"
        },
        primario2: {
            base: "#57C2BB",
            claro: "#8CF5ED",
            oscuro: "#15918B",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        primario3: {
            base: "#EAC00F",
            claro: "#FFF052",
            oscuro: "#B38E00",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        primario4: {
            base: "#EF4B48",
            claro: "#FF7F74",
            oscuro: "#B60220",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        secundario1: {
            base: "#2371E2",
            claro: "#6BA1FF",
            oscuro: "#0049AF",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        secundario2: {
            base: "#0A1699",
            claro: "#5540CB",
            oscuro: "#00006A",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        secundario3: {
            base: "#F752A1",
            claro: "#FF87D3",
            oscuro: "#C00973",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        secundario4: {
            base: "#ADD30F",
            claro: "#E1FF53",
            oscuro: "#B60220",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        secundario5: {
            base: "#2371E2",
            claro: "#6BA1FF",
            oscuro: "#0049AF",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        secundario6: {
            base: "#765ECC",
            claro: "#5540CB",
            oscuro: "#00006A",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        secundario7: {
            base: "#20C9E0",
            claro: "#6EFDFF",
            oscuro: "#0099AE",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        complementario: {
            base: "#FFFF4C",
            claro: "#FFFF81",
            oscuro: "#C8CC00",
            transparente: "transparent",
            inactivo: "#CCCCCC",
            foco: "#965AC1"
        },
        gradiente1: {
            fondo: `rgb(34,16,66);`,
            degradado: `linear-gradient(125deg, rgba(34,16,66,1) 35%, rgba(128,103,163,1) 100%);`,
            degradado_moz: `-moz-linear-gradient(125deg, rgba(34,16,66,1) 35%, rgba(128,103,163,1) 100%);`,
            degradado_webkit: `-webkit-linear-gradient(125deg, rgba(34,16,66,1) 35%, rgba(128,103,163,1) 100%);`,
            degradado_ie: `progid:DXImageTransform.Microsoft.gradient(startColorstr="#221042",endColorstr="#8067A3",GradientType=1);`,
        },
        alerta: {
            ok: "green",
            error: "red",
            inactivo: "gray",
            transmitiendo: "red",
            informacion: "#4C4CFF",
            exito: "#009900",
            aviso: "#C8CC00",
            alerta: "#C50023",
            accion: "#212121",
            inactivo: "#CCCCCC"
        },
        redes: {
            twitter: "#1DA1F2",
            facebook: "#1877F2",
            youtube: "#FF0000",
            soundcloud: "#F7620E",
            linkedin: "#007BB6",
            inactivo: "#CCCCCC"
        },
        cabecera: {
            fondo: "#FFF",
            oscuro: "#2700CA",
        },
        pie: {
            base: "#4D376D",
            claro: "#7A619C",
            oscuro: "#221042",
            transparente: "transparent",
        },
        icono: {
            base: "#4C4CFF",
            claro: '#FFF',
            oscuro: '#282230',
            transparente: "transparent",
            inactivo: "#CCCCCC"
        },
        enlace: {
            base: "#FF4C4C",
            claro: "#FF8178",
            oscuro: "#C50023",
            transparente: "transparent",
            inactivo: "#CCCCCC"
        },
    },
    tipografia: {
        familias: {
            principal: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
            secundaria: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap",
            complementaria: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap",
            complementaria2: "https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&display=swap",
        },
        fuentes: {
            titulo: {
                nombre: "Roboto Condensed",
                regular: 400,
                ligero: 300,
                negrita: 700,
                grueso: 900
            },
            principal: {
                nombre: "Roboto",
                regular: 400,
                ligero: 300,
                negrita: 700,
                grueso: 900
            },
            secundaria: {
                nombre: "Roboto Condensed",
                regular: 400,
                ligero: 300,
                negrita: 700,
                grueso: 900
            },
            complementaria: {
                nombre: "Ubuntu",
                regular: 400,
                ligero: 300,
                negrita: 700,
                grueso: 900
            },
            complementaria2: {
                nombre: "Frank Ruhl Libre",
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
            xxl: "1.75rem",
            xxxl: "2rem",
        }
    },
    campos: {
        fondo: "#FFF",
        color: "#282230",
        espacio: "0.5rem",
        borde: "#CCC",
        activo: "#BBB",
        esquinas: "0.25rem",
    },
    espaciados: {
        none: "0rem",
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
    },
    tamannos: {
        none: "0rem",
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "1.75rem",
        xxxl: "2rem",
    },
    transiciones: {
        lenta: "1s",
        normal: "0.5s",
        rapida: "0.125s",
    },
    alturas: {
        cabecera: "4rem"
    }
}

export default variables