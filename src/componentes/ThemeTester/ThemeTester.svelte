<script>

    import themesLibrary from "../../themes/themes"
    import { ThemeWrapper, ThemeToggle } from 'svelte-themer'

    $: themes = Object.values(themesLibrary)

    export let component = null
    export let data = {}
</script> 
 

<style>

    .ThemeTester {

        width: 100%;
        background-color: #f0f0f0;
        border-radius: .5rem;
        
    }

    header {
        border-bottom: 1px solid #666;
        position: relative;
        z-index: 1;
        box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
    }

    header nav ul {
        display: flex;
        justify-content: center;
        padding: 1rem;
    }
    header nav ul, li {
        margin: 0;
    }
    header nav li {
        list-style: none;
        padding: 1rem;
        outline: 1px solid #666;
        color: #666;
    }


    .container {

        width: 100%;
        min-height: 20rem;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #f0f0f0;
        border-radius: .5rem;
    }


</style>

<div class="ThemeTester">
    <ThemeWrapper themes={themes}>

        <header>

            <ThemeToggle/>

        </header>

        <div class="container">
            <svelte:component this={component} {...data}/>
        </div>

    </ThemeWrapper>


</div>