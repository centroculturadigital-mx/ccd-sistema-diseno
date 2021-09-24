<script>
    import { slide } from "svelte/transition";

    import Texto from "../../../elementos/texto/Texto/Texto";
    import Icono from "../../../elementos/Icono/Icono";
  
    export let texto;
    export let textoCerrar;
    export let estado = false;
    export let elementos = [];
  
    let icono = "abajo";
  
    const alternar = () => {
      estado = !estado;
    };
  
    const cierraFueraArea = () => {
       estado = false;
     }
  
  
  </script>
  
  <style>
    * {
      box-sizing: border-box;
    }
    .GrupoDesplegable {
      position: relative;
      background-color: var(--theme-colores-fondo);
      padding: var(--theme-espaciados-padding);
    }
    .texto {
      display: flex;
      justify-content: flex-start;
      cursor: pointer;
    }
    .texto:hover {
      opacity: 0.75;
    }
    .GrupoDesplegable :global(span) {
      display: flex;
      align-items: center;
    }
    .texto :global(.iconoContenedor) {
      margin-left: 1rem;
    }
    ul {
      position: relative;
      background-color: var(--theme-colores-fondo);
      padding: var(--theme-espaciados-padding);
      left: 0;
      margin: 0;
      list-style-type: none;
      width: auto;
      min-width: 100%;
    }
    li {
      padding: calc(var(--theme-espaciados-padding) / 2) 0;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
    li :global(.iconoContenedor) {
      margin-left: 1rem;
      display: flex;
      justify-content: flex-end;
    }
    .enlace :global(a span),
    li :global(a span) {
      color: var(--theme-textos-parrafo-color);
      white-space: nowrap;
    }
    .enlace:hover :global(svg),
    .enlace:hover :global(span),
    li:hover :global(svg),
    li:hover :global(span) {
      fill: var(--theme-textos-enlaces-color);
      color: var(--theme-textos-enlaces-color);
    }
</style>
  
<div class="GrupoDesplegable">
    
    {#if estado}
      <ul transition:slide|local>
        {#each elementos as elemento (elemento)}
          <li>
            <svelte:component this={elemento.componente} {...elemento.datos}/>
          </li>
        {/each}
      </ul>
    {/if}

    <div class="texto" on:click={ alternar }>
        {#if !!texto}
            <Icono icono={estado ? 'arriba' : 'abajo' } />
            <Texto texto={ ! estado ? texto : textoCerrar } />
        {/if}
    </div>
  
  
</div>
  