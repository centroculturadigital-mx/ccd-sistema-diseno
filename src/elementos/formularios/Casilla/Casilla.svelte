<script>
    import BotonAlternar from "../../botones/BotonAlternar/BotonAlternar"
    
    export let nombre;
    export let valor;
    export let texto;
    export let cambiar;

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
        
        valorLocal = !valorLocal
        try {
            cambiar(valorLocal)
            cambiarInputOculto( valorLocal )
            
        } catch( err) {
            console.log("Error al cambiar casilla", err);
        }
            
        // actualizarValor( valorLocal )

    }

    $: valorLocal = valor

</script>


<style>
    
    .Casilla {
        position: relative;
    }
    
    .oculto {
        position: absolute;
        visibility: hidden;
    }


</style>

<div class="Casilla">

    <input name={nombre} class="checkbox oculto" bind:this={inputOculto} bind:value={valorLocal} type="checkbox"/>

    <BotonAlternar
        {texto}
        estado={valorLocal}
        click={cambiarAccion}
    />

</div>