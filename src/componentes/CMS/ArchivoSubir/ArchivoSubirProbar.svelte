<script>
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
    import ArchivoSubir from "./ArchivoSubir";

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

    <ArchivoSubir {...datos} {abierto}/>
</div>
