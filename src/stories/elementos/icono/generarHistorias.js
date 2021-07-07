import generarFuncion from './historiasGenerador'
import iconos from '../../../elementos/Icono/iconos'

let texto = Object.keys(iconos).map(generarFuncion).reduce(
    (acc, t) => acc += `${t}\n\n`, ""
);

const generar = () => console.log(texto)

export default generar