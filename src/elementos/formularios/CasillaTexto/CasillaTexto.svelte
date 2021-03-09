<script>
    import BotonAlternar from "../../botones/BotonAlternar/BotonAlternar"
    
    export let nombre;
    export let texto="Otra:";
    export let valor;
    export let cambiar;
    export let tipo;

    // TODO: implementar deshabilitado
    // export let deshabilitado

    let inputOculto


    let valorLocal;

    let tecleando = false

    let campoTexto
    
    $: valorTexto = ""
    $: valorEstado = false

    $: valorActualizar(valor);

    const valorActualizar = v => {
        if( v ) {
            valorLocal = v;
            
            valorTexto = v.texto
            valorEstado = v.valor
            
        }
    };

    // $: actualizarValor(value);
    const cambiarInputOculto = (v) => {
        if( v ){
            inputOculto.setAttribute("checked",true)
        } else {
            inputOculto.removeAttribute("checked")
        }
        // actualizarValor(fecha)
        setTimeout(()=>{
            inputOculto && inputOculto.focus()
        })
    }


    const cambiarValor = () => {

        valorLocal.valor = !valorLocal.valor

        cambiarAccion()

        if( valorLocal.valor ) {
            campoTexto.focus()
        }

    }


    let valorAnterior
    let textoAnterior

    const realizarCambio = valorLocal => {

        // console.log("valorLocal", valorLocal);
        // if( textoAnterior != valorLocal.texto && valorAnterior != valorLocal.valor) {

            try {
                
                // si lo borraste,
                if(!!textoAnterior && ! valorLocal.texto ) {
                    // apaga campo
                    valorLocal.valor = false
                }
                // guarda info para sig. cambio checar si borraste:
                textoAnterior = valorLocal.texto
                valorAnterior = valorLocal.valor

                cambiar( valorLocal )
                cambiarInputOculto( valorLocal.valor )                            
            } catch( err) {
                console.log("Error al cambiar casilla", err);
            }

        // } else {
            
        //     if( !! valorLocal.valor || ! valorLocal || valorLocal.texto == ""  || ! valorLocal.texto) {
        //         valorLocal.valor = valorLocal.valor || false
        //         cambiar( valorLocal )
        //         cambiarInputOculto( valorLocal.valor )   
        //     }

        // }

    }

    const cambiarAccion = (e) => {
        
        if( valorLocal ) {
            
            if( valorLocal.texto ) {
                // para actualizar input invisible
                valorEstado = !! valorTexto
                // valorEstado = valorLocal.valor    
            
                if( valorEstado ) {

                    if( tecleando ) {

                        clearTimeout(tecleando)

                    }

                    tecleando = setTimeout(()=>{
                                            
                        if( e ) {
                            e.preventDefault()
                            e.stopPropagation()            
                        }

                        realizarCambio( valorLocal )
                          
                        // actualizarValor( valorLocal )
                        tecleando = null

                    }, 600)

                } else {
                 
                    realizarCambio( valorLocal )
                    
                }


            } else {

                realizarCambio( valorLocal )

            }
        
        }
    }

    $: valorLocal = {
        ...valor,
        texto: valorTexto
    }

    $: accionTipo = tipo == "UNICO" ? node => {
        node.type = 'radio' 
    } : node => { 
        node.type = 'checkbox'
    }


    const soltar = () => {
        if( tecleando ) {
            clearTimeout(tecleando)
            tecleando = null
        }
        realizarCambio( valorLocal )
    }


    

</script>


<style>
    
    .CasillaTexto {
        position: relative;
        display: flex;
    }

    input[type=text]{
        border: none;
        border-bottom: 1px solid #000;
        padding: 0 0.25rem;
        margin-left: 0.5rem;
        height: 2rem;
        line-height: 0.5rem;
        margin-top: .5rem;
    }
    
    .oculto {
        position: absolute;
        visibility: hidden;
    }


</style>

<div class="CasillaTexto">

    <input name={nombre} class="checkbox oculto" bind:this={inputOculto} bind:value={valorEstado} use:accionTipo/>

    <BotonAlternar
        {texto}
        tipo={tipo == "UNICO" ? "CIRCULAR" : "CUADRADO"}
        estado={valorEstado}
        click={cambiarValor}
    />

    <input type="text" bind:this={campoTexto} bind:value={valorTexto} on:keyup={cambiarAccion} on:blur={soltar}/>

</div>