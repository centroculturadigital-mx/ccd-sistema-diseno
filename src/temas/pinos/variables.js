const variables = {
    colores: { 
        texto: {
            base: "#4C4CFF",
            claro: '#FFF',
            oscuro: '#282230',
            transparente: "transparent",
            neutro: "#666666",
        },
        fondo: {
            base: "#CCCCCC",
            base2: "#AAAAAA",
            base3: "#666666",
            base4: "#F2F2F2",
            claro: "#FFF",
            oscuro: "#212121",
            transparente: "transparent",
        },
        borde: {
            base: "#CDCCFF",
            claro: "#FFF",
            oscuro: "#212121",
            transparente: "transparent",
            neutro: "#AAAAAA",
        },
        primario: {
            base: "#3F816C",
            claro: "#6eb19a",
            oscuro: "#095441",
            transparente: "transparent",
        },
        primario2: {
            base: "#3F816C",
            claro: "#6eb19a",
            oscuro: "#095441",
            transparente: "transparent",
        },
        primario3: {
            base: "#3F816C",
            claro: "#6eb19a",
            oscuro: "#095441",
            transparente: "transparent",
        },
        primario4: {
            base: "#3F816C",
            claro: "#6eb19a",
            oscuro: "#095441",
            transparente: "transparent",
        },
        secundario1: {
            base: "#353130",
            claro: "#5f5a59",
            oscuro: "#0f0907",
            transparente: "transparent",
        },
        secundario2: {
            base: "#353130",
            claro: "#5f5a59",
            oscuro: "#0f0907",
            transparente: "transparent",
        },
       
        complementario: {
            base: "#FFFF4C",
            claro: "#FFFF81",
            oscuro: "#C8CC00",
            transparente: "transparent",
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
        },
        redes: {
            twitter: "#1DA1F2",
            facebook: "#1877F2",
            youtube: "#FF0000",
            soundcloud: "#F7620E",
            linkedin: "#007BB6",
        },
        cabecera: {
            fondo: "#FFF",
            oscuro: "#2700CA",
        },
        pie: {
            base: "#3F816C",
            claro: "#6eb19a",
            oscuro: "#095441",
            transparente: "transparent",
        },
        icono: {
            base: "#4C4CFF",
            claro: '#FFF',
            oscuro: '#282230',
            transparente: "transparent",
        },
        enlace: {
            base: "#FF4C4C",
            claro: "#FF8178",
            oscuro: "#C50023",
            transparente: "transparent",
        },
    },
    tipografia: {
        familias: {
            principal: "https://fonts.googleapis.com/css2?family=Mada&display=swap",
            secundaria: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap",
            complementaria: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap",
            complementaria2: "https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&display=swap",
        },
        fuentes: {
            titulo: {
                nombre: "Mada",
                regular: 400,
                ligero: 300,
                negrita: 700,
                grueso: 900
            },
            principal: {
                nombre: "Mada",
                regular: 400,
                ligero: 300,
                negrita: 700,
                grueso: 900
            },
            secundaria: { 
                nombre: "Cormorant Garamond",
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