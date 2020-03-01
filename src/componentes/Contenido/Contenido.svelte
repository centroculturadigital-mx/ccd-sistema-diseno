<script>

  import escapeHtml from 'escape-html'

  import Texto from "../../elementos/texto/Texto/Texto"
  import Parrafo from "../../elementos/texto/Parrafo/Parrafo"
  
  export let documento;

  let elementos = []

  $: bloques = !! documento ? JSON.parse(documento).nodes : []
  $: console.log(bloques)
  // $: bloques.forEach( b => console.log("bloque", b));
  $: bloquesContenido = bloques.map( bloque => generarContenido(bloque));



// const serialize = node => {
//   if (Text.isText(node)) {
//     return escapeHtml(node.text)
//   }

//   const children = node.children.map(n => serialize(n)).join('')

//   switch (node.type) {
//     case 'quote':
//       return `<blockquote><p>${children}</p></blockquote>`
//     case 'paragraph':
//       return `<p>${children}</p>`
//     case 'link':
//       return `<a href="${escapeHtml(node.url)}">${children}</a>`
//     default:
//       return children
//   }
// }

  const generarContenido = nodo => {

    console.log(nodo);
    if(Array.isArray(nodo)) {
      const resultado = nodo.map(n=>generarContenido(n))
    }

    switch(nodo.object) {
      case "block":
        console.log( "object", generarContenido(nodo.nodes) )
        break;
      case "text":
        elementos.push({
          componente: Texto,
          propiedades: {
            texto: nodo.text,
            estilos: nodo.marks.map(m=>m.type)
          }
        })
        console.log( "texto", nodo.marks, escapeHtml(nodo.text) )
      case "inline":
        // console.log( "inline", generarContenido(nodo) )
        break;
    }
  }


</script>

{#if Array.isArray(elementos) }
  {#each elementos as elemento,i ("elemento_"+i) }

    <svelte:component this={elemento.componente} {...elemento.propiedades}/>

  {/each}
{/if}
