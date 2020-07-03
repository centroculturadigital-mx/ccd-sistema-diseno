import imagen from './recursos/placeholder.png';

export default new Array(40).fill(true).map((e,i)=>({
    id: "id"+i,
    imagen,
    texto: "Reacción "+(i+1),
    nombre: "reaccion-"+(i+1),
}))
