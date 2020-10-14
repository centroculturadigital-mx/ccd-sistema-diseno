<script>
    import Casilla from "../Casilla/Casilla"
    
    export let opciones;
    export let cambiar;
    export let valor;
    

    let valorLocal;

    $: valorActualizar(valor);

    const valorActualizar = v => {
        valorLocal = v;
    };

    


    const cambiarAccion = (opcion) => {

        console.log("opcion", opcion);

        valorLocal[opcion] = ! valorLocal[opcion]

        try {
            cambiar(valorLocal)
        } catch(err) {
            console.log("Error al activar casilla", err);
        }

        // opciones = opciones
    }



    $: casillas = Array.isArray(opciones)
    ? opciones.map((o,i)=>({
        ...o,
        valor: valor[i],      
        // click: ()=>cambiarAccion(o)
        cambiar: ()=>cambiarAccion(i)
    }))
    : []


</script>


<style>

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }


    ul {
        display: flex;
        flex-direction: column;
    }

    li {
        width: 100%;
    }

</style>

<ul>
    {#each casillas as casilla (casilla.id) }
    <li>
        <Casilla {...casilla}/>
    </li>
    {/each}
</ul>