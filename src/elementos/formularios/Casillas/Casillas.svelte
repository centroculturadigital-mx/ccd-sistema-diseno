<script>
    import Casilla from "../Casilla/Casilla"
    
    export let opciones=[];
    export let tipo = "MULTIPLE";
    export let cambiar;
    export let valor=[];

    export let resolver = (v => {
        console.log("resolver", v);
        switch( tipo ) {
            
            case "UNICO":

               return v.indexOf(true)

            default:

               return v
        }


    });


    let valorLocal;

    $: valorActualizar(valor);

    const valorActualizar = v => {
        valorLocal = v;
    };

    


    const cambiarAccion = (opcion) => {

        valorLocal[opcion] = ! valorLocal[opcion]

        if( tipo == "UNICO" ) {
            if(valorLocal[opcion]) {
                valorLocal=valorLocal.map( v => false )
                valorLocal[opcion]=true
            }
        }

        try {
            cambiar( resolver( valorLocal ) )
        } catch(err) {
            console.log("Error al activar casilla", err);
        }

        console.log(tipo, valorLocal);
        // opciones = opciones
    }



    $: casillas = Array.isArray(opciones)
    ? opciones.map((o,i)=>({
        ...o,
        valor: valorLocal[i],      
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