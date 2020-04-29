<script>
  import Campo from "../Campo/Campo.svelte";

  import Aviso from "../../../elementos/texto/Aviso/Aviso";


  let tiposValidos = [
    "texto",
    "email",
    "textarea",
    "numero",
    "archivo",
    "contrasenna"
  ]

  let datos = {}

  export let campos;
  export let enviar;
  export let respuesta

  $: camposMostrar = Array.isArray(campos) ?
    computarCampos(
      campos,
      datos
    )
  : []


  const computarCampos = ( campos, datos ) => {

    const camposPreparados = campos.map(c=>{

      if( validarCampo( c ) ) {

        let valor = datos[c.nombre]

        let resultadoValidacion = c.validacion( valor )


        const campoPreparado = {
          ...c,
          // valor,
          // valor: c.valorInicial ? c.valorInicial : null,
          cambiar: (valorLocal)=>{
            cambiar(valorLocal,c)
          },
          error: resultadoValidacion.error,
          status: resultadoValidacion.status
        }
        
        delete campoPreparado.valor

        return campoPreparado
      } 

      return null
      
    }).filter(c=>!!c)

    return camposPreparados

  }


  const cambiar = (valor,c) => {
    // if( typeof c.validacion == "function" ) {
      // if( c.validacion(valor).valido ) {
        datos[c.nombre]=valor
      // } else {
        // datos[c.nombre] = null
      // }
    // }
  }

    
  $: hayErrores = ! camposMostrar || camposMostrar.filter(c=>!!c.error).length>0
  

  $: hayRequeridosVacios = camposMostrar
    .filter(c=>!!c.requerido)
    .filter(cR=>!datos[cR.nombre] )
    .length > 0

  const enviarFuncion = () => {
    
    if( typeof enviar == "function" ) {
      
        console.log("enviar data:",datos);

        if( ! hayErrores || ! hayRequeridosVacios() ) {
          enviar( datos )
        }

      }
  }



  const validarCampo = c => {

    if( ! c.nombre ) {
      return false
    }
    if( typeof c.validacion != "function" ) {
      return false
    }

    if( tiposValidos.includes(c.tipo) ) {
      return true
    }

    return false
  }

</script>

<style>
  form {
    width: 100%;
    height: auto;
  }
</style>

{#if !respuesta}

  {#if Array.isArray(campos)}
      {#if campos.length > 0}


          <form on:submit|preventDefault={enviarFuncion}>

              {#each camposMostrar as campo,i ("formulario_campo_"+i) }
                  
                  <Campo {...campo}/>

              {/each}
              
              <input disabled={(hayErrores||hayRequeridosVacios)} type="submit"/>

          </form>

      {/if}
  {/if}

{:else}
    <Aviso texto={respuesta}/>
{/if}






