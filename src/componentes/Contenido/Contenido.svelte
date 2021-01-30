<script>
  import escapeHtml from "escape-html";

  import Bloque from "../Bloque/Bloque.svelte";

  import Texto from "../../elementos/texto/Texto/Texto.svelte";
  import Parrafo from "../../elementos/texto/Parrafo/Parrafo.svelte";
  import Cita from "../../elementos/texto/Cita/Cita.svelte";
  import Titulo from "../../elementos/texto/Titulo/Titulo.svelte";
  import Enlace from "../../elementos/enlaces/Enlace/Enlace.svelte";
  import ListaElemento from "../../elementos/listas/ListaElemento/ListaElemento.svelte";
  import ListaDesordenada from "../../elementos/listas/ListaDesordenada/ListaDesordenada.svelte";
  import ListaOrdenada from "../../elementos/listas/ListaOrdenada/ListaOrdenada.svelte";

  export let documento;
  export let html;
  export let tamanno;

  $: bloquesJSON = !!documento ? JSON.parse(documento).nodes : [];

  $: bloques = bloquesJSON.map(bloque => generarContenido(bloque));

  const generarContenido = nodo => {
    // let elementos = []

    if (Array.isArray(nodo)) {
      return nodo.map(n => generarContenido(n));
    } else {
      let nuevoElemento;

      switch (nodo.object) {
        case "block":
          switch (nodo.type) {
            case "paragraph":
              return {
                componente: Parrafo,
                data: {
                  contenido: generarContenido(nodo.nodes)
                }
              };
            case "blockquote":
              return {
                componente: Cita,
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
            case "ordered-list":
              return {
                componente: ListaOrdenada,
                data: {
                  contenido: generarContenido(nodo.nodes)
                }
              };
            case "unordered-list":
              return {
                componente: ListaDesordenada,
                data: {
                  contenido: generarContenido(nodo.nodes)
                }
              };
            case "list-item":
              return {
                componente: ListaElemento,
                data: {
                  texto: nodo.text,
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
              estilos: nodo.marks.map(m => m.type)
            }
          };

        case "inline":
          switch (nodo.type) {
            case "link":
              return {
                componente: Enlace,
                data: {
                  contenido: generarContenido(nodo.nodes),
                  href: nodo.data.href,
                  blank: nodo.data.target == "_blank"
                }
              };
              break;
          }

          break;
      }
    }
  };
</script>

<style>

  .Contenido {
    word-break: break-all;
    white-space: pre;
    line-height: 1.5;
  }
  
</style>


{#if !! html}

  <section class="Contenido html">
    {@html html }
  </section>

{:else}

  {#if Array.isArray(bloques)}
    <section class="Contenido">
      {#each bloques as bloque, i ('bloque_' + i)}
        <Bloque contenido={bloque} {tamanno} />
      {/each}
    </section>
  {/if}


{/if}