<script>

    import moment from "moment" 

    import Titulo from "../../../elementos/texto/Titulo/Titulo"

    import diccionario from "../calendario.diccionario"

    export let fecha
    export let accion
    
    let diaActual
    
    const hoy = moment()

    $: hoyDia = (
        hoy.week()==fecha.week()
        &&
        hoy.year()==fecha.year()
    ) ? hoy.weekday() : null

    



    $: dias = (
        new Array(7).fill(0).map((e,i)=>(i+(
            (hoy.date()-hoy.weekday()-1)
        )))
    )

    const seleccionar = i => {
        if( parseInt(i+1)>=0 ) {

            diaActual = i
            
            if( typeof accion == "function" ) {
                accion(d)
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

    <h1>
        {fecha.format("MMMM")}
        {Math.max(1,fecha.date()-fecha.weekday())} - 
        {Math.min(fecha.daysInMonth(),fecha.date()+7-fecha.weekday())}
    </h1>

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
                            ("dia" + ((i==(diaActual+1))? " seleccionado" : "")+(((i+1)==hoyDia)? " hoy":""))
                        } on:click={(e)=>seleccionar(i-1)}>
                            { d >= 0 ? (d+1) : "" }
                        </li>
                    {/each}
                </ul>
            </nav>

        {/if}
        
    </section>
{/if}