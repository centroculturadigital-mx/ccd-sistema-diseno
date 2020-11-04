<script>
    import Casilla from "../Casilla/Casilla"
    
    export let opciones=[];
    export let tipo = "MULTIPLE";
    export let cambiar;
    export let nombre;
    export let valor;

    // TODO: implementar deshabilitado
    // export let deshabilitado


    let campoId = Math.random().toString().replace("0.","") // identificador para ids de campos

    export let resolver = (v => {

        switch( tipo ) {
            
            case "UNICO":
               return v.indexOf(true) || 0
            
            case "OPCIONES_OTRA":
               return (typeof v == "string" ? v : v.indexOf(true)) || 0

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
        if( Array.isArray(valorLocal) && (valorLocal.length != opciones.length) ) {
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
                    valor: Array.isArray(valorLocal) ? valorLocal[i] : null,
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

        valorLocal[indice] = ! valorLocal[indice]
        
        if( tipo == "UNICO" ) {
            // if(valorLocal[indice]) {
                valorLocal=valorLocal.map((v,i)=>i==indice)
            // }
        }
        

        prepararCasillas( opciones, valorLocal )
        
        setTimeout(()=>{

            try {
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

{#if Array.isArray(casillas) }
    <ul>
        {#each casillas as casilla (campoId + "-" + casilla.id)}
          
            <li>
                <Casilla {...casilla}/>
            </li>
        {/each}
    </ul>
{/if}