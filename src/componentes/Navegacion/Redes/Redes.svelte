<script> 
import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
import Icono from "../../../elementos/Icono/Icono" 

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
                <Icono icono={"facebook"}/>
            </li>
            <li>
                <Icono icono={"twitter"}/>
            </li>
            <li>
                <Icono icono={"instagram"}/>
            </li>
    
        </ul>
</nav>

</section>
