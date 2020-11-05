<script>
    import BotonAlternar from "../../botones/BotonAlternar/BotonAlternar"
    
    export let nombre;
    export let valor;
    export let texto;
    export let cambiar;

    // TODO: implementar deshabilitado
    // export let deshabilitado

    let inputOculto


    const actualizarValor = v => {
        valor = v;
    };

    let valorLocal;

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


            console.log("cambiar", valorLocal);

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

    <input name={nombre} class="checkbox oculto" bind:this={inputOculto} bind:value={valorLocal} type="checkbox"/>

    <BotonAlternar
        {texto}
        estado={!!valorLocal}
        click={cambiarAccion}
    />

    <input type="text" bind:value={valorLocal} on:keyup={cambiarAccion}/>

</div>