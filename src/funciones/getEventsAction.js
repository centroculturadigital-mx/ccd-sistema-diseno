import { bubble, listen, current_component } from "svelte/internal";

const getEventsAction = component => {
    return node => {
        const events = Object.keys(component.$$.callbacks);
        const listeners = [];
        events.forEach(event =>
            listeners.push(listen(node, event, e => bubble(component, e)))
        );
        return {
            destroy: () => {
                listeners.forEach(listener => listener());
            }
        };
    };
};

export default () => getEventsAction(current_component);