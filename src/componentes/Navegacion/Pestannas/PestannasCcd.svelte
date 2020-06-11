<script>
  import Pestannas from "./Pestannas.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let opciones = [];
  export let actual = 0;
  export let accion;
  export let textos = [
    "Fanny pack air plant succulents, pop-up pinterest ennui aute ad sartorial irure fixie. Cold-pressed shoreditch deserunt raw denim, street art offal listicle kitsch tumblr kinfolk cardigan messenger bag food truck esse. Taiyaki put a bird on it 8-bit shoreditch iceland bushwick banh mi tofu schlitz raclette +1 paleo officia aliquip slow-carb. Ullamco food truck unicorn cloud bread paleo chillwave taiyaki. Aute chicharrones hell of pop-up freegan tattooed. Tattooed actually ugh ut hashtag vexillologist ad four dollar toast dolore whatever sed meh banjo dolor.",
    "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.",
    "Mouse meow in empty rooms. Gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye cat is love, cat is life but wack the mini furry mouse but eat fish on floor but i like frogs and 0 gravity scratch the furniture. Cats are the world. I’m so hungry i’m so hungry but ew not for that why must they do that, yet check cat door for ambush 10 times before coming in so have my breakfast spaghetti yarn but annoy the old grumpy cat, start a fight and then retreat to wash when i lose claw your carpet in places everyone can see - why hide my amazing artistic clawing skills?"
  ];

  let texto = textos[actual];

  accion = tab => {
    texto = textos[tab];
    actual = tab;
  };

</script>

<style>
.PestannasCcd {
    background-color: var(--theme-colores-fondo);
    padding: 2rem;
    width: 100%;
    height: auto;
}
</style>

<section class="PestannasCcd">
  <div class="Pestannas">
    <Pestannas {opciones} {actual} {accion} />
  </div>
  <section class="contenedorTextos">

    <Parrafo {texto} />

  </section>
</section>
