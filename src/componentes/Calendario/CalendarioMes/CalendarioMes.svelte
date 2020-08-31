<script>

    import moment from "moment" 

    import Titulo from "../../../elementos/texto/Titulo/Titulo"

    import diccionario from "../calendario.diccionario"

    const meses = diccionario.meses

    export let fecha
    export let seleccionar
    
    
    $: fecha = moment(fecha)
    $: diaActual = fecha
    
    const hoy = moment()

    $: mes = fecha ? fecha.month() : null

    $: esteMes = moment().month() == fecha.month() &&
    moment().year() == fecha.year()
    
    $: hoyDia = (
        hoy.month()==fecha.month()
        &&
        hoy.year()==fecha.year()
    ) ? hoy.date() : null

    

    $: mesNombre = fecha ? fecha.format("MMMM") : null
    $: inicioSemana = fecha.startOf("month").weekday()+1
    
    


    let mesActual = 0

    $: dias = typeof fecha.daysInMonth() == "number" ? (
        new Array(
            inicioSemana + fecha.daysInMonth()
        ).fill(0).map((e,i)=>(i-inicioSemana))
    ) : null


    const seleccionarAccion = i => {

        if( parseInt(i+1)>=0 ) {
            
            if( typeof seleccionar == "function" ) {
                seleccionar(i)
            }
        }
        // cambiar indicador de dia cuando ya se haya ejecutado callback anterior
        setTimeout(()=>{ diaActual = i })
    }
   
    
    const calcularClases = (i) => {
        let str = 'dia'

        if( i < inicioSemana ) {
            str += " inactivo"
            return str
        }

        str += (i-inicioSemana+1)==diaActual ? " seleccionado" : ""
        str += (esteMes && i==(hoyDia+inicioSemana-1))? " hoy": ""
        
        return str
    }

    
</script>

<style>

    ul, li {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .actual {
        text-decoration: underline;
    }

    .dias  * {
        width: 100%;
        display: flex;
    }

    .dias header .diasNombres,
    .dias nav ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    .dias header .diasNombres li,
    .dia {
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dia.seleccionado {
        background: none;
        outline: 2px solid #000;
    }
    .dia.hoy {
        background-color: #ccc;
    }


</style>


{#if typeof fecha == "object"}

    <!-- <h1>{mesNombre}</h1> -->

    <section class="dias">
    
        <header>
            <ul class="diasNombres">
                {#each diccionario.dias_semana as dia_semana}
                    <li>
                        {dia_semana[0]}
                    </li>
                {/each}
            </ul>
        </header>
        {#if dias}

            <nav>
                <ul>
                    {#each dias as d,i ("dia_"+i) }
                        <li class={calcularClases(i)}
                        on:click={ ()=> i>=inicioSemana && seleccionarAccion(d+1)} >
                        <!-- > -->
                            { d >= 0 ? (d+1) : "" }
                        </li>
                    {/each}
                </ul>
            </nav>

        {/if}
        
    </section>
{/if}