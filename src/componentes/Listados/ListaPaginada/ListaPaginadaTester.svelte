<script>
  import ListaPaginada from "../ListaPaginada/ListaPaginada";

  export let elementos;

const seleccionar = i => { pagina = i }


let pagina = 0
setInterval(()=>{

    pagina++
    pagina %= 3

},500)

</script>

<ListaPaginada {elementos} elementosPagina="3" {pagina} {seleccionar}/>
