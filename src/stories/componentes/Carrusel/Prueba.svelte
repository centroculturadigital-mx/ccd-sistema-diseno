<script>

    export let data = {};
    
    $: nombre = typeof data == 'object' ? data.nombre : 'Prueba';

    let encendido = false;

    const alternar = () => { encendido = ! encendido }

    $: clases = encendido ? "Prueba encendido" : "Prueba"

</script>

<style>
    article {
        /* min-width: 15rem; */
        /* min-height: 12px; */
        box-sizing: border-box;
        background: none;
        color: #aaa;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
        border: 1px solid #aaa;
        text-align: center;
        border-radius: 0.1225rem;
    }
    article.encendido {
        background-color: #fff;
        color: #000;
        border: 2px solid #df0;
        box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
    }
</style>

<article class={clases} on:click={alternar}>
    Click para { encendido ? "Apagar" : "Encender" } { nombre }
</article>