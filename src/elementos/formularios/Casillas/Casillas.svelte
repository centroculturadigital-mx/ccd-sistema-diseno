<script>
    import { isArray } from "util";
import Casilla from "../Casilla/Casilla"
    
    export let opciones=[];
    export let tipo = "MULTIPLE";
    export let cambiar;
    export let nombre;
    export let valor=[];

    export let resolver = (v => {

        switch( tipo ) {
            
            case "UNICO":
                console.log("tipo unico", v.indexOf(true));
               return v.indexOf(true) || 0

            default:

               return v
        }


    });


    let valorLocal;

    $: valorActualizar(valor);

    const valorActualizar = v => {
        valorLocal = v;
    };


    const prepararArreglo = opciones => {
        if( valorLocal.length != opciones.length ) {

            valorLocal = new Array(opciones.length).fill(false);
            console.log("valor Local", opciones, valorLocal);
        }
    };


    const prepararCasillas = (opciones, valorLocal) => {
        // return Array.isArray(opciones)
        // setTimeout(()=>{
            casillas = Array.isArray(opciones)
            ? opciones.map((o,i)=>{

                return ({
                    ...o,
                    valor: valorLocal[i],      
                    // click: ()=>cambiarAccion(o)
                    cambiar: ()=>cambiarAccion(i)
                })
                // )
            }
            )
            : null

            console.log("casillas", casillas, valorLocal);

        // })
    };





    // Reactividad

    $: prepararArreglo( opciones )
    // $: casillas = prepararCasillas( opciones, valorLocal )
    $: casillas = []
    $: prepararCasillas( opciones, valorLocal )

    


    const cambiarAccion = (opcion) => {

        
        valorLocal[opcion] = ! valorLocal[opcion]
        
        if( tipo == "UNICO" ) {
            if(valorLocal[opcion]) {
                valorLocal=valorLocal.map( v => false )
                valorLocal[opcion]=true
            }
        }
        
        try {
            // console.log("cambiar", opcion,  ! valorLocal[opcion]);
            cambiar( resolver( valorLocal ) )
            // valorLocal = valorLocal
        } catch(err) {
            console.log("Error al activar casilla", err);
        }

        // opciones = opciones
    }





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
    {#if Array.isArray(casillas) }
        {#each casillas as casilla (casilla.id) }
        <li>
            <Casilla {...casilla}/>
        </li>
        {/each}
    {/if}
</ul>