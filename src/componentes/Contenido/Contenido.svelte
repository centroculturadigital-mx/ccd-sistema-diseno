<script>

  import escapeHtml from 'escape-html'

  import Bloque from "../Bloque/Bloque"

  import Texto from "../../elementos/texto/Texto/Texto"
  import Parrafo from "../../elementos/texto/Parrafo/Parrafo"
  import Titulo from "../../elementos/texto/Titulo/Titulo"
  import Enlace from "../../elementos/enlaces/Enlace/Enlace"
  
  export let documento;


  $: bloquesJSON = !! documento ? JSON.parse(documento).nodes : []

  $: bloques = bloquesJSON.map( bloque => generarContenido(bloque));
  
  
  const generarContenido = nodo => {

    // let elementos = []

    if(Array.isArray(nodo)) {
      
      return nodo.map(n=>generarContenido(n))

    } else {
      
      let nuevoElemento;

      switch(nodo.object) {
        case "block":
                    
          switch( nodo.type ) {
            case "paragraph":
              return {
                componente: Parrafo,
                data: {
                  contenido: generarContenido(nodo.nodes)
                }
              };
            case "heading":
              return {
                componente: Titulo,
                data: {
                  contenido: generarContenido(nodo.nodes)
                }
              };
          }

          break;
        case "text":
          return {
            componente: Texto,
            data: {
              texto: nodo.text,
              estilos: nodo.marks.map(m=>m.type)
            }
          }
        case "inline":
          
          switch(nodo.type) {
            case "link":
              return {
                componente: Enlace,
                data: {
                  contenido: generarContenido(nodo.nodes),
                  href: nodo.data.href,
                  blank: nodo.data.target=="_blank"
                }
              };
              break;
          };

          // console.log( "inline", generarContenido(nodo) )
          break;

            
      }

    }

  }


</script>

{#if Array.isArray(bloques) }
  {#each bloques as bloque,i ("bloque_"+i) }
    <Bloque contenido={bloque}/>
  {/each}
{/if}
