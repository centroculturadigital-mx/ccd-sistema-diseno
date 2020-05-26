<script> 
import BotonPaso from "../../../elementos/botones/BotonPaso/BotonPaso"

export let pasos
$: pasosMostrar = parseInt(pasos) > 0 ? new Array(pasos).fill(true).map((e,i)=>i) : []

let activo = 0

const seleccionar = i =>{
    activo = i
    console.log ("seleccionaste",i)
  
    
}



</script>

<style>
ul {
    display: flex;
}
li {
    list-style: none;
    margin-right:1rem;
}

</style>

<nav>
    <ul>
        {#each pasosMostrar as paso,i}
        <li>
        <BotonPaso activo={i==activo} on:click={()=>seleccionar(i)} numero={i+1}/> 
        </li>
        {/each }
    </ul>
</nav>