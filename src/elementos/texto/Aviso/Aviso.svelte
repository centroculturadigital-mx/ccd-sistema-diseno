<script>

export let texto 

import Parrafo from "../Parrafo/Parrafo";

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

        <Parrafo {texto}/>

    </div>
    
{/if}