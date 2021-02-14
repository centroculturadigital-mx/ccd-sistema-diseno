export function clickFueraDeArea(nodo) {

    const click = e => {
        if (nodo && !nodo.contains(e.target) && !e.defaultPrevented) {
            nodo.dispatchEvent(
                new CustomEvent('click_outside', nodo)
            )
        }
    }

    document.addEventListener('click', click, true);

    return {
        destroy() {
            document.removeEventListener('click', click, true);
        }
    }
}