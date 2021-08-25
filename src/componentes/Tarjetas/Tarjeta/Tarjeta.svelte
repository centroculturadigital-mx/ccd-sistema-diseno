<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonSecundario from "../../../elementos/botones/BotonSecundario/BotonSecundario.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace.svelte";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";
  import Embebido from "../../../elementos/media/Embebido/Embebido";
  import Etiqueta from "../../Etiqueta/Etiqueta";

  export let apariencia = "VERTICAL"; //"VERTICAL", "HORIZONTAL", "IMAGEN", "CHICA"
  export let pleca;
  export let etiquetas;
  export let enlace;
  export let imagen;
  export let video;
  export let nombre;
  export let nivelTitulo = 3;
  export let subtitulo;
  export let extracto;
  export let sombra;
  export let leyenda;
  export let enlaces = [];
  export let acciones = [];
  export let cortina = false;
  export let accionCabecera;

  $: linkTarget = enlace ? (enlace.externo ? { target: "_blank" } : {}) : {};

  let colorFondoPleca = !!pleca
    ? pleca.colores
      ? pleca.colores.fondo
      : "#fff"
    : "#fff";

  let colorTextoPleca = !!pleca
    ? pleca.colores
      ? pleca.colores.texto
      : "#000"
    : "#000";

  $: aparienciaEstilo =
    apariencia == "HORIZONTAL"
      ? "TarjetaHorizontal"
      : apariencia == "CHICA"
      ? "TarjetaChica"
      : apariencia == "IMAGEN"
      ? "TarjetaImagen"
      : "TarjetaVertical";
</script>

<article class="{aparienciaEstilo} Tarjeta {!!sombra ? ' sombra' : ''}">
  <div class="{aparienciaEstilo} Contenido">
    {#if accionCabecera && typeof accionCabecera == "object"}
      <div class="accionCabecera" on:click={accionCabecera.accion}>
        <span><Icono icono={accionCabecera.icono} /></span>
      </div>
    {/if}
    <div class="Cabecera">
      {#if cortina}
        <div class="cortina" />
      {/if}
      {#if !!video}
        <Embebido enlace={video} />
      {:else if !!imagen}
        <div
          class="{aparienciaEstilo} Imagen {apariencia == 'Chica'
            ? 'TarjetaChicaImagen'
            : ''}"
        >
          {#if !!enlace}
            <a
              class="{aparienciaEstilo} enlazado"
              {...linkTarget}
              href={enlace}
            >
              <Imagen {imagen} alt={nombre} estilos={{ ajuste: "cover" }} />
            </a>
          {:else}
            <Imagen {imagen} alt={nombre} estilos={{ ajuste: "cover" }} />
          {/if}
        </div>
      {/if}

      {#if pleca && typeof pleca == "object"}
        <div class="Pleca {!imagen ? 'noImagen' : ''}">
          <div
            class="PlecaContenido"
            style={`background-color: ${colorFondoPleca}`}
          >
            {#if !!pleca.texto}
              <Texto
                texto={pleca.texto}
                variante="COMPACTO"
                css={{ color: colorTextoPleca }}
              />
            {/if}
            {#if Array.isArray(pleca.textos)}
              <ul class="Textos">
                {#each pleca.textos as texto}
                  <Texto
                    {texto}
                    variante="COMPACTO"
                    css={{ color: colorTextoPleca }}
                  />
                {/each}
              </ul>
            {/if}
            {#if !!pleca.icono}
              <Icono icono={pleca.icono} color={colorTextoPleca} />
            {/if}
          </div>
        </div>
      {/if}
    </div>

    <section
      class={apariencia == "Chica" ? "TarjetaChicaContenido" : "Contenidos"}
    >
      <div class="Textos {apariencia == 'Chica' ? 'TarjetaChicaTextos' : ''}">
        <!--  -->
        {#if !!enlace}
          <a class="{aparienciaEstilo} enlazado" {...linkTarget} href={enlace}>
            {#if !!leyenda}
              <div class="Leyenda">
                <Parrafo texto={leyenda} />
              </div>
            {/if}
            <!-- etiquetas -->
            {#if Array.isArray(etiquetas)}
              <div class="etiquetas">
                {#each etiquetas as etiqueta (etiqueta)}
                  <Etiqueta
                    texto={etiqueta.texto}
                    cerrar={etiqueta.cerrar}
                    icono={etiqueta.icono}
                    imagen={etiqueta.imagen}
                  />
                {/each}
              </div>
            {/if}
            {#if !!nombre}
              <div class="Titulo">
                <Titulo texto={nombre} nivel={nivelTitulo} />
              </div>
            {/if}
            {#if !!subtitulo}
              <div class="Subtitulo">
                <Titulo texto={subtitulo} nivel={4} />
              </div>
            {/if}
          </a>
        {:else}
          {#if !!leyenda}
            <div class="Leyenda">
              <Parrafo texto={leyenda} />
            </div>
          {/if}
          <!-- etiquetas -->
          {#if Array.isArray(etiquetas)}
            <div class="etiquetas">
              {#each etiquetas as etiqueta (etiqueta)}
                <Etiqueta
                  texto={etiqueta.texto}
                  cerrar={etiqueta.cerrar}
                  icono={etiqueta.icono}
                  imagen={etiqueta.imagen}
                />
              {/each}
            </div>
          {/if}
          {#if !!nombre}
            <div class="Titulo">
              <Titulo texto={nombre} nivel={nivelTitulo} />
            </div>
          {/if}
          {#if !!subtitulo}
            <div class="Subtitulo">
              <Titulo texto={subtitulo} nivel={4} />
            </div>
          {/if}
        {/if}

        {#if Array.isArray(enlaces) && enlaces.length > 0}
          <section>
            <hr />
            <div class="Enlaces">
              {#each enlaces as enlace, i ("enlace_" + i)}
                <Enlace enlace={enlace.enlace} texto={enlace.texto} />
              {/each}
            </div>
          </section>
        {/if}

        {#if !!extracto}
          {#if !!enlace}
            <a
              class="{aparienciaEstilo} enlazado"
              {...linkTarget}
              href={enlace}
            >
              <div class="Extracto">
                <Parrafo texto={extracto} />
              </div>
            </a>
          {:else}
            <div class="Extracto">
              <Parrafo texto={extracto} />
            </div>
          {/if}
        {/if}
      </div>
      <!-- footer horizontal-->
      {#if apariencia == "HORIZONTAL" || apariencia == "Chica"}
        {#if Array.isArray(acciones) && acciones.length > 0}
          <footer class={aparienciaEstilo}>
            <div class="Acciones">
              {#each acciones as accion (accion)}
                {#if accion.enlace}
                  <Enlace {...accion} />
                {/if}
                {#if typeof accion.accion == "function"}
                  <BotonSecundario
                    click={accion.accion}
                    radius="15px"
                    texto={accion.texto}
                  />
                {/if}
              {/each}
            </div>
          </footer>
        {/if}
      {/if}
    </section>
  </div>

  <!-- footer vertical (unico duplicado) -->
  {#if apariencia === "VERTICAL" || !apariencia}
    {#if Array.isArray(acciones) && acciones.length > 0}
      <footer>
        <hr />
        <div class="Acciones">
          {#each acciones as accion (accion)}
            {#if accion.enlace}
              <Enlace {...accion} />
            {/if}
            {#if typeof accion.accion == "function"}
              <!-- TODO: actualizar a Boton -->
              <BotonSecundario
                click={accion.accion}
                radius="15px"
                texto={accion.texto}
              />
            {/if}
          {/each}
        </div>
      </footer>
    {/if}
  {/if}
</article>

<style>
  * {
    box-sizing: border-box;
  }
  .Tarjeta {
    position: relative;
    max-width: 20rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: var(--theme-tarjetas-esquina);
    background-color: var(--theme-tarjetas-fondo);
    color: var(--theme-textos-parrafo-color);
    overflow: hidden;
  }
  .TarjetaHorizontal {
    max-width: 36rem !important;
    display: flex;
    flex-direction: row !important;
    height: 100% !important;
    padding-top: 0;
    padding-bottom: 0;
  }
  .TarjetaChica {
    max-width: initial !important;
    display: flex;
    height: auto !important;
    padding-top: 0;
    padding-bottom: 0;
    align-items: center !important;
  }
  .TarjetaChicaImagen {
    position: absolute;
    top: 0;
    height: auto !important;
    width: 100%;
    left: 0;
    z-index: 0;
  }
  .TarjetaChicaContenido {
    min-width: initial !important;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }
  .TarjetaChicaTextos {
    width: 75% !important;
    position: relative;
    z-index: 1;
  }
  .Imagen {
    width: 100%;
    height: 10rem;
  }
  .Contenido {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  }
  .accionCabecera {
    position: absolute;
    top: var(--theme-espaciados-padding);
    right: var(--theme-espaciados-padding);
    cursor: pointer;
    z-index: 999;
  }
  .accionCabecera :global(.iconoContenedor) {
    height: 1.5rem !important;
    width: 1.5rem !important;
  }
  .TarjetaHorizontal .accionCabecera :global(.iconoContenedor) {
    height: 2rem !important;
  }
  .accionCabecera:hover :global(svg) {
    fill: var(--theme-colores-secundario2) !important;
    height: 100%;
  }
  .Contenidos {
    width: 100%;
  }
  .Textos {
    background-color: var(--theme-tarjetas-fondo);
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 2);
    width: 100%;
  }
  .Acciones {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .Acciones :global(button) {
    border: none;
    padding: var(--theme-espaciados-padding);
  }
  .Acciones :global(button:hover) {
    border: none;
  }
  .Acciones :global(a) {
    border: none;
    padding: var(--theme-espaciados-padding);
    background-color: var(--theme-botones-secundario-fondo);
    color: var(--theme-botones-secundario-color);
  }
  .Acciones :global(a span) {
    font-size: calc(var(--theme-textos-enlaces-tamanno) / 1.125);
  }
  .Acciones :global(a:hover) {
    border: none;
  }
  .sombra {
    box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.1);
  }
  .Subtitulo :global(h4) {
    margin: var(--theme-espaciados-margen) 0;
  }
  .Leyenda {
    margin: 0.5rem 0;
    color: var(--theme-textos-parrafo-color);
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-tamannos-sm);
  }
  .Leyenda :global(p) {
    margin: 0;
  }
  .Leyenda :global(span) {
    color: var(--theme-textos-parrafo-color);
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-tamannos-sm);
  }
  .Enlaces {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
  .Enlaces :global(a span) {
    padding: calc(var(--theme-espaciados-padding) / 2);
    padding-left: 0;
    font-size: var(--theme-tamannos-sm);
    font-weight: 700;
    color: var(--theme-textos-enlaces-color);
    height: auto;
  }
  hr {
    border-color: var(--theme-bordes-neutro);
    border-style: solid;
    border-width: thin;
    opacity: 0.25;
  }
  footer {
    width: 100%;
    padding: 0 1rem 0.5rem 1rem;
  }
  .enlazado {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
  }
  .Titulo :global(h3) {
    margin: var(--theme-espaciados-margen) 0;
  }
  .Extracto :global(p) {
    margin: var(--theme-espaciados-margen) 0;
    height: auto;
    margin-bottom: 0;
  }
  .Pleca {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    bottom: 0.75rem;
    left: 0.75rem;
    z-index: 2;
  }
  .PlecaContenido {
    display: flex;
    padding: calc(var(--theme-espaciados-padding) / 2)
      calc(var(--theme-espaciados-padding) * 1.5);
    border-radius: 0.125rem;
    align-items: center;
  }
  .PlecaContenido :global(span) {
    display: flex;
  }
  .Pleca :global(.iconoContenedor) {
    height: 0.875rem !important;
    width: 0.75rem !important;
    margin-left: 0.5rem;
    fill: inherit;
  }
  .Pleca :global(svg) {
    height: 100%;
  }
  .Pleca :global(span) {
    white-space: pre-wrap;
    text-transform: uppercase;
    font-size: var(--theme-textos-parrafo-tamanno) !important;
    letter-spacing: 5%;
    font-weight: normal;
    line-height: 1.5;
    width: auto;
  }
  .Pleca .Textos {
    background-color: transparent;
    display: block;
    padding: 0;
    margin: 0;
  }
  .Pleca .Textos :global(span) {
    width: auto;
    display: block;
    margin-bottom: 0.5rem;
  }
  .Pleca .Textos :global(span:last-child) {
    margin-bottom: 0;
  }
  .Cabecera {
    position: relative;
    display: flex;
    flex-direction: column;
    position: relative;
    height: initial;
    width: 100%;
  }
  .cortina {
    background-color: rgba(0, 0, 0, 0.075);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  .noImagen {
    position: initial !important;
  }
  .etiquetas {
    display: flex;
    flex-wrap: wrap;
  }
  .etiquetas :global(.Etiqueta) {
    padding: 0.25rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .TarjetaImagen {
    height: 20rem;
  }
  .TarjetaImagen .Cabecera {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .TarjetaImagen .Contenidos {
    position: relative;
    height: 100%;
    z-index: 1;
  }
  .TarjetaImagen .Pleca {
    top: 1rem;
    left: 1rem;
    bottom: initial;
  }
  .TarjetaImagen .Textos,
  .TarjetaImagen .Textos a {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }
  .TarjetaImagen .Textos .etiquetas {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
  }
  .TarjetaImagen .Textos .etiquetas {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
  }
  .TarjetaImagen .Textos :global(span) {
    color: #fff;
  }
  .TarjetaImagen.Imagen {
    height: 100% !important;
    z-index: 0;
  }
</style>
