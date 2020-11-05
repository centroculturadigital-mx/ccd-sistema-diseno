<script>
    import BotonAlternar from "../../botones/BotonAlternar/BotonAlternar"
    
    export let nombre;
    export let texto;
    export let valor;
    export let cambiar;

    // TODO: implementar deshabilitado
    // export let deshabilitado

    let inputOculto


    let valorLocal;

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

    }

    const cambiarAccion = (e) => {
        if( e ) {
            e.preventDefault()
            e.stopPropagation()            
        }

        // para actualizar input invisible
        valorEstado = valorLocal.valor

        try {

            cambiar( valorLocal )
            cambiarInputOculto( valorLocal.valor )
            
        } catch( err) {
            console.log("Error al cambiar casilla", err);
        }
            
        // actualizarValor( valorLocal )

    }

    let valorTexto
    let valorEstado

    $: valorLocal = {
        ...valor,
        texto: valorTexto
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

    <input name={nombre} class="checkbox oculto" bind:this={inputOculto} bind:value={valorEstado} type="checkbox"/>

    <BotonAlternar
        {texto}
        estado={!!valorLocal.valor}
        click={cambiarValor}
    />

    <input type="text" bind:value={valorTexto} on:keyup={cambiarAccion}/>

</div>