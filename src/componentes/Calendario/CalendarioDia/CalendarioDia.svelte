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


    <section class="dia">
    
        <header>
            <h1>{fecha.format("MMMM DD")}</h1>
        
        </header>
        
        
    </section>
{/if}