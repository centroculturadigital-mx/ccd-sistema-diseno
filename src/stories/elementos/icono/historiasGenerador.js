const generarFuncion = nombre => `export const ${nombre} = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos: {
            icono: "${nombre}",
        }
    },
});`

export default generarFuncion