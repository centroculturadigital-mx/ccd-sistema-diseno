<script>

    import moment from "moment" 

    import diccionario from "../calendario.diccionario"

    


    const meses = diccionario.meses

    export let fecha
    export let accion
    
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