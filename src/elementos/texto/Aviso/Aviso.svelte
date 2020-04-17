<script>

export let texto 

import Parrafo from "../Parrafo/Parrafo";

$: color = texto instanceof Error ? '#f00' : '#000'
$: textoMostrar = texto instanceof Error ? texto.message : texto

</script>

<style>

    .Aviso {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;        
    }

    
</style>


{#if texto}

    <div class="Aviso">

        <Parrafo {texto} {color}/>

    </div>
    
{/if}