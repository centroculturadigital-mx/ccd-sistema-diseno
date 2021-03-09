<script>
    import BotonAlternar from "../../botones/BotonAlternar/BotonAlternar"
    
    export let nombre;
    export let valor;
    export let cambiar;
    export let minimo=0;
    export let maximo=100;
    export let tipo;

    // TODO: implementar deshabilitado
    // export let deshabilitado

    let inputOculto


    let valorLocal;


    let valorTexto
    let valorNumero
    let valorEstado

    $: valorActualizar(valor);

    const valorActualizar = v => {

        if( v ) {

            valorLocal = v;
            
            valorTexto = v.texto
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

        // para actualizar input invisible
        
        if( valorLocal.valor !== false ) {
            valorEstado = true
            valorLocal.valor = valorEstado
        }

        try {

            cambiar( valorLocal )
            cambiarInputOculto( valorLocal.valor )
            
        } catch( err) {
            console.log("Error al cambiar casilla", err);
        }
            
        // actualizarValor( valorLocal )

    }

    $: valorLocal = {
        // ...valor,
        valor: valorEstado,
        texto: valorTexto,
        numero: valorNumero
    }

    $: accionTipo = tipo == "UNICO" ? node => {
        node.type = 'radio' 
    } : node => { 
        node.type = 'checkbox'
    }

</script>


<style>
    
    .CasillaTextoNumero {
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

<div class="CasillaTextoNumero">

    <input name={nombre} class="checkbox oculto" bind:this={inputOculto} bind:value={valorEstado} use:accionTipo/>

    <BotonAlternar        
        estado={!!valorLocal.valor}
        click={cambiarValor}
        tipo={tipo == "UNICO" ? "CIRCULAR" : "CUADRADO"}
    />

    <input
        type="text"
        placeholder="Otra"
        bind:value={valorTexto}
        on:keyup={cambiarAccion}
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