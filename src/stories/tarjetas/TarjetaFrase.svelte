<script>
import ContenidoTarjeta from "../bloques/ContenidoTarjeta.svelte";

let blocks = [
    {
      type: "h1",
      data: {
        text:
          '"Título"'
      }
    },
    {
      type: "i",
      data: {
        text:
          "Texto"
      }
    }
]

</script>

<style>
    article {
        width: 16rem;
        height: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0.25rem;
        background-color: rgb(202, 202, 202);
        color: #FFF
    }
</style>

<article>
    <ContenidoTarjeta {blocks}/>
</article>
