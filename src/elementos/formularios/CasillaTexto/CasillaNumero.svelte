<script>
    import BotonAlternar from "../../botones/BotonAlternar/BotonAlternar"
    
    export let texto;
    export let nombre;
    export let valor;
    export let cambiar;
    export let minimo=0;
    export let maximo=100;
    export let tipo;

    // TODO: implementar deshabilitado
    // export let deshabilitado

    let inputOculto

    let valorLocal

    let valorNumero

    let valorEstado

    $: valorActualizar(valor);

    const valorActualizar = v => {
        if( v ) {

            valorLocal = v;
            
            valorNumero = v.numero
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

        if( valorLocal.valor !== false ) {
            valorEstado = true
            valorLocal.valor = valorEstado
        }

        try {

            cambiar( valorLocal )
            cambiarInputOculto( valorEstado )
            
        } catch( err) {
            console.log("Error al cambiar casilla", err);
        }
            
        // actualizarValor( valorLocal )

    }

    $: valorLocal = {
        valor: valorEstado,
        numero: valorNumero
    }

    $: accionTipo = tipo == "circulo" ? node => {
      node.type = 'radio'
    } : node => { 
      node.type = 'checkbox'
    }

</script>


<style>
    
    .CasillaNumero {
        position: relative;
        display: flex;
    }


    input[type=number]{
        border: none;
        border-bottom: 1px solid #000;
        padding: 0 0.25rem;
        margin-left: 0.5rem;
        height: 2rem;
        width: 2.5rem;
        line-height: 0.5rem;
        margin-top: .5rem;
    }
    
    .oculto {
        position: absolute;
        visibility: hidden;
    }


</style>

<div class="CasillaNumero">

    <input name={nombre} class="checkbox oculto" bind:this={inputOculto} bind:value={valorEstado} use:accionTipo/>

    <BotonAlternar        
        {texto}
        {tipo}
        estado={!!valorLocal.valor}
        click={cambiarValor}
    />


    <input
        type="number"
        placeholder="0"
        bind:value={valorNumero}
        on:input={()=>cambiarAccion()}
        on:keyup={()=>cambiarAccion()}
        min={minimo}
        max={maximo}
    />

</div>