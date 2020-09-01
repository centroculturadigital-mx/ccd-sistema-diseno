<script>

  import Calendario from "../Calendario";


  export let cambiar;
  export let enfocar;
  export let desenfocar;

  export let value;

  let inputOculto


  const actualizarValor = v => {
    value = v;
  };

  let valorLocal;

  // $: actualizarValor(value);
  const cambiarInputOculto = (fecha) => {
    inputOculto.setAttribute("value",fecha)
    valorLocal = fecha
    actualizarValor(fecha)
    setTimeout(()=>{
      inputOculto && inputOculto.focus()
    })
  }

  const desenfocarAccion = (v) => {
    if (typeof desenfocar == "function") {
      desenfocar()
    }    
    cambiar(v||valorLocal)
  };
  
  const enfocarAccion = () => {
    if (typeof enfocar == "function") {
      enfocar()
    }
  };


  const seleccionar = fecha => {
    console.log('seleccionar',fecha);
    cambiarInputOculto(fecha.toISOString())
    cambiar(fecha.toISOString())
  };




</script>

<style>
  .oculto {
    visibility: hidden;
  }
</style>

<Calendario {seleccionar}/>




<!-- bind:value={valorLocal} -->
<input 
bind:this={inputOculto} 
on:focus={()=>enfocarAccion()}
on:focusout={()=>desenfocarAccion()}
type="text" class="oculto">
