<script>
import Titulo from '../../../elementos/texto/Titulo/Titulo'
import Texto from '../../../elementos/texto/Texto/Texto'
import Selector from '../../../elementos/formularios/Selector/Selector';
import NavegacionPasos from '../NavegacionPasos/NavegacionPasos';


export let anterior = () => console.log("regesa");
export let siguiente = () => console.log("avanza");
export let opcionesVista = [{
        valor: 'dia',
        texto: 'Día'
    },
    {
        valor: 'mes',
        texto: 'Mes'
    },
    {
        valor: 'año',
        texto: 'Año'
    }
];

const vistaValor = (e) => {
    console.log("Vista Seleccionada: ", e);
}

$: rangoVista = "Julio 2020";

</script>

<style>
.CalendarioCabecera {
    background-color: var(--theme-tarjetas-fondo);
    padding: calc(var(--theme-espaciados-padding) * 3);
    height: 100%;
    max-width: 24rem;
    min-width: 20rem;
    width: 100%;
    box-sizing: border-box;
}
.CalendarioCabecera :global(h3) {
    margin: 0;
    margin-bottom: calc(var(--theme-espaciados-margen) * 2);
}
.Herramientas {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
.Vista :global() {

}
</style>

<section class="CalendarioCabecera">

<Titulo texto={"Título de la sección"}/>

<div class="Herramientas">
    <NavegacionPasos {rangoVista} {anterior} {siguiente}/>
    <div class="Vista">
    <Selector opciones={opcionesVista} cambiar={vistaValor} ejemplo={"Filtro vista"} vacioPermitido={false}/>
    </div>
</div>
</section>