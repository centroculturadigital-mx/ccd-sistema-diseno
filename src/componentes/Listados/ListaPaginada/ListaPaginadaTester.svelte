<script>
  import ListaPaginada from "../ListaPaginada/ListaPaginada";

  export let elementos;

const seleccionar = i => { pagina = i }


let pagina = 0
setInterval(()=>{

    pagina++
    pagina %= Math.ceil(elementos.length/3)
    
},1000)

</script>

<ListaPaginada {elementos} elementosPagina={3} {pagina} {seleccionar}/>
