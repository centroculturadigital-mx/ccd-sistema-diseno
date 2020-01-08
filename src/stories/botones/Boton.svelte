<script>
  export let texto;
  export let radius;
  export let color;
  export let colorBG;
  export let paddingX;
</script>

<button style="border-radius:{radius}px;background-color:{colorBG};color:{color};padding: 0.5rem {paddingX}rem;" on:click>{texto}</button>

<style>
    button {
        transition: 0.5s;
        background-color: black;
        color: #FFF;
        border: none;
        cursor: pointer;
        box-shadow: 0px rgba(0,0,0,0)
    }
    button:hover {
        box-shadow: 1px 1px 2px #477751;
    }
</style>
