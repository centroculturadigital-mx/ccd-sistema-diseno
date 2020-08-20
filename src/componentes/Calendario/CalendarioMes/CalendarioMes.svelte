<script>

    import moment from "moment" 

    import Titulo from "../../../elementos/texto/Titulo/Titulo"

    import diccionario from "../calendario.diccionario"

    const meses = diccionario.meses

    export let fecha
    export let accion

    $: fecha = moment(fecha)
    
    let diaActual
    
    const hoy = moment()

    $: mes = fecha ? fecha.month() : null

    $: console.log(mes)
    
    $: hoyDia = (
        hoy.month()==fecha.month()
        &&
        hoy.year()==fecha.year()
    ) ? hoy.date() : null

    

    $: mesNombre = fecha ? fecha.format("MMMM") : null
    $: inicioSemana = fecha.startOf("month").weekday()
    $: console.log(fecha.format("D-M-Y"),fecha.date());
    


    let mesActual = 0

    $: dias = typeof fecha.daysInMonth() == "number" ? (
        new Array(
            inicioSemana + fecha.daysInMonth()
        ).fill(0).map((e,i)=>(i-inicioSemana))
    ) : null

    const seleccionar = i => {
        if( parseInt(i+1)>=0 ) {

            diaActual = i
            
            if( typeof accion == "function" ) {
                accion(i)
            }
        }
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

    .dia.hoy {
        background-color: #000;
        color: #fff;
    }

    .dia.seleccionado {
        background-color: #eee;
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
                        <li class={
                            i==(diaActual+inicioSemana+1)? "dia seleccionado" :
                                i==(hoyDia+2)? "dia hoy": "dia"
                        } on:click={(e)=>seleccionar(d-1)}>
                            { d >= 0 ? (d+1) : "" }
                        </li>
                    {/each}
                </ul>
            </nav>

        {/if}
        
    </section>
{/if}