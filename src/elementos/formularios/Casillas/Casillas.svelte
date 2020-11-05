<script>
    import Casilla from "../Casilla/Casilla"
    import CasillaTexto from "../CasillaTexto/CasillaTexto"
    
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
               return v
            
            case "OPCIONES_OTRA":
               return v //(typeof v == "string" ? v : v.indexOf(true)) || 0

            default:

               return v
        }


    });


    let valorLocal;

    $: valorProcesar(valor);
    
    
    $: prepararArreglo( opciones )
    $: prepararCasillas( opciones, valorLocal )



    const valorProcesar = v => {
        switch(tipo) {
            case "MULTIPLE":
                if( Array.isArray(v)) {
                    console.log("es arreglo", v );
                    valorLocal = v
                } else {
                    console.log("no es arreglo", v );
                    if( Array.isArray(valorLocal)) {
                        valorLocal[v] = !valorLocal[v];
                    }
                }
                break;
            default:
                valorLocal = v;
        }
    
    };


    const prepararArreglo = opciones => {
        if( tipo == "MULTIPLE" && (! Array.isArray(valorLocal) || (valorLocal.length != opciones.length) )) {
            valorLocal = new Array(opciones.length).fill(false);
        }
    };


    const prepararCasillas = (opciones, v) => {

        let valoresCasillas

        switch( tipo ) {
            
            case "UNICO":
                // if(typeof v == "number" || v === 0 ) {
                    valoresCasillas = new Array(opciones.length).fill(false).map((e,i)=>i==v)
                // }
                
                
                break;         
                
            case "OPCIONES_OTRA":
                if(typeof v == "number" || v === 0) {
                    valoresCasillas = new Array(opciones.length+1).fill(false).map((e,i)=>i==v)
                } else if( typeof v == "string" ) {
                    valoresCasillas = new Array(opciones.length).fill(false).push(!!v)

                } else {
                    valoresCasillas = []
                }

            
                break;

            default:
            if( v ) {

                valoresCasillas = v

            }
        }

        

        // return Array.isArray(opciones)
        setTimeout(()=>{
            casillas = Array.isArray(opciones)
            ? opciones.map((o,i)=>{

                return ({
                    ...o,
                    valor: valoresCasillas[i],
                    // click: ()=>cambiarAccion(o)
                    cambiar: ()=>cambiarAccion(i)
                })
                // )
            }
            )
            : null

        })
    
    

    };






    let casillas = []

    


    const cambiarAccion = (v) => {
        
        valorProcesar( v )

        setTimeout(()=>{

            try {

                cambiar( valorLocal )
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

        {#if tipo == "OPCIONES_OTRA" }

            <CasillaTexto valor={valorLocal} cambiar={cambiarAccion}/>

        {/if}

    </ul>
{/if}