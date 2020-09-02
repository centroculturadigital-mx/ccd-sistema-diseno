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
    cambiarInputOculto(fecha.toISOString())
    cambiar(fecha.toISOString())
  };



  const configuracion = {
    acciones: {
        seleccionar: {
            dia: true,
            mes: false,
        }
    }
  }



</script>

<style>
  .oculto {
    visibility: hidden;
  }
</style>

<Calendario {seleccionar} {configuracion} fecha={value}/>




<!-- bind:value={valorLocal} -->
<input 
bind:this={inputOculto} 
on:focus={()=>enfocarAccion()}
on:focusout={()=>desenfocarAccion()}
bind:value={value}
type="text" class="oculto">
