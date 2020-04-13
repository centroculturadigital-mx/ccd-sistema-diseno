<script>

    import moment from "moment" 

    import diccionario from "../calendario.diccionario"

    import Titulo from "../../../elementos/texto/Titulo/Titulo"

    


    const meses = diccionario.meses

    export let fecha
    export let accion
    export let eventos
    
    $: eventosMostrar = eventos
    
    $: anno = fecha ? fecha.year() : null


    let mesActual = 0

    let test = new Array(12).fill(0).map((e,i)=>moment(i).format("MM"))

    $: console.log("\n\n\n\nTEST:\n\n",test);
    

    const seleccionar = i => {
        mesActual = i
        if( typeof accion == "function" ) {
            accion(i)
        }
    }




</script>

<style>

    li{
        padding: 0 .5rem;
    }
    
    .actual {
        text-decoration: underline;
    }

</style>

<h1>{anno}</h1>

<nav class="meses">
    <ul>
        {#each meses as mes,i ("mes_"+i) }
            <li class={i==mesActual?"actual":""} on:click={(e)=>seleccionar(i)}>
                {mes}
            </li>
        {/each}
    </ul>
</nav>

<section class="eventos">

<ul>
    {#each eventosMostrar as evento,i ("evento_"+i)}
        <li>
            
            <Titulo nivel={5} texto={evento.nombre}/>
            <Titulo nivel={6} texto={moment(evento.fecha).format("D/MMMM/YY")}/>

        </li>
    {/each}
</ul>

</section>