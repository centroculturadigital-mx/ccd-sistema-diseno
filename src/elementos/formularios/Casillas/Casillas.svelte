<script>
    import Casilla from "../Casilla/Casilla"
    import CasillaTexto from "../CasillaTexto/CasillaTexto"
    
    export let opciones=[];
    export let tipo = "MULTIPLE";
    
    export let datos = {};

    export let cambiar;
    export let nombre;
    export let valor;
    export let vacioPermitido=false;

    // TODO: implementar deshabilitado
    // export let deshabilitado


    let campoId = Math.random().toString().replace("0.","") // identificador para ids de campos

    

    let valorLocal;

    $: valorProcesar(valor);
    
    
    $: prepararArreglo( opciones )
    $: prepararCasillas( opciones, valorLocal )



    const valorProcesar = v => {
        
        
        switch(tipo) {
            case "MULTIPLE":
                if( Array.isArray(v)) {
                    valorLocal = v
                } else {
                    if( Array.isArray(valorLocal)) {
                        valorLocal[v] = !valorLocal[v];
                    }
                }
                break;
            case "UNICO_OTRA":
                if( typeof v == "object" ) {
                    if( v.id ) {
                        valorLocal = v
                    }
                    if( v.id == opciones.length && v.texto ) {
                        valorLocal = v
                    }
                }
                if( typeof v == "number" ) {
                    valorLocal = {
                        id: v
                    }
                }
                
                break;

            case "MULTIPLE_MAXIMO":

                if( Array.isArray(v)) {
                    
                    valorLocal = v

                } else {
                    
                    if( Array.isArray(valorLocal)) {
                        // si la intención de usuarix es activar casilla,
                        // if( !valorLocal[v] ) {
                            // revisar si cantidad de elementos positivos es superior a cantidad máxima
                            const numActivos = valorLocal.reduce((acc,v)=> ( acc + (v ? 1 : 0 )), 0 )
                            valorLocal[v] = ( (! isNaN(datos.maximo)) && numActivos < datos.maximo) ? ! valorLocal[v] : false;
                            

                        // } 
                        valorLocal = valorLocal
                    }
                }
                break;

            case "MULTIPLE_OTRA":               
                if( typeof v == "number" ) {
                    if( Array.isArray(valorLocal)) {
                        valorLocal[v].valor = !valorLocal[v].valor;
                    }
                }
                if( typeof v == "object" ) {
                    if( v.id == opciones.length && v.texto ) {
                        valorLocal[opciones.length] = v
                    }
                }
                if( Array.isArray(v)) {
                    valorLocal = v
                }    
                break;
            default:
                valorLocal = v;
        }

        
    }


    const prepararArreglo = opciones => {
        
        if( ! Array.isArray(valorLocal) && ( ! tipo.includes("UNICO") ) ) {

            switch(tipo) {

                case "MULTIPLE_OTRA":
                    valorLocal = new Array(opciones.length+1).fill(false).map((e,i)=>({ id: i, valor: false}));
                    break;
                default:
                    valorLocal = new Array(opciones.length).fill(false);
                    break;

            }
        }
    }


    const prepararCasillas = (opciones, v) => {
        
        let valoresCasillas
        
        switch( tipo ) {
            
            case "UNICO":
                // if(typeof v == "number" || v === 0 ) {
                    valoresCasillas = new Array(opciones.length).fill(false).map((e,i)=>i==v)
                // }
                break;         
                
            case "UNICO_OTRA":
                    valoresCasillas = new Array(opciones.length+1).fill(false).map((e,i)=> v && i==v.id)
                break;
                
            case "MULTIPLE_OTRA":
                if( Array.isArray(v) ) {
                    valoresCasillas = v.map(e=>e.valor)
                }
                break;
                
            // case "MULTIPLE":
            default:
                if( Array.isArray(v) ) {
                    valoresCasillas = v
                }
                break;
        }
    

        // TODO: validar si todavía es necesario el timeout

        // return Array.isArray(opciones)
        setTimeout(()=>{



            casillas = Array.isArray(opciones)
            ? opciones.map((o,i)=>{

                return ({
                    ...o,
                    pasiva: true,
                    tipo: tipo.includes( "UNICO" ) ? 'UNICO' : 'MULTIPLE',
                    valor: valoresCasillas[i],
                    apagable: tipo != "UNICO",
                    // click: ()=>cambiarAccion(o)
                    cambiar: ()=>cambiarAccion(i)
                })
                // )
            }
            )
            : null

        })
    
    

    }






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


    const cambiarOtra = ({valor, texto}) => {

        valorOtra = ! textoOtra ? true : texto ? valor : null

        textoOtra = texto

        cambiarAccion({
            id: opciones.length,
            valor,
            texto
        })

    }

    let textoOtra
    let valorOtra

    $: otra = ( tipo == "MULTIPLE_OTRA" || ( valorLocal && valorLocal.id == opciones.length ) ) ? {
        valor: tipo == "UNICO_OTRA" ? valorLocal.id == opciones.length : valorOtra,
        texto: textoOtra
    } : null

    

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

        {#if tipo.includes("OTRA") }

            <CasillaTexto valor={otra} cambiar={cambiarOtra} tipo={tipo.includes("UNICO") ? "UNICO" : "MULTIPLE" } />

        {/if}

    </ul>
{/if}