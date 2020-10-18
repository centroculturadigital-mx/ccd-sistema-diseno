<script>
    import { isArray } from "util";
import Casilla from "../Casilla/Casilla"
    
    export let opciones=[];
    export let tipo = "MULTIPLE";
    export let cambiar;
    export let nombre;
    export let valor;



    export let resolver = (v => {

        switch( tipo ) {
            
            case "UNICO":
               return v.indexOf(true) || 0

            default:

               return v
        }


    });


    let valorLocal;

    $: valorActualizar(valor);

    const valorActualizar = v => {

        switch( tipo ) {
            
            case "UNICO":
                if(typeof v == "number" || v === 0 ) {
                    valorLocal = new Array(opciones.length).fill(false).map((e,i)=>i==v)
                    // console.log("vl", valorLocal.indexOf(true));
                    prepararCasillas( opciones, valorLocal )

                } else {
                    // valorLocal = new Array(opciones.length).fill(false)
                    valorLocal = []
                }

               
                break;

            default:

               valorLocal = v;
               prepararCasillas( opciones, valorLocal )

        }
    };


    const prepararArreglo = opciones => {
        if( valorLocal.length != opciones.length ) {
            valorLocal = new Array(opciones.length).fill(false);
        }
    };


    const prepararCasillas = (opciones, valorLocal) => {
        // return Array.isArray(opciones)
        setTimeout(()=>{
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


        })
    };





    // Reactividad

    $: prepararArreglo( opciones )
    // $: casillas = prepararCasillas( opciones, valorLocal )
    let casillas = []
    // $: prepararCasillas( opciones, valorLocal )

    


    const cambiarAccion = (indice) => {

        console.log("cambiarAccion", indice);
        valorLocal[indice] = ! valorLocal[indice]
        
        if( tipo == "UNICO" ) {
            // if(valorLocal[indice]) {
                valorLocal=valorLocal.map((v,i)=>i==indice)
                console.log("valorLocal", indice, valorLocal);
            // }
        }
        

        prepararCasillas( opciones, valorLocal )
        setTimeout(()=>{

            try {
                // console.log("cambiar", opcion,  ! valorLocal[opcion]);
                cambiar( resolver( valorLocal ) )
                // valorLocal = valorLocal
            } catch(err) {
                console.log("Error al activar casilla", err);
            }
            
        })

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