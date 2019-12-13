<script>
  export let buttonText;
  export let rounded;
</script>

<button style="border-radius:{rounded}px">{buttonText}</button>

<style>
    button {
        transition: 0.5s;
        background-color: darkorange;
        border: none;
        padding: 0.5rem 1.5rem;
        cursor: pointer;
        box-shadow: 0px rgba(0,0,0,0.1)
    }
    button:hover {
        /* background-color: firebrick; */
        /* color: whitesmoke; */
        box-shadow: 1px 1px 3px rgba(0,0,0,0.5)
    }
</style>
