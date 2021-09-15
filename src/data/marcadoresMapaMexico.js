const estados = [ "Isla Pérez", "Baja California", "Baja California Sur", "Coahuila", "Chihuahua", "Durango", "Sinaloa", "Sonora", "Zacatecas", "Nuevo León", "San Luis Potosí", "Tamaulipas", "Aguascalientes", "Colima", "Jalisco", "Michoacán", "Nayarit", "Campeche", "Oaxaca", "Puebla", "Tabasco", "Tlaxcala", "Ciudad de México", "Guanajuato", "Guerrero", "Hidalgo", "México", "Morelos", "Querétaro", "Veracruz", "Chiapas", "Quintana Roo", "Yucatán"  ]

const marcadores = estados.map( e => ({
    contenido: e,
    path: {
        valor: e
    }
}))


const agregarDesplazamiento = (estado, desplazamiento) => {
    marcadores.find( m => m.contenido == estado ).path.desplazamiento = desplazamiento
}

agregarDesplazamiento( "Colima", {
    x: 172,
    y: (-5)
})

agregarDesplazamiento( "Veracruz", {
    x: -15,
    y: 30
})

agregarDesplazamiento( "Baja California Sur", {
    x: 20,
    y: -20
})

agregarDesplazamiento( "Jalisco", {
    y: 20
})

agregarDesplazamiento( "Sonora", {
    x: 40,
    y: 10
})

agregarDesplazamiento( "Campeche", {
    x: 20,
    y: 20,
})

agregarDesplazamiento( "Tamaulipas", {
    y: 20,
})

export default marcadores