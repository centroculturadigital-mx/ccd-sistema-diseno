<script>
import Titulo from '../../../elementos/texto/Titulo/Titulo'
import Texto from '../../../elementos/texto/Texto/Texto'
import BotonIcono from '../../../elementos/botones/BotonIcono/BotonIcono';
import Selector from '../../../elementos/formularios/Selector/Selector';

export let anterior = () => console.log("regesa");
export let siguiente = () => console.log("avanza");;
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
.Navegacion {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
}
.Navegacion :global(button) {
    padding: calc(var(--theme-botones-primario-espacio) * 1.25) calc(var(--theme-botones-primario-espacio) * 2);
    padding-left: 0;
}
.Navegacion :global(span) {
    padding-right: calc(var(--theme-botones-primario-espacio) * 2);
    flex-shrink: 0;
    box-sizing: border-box;
}
</style>

<section class="CalendarioCabecera">

<Titulo texto={"Título de la sección"}/>

<div class="Herramientas">
    <div class="Navegacion">
    <BotonIcono icono={"avanzarIzquierda"} borde={false} click={anterior}/>
    <Texto texto="Día o Año"/>
    <BotonIcono icono={"derecha"} borde={false} click={siguiente}/>
    </div>
    <div class="Vista">
    <Selector opciones={opcionesVista} cambiar={vistaValor} ejemplo={"Filtro vista"} vacioPermitido={false}/>
    </div>
</div>
</section>