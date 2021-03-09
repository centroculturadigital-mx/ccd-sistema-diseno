<script>
    import BotonAlternar from "../../botones/BotonAlternar/BotonAlternar"
    
    export let nombre;
    export let valor;
    export let texto;
    export let cambiar;
    export let apagable = true;
    export let tipo = "MULTIPLE";
    export let pasiva

    // TODO:     
    // Agregar prop tipo
    // segun tipo, elegir input type=checkbox vs input type=radio
    // segun tipo, colocar svg distinto
    // en Casillas, pasar este prop a Casilla

    // TODO: implementar deshabilitado
    // export let deshabilitado

    let inputOculto
    let valorLocal;

    const actualizarValor = v => {
        valor = v;
    };


    $: valorActualizar(valor);

    const valorActualizar = v => {
        valorLocal = v;
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


    const cambiarAccion = (e) => {
        
        e.preventDefault()
        e.stopPropagation()

        
        if( typeof cambiar == "function" ) {
            if( ! pasiva ) {

                if( apagable ) {
                    valorLocal = !valorLocal
                }

                try {

                    cambiar(valorLocal)
                    cambiarInputOculto( valorLocal )
                    
                } catch( err) {
                    console.log("Error al cambiar casilla", err);
                }

            } else {

                try {

                    cambiar(!valorLocal)
                    
                } catch( err) {
                    console.log("Error al cambiar casilla pasiva", err);
                }

            }
        }
            
        // actualizarValor( valorLocal )

    }

    $: valorLocal = valor

    //
    $: accionTipo = tipo == "UNICO" ? node => {
        node.type = 'radio' 
    } : node => { 
        node.type = 'checkbox'
    }

</script>


<style>
    
    .Casilla {
        position: relative;
    }
    
    .oculto {
        position: absolute;
        visibility: hidden;
    }

    .Casilla :global(.BotonAlternar) {
        width: auto;
    }


</style>

<div class="Casilla">

    <input name={nombre} class="{tipo == "UNICO" ? "circular" : "checkbox"} oculto" bind:this={inputOculto} bind:value={valorLocal} use:accionTipo/>

    <BotonAlternar
        {texto}
        tipo={tipo == "UNICO" ? "CIRCULAR" : "CUADRADO"}
        estado={valorLocal}
        click={cambiarAccion}
    />

</div>