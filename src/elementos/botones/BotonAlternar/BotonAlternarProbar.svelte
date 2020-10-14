<script>
    
    import BotonAlternar from "./BotonAlternar.svelte";

    export let texto;
    export let click;

    let estado = false

    const clickAccion = () => {
        
        estado = !estado
        
        click(estado)

    }

</script>

<BotonAlternar
    {texto}
    {estado}
    click={clickAccion}
/>