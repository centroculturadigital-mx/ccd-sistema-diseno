<script> 
 import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
 import Icono from "../../../elementos/Icono/Icono" 

 export let enlaceFb;
 export let enlaceTw;
 export let enlaceIg;

</script>

<style>
.alinear {
    display: flex;
}
.rotar{
      transform: rotate(-90deg); 
      position: absolute;
      margin-top: 30px   
}
nav {
   padding-left: 1rem;
}

li {
    list-style: none; 
}
</style>

<section class="alinear"> 
<div class="rotar">
    <Parrafo texto={'Comparte en:'} />
</div>

    <nav>
        <ul>
            <li>
            <a href={enlaceFb} target="_blank">
             <Icono icono={"facebook"}/></a>
               
            </li>
            <li>
            <a href={enlaceTw} target="_blank">
                <Icono icono={"twitter"}/></a>
            </li>
            <li>
            <a href={enlaceTw} target="_blank">
                <Icono icono={"instagram"}/></a>
            </li>
    
        </ul>
</nav>

</section>
