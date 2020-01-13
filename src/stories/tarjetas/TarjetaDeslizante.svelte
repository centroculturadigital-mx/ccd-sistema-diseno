<script>
import ContenidoTarjeta from "../bloques/ContenidoTarjeta.svelte";
import ArrowLeftIcon from "./../../../node_modules/svelte-feather-icons/src/icons/ArrowLeftIcon.svelte";
import ArrowRightIcon from "./../../../node_modules/svelte-feather-icons/src/icons/ArrowRightIcon.svelte";


let blocks = [
    {
      type: "h4",
      data: {
        text:
          "Titulo"
      }
    },
    {
      type: "p",
      data: {
        text:
          "Texto"
      }
    }
]

</script>

<style>
    article {
        width: 22.5rem;
        height: 22.5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-radius: 0.25rem;
        background-color: rgb(192, 192, 192);
        color: rgb(0, 0, 0);
        
    }
    img {
        object-fit: contain;
        
    }
    .botones-flecha {
        display: flex;
        flex-direction: wrap;
    }
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 2rem;
        margin: 0;
    }
    :global(.feather) {
      stroke: rgb(141, 141, 141);
    }
</style>

<article>
    <img src="https://fakeimg.pl/360x140/" alt="header-imagen">
    
    <ContenidoTarjeta {blocks}/>

    <div class="botones-flecha">
        <button name="flecha-izquierda">
            <ArrowLeftIcon />
        </button>
        <button name="flecha-derecha">
            <ArrowRightIcon />
        </button>
    </div>
</article>
