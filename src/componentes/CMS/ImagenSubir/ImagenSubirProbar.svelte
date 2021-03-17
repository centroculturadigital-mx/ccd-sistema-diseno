<script>
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
    import ImagenSubir from "./ImagenSubir";

    export let datos;


    let abierto

    const clicar = () => {
    
        abierto = true

        setTimeout(() => {
            abierto = false
        })
    }
</script>

<div>
    <Boton click={clicar}/>

    <ImagenSubir {...datos} {abierto}/>
</div>
