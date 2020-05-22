(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global['ccd-sistema-disenio'] = {}));
}(this, (function (exports) { 'use strict';

    function noop() { }
    const identity = x => x;
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if (typeof $$scope.dirty === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function null_to_empty(value) {
        return value == null ? '' : value;
    }

    const is_client = typeof window !== 'undefined';
    let now = is_client
        ? () => window.performance.now()
        : () => Date.now();
    let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

    const tasks = new Set();
    function run_tasks(now) {
        tasks.forEach(task => {
            if (!task.c(now)) {
                tasks.delete(task);
                task.f();
            }
        });
        if (tasks.size !== 0)
            raf(run_tasks);
    }
    /**
     * Creates a new task that runs on each raf frame
     * until it returns a falsy value or is aborted
     */
    function loop(callback) {
        let task;
        if (tasks.size === 0)
            raf(run_tasks);
        return {
            promise: new Promise(fulfill => {
                tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
                tasks.delete(task);
            }
        };
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function prevent_default(fn) {
        return function (event) {
            event.preventDefault();
            // @ts-ignore
            return fn.call(this, event);
        };
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function set_attributes(node, attributes) {
        // @ts-ignore
        const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
        for (const key in attributes) {
            if (attributes[key] == null) {
                node.removeAttribute(key);
            }
            else if (key === 'style') {
                node.style.cssText = attributes[key];
            }
            else if (key === '__value' || descriptors[key] && descriptors[key].set) {
                node[key] = attributes[key];
            }
            else {
                attr(node, key, attributes[key]);
            }
        }
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_data(text, data) {
        data = '' + data;
        if (text.data !== data)
            text.data = data;
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }
    class HtmlTag {
        constructor(html, anchor = null) {
            this.e = element('div');
            this.a = anchor;
            this.u(html);
        }
        m(target, anchor = null) {
            for (let i = 0; i < this.n.length; i += 1) {
                insert(target, this.n[i], anchor);
            }
            this.t = target;
        }
        u(html) {
            this.e.innerHTML = html;
            this.n = Array.from(this.e.childNodes);
        }
        p(html) {
            this.d();
            this.u(html);
            this.m(this.t, this.a);
        }
        d() {
            this.n.forEach(detach);
        }
    }

    let stylesheet;
    let active = 0;
    let current_rules = {};
    // https://github.com/darkskyapp/string-hash/blob/master/index.js
    function hash(str) {
        let hash = 5381;
        let i = str.length;
        while (i--)
            hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
        return hash >>> 0;
    }
    function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
        const step = 16.666 / duration;
        let keyframes = '{\n';
        for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
        }
        const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
        const name = `__svelte_${hash(rule)}_${uid}`;
        if (!current_rules[name]) {
            if (!stylesheet) {
                const style = element('style');
                document.head.appendChild(style);
                stylesheet = style.sheet;
            }
            current_rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
        }
        const animation = node.style.animation || '';
        node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
        active += 1;
        return name;
    }
    function delete_rule(node, name) {
        node.style.animation = (node.style.animation || '')
            .split(', ')
            .filter(name
            ? anim => anim.indexOf(name) < 0 // remove specific animation
            : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
        )
            .join(', ');
        if (name && !--active)
            clear_rules();
    }
    function clear_rules() {
        raf(() => {
            if (active)
                return;
            let i = stylesheet.cssRules.length;
            while (i--)
                stylesheet.deleteRule(i);
            current_rules = {};
        });
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }
    // TODO figure out if we still want to support
    // shorthand events, or if we want to implement
    // a real bubbling mechanism
    function bubble(component, event) {
        const callbacks = component.$$.callbacks[event.type];
        if (callbacks) {
            callbacks.slice().forEach(fn => fn(event));
        }
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }

    let promise;
    function wait() {
        if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
                promise = null;
            });
        }
        return promise;
    }
    function dispatch(node, direction, kind) {
        node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    const null_transition = { duration: 0 };
    function create_bidirectional_transition(node, fn, params, intro) {
        let config = fn(node, params);
        let t = intro ? 0 : 1;
        let running_program = null;
        let pending_program = null;
        let animation_name = null;
        function clear_animation() {
            if (animation_name)
                delete_rule(node, animation_name);
        }
        function init(program, duration) {
            const d = program.b - t;
            duration *= Math.abs(d);
            return {
                a: t,
                b: program.b,
                d,
                duration,
                start: program.start,
                end: program.start + duration,
                group: program.group
            };
        }
        function go(b) {
            const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
            const program = {
                start: now() + delay,
                b
            };
            if (!b) {
                // @ts-ignore todo: improve typings
                program.group = outros;
                outros.r += 1;
            }
            if (running_program) {
                pending_program = program;
            }
            else {
                // if this is an intro, and there's a delay, we need to do
                // an initial tick and/or apply CSS animation immediately
                if (css) {
                    clear_animation();
                    animation_name = create_rule(node, t, b, duration, delay, easing, css);
                }
                if (b)
                    tick(0, 1);
                running_program = init(program, duration);
                add_render_callback(() => dispatch(node, b, 'start'));
                loop(now => {
                    if (pending_program && now > pending_program.start) {
                        running_program = init(pending_program, duration);
                        pending_program = null;
                        dispatch(node, running_program.b, 'start');
                        if (css) {
                            clear_animation();
                            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                        }
                    }
                    if (running_program) {
                        if (now >= running_program.end) {
                            tick(t = running_program.b, 1 - t);
                            dispatch(node, running_program.b, 'end');
                            if (!pending_program) {
                                // we're done
                                if (running_program.b) {
                                    // intro — we can tidy up immediately
                                    clear_animation();
                                }
                                else {
                                    // outro — needs to be coordinated
                                    if (!--running_program.group.r)
                                        run_all(running_program.group.c);
                                }
                            }
                            running_program = null;
                        }
                        else if (now >= running_program.start) {
                            const p = now - running_program.start;
                            t = running_program.a + running_program.d * easing(p / running_program.duration);
                            tick(t, 1 - t);
                        }
                    }
                    return !!(running_program || pending_program);
                });
            }
        }
        return {
            run(b) {
                if (is_function(config)) {
                    wait().then(() => {
                        // @ts-ignore
                        config = config();
                        go(b);
                    });
                }
                else {
                    go(b);
                }
            },
            end() {
                clear_animation();
                running_program = pending_program = null;
            }
        };
    }

    const globals = (typeof window !== 'undefined' ? window : global);
    function outro_and_destroy_block(block, lookup) {
        transition_out(block, 1, 1, () => {
            lookup.delete(block.key);
        });
    }
    function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
        let o = old_blocks.length;
        let n = list.length;
        let i = o;
        const old_indexes = {};
        while (i--)
            old_indexes[old_blocks[i].key] = i;
        const new_blocks = [];
        const new_lookup = new Map();
        const deltas = new Map();
        i = n;
        while (i--) {
            const child_ctx = get_context(ctx, list, i);
            const key = get_key(child_ctx);
            let block = lookup.get(key);
            if (!block) {
                block = create_each_block(key, child_ctx);
                block.c();
            }
            else if (dynamic) {
                block.p(child_ctx, dirty);
            }
            new_lookup.set(key, new_blocks[i] = block);
            if (key in old_indexes)
                deltas.set(key, Math.abs(i - old_indexes[key]));
        }
        const will_move = new Set();
        const did_move = new Set();
        function insert(block) {
            transition_in(block, 1);
            block.m(node, next);
            lookup.set(block.key, block);
            next = block.first;
            n--;
        }
        while (o && n) {
            const new_block = new_blocks[n - 1];
            const old_block = old_blocks[o - 1];
            const new_key = new_block.key;
            const old_key = old_block.key;
            if (new_block === old_block) {
                // do nothing
                next = new_block.first;
                o--;
                n--;
            }
            else if (!new_lookup.has(old_key)) {
                // remove old block
                destroy(old_block, lookup);
                o--;
            }
            else if (!lookup.has(new_key) || will_move.has(new_key)) {
                insert(new_block);
            }
            else if (did_move.has(old_key)) {
                o--;
            }
            else if (deltas.get(new_key) > deltas.get(old_key)) {
                did_move.add(new_key);
                insert(new_block);
            }
            else {
                will_move.add(old_key);
                o--;
            }
        }
        while (o--) {
            const old_block = old_blocks[o];
            if (!new_lookup.has(old_block.key))
                destroy(old_block, lookup);
        }
        while (n)
            insert(new_blocks[n - 1]);
        return new_blocks;
    }

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
    }
    function get_spread_object(spread_props) {
        return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(children(options.target));
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    /* src/elementos/botones/Boton/Boton.svelte generated by Svelte v3.19.1 */

    function add_css() {
    	var style = element("style");
    	style.id = "svelte-1lo96do-style";
    	style.textContent = "button.svelte-1lo96do{transition:0.5s;background-color:transparent;color:#fff;border:none;cursor:pointer;padding:0.5rem 1rem;margin:0}button.svelte-1lo96do:hover{box-shadow:1px 2px 2px #477751}";
    	append(document.head, style);
    }

    function create_fragment(ctx) {
    	let button;
    	let t_value = (!!/*texto*/ ctx[0] ? /*texto*/ ctx[0] : "") + "";
    	let t;
    	let dispose;

    	return {
    		c() {
    			button = element("button");
    			t = text(t_value);
    			set_style(button, "border-radius", /*radius*/ ctx[4]);
    			set_style(button, "background-color", /*colorBG*/ ctx[2]);
    			set_style(button, "color", /*color*/ ctx[1]);
    			set_style(button, "padding", "0.5rem " + /*paddingX*/ ctx[3]);
    			attr(button, "class", "svelte-1lo96do");
    		},
    		m(target, anchor) {
    			insert(target, button, anchor);
    			append(button, t);
    			dispose = listen(button, "click", /*click_handler*/ ctx[5]);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*texto*/ 1 && t_value !== (t_value = (!!/*texto*/ ctx[0] ? /*texto*/ ctx[0] : "") + "")) set_data(t, t_value);

    			if (dirty & /*radius*/ 16) {
    				set_style(button, "border-radius", /*radius*/ ctx[4]);
    			}

    			if (dirty & /*colorBG*/ 4) {
    				set_style(button, "background-color", /*colorBG*/ ctx[2]);
    			}

    			if (dirty & /*color*/ 2) {
    				set_style(button, "color", /*color*/ ctx[1]);
    			}

    			if (dirty & /*paddingX*/ 8) {
    				set_style(button, "padding", "0.5rem " + /*paddingX*/ ctx[3]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(button);
    			dispose();
    		}
    	};
    }

    function instance($$self, $$props, $$invalidate) {
    	let { texto } = $$props;
    	let { color } = $$props;
    	let { colorBG } = $$props;
    	let { paddingX } = $$props;
    	let { radius } = $$props;

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$set = $$props => {
    		if ("texto" in $$props) $$invalidate(0, texto = $$props.texto);
    		if ("color" in $$props) $$invalidate(1, color = $$props.color);
    		if ("colorBG" in $$props) $$invalidate(2, colorBG = $$props.colorBG);
    		if ("paddingX" in $$props) $$invalidate(3, paddingX = $$props.paddingX);
    		if ("radius" in $$props) $$invalidate(4, radius = $$props.radius);
    	};

    	return [texto, color, colorBG, paddingX, radius, click_handler];
    }

    class Boton extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1lo96do-style")) add_css();

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			texto: 0,
    			color: 1,
    			colorBG: 2,
    			paddingX: 3,
    			radius: 4
    		});
    	}
    }

    /* src/elementos/botones/BotonIcono/BotonIcono.svelte generated by Svelte v3.19.1 */

    function add_css$1() {
    	var style = element("style");
    	style.id = "svelte-1yttwv4-style";
    	style.textContent = "button.svelte-1yttwv4{transition:0.5s;background-color:transparent;color:#fff;border:none;cursor:pointer;padding:0.5rem 1rem;margin:0}img.svelte-1yttwv4{height:2rem;width:auto}";
    	append(document.head, style);
    }

    // (40:2) {:else}
    function create_else_block(ctx) {
    	let t_value = (!!/*texto*/ ctx[0] ? /*texto*/ ctx[0] : "") + "";
    	let t;

    	return {
    		c() {
    			t = text(t_value);
    		},
    		m(target, anchor) {
    			insert(target, t, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*texto*/ 1 && t_value !== (t_value = (!!/*texto*/ ctx[0] ? /*texto*/ ctx[0] : "") + "")) set_data(t, t_value);
    		},
    		d(detaching) {
    			if (detaching) detach(t);
    		}
    	};
    }

    // (34:2) {#if !!iconoBotonEstadoUnoUrl}
    function create_if_block(ctx) {
    	let img;
    	let img_src_value;
    	let img_alt_value;

    	return {
    		c() {
    			img = element("img");

    			if (img.src !== (img_src_value = !!/*estado*/ ctx[8]
    			? /*iconoBotonEstadoDosUrl*/ ctx[6]
    			: /*iconoBotonEstadoUnoUrl*/ ctx[5])) attr(img, "src", img_src_value);

    			attr(img, "alt", img_alt_value = !!/*texto*/ ctx[0] ? /*texto*/ ctx[0] : "");
    			set_style(img, "height", /*iconoAltura*/ ctx[7]);
    			attr(img, "class", "svelte-1yttwv4");
    		},
    		m(target, anchor) {
    			insert(target, img, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*estado, iconoBotonEstadoDosUrl, iconoBotonEstadoUnoUrl*/ 352 && img.src !== (img_src_value = !!/*estado*/ ctx[8]
    			? /*iconoBotonEstadoDosUrl*/ ctx[6]
    			: /*iconoBotonEstadoUnoUrl*/ ctx[5])) {
    				attr(img, "src", img_src_value);
    			}

    			if (dirty & /*texto*/ 1 && img_alt_value !== (img_alt_value = !!/*texto*/ ctx[0] ? /*texto*/ ctx[0] : "")) {
    				attr(img, "alt", img_alt_value);
    			}

    			if (dirty & /*iconoAltura*/ 128) {
    				set_style(img, "height", /*iconoAltura*/ ctx[7]);
    			}
    		},
    		d(detaching) {
    			if (detaching) detach(img);
    		}
    	};
    }

    function create_fragment$1(ctx) {
    	let button;
    	let dispose;

    	function select_block_type(ctx, dirty) {
    		if (!!/*iconoBotonEstadoUnoUrl*/ ctx[5]) return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	return {
    		c() {
    			button = element("button");
    			if_block.c();
    			set_style(button, "border-radius", /*radius*/ ctx[4]);
    			set_style(button, "background-color", /*colorBG*/ ctx[2]);
    			set_style(button, "color", /*color*/ ctx[1]);
    			set_style(button, "padding", "0.5rem " + /*paddingX*/ ctx[3]);
    			attr(button, "class", "svelte-1yttwv4");
    		},
    		m(target, anchor) {
    			insert(target, button, anchor);
    			if_block.m(button, null);
    			dispose = listen(button, "click", /*click_handler*/ ctx[9]);
    		},
    		p(ctx, [dirty]) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(button, null);
    				}
    			}

    			if (dirty & /*radius*/ 16) {
    				set_style(button, "border-radius", /*radius*/ ctx[4]);
    			}

    			if (dirty & /*colorBG*/ 4) {
    				set_style(button, "background-color", /*colorBG*/ ctx[2]);
    			}

    			if (dirty & /*color*/ 2) {
    				set_style(button, "color", /*color*/ ctx[1]);
    			}

    			if (dirty & /*paddingX*/ 8) {
    				set_style(button, "padding", "0.5rem " + /*paddingX*/ ctx[3]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(button);
    			if_block.d();
    			dispose();
    		}
    	};
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { texto = "Default" } = $$props;
    	let { color } = $$props;
    	let { colorBG } = $$props;
    	let { paddingX } = $$props;
    	let { radius } = $$props;
    	let { iconoBotonEstadoUnoUrl } = $$props;
    	let { iconoBotonEstadoDosUrl } = $$props;
    	let { iconoAltura } = $$props;
    	let { estado = false } = $$props;

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$set = $$props => {
    		if ("texto" in $$props) $$invalidate(0, texto = $$props.texto);
    		if ("color" in $$props) $$invalidate(1, color = $$props.color);
    		if ("colorBG" in $$props) $$invalidate(2, colorBG = $$props.colorBG);
    		if ("paddingX" in $$props) $$invalidate(3, paddingX = $$props.paddingX);
    		if ("radius" in $$props) $$invalidate(4, radius = $$props.radius);
    		if ("iconoBotonEstadoUnoUrl" in $$props) $$invalidate(5, iconoBotonEstadoUnoUrl = $$props.iconoBotonEstadoUnoUrl);
    		if ("iconoBotonEstadoDosUrl" in $$props) $$invalidate(6, iconoBotonEstadoDosUrl = $$props.iconoBotonEstadoDosUrl);
    		if ("iconoAltura" in $$props) $$invalidate(7, iconoAltura = $$props.iconoAltura);
    		if ("estado" in $$props) $$invalidate(8, estado = $$props.estado);
    	};

    	return [
    		texto,
    		color,
    		colorBG,
    		paddingX,
    		radius,
    		iconoBotonEstadoUnoUrl,
    		iconoBotonEstadoDosUrl,
    		iconoAltura,
    		estado,
    		click_handler
    	];
    }

    class BotonIcono extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1yttwv4-style")) add_css$1();

    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
    			texto: 0,
    			color: 1,
    			colorBG: 2,
    			paddingX: 3,
    			radius: 4,
    			iconoBotonEstadoUnoUrl: 5,
    			iconoBotonEstadoDosUrl: 6,
    			iconoAltura: 7,
    			estado: 8
    		});
    	}
    }

    /* src/elementos/media/Imagen/Imagen.svelte generated by Svelte v3.19.1 */

    function add_css$2() {
    	var style = element("style");
    	style.id = "svelte-v0qzx-style";
    	style.textContent = "img.svelte-v0qzx{object-fit:cover;object-position:center;height:100%;width:100%}";
    	append(document.head, style);
    }

    function create_fragment$2(ctx) {
    	let img;
    	let img_src_value;

    	return {
    		c() {
    			img = element("img");
    			if (img.src !== (img_src_value = /*imagenUrl*/ ctx[0])) attr(img, "src", img_src_value);
    			attr(img, "alt", /*altTexto*/ ctx[1]);
    			set_style(img, "object-fit", /*ajuste*/ ctx[2]);
    			set_style(img, "object-position", /*alineacion*/ ctx[3]);
    			set_style(img, "height", /*altura*/ ctx[4]);
    			attr(img, "class", "svelte-v0qzx");
    		},
    		m(target, anchor) {
    			insert(target, img, anchor);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*imagenUrl*/ 1 && img.src !== (img_src_value = /*imagenUrl*/ ctx[0])) {
    				attr(img, "src", img_src_value);
    			}

    			if (dirty & /*altTexto*/ 2) {
    				attr(img, "alt", /*altTexto*/ ctx[1]);
    			}

    			if (dirty & /*ajuste*/ 4) {
    				set_style(img, "object-fit", /*ajuste*/ ctx[2]);
    			}

    			if (dirty & /*alineacion*/ 8) {
    				set_style(img, "object-position", /*alineacion*/ ctx[3]);
    			}

    			if (dirty & /*altura*/ 16) {
    				set_style(img, "height", /*altura*/ ctx[4]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(img);
    		}
    	};
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { imagenUrl } = $$props;
    	let { altTexto } = $$props;
    	let { ajuste } = $$props;
    	let { alineacion } = $$props;
    	let { altura } = $$props;

    	$$self.$set = $$props => {
    		if ("imagenUrl" in $$props) $$invalidate(0, imagenUrl = $$props.imagenUrl);
    		if ("altTexto" in $$props) $$invalidate(1, altTexto = $$props.altTexto);
    		if ("ajuste" in $$props) $$invalidate(2, ajuste = $$props.ajuste);
    		if ("alineacion" in $$props) $$invalidate(3, alineacion = $$props.alineacion);
    		if ("altura" in $$props) $$invalidate(4, altura = $$props.altura);
    	};

    	return [imagenUrl, altTexto, ajuste, alineacion, altura];
    }

    class Imagen extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-v0qzx-style")) add_css$2();

    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
    			imagenUrl: 0,
    			altTexto: 1,
    			ajuste: 2,
    			alineacion: 3,
    			altura: 4
    		});
    	}
    }

    /* src/elementos/media/Video/Video.svelte generated by Svelte v3.19.1 */

    function add_css$3() {
    	var style = element("style");
    	style.id = "svelte-132gfyx-style";
    	style.textContent = "video.svelte-132gfyx{object-fit:cover;object-position:center;height:100%;width:100%}";
    	append(document.head, style);
    }

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[8] = list[i];
    	return child_ctx;
    }

    // (21:0) {#if !!videoUrls}
    function create_if_block$1(ctx) {
    	let video;
    	let t;
    	let each_value = /*videoUrls*/ ctx[0];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	return {
    		c() {
    			video = element("video");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t = text("\n    Tu navegador no soporta HTML5 video.");
    			video.autoplay = /*autoplay*/ ctx[1];
    			video.loop = /*loop*/ ctx[2];
    			video.muted = /*muted*/ ctx[3];
    			video.controls = /*controls*/ ctx[4];
    			set_style(video, "object-fit", /*ajuste*/ ctx[5]);
    			set_style(video, "object-position", /*alineacion*/ ctx[6]);
    			set_style(video, "height", /*altura*/ ctx[7]);
    			attr(video, "class", "svelte-132gfyx");
    		},
    		m(target, anchor) {
    			insert(target, video, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(video, null);
    			}

    			append(video, t);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*videoUrls*/ 1) {
    				each_value = /*videoUrls*/ ctx[0];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(video, t);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}

    			if (dirty & /*autoplay*/ 2) {
    				video.autoplay = /*autoplay*/ ctx[1];
    			}

    			if (dirty & /*loop*/ 4) {
    				video.loop = /*loop*/ ctx[2];
    			}

    			if (dirty & /*muted*/ 8) {
    				video.muted = /*muted*/ ctx[3];
    			}

    			if (dirty & /*controls*/ 16) {
    				video.controls = /*controls*/ ctx[4];
    			}

    			if (dirty & /*ajuste*/ 32) {
    				set_style(video, "object-fit", /*ajuste*/ ctx[5]);
    			}

    			if (dirty & /*alineacion*/ 64) {
    				set_style(video, "object-position", /*alineacion*/ ctx[6]);
    			}

    			if (dirty & /*altura*/ 128) {
    				set_style(video, "height", /*altura*/ ctx[7]);
    			}
    		},
    		d(detaching) {
    			if (detaching) detach(video);
    			destroy_each(each_blocks, detaching);
    		}
    	};
    }

    // (28:4) {#each videoUrls as videoUrl}
    function create_each_block(ctx) {
    	let source;
    	let source_src_value;

    	return {
    		c() {
    			source = element("source");
    			if (source.src !== (source_src_value = /*videoUrl*/ ctx[8])) attr(source, "src", source_src_value);
    		},
    		m(target, anchor) {
    			insert(target, source, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*videoUrls*/ 1 && source.src !== (source_src_value = /*videoUrl*/ ctx[8])) {
    				attr(source, "src", source_src_value);
    			}
    		},
    		d(detaching) {
    			if (detaching) detach(source);
    		}
    	};
    }

    function create_fragment$3(ctx) {
    	let if_block_anchor;
    	let if_block = !!/*videoUrls*/ ctx[0] && create_if_block$1(ctx);

    	return {
    		c() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert(target, if_block_anchor, anchor);
    		},
    		p(ctx, [dirty]) {
    			if (!!/*videoUrls*/ ctx[0]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$1(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach(if_block_anchor);
    		}
    	};
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { videoUrls } = $$props;
    	let { autoplay } = $$props;
    	let { loop } = $$props;
    	let { muted } = $$props;
    	let { controls } = $$props;
    	let { ajuste } = $$props;
    	let { alineacion } = $$props;
    	let { altura } = $$props;

    	$$self.$set = $$props => {
    		if ("videoUrls" in $$props) $$invalidate(0, videoUrls = $$props.videoUrls);
    		if ("autoplay" in $$props) $$invalidate(1, autoplay = $$props.autoplay);
    		if ("loop" in $$props) $$invalidate(2, loop = $$props.loop);
    		if ("muted" in $$props) $$invalidate(3, muted = $$props.muted);
    		if ("controls" in $$props) $$invalidate(4, controls = $$props.controls);
    		if ("ajuste" in $$props) $$invalidate(5, ajuste = $$props.ajuste);
    		if ("alineacion" in $$props) $$invalidate(6, alineacion = $$props.alineacion);
    		if ("altura" in $$props) $$invalidate(7, altura = $$props.altura);
    	};

    	return [videoUrls, autoplay, loop, muted, controls, ajuste, alineacion, altura];
    }

    class Video extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-132gfyx-style")) add_css$3();

    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
    			videoUrls: 0,
    			autoplay: 1,
    			loop: 2,
    			muted: 3,
    			controls: 4,
    			ajuste: 5,
    			alineacion: 6,
    			altura: 7
    		});
    	}
    }

    /* src/elementos/menu/MenuEscritorio/MenuEscritorio.svelte generated by Svelte v3.19.1 */

    function add_css$4() {
    	var style = element("style");
    	style.id = "svelte-1rqmsyi-style";
    	style.textContent = "ul.svelte-1rqmsyi{display:flex;justify-content:space-evenly;align-items:center;height:100%;margin:0;padding:0;list-style-type:none;width:auto}li.svelte-1rqmsyi{box-sizing:border-box;padding:0.5rem;display:flex;align-items:center;justify-content:center;height:100%;height:100%;width:auto}a.svelte-1rqmsyi{text-decoration:none}a.svelte-1rqmsyi:hover{opacity:0.75}";
    	append(document.head, style);
    }

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i];
    	return child_ctx;
    }

    // (38:2) {#each objetosMenu as objeto}
    function create_each_block$1(ctx) {
    	let li;
    	let a;
    	let t0_value = /*objeto*/ ctx[3].label + "";
    	let t0;
    	let a_href_value;
    	let t1;

    	return {
    		c() {
    			li = element("li");
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			attr(a, "href", a_href_value = /*objeto*/ ctx[3].ruta);
    			set_style(a, "color", /*color*/ ctx[2]);
    			attr(a, "class", "svelte-1rqmsyi");
    			toggle_class(a, "selected", /*segment*/ ctx[0] === /*objeto*/ ctx[3].ruta);
    			attr(li, "class", "svelte-1rqmsyi");
    		},
    		m(target, anchor) {
    			insert(target, li, anchor);
    			append(li, a);
    			append(a, t0);
    			append(li, t1);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*objetosMenu*/ 2 && t0_value !== (t0_value = /*objeto*/ ctx[3].label + "")) set_data(t0, t0_value);

    			if (dirty & /*objetosMenu*/ 2 && a_href_value !== (a_href_value = /*objeto*/ ctx[3].ruta)) {
    				attr(a, "href", a_href_value);
    			}

    			if (dirty & /*color*/ 4) {
    				set_style(a, "color", /*color*/ ctx[2]);
    			}

    			if (dirty & /*segment, objetosMenu*/ 3) {
    				toggle_class(a, "selected", /*segment*/ ctx[0] === /*objeto*/ ctx[3].ruta);
    			}
    		},
    		d(detaching) {
    			if (detaching) detach(li);
    		}
    	};
    }

    function create_fragment$4(ctx) {
    	let ul;
    	let each_value = /*objetosMenu*/ ctx[1];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	return {
    		c() {
    			ul = element("ul");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr(ul, "class", "svelte-1rqmsyi");
    		},
    		m(target, anchor) {
    			insert(target, ul, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ul, null);
    			}
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*objetosMenu, color, segment*/ 7) {
    				each_value = /*objetosMenu*/ ctx[1];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(ul, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(ul);
    			destroy_each(each_blocks, detaching);
    		}
    	};
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { segment } = $$props;
    	let { objetosMenu } = $$props;
    	let { color } = $$props;

    	$$self.$set = $$props => {
    		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    		if ("objetosMenu" in $$props) $$invalidate(1, objetosMenu = $$props.objetosMenu);
    		if ("color" in $$props) $$invalidate(2, color = $$props.color);
    	};

    	return [segment, objetosMenu, color];
    }

    class MenuEscritorio extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1rqmsyi-style")) add_css$4();
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { segment: 0, objetosMenu: 1, color: 2 });
    	}
    }

    function cubicOut(t) {
        const f = t - 1.0;
        return f * f * f + 1.0;
    }

    function slide(node, { delay = 0, duration = 400, easing = cubicOut }) {
        const style = getComputedStyle(node);
        const opacity = +style.opacity;
        const height = parseFloat(style.height);
        const padding_top = parseFloat(style.paddingTop);
        const padding_bottom = parseFloat(style.paddingBottom);
        const margin_top = parseFloat(style.marginTop);
        const margin_bottom = parseFloat(style.marginBottom);
        const border_top_width = parseFloat(style.borderTopWidth);
        const border_bottom_width = parseFloat(style.borderBottomWidth);
        return {
            delay,
            duration,
            easing,
            css: t => `overflow: hidden;` +
                `opacity: ${Math.min(t * 20, 1) * opacity};` +
                `height: ${t * height}px;` +
                `padding-top: ${t * padding_top}px;` +
                `padding-bottom: ${t * padding_bottom}px;` +
                `margin-top: ${t * margin_top}px;` +
                `margin-bottom: ${t * margin_bottom}px;` +
                `border-top-width: ${t * border_top_width}px;` +
                `border-bottom-width: ${t * border_bottom_width}px;`
        };
    }

    /* src/elementos/menu/MenuMovil/MenuMovil.svelte generated by Svelte v3.19.1 */

    function add_css$5() {
    	var style = element("style");
    	style.id = "svelte-13ekzhw-style";
    	style.textContent = "ul.svelte-13ekzhw{height:auto;margin:0;padding:1rem 4rem;list-style-type:none;width:100%;display:grid;position:absolute;z-index:1000;box-sizing:border-box}li.svelte-13ekzhw{padding:0.5rem;display:flex;align-items:center;justify-content:center}a.svelte-13ekzhw{text-decoration:none}a.svelte-13ekzhw:hover{opacity:0.75}hr.svelte-13ekzhw{width:100%}";
    	append(document.head, style);
    }

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[10] = list[i];
    	child_ctx[12] = i;
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[10] = list[i];
    	child_ctx[12] = i;
    	return child_ctx;
    }

    // (46:0) {#if estadoMenu === true}
    function create_if_block$2(ctx) {
    	let ul;
    	let t;
    	let ul_style_value;
    	let ul_transition;
    	let current;
    	let each_value_1 = /*objetosMenu*/ ctx[3];
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	let if_block = !!/*objetosMenuExtra*/ ctx[4] && create_if_block_1(ctx);

    	return {
    		c() {
    			ul = element("ul");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t = space();
    			if (if_block) if_block.c();

    			attr(ul, "style", ul_style_value = "background-color:" + /*colorFondo*/ ctx[6] + ";" + (!!/*sombra*/ ctx[9]
    			? "box-shadow: 0 1px 1px rgba(0,0,0,0.5)"
    			: "") + ";height:" + /*alturaMenuMovil*/ ctx[1]);

    			attr(ul, "class", "svelte-13ekzhw");
    		},
    		m(target, anchor) {
    			insert(target, ul, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ul, null);
    			}

    			append(ul, t);
    			if (if_block) if_block.m(ul, null);
    			current = true;
    		},
    		p(ctx, dirty) {
    			if (dirty & /*alturaObjetoMenu, color, objetosAlineacion, objetosMenu, segment*/ 425) {
    				each_value_1 = /*objetosMenu*/ ctx[3];
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(ul, t);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}

    			if (!!/*objetosMenuExtra*/ ctx[4]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_1(ctx);
    					if_block.c();
    					if_block.m(ul, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (!current || dirty & /*colorFondo, sombra, alturaMenuMovil*/ 578 && ul_style_value !== (ul_style_value = "background-color:" + /*colorFondo*/ ctx[6] + ";" + (!!/*sombra*/ ctx[9]
    			? "box-shadow: 0 1px 1px rgba(0,0,0,0.5)"
    			: "") + ";height:" + /*alturaMenuMovil*/ ctx[1])) {
    				attr(ul, "style", ul_style_value);
    			}
    		},
    		i(local) {
    			if (current) return;

    			add_render_callback(() => {
    				if (!ul_transition) ul_transition = create_bidirectional_transition(ul, slide, {}, true);
    				ul_transition.run(1);
    			});

    			current = true;
    		},
    		o(local) {
    			if (!ul_transition) ul_transition = create_bidirectional_transition(ul, slide, {}, false);
    			ul_transition.run(0);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(ul);
    			destroy_each(each_blocks, detaching);
    			if (if_block) if_block.d();
    			if (detaching && ul_transition) ul_transition.end();
    		}
    	};
    }

    // (51:4) {#each objetosMenu as objeto, i}
    function create_each_block_1(ctx) {
    	let li;
    	let a;
    	let t_value = /*objeto*/ ctx[10].label + "";
    	let t;
    	let a_href_value;
    	let li_style_value;

    	return {
    		c() {
    			li = element("li");
    			a = element("a");
    			t = text(t_value);
    			attr(a, "href", a_href_value = /*objeto*/ ctx[10].ruta);
    			set_style(a, "color", /*color*/ ctx[7]);
    			attr(a, "class", "svelte-13ekzhw");
    			toggle_class(a, "selected", /*segment*/ ctx[0] === /*objeto*/ ctx[10].ruta);
    			attr(li, "style", li_style_value = "height:" + /*alturaObjetoMenu*/ ctx[8] + ";color:" + /*color*/ ctx[7] + ";justify-content:" + /*objetosAlineacion*/ ctx[5] + ";}");
    			attr(li, "class", "svelte-13ekzhw");
    		},
    		m(target, anchor) {
    			insert(target, li, anchor);
    			append(li, a);
    			append(a, t);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*objetosMenu*/ 8 && t_value !== (t_value = /*objeto*/ ctx[10].label + "")) set_data(t, t_value);

    			if (dirty & /*objetosMenu*/ 8 && a_href_value !== (a_href_value = /*objeto*/ ctx[10].ruta)) {
    				attr(a, "href", a_href_value);
    			}

    			if (dirty & /*color*/ 128) {
    				set_style(a, "color", /*color*/ ctx[7]);
    			}

    			if (dirty & /*segment, objetosMenu*/ 9) {
    				toggle_class(a, "selected", /*segment*/ ctx[0] === /*objeto*/ ctx[10].ruta);
    			}

    			if (dirty & /*alturaObjetoMenu, color, objetosAlineacion*/ 416 && li_style_value !== (li_style_value = "height:" + /*alturaObjetoMenu*/ ctx[8] + ";color:" + /*color*/ ctx[7] + ";justify-content:" + /*objetosAlineacion*/ ctx[5] + ";}")) {
    				attr(li, "style", li_style_value);
    			}
    		},
    		d(detaching) {
    			if (detaching) detach(li);
    		}
    	};
    }

    // (61:4) {#if !!objetosMenuExtra}
    function create_if_block_1(ctx) {
    	let hr;
    	let t;
    	let each_1_anchor;
    	let each_value = /*objetosMenuExtra*/ ctx[4];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	return {
    		c() {
    			hr = element("hr");
    			t = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    			attr(hr, "class", "svelte-13ekzhw");
    		},
    		m(target, anchor) {
    			insert(target, hr, anchor);
    			insert(target, t, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert(target, each_1_anchor, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*alturaObjetoMenu, color, objetosMenuExtra, segment*/ 401) {
    				each_value = /*objetosMenuExtra*/ ctx[4];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		d(detaching) {
    			if (detaching) detach(hr);
    			if (detaching) detach(t);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach(each_1_anchor);
    		}
    	};
    }

    // (63:6) {#each objetosMenuExtra as objeto, i}
    function create_each_block$2(ctx) {
    	let li;
    	let a;
    	let t0_value = /*objeto*/ ctx[10].label + "";
    	let t0;
    	let a_href_value;
    	let t1;
    	let li_style_value;

    	return {
    		c() {
    			li = element("li");
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			attr(a, "href", a_href_value = /*objeto*/ ctx[10].ruta);
    			set_style(a, "color", /*color*/ ctx[7]);
    			attr(a, "class", "svelte-13ekzhw");
    			toggle_class(a, "selected", /*segment*/ ctx[0] === /*objeto*/ ctx[10].ruta);
    			attr(li, "style", li_style_value = "height:" + /*alturaObjetoMenu*/ ctx[8] + ";color=" + /*color*/ ctx[7]);
    			attr(li, "class", "svelte-13ekzhw");
    		},
    		m(target, anchor) {
    			insert(target, li, anchor);
    			append(li, a);
    			append(a, t0);
    			append(li, t1);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*objetosMenuExtra*/ 16 && t0_value !== (t0_value = /*objeto*/ ctx[10].label + "")) set_data(t0, t0_value);

    			if (dirty & /*objetosMenuExtra*/ 16 && a_href_value !== (a_href_value = /*objeto*/ ctx[10].ruta)) {
    				attr(a, "href", a_href_value);
    			}

    			if (dirty & /*color*/ 128) {
    				set_style(a, "color", /*color*/ ctx[7]);
    			}

    			if (dirty & /*segment, objetosMenuExtra*/ 17) {
    				toggle_class(a, "selected", /*segment*/ ctx[0] === /*objeto*/ ctx[10].ruta);
    			}

    			if (dirty & /*alturaObjetoMenu, color*/ 384 && li_style_value !== (li_style_value = "height:" + /*alturaObjetoMenu*/ ctx[8] + ";color=" + /*color*/ ctx[7])) {
    				attr(li, "style", li_style_value);
    			}
    		},
    		d(detaching) {
    			if (detaching) detach(li);
    		}
    	};
    }

    function create_fragment$5(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = /*estadoMenu*/ ctx[2] === true && create_if_block$2(ctx);

    	return {
    		c() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (/*estadoMenu*/ ctx[2] === true) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$2(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach(if_block_anchor);
    		}
    	};
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { segment } = $$props;
    	let { alturaMenuMovil } = $$props;
    	let { estadoMenu } = $$props;
    	let { objetosMenu } = $$props;
    	let { objetosMenuExtra } = $$props;
    	let { objetosAlineacion } = $$props;
    	let { colorFondo } = $$props;
    	let { color } = $$props;
    	let { alturaObjetoMenu } = $$props;
    	let { sombra } = $$props;

    	$$self.$set = $$props => {
    		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    		if ("alturaMenuMovil" in $$props) $$invalidate(1, alturaMenuMovil = $$props.alturaMenuMovil);
    		if ("estadoMenu" in $$props) $$invalidate(2, estadoMenu = $$props.estadoMenu);
    		if ("objetosMenu" in $$props) $$invalidate(3, objetosMenu = $$props.objetosMenu);
    		if ("objetosMenuExtra" in $$props) $$invalidate(4, objetosMenuExtra = $$props.objetosMenuExtra);
    		if ("objetosAlineacion" in $$props) $$invalidate(5, objetosAlineacion = $$props.objetosAlineacion);
    		if ("colorFondo" in $$props) $$invalidate(6, colorFondo = $$props.colorFondo);
    		if ("color" in $$props) $$invalidate(7, color = $$props.color);
    		if ("alturaObjetoMenu" in $$props) $$invalidate(8, alturaObjetoMenu = $$props.alturaObjetoMenu);
    		if ("sombra" in $$props) $$invalidate(9, sombra = $$props.sombra);
    	};

    	return [
    		segment,
    		alturaMenuMovil,
    		estadoMenu,
    		objetosMenu,
    		objetosMenuExtra,
    		objetosAlineacion,
    		colorFondo,
    		color,
    		alturaObjetoMenu,
    		sombra
    	];
    }

    class MenuMovil extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-13ekzhw-style")) add_css$5();

    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
    			segment: 0,
    			alturaMenuMovil: 1,
    			estadoMenu: 2,
    			objetosMenu: 3,
    			objetosMenuExtra: 4,
    			objetosAlineacion: 5,
    			colorFondo: 6,
    			color: 7,
    			alturaObjetoMenu: 8,
    			sombra: 9
    		});
    	}
    }

    /* src/componentes/Bloque/Bloque.svelte generated by Svelte v3.19.1 */

    function get_each_context$3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i];
    	child_ctx[5] = i;
    	return child_ctx;
    }

    // (36:2) {#if !! texto}
    function create_if_block_3(ctx) {
    	let span;
    	let t;
    	let span_style_value;

    	return {
    		c() {
    			span = element("span");
    			t = text(/*texto*/ ctx[2]);
    			attr(span, "style", span_style_value = `font-size: ${/*tamanno*/ ctx[1]}`);
    		},
    		m(target, anchor) {
    			insert(target, span, anchor);
    			append(span, t);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*texto*/ 4) set_data(t, /*texto*/ ctx[2]);

    			if (dirty & /*tamanno*/ 2 && span_style_value !== (span_style_value = `font-size: ${/*tamanno*/ ctx[1]}`)) {
    				attr(span, "style", span_style_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(span);
    		}
    	};
    }

    // (9:0) {#if !! contenido }
    function create_if_block$3(ctx) {
    	let show_if;
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block_1$1, create_if_block_2, create_else_block$1];
    	const if_blocks = [];

    	function select_block_type_1(ctx, dirty) {
    		if (dirty & /*contenido*/ 1) show_if = !!Array.isArray(/*contenido*/ ctx[0]);
    		if (show_if) return 0;
    		if (typeof /*contenido*/ ctx[0] == "object" && !!/*contenido*/ ctx[0].componente) return 1;
    		return 2;
    	}

    	current_block_type_index = select_block_type_1(ctx, -1);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	return {
    		c() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_1(ctx, dirty);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d(detaching) {
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach(if_block_anchor);
    		}
    	};
    }

    // (25:4) {:else}
    function create_else_block$1(ctx) {
    	let span;
    	let span_style_value;

    	return {
    		c() {
    			span = element("span");
    			attr(span, "style", span_style_value = `font-size: ${/*tamanno*/ ctx[1]}`);
    		},
    		m(target, anchor) {
    			insert(target, span, anchor);
    			span.innerHTML = /*contenido*/ ctx[0];
    		},
    		p(ctx, dirty) {
    			if (dirty & /*contenido*/ 1) span.innerHTML = /*contenido*/ ctx[0];
    			if (dirty & /*tamanno*/ 2 && span_style_value !== (span_style_value = `font-size: ${/*tamanno*/ ctx[1]}`)) {
    				attr(span, "style", span_style_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(span);
    		}
    	};
    }

    // (21:4) {#if typeof contenido == 'object' && !! contenido.componente }
    function create_if_block_2(ctx) {
    	let switch_instance_anchor;
    	let current;
    	const switch_instance_spread_levels = [/*contenido*/ ctx[0].data, { tamanno: /*tamanno*/ ctx[1] }];
    	var switch_value = /*contenido*/ ctx[0].componente;

    	function switch_props(ctx) {
    		let switch_instance_props = {};

    		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
    			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    		}

    		return { props: switch_instance_props };
    	}

    	if (switch_value) {
    		var switch_instance = new switch_value(switch_props());
    	}

    	return {
    		c() {
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			switch_instance_anchor = empty();
    		},
    		m(target, anchor) {
    			if (switch_instance) {
    				mount_component(switch_instance, target, anchor);
    			}

    			insert(target, switch_instance_anchor, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const switch_instance_changes = (dirty & /*contenido, tamanno*/ 3)
    			? get_spread_update(switch_instance_spread_levels, [
    					dirty & /*contenido*/ 1 && get_spread_object(/*contenido*/ ctx[0].data),
    					dirty & /*tamanno*/ 2 && { tamanno: /*tamanno*/ ctx[1] }
    				])
    			: {};

    			if (switch_value !== (switch_value = /*contenido*/ ctx[0].componente)) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props());
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
    				} else {
    					switch_instance = null;
    				}
    			} else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}
    		},
    		i(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};
    }

    // (11:2) {#if Array.isArray(contenido) }
    function create_if_block_1$1(ctx) {
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let each_1_anchor;
    	let current;
    	let each_value = /*contenido*/ ctx[0];
    	const get_key = ctx => "componente_" + /*j*/ ctx[5];

    	for (let i = 0; i < each_value.length; i += 1) {
    		let child_ctx = get_each_context$3(ctx, each_value, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block$3(key, child_ctx));
    	}

    	return {
    		c() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			if (dirty & /*contenido, tamanno*/ 3) {
    				const each_value = /*contenido*/ ctx[0];
    				group_outros();
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block$3, each_1_anchor, get_each_context$3);
    				check_outros();
    			}
    		},
    		i(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o(local) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d(detaching) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d(detaching);
    			}

    			if (detaching) detach(each_1_anchor);
    		}
    	};
    }

    // (13:4) {#each contenido as componente,j ("componente_"+j) }
    function create_each_block$3(key_1, ctx) {
    	let first;
    	let switch_instance_anchor;
    	let current;
    	const switch_instance_spread_levels = [/*componente*/ ctx[3].data, { tamanno: /*tamanno*/ ctx[1] }];
    	var switch_value = /*componente*/ ctx[3].componente;

    	function switch_props(ctx) {
    		let switch_instance_props = {};

    		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
    			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    		}

    		return { props: switch_instance_props };
    	}

    	if (switch_value) {
    		var switch_instance = new switch_value(switch_props());
    	}

    	return {
    		key: key_1,
    		first: null,
    		c() {
    			first = empty();
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			switch_instance_anchor = empty();
    			this.first = first;
    		},
    		m(target, anchor) {
    			insert(target, first, anchor);

    			if (switch_instance) {
    				mount_component(switch_instance, target, anchor);
    			}

    			insert(target, switch_instance_anchor, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const switch_instance_changes = (dirty & /*contenido, tamanno*/ 3)
    			? get_spread_update(switch_instance_spread_levels, [
    					dirty & /*contenido*/ 1 && get_spread_object(/*componente*/ ctx[3].data),
    					dirty & /*tamanno*/ 2 && { tamanno: /*tamanno*/ ctx[1] }
    				])
    			: {};

    			if (switch_value !== (switch_value = /*componente*/ ctx[3].componente)) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props());
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
    				} else {
    					switch_instance = null;
    				}
    			} else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}
    		},
    		i(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(first);
    			if (detaching) detach(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};
    }

    function create_fragment$6(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$3, create_if_block_3];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (!!/*contenido*/ ctx[0]) return 0;
    		if (!!/*texto*/ ctx[2]) return 1;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	return {
    		c() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m(target, anchor) {
    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(target, anchor);
    			}

    			insert(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) {
    					if_blocks[current_block_type_index].p(ctx, dirty);
    				}
    			} else {
    				if (if_block) {
    					group_outros();

    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block = if_blocks[current_block_type_index];

    					if (!if_block) {
    						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block.c();
    					}

    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				} else {
    					if_block = null;
    				}
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d(detaching) {
    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d(detaching);
    			}

    			if (detaching) detach(if_block_anchor);
    		}
    	};
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { contenido } = $$props;
    	let { tamanno } = $$props;
    	let { texto } = $$props;

    	$$self.$set = $$props => {
    		if ("contenido" in $$props) $$invalidate(0, contenido = $$props.contenido);
    		if ("tamanno" in $$props) $$invalidate(1, tamanno = $$props.tamanno);
    		if ("texto" in $$props) $$invalidate(2, texto = $$props.texto);
    	};

    	return [contenido, tamanno, texto];
    }

    class Bloque extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, { contenido: 0, tamanno: 1, texto: 2 });
    	}
    }

    /* src/elementos/texto/Titulo/Titulo1.svelte generated by Svelte v3.19.1 */

    function create_fragment$7(ctx) {
    	let h1;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);
    	let h1_levels = [/*data*/ ctx[0]];
    	let h1_data = {};

    	for (let i = 0; i < h1_levels.length; i += 1) {
    		h1_data = assign(h1_data, h1_levels[i]);
    	}

    	return {
    		c() {
    			h1 = element("h1");
    			if (default_slot) default_slot.c();
    			set_attributes(h1, h1_data);
    		},
    		m(target, anchor) {
    			insert(target, h1, anchor);

    			if (default_slot) {
    				default_slot.m(h1, null);
    			}

    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (default_slot && default_slot.p && dirty & /*$$scope*/ 2) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[1], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null));
    			}

    			set_attributes(h1, get_spread_update(h1_levels, [dirty & /*data*/ 1 && /*data*/ ctx[0]]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(h1);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { data } = $$props;
    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$props => {
    		if ("data" in $$props) $$invalidate(0, data = $$props.data);
    		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	return [data, $$scope, $$slots];
    }

    class Titulo1 extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, { data: 0 });
    	}
    }

    /* src/elementos/texto/Titulo/Titulo2.svelte generated by Svelte v3.19.1 */

    function create_fragment$8(ctx) {
    	let h2;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);
    	let h2_levels = [/*data*/ ctx[0]];
    	let h2_data = {};

    	for (let i = 0; i < h2_levels.length; i += 1) {
    		h2_data = assign(h2_data, h2_levels[i]);
    	}

    	return {
    		c() {
    			h2 = element("h2");
    			if (default_slot) default_slot.c();
    			set_attributes(h2, h2_data);
    		},
    		m(target, anchor) {
    			insert(target, h2, anchor);

    			if (default_slot) {
    				default_slot.m(h2, null);
    			}

    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (default_slot && default_slot.p && dirty & /*$$scope*/ 2) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[1], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null));
    			}

    			set_attributes(h2, get_spread_update(h2_levels, [dirty & /*data*/ 1 && /*data*/ ctx[0]]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(h2);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { data } = $$props;
    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$props => {
    		if ("data" in $$props) $$invalidate(0, data = $$props.data);
    		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	return [data, $$scope, $$slots];
    }

    class Titulo2 extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, { data: 0 });
    	}
    }

    /* src/elementos/texto/Titulo/Titulo3.svelte generated by Svelte v3.19.1 */

    function create_fragment$9(ctx) {
    	let h3;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);
    	let h3_levels = [/*data*/ ctx[0]];
    	let h3_data = {};

    	for (let i = 0; i < h3_levels.length; i += 1) {
    		h3_data = assign(h3_data, h3_levels[i]);
    	}

    	return {
    		c() {
    			h3 = element("h3");
    			if (default_slot) default_slot.c();
    			set_attributes(h3, h3_data);
    		},
    		m(target, anchor) {
    			insert(target, h3, anchor);

    			if (default_slot) {
    				default_slot.m(h3, null);
    			}

    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (default_slot && default_slot.p && dirty & /*$$scope*/ 2) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[1], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null));
    			}

    			set_attributes(h3, get_spread_update(h3_levels, [dirty & /*data*/ 1 && /*data*/ ctx[0]]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(h3);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    function instance$9($$self, $$props, $$invalidate) {
    	let { data } = $$props;
    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$props => {
    		if ("data" in $$props) $$invalidate(0, data = $$props.data);
    		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*data*/ 1) {
    			 console.log(data);
    		}
    	};

    	return [data, $$scope, $$slots];
    }

    class Titulo3 extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, { data: 0 });
    	}
    }

    /* src/elementos/texto/Titulo/Titulo4.svelte generated by Svelte v3.19.1 */

    function create_fragment$a(ctx) {
    	let h4;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);
    	let h4_levels = [/*data*/ ctx[0]];
    	let h4_data = {};

    	for (let i = 0; i < h4_levels.length; i += 1) {
    		h4_data = assign(h4_data, h4_levels[i]);
    	}

    	return {
    		c() {
    			h4 = element("h4");
    			if (default_slot) default_slot.c();
    			set_attributes(h4, h4_data);
    		},
    		m(target, anchor) {
    			insert(target, h4, anchor);

    			if (default_slot) {
    				default_slot.m(h4, null);
    			}

    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (default_slot && default_slot.p && dirty & /*$$scope*/ 2) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[1], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null));
    			}

    			set_attributes(h4, get_spread_update(h4_levels, [dirty & /*data*/ 1 && /*data*/ ctx[0]]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(h4);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    function instance$a($$self, $$props, $$invalidate) {
    	let { data } = $$props;
    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$props => {
    		if ("data" in $$props) $$invalidate(0, data = $$props.data);
    		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*data*/ 1) {
    			 console.log(data);
    		}
    	};

    	return [data, $$scope, $$slots];
    }

    class Titulo4 extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, { data: 0 });
    	}
    }

    /* src/elementos/texto/Titulo/Titulo5.svelte generated by Svelte v3.19.1 */

    function create_fragment$b(ctx) {
    	let h5;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);
    	let h5_levels = [/*data*/ ctx[0]];
    	let h5_data = {};

    	for (let i = 0; i < h5_levels.length; i += 1) {
    		h5_data = assign(h5_data, h5_levels[i]);
    	}

    	return {
    		c() {
    			h5 = element("h5");
    			if (default_slot) default_slot.c();
    			set_attributes(h5, h5_data);
    		},
    		m(target, anchor) {
    			insert(target, h5, anchor);

    			if (default_slot) {
    				default_slot.m(h5, null);
    			}

    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (default_slot && default_slot.p && dirty & /*$$scope*/ 2) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[1], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null));
    			}

    			set_attributes(h5, get_spread_update(h5_levels, [dirty & /*data*/ 1 && /*data*/ ctx[0]]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(h5);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    function instance$b($$self, $$props, $$invalidate) {
    	let { data } = $$props;
    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$props => {
    		if ("data" in $$props) $$invalidate(0, data = $$props.data);
    		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	return [data, $$scope, $$slots];
    }

    class Titulo5 extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$b, create_fragment$b, safe_not_equal, { data: 0 });
    	}
    }

    /* src/elementos/texto/Titulo/Titulo6.svelte generated by Svelte v3.19.1 */

    function create_fragment$c(ctx) {
    	let h6;
    	let current;
    	const default_slot_template = /*$$slots*/ ctx[2].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);
    	let h6_levels = [/*data*/ ctx[0]];
    	let h6_data = {};

    	for (let i = 0; i < h6_levels.length; i += 1) {
    		h6_data = assign(h6_data, h6_levels[i]);
    	}

    	return {
    		c() {
    			h6 = element("h6");
    			if (default_slot) default_slot.c();
    			set_attributes(h6, h6_data);
    		},
    		m(target, anchor) {
    			insert(target, h6, anchor);

    			if (default_slot) {
    				default_slot.m(h6, null);
    			}

    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (default_slot && default_slot.p && dirty & /*$$scope*/ 2) {
    				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[1], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null));
    			}

    			set_attributes(h6, get_spread_update(h6_levels, [dirty & /*data*/ 1 && /*data*/ ctx[0]]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(h6);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    function instance$c($$self, $$props, $$invalidate) {
    	let { data } = $$props;
    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$props => {
    		if ("data" in $$props) $$invalidate(0, data = $$props.data);
    		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    	};

    	return [data, $$scope, $$slots];
    }

    class Titulo6 extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$c, create_fragment$c, safe_not_equal, { data: 0 });
    	}
    }

    /* src/elementos/texto/Titulo/Titulo.svelte generated by Svelte v3.19.1 */

    function create_default_slot(ctx) {
    	let current;

    	const bloque = new Bloque({
    			props: {
    				contenido: /*contenido*/ ctx[1],
    				texto: /*texto*/ ctx[0]
    			}
    		});

    	return {
    		c() {
    			create_component(bloque.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(bloque, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const bloque_changes = {};
    			if (dirty & /*contenido*/ 2) bloque_changes.contenido = /*contenido*/ ctx[1];
    			if (dirty & /*texto*/ 1) bloque_changes.texto = /*texto*/ ctx[0];
    			bloque.$set(bloque_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(bloque.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(bloque.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(bloque, detaching);
    		}
    	};
    }

    function create_fragment$d(ctx) {
    	let switch_instance_anchor;
    	let current;
    	var switch_value = /*elemento*/ ctx[3];

    	function switch_props(ctx) {
    		return {
    			props: {
    				data: /*atributos*/ ctx[2],
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			}
    		};
    	}

    	if (switch_value) {
    		var switch_instance = new switch_value(switch_props(ctx));
    	}

    	return {
    		c() {
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			switch_instance_anchor = empty();
    		},
    		m(target, anchor) {
    			if (switch_instance) {
    				mount_component(switch_instance, target, anchor);
    			}

    			insert(target, switch_instance_anchor, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const switch_instance_changes = {};
    			if (dirty & /*atributos*/ 4) switch_instance_changes.data = /*atributos*/ ctx[2];

    			if (dirty & /*$$scope, contenido, texto*/ 515) {
    				switch_instance_changes.$$scope = { dirty, ctx };
    			}

    			if (switch_value !== (switch_value = /*elemento*/ ctx[3])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props(ctx));
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
    				} else {
    					switch_instance = null;
    				}
    			} else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}
    		},
    		i(local) {
    			if (current) return;
    			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(switch_instance_anchor);
    			if (switch_instance) destroy_component(switch_instance, detaching);
    		}
    	};
    }

    function instance$d($$self, $$props, $$invalidate) {
    	let { nivel } = $$props;
    	let { color = "#000" } = $$props;
    	let { texto } = $$props;
    	let { contenido } = $$props;
    	let { data } = $$props;

    	const atributosGenerar = (data, color) => {
    		const nuevosAtributos = typeof data == "object" ? { ...data } : {};

    		if (!!color) {
    			nuevosAtributos["style"] = `color: ${color}`;
    		}

    		return nuevosAtributos;
    	};

    	const titulares = [Titulo1, Titulo2, Titulo3, Titulo4, Titulo5, Titulo6];

    	$$self.$set = $$props => {
    		if ("nivel" in $$props) $$invalidate(4, nivel = $$props.nivel);
    		if ("color" in $$props) $$invalidate(5, color = $$props.color);
    		if ("texto" in $$props) $$invalidate(0, texto = $$props.texto);
    		if ("contenido" in $$props) $$invalidate(1, contenido = $$props.contenido);
    		if ("data" in $$props) $$invalidate(6, data = $$props.data);
    	};

    	let atributos;
    	let elemento;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*data, color*/ 96) {
    			 $$invalidate(2, atributos = atributosGenerar(data, color));
    		}

    		if ($$self.$$.dirty & /*nivel*/ 16) {
    			 $$invalidate(3, elemento = parseInt(nivel) >= 1 && parseInt(nivel) < 6
    			? titulares[nivel - 1]
    			: Titulo3);
    		}
    	};

    	return [texto, contenido, atributos, elemento, nivel, color, data];
    }

    class Titulo extends SvelteComponent {
    	constructor(options) {
    		super();

    		init(this, options, instance$d, create_fragment$d, safe_not_equal, {
    			nivel: 4,
    			color: 5,
    			texto: 0,
    			contenido: 1,
    			data: 6
    		});
    	}
    }

    /* src/elementos/texto/Parrafo/Parrafo.svelte generated by Svelte v3.19.1 */

    function add_css$6() {
    	var style = element("style");
    	style.id = "svelte-147ss74-style";
    	style.textContent = "p.svelte-147ss74{font-size:1rem}";
    	append(document.head, style);
    }

    function create_fragment$e(ctx) {
    	let p;
    	let current;

    	const bloque = new Bloque({
    			props: {
    				contenido: /*contenido*/ ctx[1],
    				texto: /*texto*/ ctx[0],
    				tamanno: /*tamanno*/ ctx[2],
    				color: /*color*/ ctx[3]
    			}
    		});

    	let p_levels = [/*atributos*/ ctx[4]];
    	let p_data = {};

    	for (let i = 0; i < p_levels.length; i += 1) {
    		p_data = assign(p_data, p_levels[i]);
    	}

    	return {
    		c() {
    			p = element("p");
    			create_component(bloque.$$.fragment);
    			set_attributes(p, p_data);
    			toggle_class(p, "svelte-147ss74", true);
    		},
    		m(target, anchor) {
    			insert(target, p, anchor);
    			mount_component(bloque, p, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const bloque_changes = {};
    			if (dirty & /*contenido*/ 2) bloque_changes.contenido = /*contenido*/ ctx[1];
    			if (dirty & /*texto*/ 1) bloque_changes.texto = /*texto*/ ctx[0];
    			if (dirty & /*tamanno*/ 4) bloque_changes.tamanno = /*tamanno*/ ctx[2];
    			if (dirty & /*color*/ 8) bloque_changes.color = /*color*/ ctx[3];
    			bloque.$set(bloque_changes);
    			set_attributes(p, get_spread_update(p_levels, [dirty & /*atributos*/ 16 && /*atributos*/ ctx[4]]));
    			toggle_class(p, "svelte-147ss74", true);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(bloque.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(bloque.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(p);
    			destroy_component(bloque);
    		}
    	};
    }

    function instance$e($$self, $$props, $$invalidate) {
    	let { texto } = $$props;
    	let { contenido } = $$props;
    	let { data } = $$props;
    	let { tamanno } = $$props;
    	let { color } = $$props;

    	$$self.$set = $$props => {
    		if ("texto" in $$props) $$invalidate(0, texto = $$props.texto);
    		if ("contenido" in $$props) $$invalidate(1, contenido = $$props.contenido);
    		if ("data" in $$props) $$invalidate(5, data = $$props.data);
    		if ("tamanno" in $$props) $$invalidate(2, tamanno = $$props.tamanno);
    		if ("color" in $$props) $$invalidate(3, color = $$props.color);
    	};

    	let atributos;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*data*/ 32) {
    			 $$invalidate(4, atributos = typeof data == "object" ? data : {}); // style: `font-size: ${tamanno}`
    		}
    	};

    	return [texto, contenido, tamanno, color, atributos, data];
    }

    class Parrafo extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-147ss74-style")) add_css$6();

    		init(this, options, instance$e, create_fragment$e, safe_not_equal, {
    			texto: 0,
    			contenido: 1,
    			data: 5,
    			tamanno: 2,
    			color: 3
    		});
    	}
    }

    /* src/elementos/inputs/Entrada/Entrada.svelte generated by Svelte v3.19.1 */

    function add_css$7() {
    	var style = element("style");
    	style.id = "svelte-15qgr3j-style";
    	style.textContent = "input.svelte-15qgr3j{border:1px solid gray;border-radius:0.25rem;padding:0.5rem;margin-bottom:0.5rem;min-height:2rem}.error.svelte-15qgr3j{border:1px solid red;color:red}.ok.svelte-15qgr3j{border:1px solid green;color:green}#mensaje.svelte-15qgr3j{border:none}p.svelte-15qgr3j{font-size:0.75rem}";
    	append(document.head, style);
    }

    // (86:2) {#if valor === true}
    function create_if_block$4(ctx) {
    	let p;

    	return {
    		c() {
    			p = element("p");
    			p.textContent = "No acepta caracteres especiales.";
    			attr(p, "class", "svelte-15qgr3j");
    		},
    		m(target, anchor) {
    			insert(target, p, anchor);
    		},
    		d(detaching) {
    			if (detaching) detach(p);
    		}
    	};
    }

    function create_fragment$f(ctx) {
    	let input;
    	let input_class_value;
    	let t;
    	let div;
    	let div_class_value;
    	let dispose;
    	let if_block = /*valor*/ ctx[2] === true && create_if_block$4();

    	return {
    		c() {
    			input = element("input");
    			t = space();
    			div = element("div");
    			if (if_block) if_block.c();
    			attr(input, "id", "text");
    			attr(input, "class", input_class_value = "" + (null_to_empty(/*color*/ ctx[3]) + " svelte-15qgr3j"));
    			attr(input, "type", /*inputType*/ ctx[1]);
    			attr(input, "name", /*inputName*/ ctx[4]);
    			attr(input, "placeholder", /*placeholder*/ ctx[0]);
    			attr(div, "id", "mensaje");
    			attr(div, "class", div_class_value = "" + (null_to_empty(/*color*/ ctx[3]) + " svelte-15qgr3j"));
    		},
    		m(target, anchor) {
    			insert(target, input, anchor);
    			insert(target, t, anchor);
    			insert(target, div, anchor);
    			if (if_block) if_block.m(div, null);
    			dispose = listen(input, "keyup", /*validaEntrada*/ ctx[5]);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*color*/ 8 && input_class_value !== (input_class_value = "" + (null_to_empty(/*color*/ ctx[3]) + " svelte-15qgr3j"))) {
    				attr(input, "class", input_class_value);
    			}

    			if (dirty & /*inputType*/ 2) {
    				attr(input, "type", /*inputType*/ ctx[1]);
    			}

    			if (dirty & /*inputName*/ 16) {
    				attr(input, "name", /*inputName*/ ctx[4]);
    			}

    			if (dirty & /*placeholder*/ 1) {
    				attr(input, "placeholder", /*placeholder*/ ctx[0]);
    			}

    			if (/*valor*/ ctx[2] === true) {
    				if (!if_block) {
    					if_block = create_if_block$4();
    					if_block.c();
    					if_block.m(div, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*color*/ 8 && div_class_value !== (div_class_value = "" + (null_to_empty(/*color*/ ctx[3]) + " svelte-15qgr3j"))) {
    				attr(div, "class", div_class_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(input);
    			if (detaching) detach(t);
    			if (detaching) detach(div);
    			if (if_block) if_block.d();
    			dispose();
    		}
    	};
    }

    function instance$f($$self, $$props, $$invalidate) {
    	let { placeholder } = $$props;
    	let { type = "text" } = $$props;
    	let name = type;
    	let inputType = type;
    	let valor;
    	let color;
    	let { tipo } = $$props;
    	let { nombre } = $$props;

    	const seleccionarTipo = tipo => {
    		switch (tipo) {
    			case "texto":
    				$$invalidate(1, inputType = "text");
    				break;
    			case "numero":
    				$$invalidate(1, inputType = "number");
    				break;
    			case "contrasenna":
    				$$invalidate(1, inputType = "password");
    				break;
    			case "email":
    				$$invalidate(1, inputType = "email");
    				break;
    		}
    	};

    	const validaEntrada = e => {
    		let caracteresEspeciales = new RegExp("[!@#$%^&*()+={};':|,.<>/?]"); //solo acepta guion medio y bajo
    		let evento = e.target.value;
    		let validado = caracteresEspeciales.test(evento);

    		if (validado != true) {
    			$$invalidate(2, valor = false);
    			$$invalidate(3, color = "ok");
    		} else {
    			$$invalidate(2, valor = true);
    			$$invalidate(3, color = "error");
    		}

    		if (evento == "") {
    			$$invalidate(2, valor = false);
    			$$invalidate(3, color = "");
    		}
    	};

    	$$self.$set = $$props => {
    		if ("placeholder" in $$props) $$invalidate(0, placeholder = $$props.placeholder);
    		if ("type" in $$props) $$invalidate(6, type = $$props.type);
    		if ("tipo" in $$props) $$invalidate(7, tipo = $$props.tipo);
    		if ("nombre" in $$props) $$invalidate(8, nombre = $$props.nombre);
    	};

    	let inputName;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*nombre, tipo*/ 384) {
    			 $$invalidate(4, inputName = !!nombre ? nombre : !!tipo ? tipo : name);
    		}

    		if ($$self.$$.dirty & /*tipo*/ 128) {
    			 seleccionarTipo(tipo);
    		}
    	};

    	return [
    		placeholder,
    		inputType,
    		valor,
    		color,
    		inputName,
    		validaEntrada,
    		type,
    		tipo,
    		nombre
    	];
    }

    class Entrada extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-15qgr3j-style")) add_css$7();

    		init(this, options, instance$f, create_fragment$f, safe_not_equal, {
    			placeholder: 0,
    			type: 6,
    			tipo: 7,
    			nombre: 8
    		});
    	}
    }

    /* src/elementos/inputs/EntradaEmail/EntradaEmail.svelte generated by Svelte v3.19.1 */

    function add_css$8() {
    	var style = element("style");
    	style.id = "svelte-1ou00e0-style";
    	style.textContent = "input.svelte-1ou00e0{border:1px solid gray;border-radius:0.25rem;padding:0.5rem;margin-bottom:0.5rem}.error.svelte-1ou00e0{border:1px solid red;color:red}.ok.svelte-1ou00e0{border:1px solid green;color:green}#mensaje.svelte-1ou00e0{border:none}p.svelte-1ou00e0{font-size:0.75rem}";
    	append(document.head, style);
    }

    // (35:2) {#if valor === false}
    function create_if_block$5(ctx) {
    	let p;

    	return {
    		c() {
    			p = element("p");
    			p.textContent = "Solo Correos eletrónicos.";
    			attr(p, "class", "svelte-1ou00e0");
    		},
    		m(target, anchor) {
    			insert(target, p, anchor);
    		},
    		d(detaching) {
    			if (detaching) detach(p);
    		}
    	};
    }

    function create_fragment$g(ctx) {
    	let input;
    	let input_class_value;
    	let t;
    	let div;
    	let div_class_value;
    	let dispose;
    	let if_block = /*valor*/ ctx[1] === false && create_if_block$5();

    	return {
    		c() {
    			input = element("input");
    			t = space();
    			div = element("div");
    			if (if_block) if_block.c();
    			attr(input, "class", input_class_value = "" + (null_to_empty(/*color*/ ctx[2]) + " svelte-1ou00e0"));
    			attr(input, "type", "email");
    			attr(input, "name", "email");
    			attr(input, "placeholder", /*ejemplo*/ ctx[0]);
    			attr(div, "id", "mensaje");
    			attr(div, "class", div_class_value = "" + (null_to_empty(/*color*/ ctx[2]) + " svelte-1ou00e0"));
    		},
    		m(target, anchor) {
    			insert(target, input, anchor);
    			insert(target, t, anchor);
    			insert(target, div, anchor);
    			if (if_block) if_block.m(div, null);
    			dispose = listen(input, "keyup", /*validaCorreo*/ ctx[3]);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*color*/ 4 && input_class_value !== (input_class_value = "" + (null_to_empty(/*color*/ ctx[2]) + " svelte-1ou00e0"))) {
    				attr(input, "class", input_class_value);
    			}

    			if (dirty & /*ejemplo*/ 1) {
    				attr(input, "placeholder", /*ejemplo*/ ctx[0]);
    			}

    			if (/*valor*/ ctx[1] === false) {
    				if (!if_block) {
    					if_block = create_if_block$5();
    					if_block.c();
    					if_block.m(div, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*color*/ 4 && div_class_value !== (div_class_value = "" + (null_to_empty(/*color*/ ctx[2]) + " svelte-1ou00e0"))) {
    				attr(div, "class", div_class_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(input);
    			if (detaching) detach(t);
    			if (detaching) detach(div);
    			if (if_block) if_block.d();
    			dispose();
    		}
    	};
    }

    function instance$g($$self, $$props, $$invalidate) {
    	let { ejemplo } = $$props;
    	let valor;
    	let color;

    	const validaCorreo = e => {
    		let evento = e.target.value;
    		let arroba = new RegExp("@");
    		let punto = new RegExp("[.]");
    		let arrobaEstado = arroba.test(evento);
    		let puntoEstado = punto.test(evento);

    		if (arrobaEstado != false && puntoEstado != false) {
    			$$invalidate(1, valor = true);
    			$$invalidate(2, color = "ok");
    		} else {
    			$$invalidate(1, valor = false);
    			$$invalidate(2, color = "error");
    		}

    		if (evento == "") {
    			$$invalidate(1, valor = true);
    			$$invalidate(2, color = "");
    		}
    	};

    	$$self.$set = $$props => {
    		if ("ejemplo" in $$props) $$invalidate(0, ejemplo = $$props.ejemplo);
    	};

    	return [ejemplo, valor, color, validaCorreo];
    }

    class EntradaEmail extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1ou00e0-style")) add_css$8();
    		init(this, options, instance$g, create_fragment$g, safe_not_equal, { ejemplo: 0 });
    	}
    }

    /* src/elementos/inputs/Selector/Selector.svelte generated by Svelte v3.19.1 */

    function add_css$9() {
    	var style = element("style");
    	style.id = "svelte-1a0l6up-style";
    	style.textContent = "select.svelte-1a0l6up{border:1px solid gray;border-radius:0.25rem;padding:0.5rem;margin-bottom:0.5rem}";
    	append(document.head, style);
    }

    function get_each_context$4(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	return child_ctx;
    }

    // (28:6) {#if !!opciones}
    function create_if_block$6(ctx) {
    	let if_block_anchor;
    	let each_1_anchor;
    	let if_block = !!/*ejemplo*/ ctx[0] && create_if_block_1$2(ctx);
    	let each_value = /*opciones*/ ctx[1];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
    	}

    	return {
    		c() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert(target, if_block_anchor, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert(target, each_1_anchor, anchor);
    		},
    		p(ctx, dirty) {
    			if (!!/*ejemplo*/ ctx[0]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_1$2(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*opciones*/ 2) {
    				each_value = /*opciones*/ ctx[1];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$4(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$4(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		d(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach(if_block_anchor);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach(each_1_anchor);
    		}
    	};
    }

    // (30:8) {#if !!ejemplo}
    function create_if_block_1$2(ctx) {
    	let option;
    	let t0;
    	let t1;
    	let option_value_value;

    	return {
    		c() {
    			option = element("option");
    			t0 = text(/*ejemplo*/ ctx[0]);
    			t1 = space();
    			attr(option, "class", "placeholder");
    			option.disabled = true;
    			option.selected = true;
    			option.__value = option_value_value = "\n            " + /*ejemplo*/ ctx[0] + "\n          ";
    			option.value = option.__value;
    		},
    		m(target, anchor) {
    			insert(target, option, anchor);
    			append(option, t0);
    			append(option, t1);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*ejemplo*/ 1) set_data(t0, /*ejemplo*/ ctx[0]);

    			if (dirty & /*ejemplo*/ 1 && option_value_value !== (option_value_value = "\n            " + /*ejemplo*/ ctx[0] + "\n          ")) {
    				option.__value = option_value_value;
    			}

    			option.value = option.__value;
    		},
    		d(detaching) {
    			if (detaching) detach(option);
    		}
    	};
    }

    // (36:8) {#each opciones as opcion}
    function create_each_block$4(ctx) {
    	let option;
    	let t_value = /*opcion*/ ctx[4].texto + "";
    	let t;
    	let option_value_value;

    	return {
    		c() {
    			option = element("option");
    			t = text(t_value);
    			option.__value = option_value_value = /*opcion*/ ctx[4].valor;
    			option.value = option.__value;
    		},
    		m(target, anchor) {
    			insert(target, option, anchor);
    			append(option, t);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*opciones*/ 2 && t_value !== (t_value = /*opcion*/ ctx[4].texto + "")) set_data(t, t_value);

    			if (dirty & /*opciones*/ 2 && option_value_value !== (option_value_value = /*opcion*/ ctx[4].valor)) {
    				option.__value = option_value_value;
    			}

    			option.value = option.__value;
    		},
    		d(detaching) {
    			if (detaching) detach(option);
    		}
    	};
    }

    function create_fragment$h(ctx) {
    	let select;
    	let dispose;
    	let if_block = !!/*opciones*/ ctx[1] && create_if_block$6(ctx);

    	return {
    		c() {
    			select = element("select");
    			if (if_block) if_block.c();
    			attr(select, "class", "svelte-1a0l6up");
    		},
    		m(target, anchor) {
    			insert(target, select, anchor);
    			if (if_block) if_block.m(select, null);
    			dispose = listen(select, "change", /*ejecutarAccion*/ ctx[2]);
    		},
    		p(ctx, [dirty]) {
    			if (!!/*opciones*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$6(ctx);
    					if_block.c();
    					if_block.m(select, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(select);
    			if (if_block) if_block.d();
    			dispose();
    		}
    	};
    }

    function instance$h($$self, $$props, $$invalidate) {
    	let { ejemplo } = $$props;
    	let { opciones } = $$props;
    	let { accion } = $$props;

    	const ejecutarAccion = e => {
    		if (typeof accion == "function") {
    			accion(e);
    		}
    	};

    	$$self.$set = $$props => {
    		if ("ejemplo" in $$props) $$invalidate(0, ejemplo = $$props.ejemplo);
    		if ("opciones" in $$props) $$invalidate(1, opciones = $$props.opciones);
    		if ("accion" in $$props) $$invalidate(3, accion = $$props.accion);
    	};

    	return [ejemplo, opciones, ejecutarAccion, accion];
    }

    class Selector extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1a0l6up-style")) add_css$9();

    		init(this, options, instance$h, create_fragment$h, safe_not_equal, {
    			ejemplo: 0,
    			opciones: 1,
    			accion: 3
    		});
    	}
    }

    /* src/elementos/inputs/TextArea/TextArea.svelte generated by Svelte v3.19.1 */

    function add_css$a() {
    	var style = element("style");
    	style.id = "svelte-n6nzoj-style";
    	style.textContent = "textarea.svelte-n6nzoj{width:18.5rem;height:10.5rem;border:1px solid gray;border-radius:0.5rem;padding:0.75rem;resize:none}";
    	append(document.head, style);
    }

    function create_fragment$i(ctx) {
    	let textarea;
    	let dispose;

    	return {
    		c() {
    			textarea = element("textarea");
    			attr(textarea, "name", "text-area");
    			attr(textarea, "placeholder", /*ejemplo*/ ctx[0]);
    			set_style(textarea, "width", /*ancho*/ ctx[1]);
    			set_style(textarea, "height", /*altura*/ ctx[2]);
    			attr(textarea, "class", "svelte-n6nzoj");
    		},
    		m(target, anchor) {
    			insert(target, textarea, anchor);
    			dispose = listen(textarea, "keyup", /*validaEntrada*/ ctx[3]);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*ejemplo*/ 1) {
    				attr(textarea, "placeholder", /*ejemplo*/ ctx[0]);
    			}

    			if (dirty & /*ancho*/ 2) {
    				set_style(textarea, "width", /*ancho*/ ctx[1]);
    			}

    			if (dirty & /*altura*/ 4) {
    				set_style(textarea, "height", /*altura*/ ctx[2]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(textarea);
    			dispose();
    		}
    	};
    }

    function instance$i($$self, $$props, $$invalidate) {
    	let { ejemplo } = $$props;
    	let { ancho } = $$props;
    	let { altura } = $$props;

    	const validaEntrada = e => {
    		let evento = e.target.value;

    		if (evento == "") {
    			color = "";
    		}
    	};

    	$$self.$set = $$props => {
    		if ("ejemplo" in $$props) $$invalidate(0, ejemplo = $$props.ejemplo);
    		if ("ancho" in $$props) $$invalidate(1, ancho = $$props.ancho);
    		if ("altura" in $$props) $$invalidate(2, altura = $$props.altura);
    	};

    	return [ejemplo, ancho, altura, validaEntrada];
    }

    class TextArea extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-n6nzoj-style")) add_css$a();
    		init(this, options, instance$i, create_fragment$i, safe_not_equal, { ejemplo: 0, ancho: 1, altura: 2 });
    	}
    }

    /* src/elementos/media/Insertar/Insertar.svelte generated by Svelte v3.19.1 */

    function create_fragment$j(ctx) {
    	let iframe;
    	let iframe_src_value;

    	return {
    		c() {
    			iframe = element("iframe");
    			attr(iframe, "width", /*ancho*/ ctx[2]);
    			attr(iframe, "height", /*alto*/ ctx[1]);
    			if (iframe.src !== (iframe_src_value = /*url*/ ctx[0])) attr(iframe, "src", iframe_src_value);
    			attr(iframe, "frameborder", "0");
    			attr(iframe, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    			iframe.allowFullscreen = true;
    		},
    		m(target, anchor) {
    			insert(target, iframe, anchor);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*ancho*/ 4) {
    				attr(iframe, "width", /*ancho*/ ctx[2]);
    			}

    			if (dirty & /*alto*/ 2) {
    				attr(iframe, "height", /*alto*/ ctx[1]);
    			}

    			if (dirty & /*url*/ 1 && iframe.src !== (iframe_src_value = /*url*/ ctx[0])) {
    				attr(iframe, "src", iframe_src_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(iframe);
    		}
    	};
    }

    function instance$j($$self, $$props, $$invalidate) {
    	let { url } = $$props;
    	let { alto } = $$props;
    	let { ancho } = $$props;

    	$$self.$set = $$props => {
    		if ("url" in $$props) $$invalidate(0, url = $$props.url);
    		if ("alto" in $$props) $$invalidate(1, alto = $$props.alto);
    		if ("ancho" in $$props) $$invalidate(2, ancho = $$props.ancho);
    	};

    	return [url, alto, ancho];
    }

    class Insertar extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$j, create_fragment$j, safe_not_equal, { url: 0, alto: 1, ancho: 2 });
    	}
    }

    /* src/componentes/Logo/Logo.svelte generated by Svelte v3.19.1 */

    function add_css$b() {
    	var style = element("style");
    	style.id = "svelte-11vnsju-style";
    	style.textContent = "div.svelte-11vnsju{display:flex;height:100%;width:100%;min-width:12rem;align-items:center;justify-content:left}a.svelte-11vnsju{box-sizing:border-box;padding:0.5rem;height:100%;width:100%}";
    	append(document.head, style);
    }

    function get_each_context$5(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i];
    	return child_ctx;
    }

    // (47:46) 
    function create_if_block_1$3(ctx) {
    	let current;
    	const parrafo = new Parrafo({ props: { texto: "Agrega un logotipo" } });

    	return {
    		c() {
    			create_component(parrafo.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(parrafo, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i(local) {
    			if (current) return;
    			transition_in(parrafo.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(parrafo.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(parrafo, detaching);
    		}
    	};
    }

    // (40:6) {#if !!logo.imagen}
    function create_if_block$7(ctx) {
    	let current;

    	const imagen = new Imagen({
    			props: {
    				imagenUrl: /*logo*/ ctx[3].imagen,
    				altTexto: /*logo*/ ctx[3].nombre,
    				altura: "100%",
    				ajuste: "contain",
    				alineacion: /*alineacion*/ ctx[0]
    			}
    		});

    	return {
    		c() {
    			create_component(imagen.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(imagen, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const imagen_changes = {};
    			if (dirty & /*logos*/ 2) imagen_changes.imagenUrl = /*logo*/ ctx[3].imagen;
    			if (dirty & /*logos*/ 2) imagen_changes.altTexto = /*logo*/ ctx[3].nombre;
    			if (dirty & /*alineacion*/ 1) imagen_changes.alineacion = /*alineacion*/ ctx[0];
    			imagen.$set(imagen_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(imagen.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(imagen.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(imagen, detaching);
    		}
    	};
    }

    // (38:2) {#each logos as logo}
    function create_each_block$5(ctx) {
    	let a;
    	let current_block_type_index;
    	let if_block;
    	let t;
    	let a_href_value;
    	let current;
    	const if_block_creators = [create_if_block$7, create_if_block_1$3];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (!!/*logo*/ ctx[3].imagen) return 0;
    		if (!/*logo*/ ctx[3].imagen && !!/*logo*/ ctx[3].nombre) return 1;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	return {
    		c() {
    			a = element("a");
    			if (if_block) if_block.c();
    			t = space();
    			attr(a, "href", a_href_value = /*logo*/ ctx[3].enlace);
    			attr(a, "class", "svelte-11vnsju");
    		},
    		m(target, anchor) {
    			insert(target, a, anchor);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(a, null);
    			}

    			append(a, t);
    			current = true;
    		},
    		p(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) {
    					if_blocks[current_block_type_index].p(ctx, dirty);
    				}
    			} else {
    				if (if_block) {
    					group_outros();

    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block = if_blocks[current_block_type_index];

    					if (!if_block) {
    						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block.c();
    					}

    					transition_in(if_block, 1);
    					if_block.m(a, t);
    				} else {
    					if_block = null;
    				}
    			}

    			if (!current || dirty & /*logos*/ 2 && a_href_value !== (a_href_value = /*logo*/ ctx[3].enlace)) {
    				attr(a, "href", a_href_value);
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(a);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d();
    			}
    		}
    	};
    }

    function create_fragment$k(ctx) {
    	let div;
    	let current;
    	let each_value = /*logos*/ ctx[1];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	return {
    		c() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			set_style(div, "width", /*logoAncho*/ ctx[2]);
    			attr(div, "class", "svelte-11vnsju");
    		},
    		m(target, anchor) {
    			insert(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*logos, alineacion*/ 3) {
    				each_value = /*logos*/ ctx[1];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$5(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$5(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}

    			if (!current || dirty & /*logoAncho*/ 4) {
    				set_style(div, "width", /*logoAncho*/ ctx[2]);
    			}
    		},
    		i(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(div);
    			destroy_each(each_blocks, detaching);
    		}
    	};
    }

    function instance$k($$self, $$props, $$invalidate) {
    	let { logos } = $$props;
    	let { logoAncho } = $$props;
    	let { alineacion } = $$props;

    	if (!alineacion) {
    		alineacion = "left";
    	}

    	$$self.$set = $$props => {
    		if ("logos" in $$props) $$invalidate(1, logos = $$props.logos);
    		if ("logoAncho" in $$props) $$invalidate(2, logoAncho = $$props.logoAncho);
    		if ("alineacion" in $$props) $$invalidate(0, alineacion = $$props.alineacion);
    	};

    	return [alineacion, logos, logoAncho];
    }

    class Logo extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-11vnsju-style")) add_css$b();
    		init(this, options, instance$k, create_fragment$k, safe_not_equal, { logos: 1, logoAncho: 2, alineacion: 0 });
    	}
    }

    /* src/componentes/Header/HeaderVista.svelte generated by Svelte v3.19.1 */

    function add_css$c() {
    	var style = element("style");
    	style.id = "svelte-301z16-style";
    	style.textContent = "header.svelte-301z16.svelte-301z16{position:relative}header.svelte-301z16 div.svelte-301z16:nth-child(1){box-sizing:border-box;padding:0 0.5rem;display:flex;justify-content:space-between;height:100%;width:100%}.fixed.svelte-301z16.svelte-301z16{position:fixed;width:100%;top:0;left:0;z-index:1000}";
    	append(document.head, style);
    }

    // (73:28) 
    function create_if_block_3$1(ctx) {
    	let current;

    	const menuescritorio = new MenuEscritorio({
    			props: {
    				objetosMenu: /*objetosMenu*/ ctx[2],
    				colorFondo: /*colorFondo*/ ctx[5],
    				color: /*color*/ ctx[7]
    			}
    		});

    	return {
    		c() {
    			create_component(menuescritorio.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(menuescritorio, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const menuescritorio_changes = {};
    			if (dirty & /*objetosMenu*/ 4) menuescritorio_changes.objetosMenu = /*objetosMenu*/ ctx[2];
    			if (dirty & /*colorFondo*/ 32) menuescritorio_changes.colorFondo = /*colorFondo*/ ctx[5];
    			if (dirty & /*color*/ 128) menuescritorio_changes.color = /*color*/ ctx[7];
    			menuescritorio.$set(menuescritorio_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(menuescritorio.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(menuescritorio.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(menuescritorio, detaching);
    		}
    	};
    }

    // (65:4) {#if responsivo < breakpoint}
    function create_if_block_2$1(ctx) {
    	let current;

    	const botonicono = new BotonIcono({
    			props: {
    				estado: /*estadoMenu*/ ctx[10],
    				iconoBotonEstadoUnoUrl: /*iconoBotonEstadoUnoUrl*/ ctx[11],
    				iconoBotonEstadoDosUrl: /*iconoBotonEstadoDosUrl*/ ctx[12],
    				iconoAltura: /*iconoBotonAltura*/ ctx[13],
    				colorBG: /*colorFondo*/ ctx[5]
    			}
    		});

    	botonicono.$on("click", function () {
    		if (is_function(/*menuAlternar*/ ctx[1])) /*menuAlternar*/ ctx[1].apply(this, arguments);
    	});

    	return {
    		c() {
    			create_component(botonicono.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(botonicono, target, anchor);
    			current = true;
    		},
    		p(new_ctx, dirty) {
    			ctx = new_ctx;
    			const botonicono_changes = {};
    			if (dirty & /*estadoMenu*/ 1024) botonicono_changes.estado = /*estadoMenu*/ ctx[10];
    			if (dirty & /*iconoBotonEstadoUnoUrl*/ 2048) botonicono_changes.iconoBotonEstadoUnoUrl = /*iconoBotonEstadoUnoUrl*/ ctx[11];
    			if (dirty & /*iconoBotonEstadoDosUrl*/ 4096) botonicono_changes.iconoBotonEstadoDosUrl = /*iconoBotonEstadoDosUrl*/ ctx[12];
    			if (dirty & /*iconoBotonAltura*/ 8192) botonicono_changes.iconoAltura = /*iconoBotonAltura*/ ctx[13];
    			if (dirty & /*colorFondo*/ 32) botonicono_changes.colorBG = /*colorFondo*/ ctx[5];
    			botonicono.$set(botonicono_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(botonicono.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(botonicono.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(botonicono, detaching);
    		}
    	};
    }

    // (80:2) {#if responsivo < breakpoint}
    function create_if_block$8(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = !!/*objetosMenu*/ ctx[2] && create_if_block_1$4(ctx);

    	return {
    		c() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			if (!!/*objetosMenu*/ ctx[2]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_1$4(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach(if_block_anchor);
    		}
    	};
    }

    // (81:4) {#if !!objetosMenu}
    function create_if_block_1$4(ctx) {
    	let current;

    	const menumovil = new MenuMovil({
    			props: {
    				estadoMenu: /*estadoMenu*/ ctx[10],
    				objetosMenu: /*objetosMenu*/ ctx[2],
    				color: /*color*/ ctx[7],
    				sombra: /*sombra*/ ctx[8],
    				colorFondo: /*colorFondoMovil*/ ctx[6],
    				alturaObjetoMenu: "3rem",
    				alturaMenuMovil: /*alturaMenuMovil*/ ctx[14],
    				objetosMenuExtra: /*objetosMenuExtra*/ ctx[15],
    				objetosAlineacion: /*objetosAlineacion*/ ctx[3]
    			}
    		});

    	menumovil.$on("eventoEstadoMenu", /*eventoEstadoMenu_handler*/ ctx[19]);

    	return {
    		c() {
    			create_component(menumovil.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(menumovil, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const menumovil_changes = {};
    			if (dirty & /*estadoMenu*/ 1024) menumovil_changes.estadoMenu = /*estadoMenu*/ ctx[10];
    			if (dirty & /*objetosMenu*/ 4) menumovil_changes.objetosMenu = /*objetosMenu*/ ctx[2];
    			if (dirty & /*color*/ 128) menumovil_changes.color = /*color*/ ctx[7];
    			if (dirty & /*sombra*/ 256) menumovil_changes.sombra = /*sombra*/ ctx[8];
    			if (dirty & /*colorFondoMovil*/ 64) menumovil_changes.colorFondo = /*colorFondoMovil*/ ctx[6];
    			if (dirty & /*alturaMenuMovil*/ 16384) menumovil_changes.alturaMenuMovil = /*alturaMenuMovil*/ ctx[14];
    			if (dirty & /*objetosMenuExtra*/ 32768) menumovil_changes.objetosMenuExtra = /*objetosMenuExtra*/ ctx[15];
    			if (dirty & /*objetosAlineacion*/ 8) menumovil_changes.objetosAlineacion = /*objetosAlineacion*/ ctx[3];
    			menumovil.$set(menumovil_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(menumovil.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(menumovil.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(menumovil, detaching);
    		}
    	};
    }

    function create_fragment$l(ctx) {
    	let header;
    	let div;
    	let t0;
    	let current_block_type_index;
    	let if_block0;
    	let t1;
    	let header_style_value;
    	let header_class_value;
    	let current;
    	let dispose;
    	add_render_callback(/*onwindowresize*/ ctx[18]);

    	const logo = new Logo({
    			props: {
    				logos: /*logos*/ ctx[0],
    				logoAncho: "30%"
    			}
    		});

    	const if_block_creators = [create_if_block_2$1, create_if_block_3$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*responsivo*/ ctx[16] < breakpoint) return 0;
    		if (!!/*objetosMenu*/ ctx[2]) return 1;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	let if_block1 = /*responsivo*/ ctx[16] < breakpoint && create_if_block$8(ctx);

    	return {
    		c() {
    			header = element("header");
    			div = element("div");
    			create_component(logo.$$.fragment);
    			t0 = space();
    			if (if_block0) if_block0.c();
    			t1 = space();
    			if (if_block1) if_block1.c();
    			attr(div, "class", "svelte-301z16");

    			attr(header, "style", header_style_value = "background-color:" + /*colorFondo*/ ctx[5] + ";height:" + /*altura*/ ctx[4] + ";" + (!!/*sombra*/ ctx[8]
    			? "box-shadow:0 1px 2px rgba(0,0,0,0.5)"
    			: ""));

    			attr(header, "class", header_class_value = "" + (null_to_empty(!!/*fixed*/ ctx[9] ? "fixed" : "") + " svelte-301z16"));
    		},
    		m(target, anchor) {
    			insert(target, header, anchor);
    			append(header, div);
    			mount_component(logo, div, null);
    			append(div, t0);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(div, null);
    			}

    			append(header, t1);
    			if (if_block1) if_block1.m(header, null);
    			current = true;
    			dispose = listen(window, "resize", /*onwindowresize*/ ctx[18]);
    		},
    		p(ctx, [dirty]) {
    			const logo_changes = {};
    			if (dirty & /*logos*/ 1) logo_changes.logos = /*logos*/ ctx[0];
    			logo.$set(logo_changes);
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if (~current_block_type_index) {
    					if_blocks[current_block_type_index].p(ctx, dirty);
    				}
    			} else {
    				if (if_block0) {
    					group_outros();

    					transition_out(if_blocks[previous_block_index], 1, 1, () => {
    						if_blocks[previous_block_index] = null;
    					});

    					check_outros();
    				}

    				if (~current_block_type_index) {
    					if_block0 = if_blocks[current_block_type_index];

    					if (!if_block0) {
    						if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    						if_block0.c();
    					}

    					transition_in(if_block0, 1);
    					if_block0.m(div, null);
    				} else {
    					if_block0 = null;
    				}
    			}

    			if (/*responsivo*/ ctx[16] < breakpoint) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    					transition_in(if_block1, 1);
    				} else {
    					if_block1 = create_if_block$8(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(header, null);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}

    			if (!current || dirty & /*colorFondo, altura, sombra*/ 304 && header_style_value !== (header_style_value = "background-color:" + /*colorFondo*/ ctx[5] + ";height:" + /*altura*/ ctx[4] + ";" + (!!/*sombra*/ ctx[8]
    			? "box-shadow:0 1px 2px rgba(0,0,0,0.5)"
    			: ""))) {
    				attr(header, "style", header_style_value);
    			}

    			if (!current || dirty & /*fixed*/ 512 && header_class_value !== (header_class_value = "" + (null_to_empty(!!/*fixed*/ ctx[9] ? "fixed" : "") + " svelte-301z16"))) {
    				attr(header, "class", header_class_value);
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(logo.$$.fragment, local);
    			transition_in(if_block0);
    			transition_in(if_block1);
    			current = true;
    		},
    		o(local) {
    			transition_out(logo.$$.fragment, local);
    			transition_out(if_block0);
    			transition_out(if_block1);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(header);
    			destroy_component(logo);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d();
    			}

    			if (if_block1) if_block1.d();
    			dispose();
    		}
    	};
    }

    let breakpoint = 720;

    function instance$l($$self, $$props, $$invalidate) {
    	let { logos } = $$props;
    	let { menuAlternar } = $$props;
    	let { objetosMenu } = $$props;
    	let { objetosAlineacion } = $$props;
    	let { altura } = $$props;
    	let { colorFondo } = $$props;
    	let { colorFondoMovil } = $$props;
    	let { color } = $$props;
    	let { sombra } = $$props;
    	let { fixed } = $$props;
    	let { estadoMenu } = $$props;
    	let { iconoBotonEstadoUnoUrl } = $$props;
    	let { iconoBotonEstadoDosUrl } = $$props;
    	let { iconoBotonAltura } = $$props;
    	let { alturaMenuMovil } = $$props;
    	let { objetosMenuExtra } = $$props;
    	let { segment } = $$props;

    	//  Responsivo
    	let responsivo;

    	function onwindowresize() {
    		$$invalidate(16, responsivo = window.innerWidth);
    	}

    	function eventoEstadoMenu_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$set = $$props => {
    		if ("logos" in $$props) $$invalidate(0, logos = $$props.logos);
    		if ("menuAlternar" in $$props) $$invalidate(1, menuAlternar = $$props.menuAlternar);
    		if ("objetosMenu" in $$props) $$invalidate(2, objetosMenu = $$props.objetosMenu);
    		if ("objetosAlineacion" in $$props) $$invalidate(3, objetosAlineacion = $$props.objetosAlineacion);
    		if ("altura" in $$props) $$invalidate(4, altura = $$props.altura);
    		if ("colorFondo" in $$props) $$invalidate(5, colorFondo = $$props.colorFondo);
    		if ("colorFondoMovil" in $$props) $$invalidate(6, colorFondoMovil = $$props.colorFondoMovil);
    		if ("color" in $$props) $$invalidate(7, color = $$props.color);
    		if ("sombra" in $$props) $$invalidate(8, sombra = $$props.sombra);
    		if ("fixed" in $$props) $$invalidate(9, fixed = $$props.fixed);
    		if ("estadoMenu" in $$props) $$invalidate(10, estadoMenu = $$props.estadoMenu);
    		if ("iconoBotonEstadoUnoUrl" in $$props) $$invalidate(11, iconoBotonEstadoUnoUrl = $$props.iconoBotonEstadoUnoUrl);
    		if ("iconoBotonEstadoDosUrl" in $$props) $$invalidate(12, iconoBotonEstadoDosUrl = $$props.iconoBotonEstadoDosUrl);
    		if ("iconoBotonAltura" in $$props) $$invalidate(13, iconoBotonAltura = $$props.iconoBotonAltura);
    		if ("alturaMenuMovil" in $$props) $$invalidate(14, alturaMenuMovil = $$props.alturaMenuMovil);
    		if ("objetosMenuExtra" in $$props) $$invalidate(15, objetosMenuExtra = $$props.objetosMenuExtra);
    		if ("segment" in $$props) $$invalidate(17, segment = $$props.segment);
    	};

    	return [
    		logos,
    		menuAlternar,
    		objetosMenu,
    		objetosAlineacion,
    		altura,
    		colorFondo,
    		colorFondoMovil,
    		color,
    		sombra,
    		fixed,
    		estadoMenu,
    		iconoBotonEstadoUnoUrl,
    		iconoBotonEstadoDosUrl,
    		iconoBotonAltura,
    		alturaMenuMovil,
    		objetosMenuExtra,
    		responsivo,
    		segment,
    		onwindowresize,
    		eventoEstadoMenu_handler
    	];
    }

    class HeaderVista extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-301z16-style")) add_css$c();

    		init(this, options, instance$l, create_fragment$l, safe_not_equal, {
    			logos: 0,
    			menuAlternar: 1,
    			objetosMenu: 2,
    			objetosAlineacion: 3,
    			altura: 4,
    			colorFondo: 5,
    			colorFondoMovil: 6,
    			color: 7,
    			sombra: 8,
    			fixed: 9,
    			estadoMenu: 10,
    			iconoBotonEstadoUnoUrl: 11,
    			iconoBotonEstadoDosUrl: 12,
    			iconoBotonAltura: 13,
    			alturaMenuMovil: 14,
    			objetosMenuExtra: 15,
    			segment: 17
    		});
    	}
    }

    /* src/componentes/Header/Header.svelte generated by Svelte v3.19.1 */

    function create_fragment$m(ctx) {
    	let current;

    	const headervista = new HeaderVista({
    			props: {
    				segment: /*segment*/ ctx[15],
    				menuAlternar: /*menuAlternar*/ ctx[16],
    				estadoMenu: /*estadoMenu*/ ctx[0],
    				altura: /*altura*/ ctx[3],
    				logos: /*logos*/ ctx[1],
    				objetosMenu: /*objetosMenu*/ ctx[2],
    				iconoBotonEstadoUnoUrl: /*iconoBotonEstadoUnoUrl*/ ctx[9],
    				iconoBotonEstadoDosUrl: /*iconoBotonEstadoDosUrl*/ ctx[10],
    				iconoBotonAltura: /*iconoBotonAltura*/ ctx[11],
    				colorFondo: /*colorFondo*/ ctx[4],
    				colorFondoMovil: /*colorFondoMovil*/ ctx[5],
    				color: /*color*/ ctx[6],
    				sombra: /*sombra*/ ctx[7],
    				fixed: /*fixed*/ ctx[8],
    				alturaMenuMovil: /*alturaMenuMovil*/ ctx[12],
    				objetosMenuExtra: /*objetosMenuExtra*/ ctx[13],
    				objetosAlineacion: /*objetosAlineacion*/ ctx[14]
    			}
    		});

    	return {
    		c() {
    			create_component(headervista.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(headervista, target, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const headervista_changes = {};
    			if (dirty & /*segment*/ 32768) headervista_changes.segment = /*segment*/ ctx[15];
    			if (dirty & /*estadoMenu*/ 1) headervista_changes.estadoMenu = /*estadoMenu*/ ctx[0];
    			if (dirty & /*altura*/ 8) headervista_changes.altura = /*altura*/ ctx[3];
    			if (dirty & /*logos*/ 2) headervista_changes.logos = /*logos*/ ctx[1];
    			if (dirty & /*objetosMenu*/ 4) headervista_changes.objetosMenu = /*objetosMenu*/ ctx[2];
    			if (dirty & /*iconoBotonEstadoUnoUrl*/ 512) headervista_changes.iconoBotonEstadoUnoUrl = /*iconoBotonEstadoUnoUrl*/ ctx[9];
    			if (dirty & /*iconoBotonEstadoDosUrl*/ 1024) headervista_changes.iconoBotonEstadoDosUrl = /*iconoBotonEstadoDosUrl*/ ctx[10];
    			if (dirty & /*iconoBotonAltura*/ 2048) headervista_changes.iconoBotonAltura = /*iconoBotonAltura*/ ctx[11];
    			if (dirty & /*colorFondo*/ 16) headervista_changes.colorFondo = /*colorFondo*/ ctx[4];
    			if (dirty & /*colorFondoMovil*/ 32) headervista_changes.colorFondoMovil = /*colorFondoMovil*/ ctx[5];
    			if (dirty & /*color*/ 64) headervista_changes.color = /*color*/ ctx[6];
    			if (dirty & /*sombra*/ 128) headervista_changes.sombra = /*sombra*/ ctx[7];
    			if (dirty & /*fixed*/ 256) headervista_changes.fixed = /*fixed*/ ctx[8];
    			if (dirty & /*alturaMenuMovil*/ 4096) headervista_changes.alturaMenuMovil = /*alturaMenuMovil*/ ctx[12];
    			if (dirty & /*objetosMenuExtra*/ 8192) headervista_changes.objetosMenuExtra = /*objetosMenuExtra*/ ctx[13];
    			if (dirty & /*objetosAlineacion*/ 16384) headervista_changes.objetosAlineacion = /*objetosAlineacion*/ ctx[14];
    			headervista.$set(headervista_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(headervista.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(headervista.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(headervista, detaching);
    		}
    	};
    }

    function instance$m($$self, $$props, $$invalidate) {
    	let { logos } = $$props;
    	let { objetosMenu } = $$props;
    	let { altura } = $$props;
    	let { colorFondo } = $$props;
    	let { colorFondoMovil } = $$props;
    	let { color } = $$props;
    	let { sombra } = $$props;
    	let { fixed } = $$props;
    	let { iconoBotonEstadoUnoUrl } = $$props;
    	let { iconoBotonEstadoDosUrl } = $$props;
    	let { iconoBotonAltura } = $$props;
    	let { alturaMenuMovil } = $$props;
    	let { objetosMenuExtra } = $$props;
    	let { objetosAlineacion } = $$props;
    	let { segment } = $$props;
    	let { estadoMenu = false } = $$props;

    	const menuAlternar = () => {
    		$$invalidate(0, estadoMenu = !estadoMenu);
    	};

    	$$self.$set = $$props => {
    		if ("logos" in $$props) $$invalidate(1, logos = $$props.logos);
    		if ("objetosMenu" in $$props) $$invalidate(2, objetosMenu = $$props.objetosMenu);
    		if ("altura" in $$props) $$invalidate(3, altura = $$props.altura);
    		if ("colorFondo" in $$props) $$invalidate(4, colorFondo = $$props.colorFondo);
    		if ("colorFondoMovil" in $$props) $$invalidate(5, colorFondoMovil = $$props.colorFondoMovil);
    		if ("color" in $$props) $$invalidate(6, color = $$props.color);
    		if ("sombra" in $$props) $$invalidate(7, sombra = $$props.sombra);
    		if ("fixed" in $$props) $$invalidate(8, fixed = $$props.fixed);
    		if ("iconoBotonEstadoUnoUrl" in $$props) $$invalidate(9, iconoBotonEstadoUnoUrl = $$props.iconoBotonEstadoUnoUrl);
    		if ("iconoBotonEstadoDosUrl" in $$props) $$invalidate(10, iconoBotonEstadoDosUrl = $$props.iconoBotonEstadoDosUrl);
    		if ("iconoBotonAltura" in $$props) $$invalidate(11, iconoBotonAltura = $$props.iconoBotonAltura);
    		if ("alturaMenuMovil" in $$props) $$invalidate(12, alturaMenuMovil = $$props.alturaMenuMovil);
    		if ("objetosMenuExtra" in $$props) $$invalidate(13, objetosMenuExtra = $$props.objetosMenuExtra);
    		if ("objetosAlineacion" in $$props) $$invalidate(14, objetosAlineacion = $$props.objetosAlineacion);
    		if ("segment" in $$props) $$invalidate(15, segment = $$props.segment);
    		if ("estadoMenu" in $$props) $$invalidate(0, estadoMenu = $$props.estadoMenu);
    	};

    	return [
    		estadoMenu,
    		logos,
    		objetosMenu,
    		altura,
    		colorFondo,
    		colorFondoMovil,
    		color,
    		sombra,
    		fixed,
    		iconoBotonEstadoUnoUrl,
    		iconoBotonEstadoDosUrl,
    		iconoBotonAltura,
    		alturaMenuMovil,
    		objetosMenuExtra,
    		objetosAlineacion,
    		segment,
    		menuAlternar
    	];
    }

    class Header extends SvelteComponent {
    	constructor(options) {
    		super();

    		init(this, options, instance$m, create_fragment$m, safe_not_equal, {
    			logos: 1,
    			objetosMenu: 2,
    			altura: 3,
    			colorFondo: 4,
    			colorFondoMovil: 5,
    			color: 6,
    			sombra: 7,
    			fixed: 8,
    			iconoBotonEstadoUnoUrl: 9,
    			iconoBotonEstadoDosUrl: 10,
    			iconoBotonAltura: 11,
    			alturaMenuMovil: 12,
    			objetosMenuExtra: 13,
    			objetosAlineacion: 14,
    			segment: 15,
    			estadoMenu: 0
    		});
    	}
    }

    /* src/componentes/Footer/Footer.svelte generated by Svelte v3.19.1 */

    function add_css$d() {
    	var style = element("style");
    	style.id = "svelte-1d49xkx-style";
    	style.textContent = "footer.svelte-1d49xkx.svelte-1d49xkx{position:relative}footer.svelte-1d49xkx div.svelte-1d49xkx:nth-child(1){box-sizing:border-box;padding:0 0.5rem;display:flex;justify-content:right;height:100%;width:100%}.fixed.svelte-1d49xkx.svelte-1d49xkx{position:fixed;width:100%;bottom:0;left:0;z-index:1000}";
    	append(document.head, style);
    }

    function create_fragment$n(ctx) {
    	let footer;
    	let div0;
    	let t;
    	let div1;
    	let footer_style_value;
    	let footer_class_value;
    	let current;
    	let dispose;
    	add_render_callback(/*onwindowresize*/ ctx[8]);

    	const logo = new Logo({
    			props: {
    				logoTexto: /*logoTexto*/ ctx[2],
    				logoImagenUrl: /*logoImagenUrl*/ ctx[3],
    				ancho: "auto"
    			}
    		});

    	return {
    		c() {
    			footer = element("footer");
    			div0 = element("div");
    			create_component(logo.$$.fragment);
    			t = space();
    			div1 = element("div");
    			attr(div0, "class", "svelte-1d49xkx");
    			attr(div1, "class", "copyright svelte-1d49xkx");

    			attr(footer, "style", footer_style_value = "background-color:" + /*colorFondo*/ ctx[5] + ";height:" + /*altura*/ ctx[4] + ";" + (!!/*sombra*/ ctx[0]
    			? "box-shadow:0 -1px 2px rgba(0,0,0,0.5)"
    			: ""));

    			attr(footer, "class", footer_class_value = "" + (null_to_empty(!!/*fixed*/ ctx[1] ? "fixed" : "") + " svelte-1d49xkx"));
    		},
    		m(target, anchor) {
    			insert(target, footer, anchor);
    			append(footer, div0);
    			mount_component(logo, div0, null);
    			append(footer, t);
    			append(footer, div1);
    			current = true;
    			dispose = listen(window, "resize", /*onwindowresize*/ ctx[8]);
    		},
    		p(ctx, [dirty]) {
    			const logo_changes = {};
    			if (dirty & /*logoTexto*/ 4) logo_changes.logoTexto = /*logoTexto*/ ctx[2];
    			if (dirty & /*logoImagenUrl*/ 8) logo_changes.logoImagenUrl = /*logoImagenUrl*/ ctx[3];
    			logo.$set(logo_changes);

    			if (!current || dirty & /*colorFondo, altura, sombra*/ 49 && footer_style_value !== (footer_style_value = "background-color:" + /*colorFondo*/ ctx[5] + ";height:" + /*altura*/ ctx[4] + ";" + (!!/*sombra*/ ctx[0]
    			? "box-shadow:0 -1px 2px rgba(0,0,0,0.5)"
    			: ""))) {
    				attr(footer, "style", footer_style_value);
    			}

    			if (!current || dirty & /*fixed*/ 2 && footer_class_value !== (footer_class_value = "" + (null_to_empty(!!/*fixed*/ ctx[1] ? "fixed" : "") + " svelte-1d49xkx"))) {
    				attr(footer, "class", footer_class_value);
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(logo.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(logo.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(footer);
    			destroy_component(logo);
    			dispose();
    		}
    	};
    }

    function instance$n($$self, $$props, $$invalidate) {
    	let { sombra } = $$props;
    	let { fixed } = $$props;
    	let { logoTexto } = $$props;
    	let { logoImagenUrl } = $$props;
    	let { altura } = $$props;
    	let { colorFondo } = $$props;
    	let { color } = $$props;

    	//  Responsivo
    	let responsivo;

    	function onwindowresize() {
    		$$invalidate(6, responsivo = window.innerWidth);
    	}

    	$$self.$set = $$props => {
    		if ("sombra" in $$props) $$invalidate(0, sombra = $$props.sombra);
    		if ("fixed" in $$props) $$invalidate(1, fixed = $$props.fixed);
    		if ("logoTexto" in $$props) $$invalidate(2, logoTexto = $$props.logoTexto);
    		if ("logoImagenUrl" in $$props) $$invalidate(3, logoImagenUrl = $$props.logoImagenUrl);
    		if ("altura" in $$props) $$invalidate(4, altura = $$props.altura);
    		if ("colorFondo" in $$props) $$invalidate(5, colorFondo = $$props.colorFondo);
    		if ("color" in $$props) $$invalidate(7, color = $$props.color);
    	};

    	return [
    		sombra,
    		fixed,
    		logoTexto,
    		logoImagenUrl,
    		altura,
    		colorFondo,
    		responsivo,
    		color,
    		onwindowresize
    	];
    }

    class Footer extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1d49xkx-style")) add_css$d();

    		init(this, options, instance$n, create_fragment$n, safe_not_equal, {
    			sombra: 0,
    			fixed: 1,
    			logoTexto: 2,
    			logoImagenUrl: 3,
    			altura: 4,
    			colorFondo: 5,
    			color: 7
    		});
    	}
    }

    /* src/componentes/Label/Label.svelte generated by Svelte v3.19.1 */

    function add_css$e() {
    	var style = element("style");
    	style.id = "svelte-1knd21b-style";
    	style.textContent = "label.svelte-1knd21b{width:100%;height:auto}";
    	append(document.head, style);
    }

    // (18:2) {#if !!textoLabel}
    function create_if_block$9(ctx) {
    	let t;

    	return {
    		c() {
    			t = text(/*textoLabel*/ ctx[0]);
    		},
    		m(target, anchor) {
    			insert(target, t, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*textoLabel*/ 1) set_data(t, /*textoLabel*/ ctx[0]);
    		},
    		d(detaching) {
    			if (detaching) detach(t);
    		}
    	};
    }

    function create_fragment$o(ctx) {
    	let label;
    	let t;
    	let current;
    	let if_block = !!/*textoLabel*/ ctx[0] && create_if_block$9(ctx);

    	const input = new Entrada({
    			props: {
    				type: /*type*/ ctx[1],
    				placeholder: /*placeholder*/ ctx[2]
    			}
    		});

    	input.$on("keyup", /*keyup_handler*/ ctx[3]);

    	return {
    		c() {
    			label = element("label");
    			if (if_block) if_block.c();
    			t = space();
    			create_component(input.$$.fragment);
    			attr(label, "class", "svelte-1knd21b");
    		},
    		m(target, anchor) {
    			insert(target, label, anchor);
    			if (if_block) if_block.m(label, null);
    			append(label, t);
    			mount_component(input, label, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (!!/*textoLabel*/ ctx[0]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$9(ctx);
    					if_block.c();
    					if_block.m(label, t);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			const input_changes = {};
    			if (dirty & /*type*/ 2) input_changes.type = /*type*/ ctx[1];
    			if (dirty & /*placeholder*/ 4) input_changes.placeholder = /*placeholder*/ ctx[2];
    			input.$set(input_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(input.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(input.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(label);
    			if (if_block) if_block.d();
    			destroy_component(input);
    		}
    	};
    }

    function instance$o($$self, $$props, $$invalidate) {
    	let { textoLabel } = $$props;
    	let { type } = $$props;
    	let { placeholder } = $$props;

    	function keyup_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$set = $$props => {
    		if ("textoLabel" in $$props) $$invalidate(0, textoLabel = $$props.textoLabel);
    		if ("type" in $$props) $$invalidate(1, type = $$props.type);
    		if ("placeholder" in $$props) $$invalidate(2, placeholder = $$props.placeholder);
    	};

    	return [textoLabel, type, placeholder, keyup_handler];
    }

    class Label extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1knd21b-style")) add_css$e();
    		init(this, options, instance$o, create_fragment$o, safe_not_equal, { textoLabel: 0, type: 1, placeholder: 2 });
    	}
    }

    /* src/componentes/Tarjetas/TarjetaHorizontal/TarjetaHorizontal.svelte generated by Svelte v3.19.1 */

    function add_css$f() {
    	var style = element("style");
    	style.id = "svelte-qc0sp0-style";
    	style.textContent = "article.svelte-qc0sp0{max-width:100%;height:auto;display:flex;flex-direction:unset;justify-content:flex-start;align-items:center;border-radius:0.25rem;background-color:rgb(255);color:rgb(0, 0, 0)}.tarjeta-imagen.svelte-qc0sp0{width:50%;height:21rem}.tarjeta-texto.svelte-qc0sp0{box-sizing:border-box;width:50%;padding:0.5rem 1rem}.tarjeta-boton.svelte-qc0sp0{display:flex;justify-content:center;width:100%}.sombra.svelte-qc0sp0{box-shadow:-1px 2px 3px rgba(0, 0, 0, 5)}";
    	append(document.head, style);
    }

    // (58:4) {#if !!titulo}
    function create_if_block$a(ctx) {
    	let current;

    	const titulo_1 = new Titulo({
    			props: {
    				texto: /*titulo*/ ctx[1],
    				nivel: /*nivelTitulo*/ ctx[2],
    				color: /*colorTitulo*/ ctx[3]
    			}
    		});

    	return {
    		c() {
    			create_component(titulo_1.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(titulo_1, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const titulo_1_changes = {};
    			if (dirty & /*titulo*/ 2) titulo_1_changes.texto = /*titulo*/ ctx[1];
    			if (dirty & /*nivelTitulo*/ 4) titulo_1_changes.nivel = /*nivelTitulo*/ ctx[2];
    			if (dirty & /*colorTitulo*/ 8) titulo_1_changes.color = /*colorTitulo*/ ctx[3];
    			titulo_1.$set(titulo_1_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(titulo_1.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(titulo_1.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(titulo_1, detaching);
    		}
    	};
    }

    function create_fragment$p(ctx) {
    	let article;
    	let div0;
    	let t0;
    	let div2;
    	let t1;
    	let t2;
    	let div1;
    	let article_class_value;
    	let current;

    	const imagen = new Imagen({
    			props: {
    				imagenUrl: /*imagenUrl*/ ctx[0],
    				altTexto: /*titulo*/ ctx[1],
    				ajuste: "cover"
    			}
    		});

    	let if_block = !!/*titulo*/ ctx[1] && create_if_block$a(ctx);

    	const parrafo = new Parrafo({
    			props: {
    				texto: /*texto*/ ctx[4],
    				color: /*color*/ ctx[5]
    			}
    		});

    	const boton = new Boton({
    			props: {
    				radius: "15px",
    				texto: "Saber más",
    				iconoBotonEstadoUnoUrl: /*iconoBotonEstadoUnoUrl*/ ctx[8],
    				iconoBotonAltura: /*iconoBotonAltura*/ ctx[9]
    			}
    		});

    	boton.$on("click", /*click_handler*/ ctx[10]);

    	return {
    		c() {
    			article = element("article");
    			div0 = element("div");
    			create_component(imagen.$$.fragment);
    			t0 = space();
    			div2 = element("div");
    			if (if_block) if_block.c();
    			t1 = space();
    			create_component(parrafo.$$.fragment);
    			t2 = space();
    			div1 = element("div");
    			create_component(boton.$$.fragment);
    			attr(div0, "class", "tarjeta-imagen svelte-qc0sp0");
    			attr(div1, "class", "tarjeta-boton svelte-qc0sp0");
    			attr(div2, "class", "tarjeta-texto svelte-qc0sp0");
    			set_style(article, "background-color", /*colorBG*/ ctx[6]);
    			attr(article, "class", article_class_value = "" + (null_to_empty(!!/*sombra*/ ctx[7] ? "sombra" : "") + " svelte-qc0sp0"));
    		},
    		m(target, anchor) {
    			insert(target, article, anchor);
    			append(article, div0);
    			mount_component(imagen, div0, null);
    			append(article, t0);
    			append(article, div2);
    			if (if_block) if_block.m(div2, null);
    			append(div2, t1);
    			mount_component(parrafo, div2, null);
    			append(div2, t2);
    			append(div2, div1);
    			mount_component(boton, div1, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const imagen_changes = {};
    			if (dirty & /*imagenUrl*/ 1) imagen_changes.imagenUrl = /*imagenUrl*/ ctx[0];
    			if (dirty & /*titulo*/ 2) imagen_changes.altTexto = /*titulo*/ ctx[1];
    			imagen.$set(imagen_changes);

    			if (!!/*titulo*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$a(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(div2, t1);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}

    			const parrafo_changes = {};
    			if (dirty & /*texto*/ 16) parrafo_changes.texto = /*texto*/ ctx[4];
    			if (dirty & /*color*/ 32) parrafo_changes.color = /*color*/ ctx[5];
    			parrafo.$set(parrafo_changes);
    			const boton_changes = {};
    			if (dirty & /*iconoBotonEstadoUnoUrl*/ 256) boton_changes.iconoBotonEstadoUnoUrl = /*iconoBotonEstadoUnoUrl*/ ctx[8];
    			if (dirty & /*iconoBotonAltura*/ 512) boton_changes.iconoBotonAltura = /*iconoBotonAltura*/ ctx[9];
    			boton.$set(boton_changes);

    			if (!current || dirty & /*colorBG*/ 64) {
    				set_style(article, "background-color", /*colorBG*/ ctx[6]);
    			}

    			if (!current || dirty & /*sombra*/ 128 && article_class_value !== (article_class_value = "" + (null_to_empty(!!/*sombra*/ ctx[7] ? "sombra" : "") + " svelte-qc0sp0"))) {
    				attr(article, "class", article_class_value);
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(imagen.$$.fragment, local);
    			transition_in(if_block);
    			transition_in(parrafo.$$.fragment, local);
    			transition_in(boton.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(imagen.$$.fragment, local);
    			transition_out(if_block);
    			transition_out(parrafo.$$.fragment, local);
    			transition_out(boton.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(article);
    			destroy_component(imagen);
    			if (if_block) if_block.d();
    			destroy_component(parrafo);
    			destroy_component(boton);
    		}
    	};
    }

    function instance$p($$self, $$props, $$invalidate) {
    	let { imagenUrl } = $$props;
    	let { titulo } = $$props;
    	let { nivelTitulo } = $$props;
    	let { colorTitulo } = $$props;
    	let { texto } = $$props;
    	let { color } = $$props;
    	let { colorBG } = $$props;
    	let { sombra } = $$props;
    	let { iconoBotonEstadoUnoUrl } = $$props;
    	let { iconoBotonAltura } = $$props;

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$set = $$props => {
    		if ("imagenUrl" in $$props) $$invalidate(0, imagenUrl = $$props.imagenUrl);
    		if ("titulo" in $$props) $$invalidate(1, titulo = $$props.titulo);
    		if ("nivelTitulo" in $$props) $$invalidate(2, nivelTitulo = $$props.nivelTitulo);
    		if ("colorTitulo" in $$props) $$invalidate(3, colorTitulo = $$props.colorTitulo);
    		if ("texto" in $$props) $$invalidate(4, texto = $$props.texto);
    		if ("color" in $$props) $$invalidate(5, color = $$props.color);
    		if ("colorBG" in $$props) $$invalidate(6, colorBG = $$props.colorBG);
    		if ("sombra" in $$props) $$invalidate(7, sombra = $$props.sombra);
    		if ("iconoBotonEstadoUnoUrl" in $$props) $$invalidate(8, iconoBotonEstadoUnoUrl = $$props.iconoBotonEstadoUnoUrl);
    		if ("iconoBotonAltura" in $$props) $$invalidate(9, iconoBotonAltura = $$props.iconoBotonAltura);
    	};

    	return [
    		imagenUrl,
    		titulo,
    		nivelTitulo,
    		colorTitulo,
    		texto,
    		color,
    		colorBG,
    		sombra,
    		iconoBotonEstadoUnoUrl,
    		iconoBotonAltura,
    		click_handler
    	];
    }

    class TarjetaHorizontal extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-qc0sp0-style")) add_css$f();

    		init(this, options, instance$p, create_fragment$p, safe_not_equal, {
    			imagenUrl: 0,
    			titulo: 1,
    			nivelTitulo: 2,
    			colorTitulo: 3,
    			texto: 4,
    			color: 5,
    			colorBG: 6,
    			sombra: 7,
    			iconoBotonEstadoUnoUrl: 8,
    			iconoBotonAltura: 9
    		});
    	}
    }

    /* src/componentes/Tarjetas/TarjetaVertical/TarjetaVertical.svelte generated by Svelte v3.19.1 */

    function add_css$g() {
    	var style = element("style");
    	style.id = "svelte-wqiyr2-style";
    	style.textContent = "article.svelte-wqiyr2{max-width:20rem;height:auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;border-radius:0.25rem;background-color:rgb(255);color:rgb(0, 0, 0)}.tarjeta-imagen.svelte-wqiyr2{width:100%;height:10rem}.tarjeta-texto.svelte-wqiyr2{box-sizing:border-box;padding:1rem 2rem;width:100%}.tarjeta-boton.svelte-wqiyr2{display:flex;justify-content:center;width:100%}.sombra.svelte-wqiyr2{box-shadow:-1px 2px 3px rgba(0, 0, 0, 5)}";
    	append(document.head, style);
    }

    // (58:4) {#if !!titulo}
    function create_if_block_1$5(ctx) {
    	let current;

    	const titulo_1 = new Titulo({
    			props: {
    				texto: /*titulo*/ ctx[1],
    				nivel: /*nivelTitulo*/ ctx[2],
    				color: /*colorTitulo*/ ctx[3]
    			}
    		});

    	return {
    		c() {
    			create_component(titulo_1.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(titulo_1, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const titulo_1_changes = {};
    			if (dirty & /*titulo*/ 2) titulo_1_changes.texto = /*titulo*/ ctx[1];
    			if (dirty & /*nivelTitulo*/ 4) titulo_1_changes.nivel = /*nivelTitulo*/ ctx[2];
    			if (dirty & /*colorTitulo*/ 8) titulo_1_changes.color = /*colorTitulo*/ ctx[3];
    			titulo_1.$set(titulo_1_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(titulo_1.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(titulo_1.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(titulo_1, detaching);
    		}
    	};
    }

    // (61:4) {#if !!texto}
    function create_if_block$b(ctx) {
    	let current;

    	const parrafo = new Parrafo({
    			props: {
    				texto: /*texto*/ ctx[4],
    				color: /*color*/ ctx[5]
    			}
    		});

    	return {
    		c() {
    			create_component(parrafo.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(parrafo, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const parrafo_changes = {};
    			if (dirty & /*texto*/ 16) parrafo_changes.texto = /*texto*/ ctx[4];
    			if (dirty & /*color*/ 32) parrafo_changes.color = /*color*/ ctx[5];
    			parrafo.$set(parrafo_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(parrafo.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(parrafo.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(parrafo, detaching);
    		}
    	};
    }

    function create_fragment$q(ctx) {
    	let article;
    	let div0;
    	let t0;
    	let div2;
    	let t1;
    	let t2;
    	let div1;
    	let article_class_value;
    	let current;

    	const imagen = new Imagen({
    			props: {
    				imagenUrl: /*imagenUrl*/ ctx[0],
    				altTexto: /*titulo*/ ctx[1],
    				ajuste: "cover"
    			}
    		});

    	let if_block0 = !!/*titulo*/ ctx[1] && create_if_block_1$5(ctx);
    	let if_block1 = !!/*texto*/ ctx[4] && create_if_block$b(ctx);

    	const boton = new Boton({
    			props: {
    				radius: "15px",
    				texto: "Saber más",
    				iconoBotonEstadoUnoUrl: /*iconoBotonEstadoUnoUrl*/ ctx[8],
    				iconoBotonAltura: /*iconoBotonAltura*/ ctx[9]
    			}
    		});

    	boton.$on("click", /*click_handler*/ ctx[10]);

    	return {
    		c() {
    			article = element("article");
    			div0 = element("div");
    			create_component(imagen.$$.fragment);
    			t0 = space();
    			div2 = element("div");
    			if (if_block0) if_block0.c();
    			t1 = space();
    			if (if_block1) if_block1.c();
    			t2 = space();
    			div1 = element("div");
    			create_component(boton.$$.fragment);
    			attr(div0, "class", "tarjeta-imagen svelte-wqiyr2");
    			attr(div1, "class", "tarjeta-boton svelte-wqiyr2");
    			attr(div2, "class", "tarjeta-texto svelte-wqiyr2");
    			set_style(article, "background-color", /*colorBG*/ ctx[6]);
    			attr(article, "class", article_class_value = "" + (null_to_empty(!!/*sombra*/ ctx[7] ? "sombra" : "") + " svelte-wqiyr2"));
    		},
    		m(target, anchor) {
    			insert(target, article, anchor);
    			append(article, div0);
    			mount_component(imagen, div0, null);
    			append(article, t0);
    			append(article, div2);
    			if (if_block0) if_block0.m(div2, null);
    			append(div2, t1);
    			if (if_block1) if_block1.m(div2, null);
    			append(div2, t2);
    			append(div2, div1);
    			mount_component(boton, div1, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const imagen_changes = {};
    			if (dirty & /*imagenUrl*/ 1) imagen_changes.imagenUrl = /*imagenUrl*/ ctx[0];
    			if (dirty & /*titulo*/ 2) imagen_changes.altTexto = /*titulo*/ ctx[1];
    			imagen.$set(imagen_changes);

    			if (!!/*titulo*/ ctx[1]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    					transition_in(if_block0, 1);
    				} else {
    					if_block0 = create_if_block_1$5(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(div2, t1);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			if (!!/*texto*/ ctx[4]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    					transition_in(if_block1, 1);
    				} else {
    					if_block1 = create_if_block$b(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(div2, t2);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}

    			const boton_changes = {};
    			if (dirty & /*iconoBotonEstadoUnoUrl*/ 256) boton_changes.iconoBotonEstadoUnoUrl = /*iconoBotonEstadoUnoUrl*/ ctx[8];
    			if (dirty & /*iconoBotonAltura*/ 512) boton_changes.iconoBotonAltura = /*iconoBotonAltura*/ ctx[9];
    			boton.$set(boton_changes);

    			if (!current || dirty & /*colorBG*/ 64) {
    				set_style(article, "background-color", /*colorBG*/ ctx[6]);
    			}

    			if (!current || dirty & /*sombra*/ 128 && article_class_value !== (article_class_value = "" + (null_to_empty(!!/*sombra*/ ctx[7] ? "sombra" : "") + " svelte-wqiyr2"))) {
    				attr(article, "class", article_class_value);
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(imagen.$$.fragment, local);
    			transition_in(if_block0);
    			transition_in(if_block1);
    			transition_in(boton.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(imagen.$$.fragment, local);
    			transition_out(if_block0);
    			transition_out(if_block1);
    			transition_out(boton.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(article);
    			destroy_component(imagen);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			destroy_component(boton);
    		}
    	};
    }

    function instance$q($$self, $$props, $$invalidate) {
    	let { imagenUrl } = $$props;
    	let { titulo } = $$props;
    	let { nivelTitulo } = $$props;
    	let { colorTitulo } = $$props;
    	let { texto } = $$props;
    	let { color } = $$props;
    	let { colorBG } = $$props;
    	let { sombra } = $$props;
    	let { iconoBotonEstadoUnoUrl } = $$props;
    	let { iconoBotonAltura } = $$props;

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$set = $$props => {
    		if ("imagenUrl" in $$props) $$invalidate(0, imagenUrl = $$props.imagenUrl);
    		if ("titulo" in $$props) $$invalidate(1, titulo = $$props.titulo);
    		if ("nivelTitulo" in $$props) $$invalidate(2, nivelTitulo = $$props.nivelTitulo);
    		if ("colorTitulo" in $$props) $$invalidate(3, colorTitulo = $$props.colorTitulo);
    		if ("texto" in $$props) $$invalidate(4, texto = $$props.texto);
    		if ("color" in $$props) $$invalidate(5, color = $$props.color);
    		if ("colorBG" in $$props) $$invalidate(6, colorBG = $$props.colorBG);
    		if ("sombra" in $$props) $$invalidate(7, sombra = $$props.sombra);
    		if ("iconoBotonEstadoUnoUrl" in $$props) $$invalidate(8, iconoBotonEstadoUnoUrl = $$props.iconoBotonEstadoUnoUrl);
    		if ("iconoBotonAltura" in $$props) $$invalidate(9, iconoBotonAltura = $$props.iconoBotonAltura);
    	};

    	return [
    		imagenUrl,
    		titulo,
    		nivelTitulo,
    		colorTitulo,
    		texto,
    		color,
    		colorBG,
    		sombra,
    		iconoBotonEstadoUnoUrl,
    		iconoBotonAltura,
    		click_handler
    	];
    }

    class TarjetaVertical extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-wqiyr2-style")) add_css$g();

    		init(this, options, instance$q, create_fragment$q, safe_not_equal, {
    			imagenUrl: 0,
    			titulo: 1,
    			nivelTitulo: 2,
    			colorTitulo: 3,
    			texto: 4,
    			color: 5,
    			colorBG: 6,
    			sombra: 7,
    			iconoBotonEstadoUnoUrl: 8,
    			iconoBotonAltura: 9
    		});
    	}
    }

    /* src/componentes/Tarjetas/Tarjeta/Tarjeta.svelte generated by Svelte v3.19.1 */

    function create_else_block$2(ctx) {
    	let current;

    	const tarjetavertical = new TarjetaVertical({
    			props: {
    				imagenUrl: /*imagenUrl*/ ctx[0],
    				titulo: /*titulo*/ ctx[1],
    				nivelTitulo: /*nivelTitulo*/ ctx[2],
    				colorTitulo: /*colorTitulo*/ ctx[3],
    				texto: /*texto*/ ctx[4],
    				color: /*color*/ ctx[5],
    				colorBG: /*colorBG*/ ctx[6],
    				sombra: /*sombra*/ ctx[7]
    			}
    		});

    	return {
    		c() {
    			create_component(tarjetavertical.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(tarjetavertical, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const tarjetavertical_changes = {};
    			if (dirty & /*imagenUrl*/ 1) tarjetavertical_changes.imagenUrl = /*imagenUrl*/ ctx[0];
    			if (dirty & /*titulo*/ 2) tarjetavertical_changes.titulo = /*titulo*/ ctx[1];
    			if (dirty & /*nivelTitulo*/ 4) tarjetavertical_changes.nivelTitulo = /*nivelTitulo*/ ctx[2];
    			if (dirty & /*colorTitulo*/ 8) tarjetavertical_changes.colorTitulo = /*colorTitulo*/ ctx[3];
    			if (dirty & /*texto*/ 16) tarjetavertical_changes.texto = /*texto*/ ctx[4];
    			if (dirty & /*color*/ 32) tarjetavertical_changes.color = /*color*/ ctx[5];
    			if (dirty & /*colorBG*/ 64) tarjetavertical_changes.colorBG = /*colorBG*/ ctx[6];
    			if (dirty & /*sombra*/ 128) tarjetavertical_changes.sombra = /*sombra*/ ctx[7];
    			tarjetavertical.$set(tarjetavertical_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(tarjetavertical.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(tarjetavertical.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(tarjetavertical, detaching);
    		}
    	};
    }

    // (28:0) {#if ventana > breakpoint}
    function create_if_block$c(ctx) {
    	let current;

    	const tarjetahorizontal = new TarjetaHorizontal({
    			props: {
    				imagenUrl: /*imagenUrl*/ ctx[0],
    				titulo: /*titulo*/ ctx[1],
    				nivelTitulo: /*nivelTitulo*/ ctx[2],
    				colorTitulo: /*colorTitulo*/ ctx[3],
    				texto: /*texto*/ ctx[4],
    				color: /*color*/ ctx[5],
    				colorBG: /*colorBG*/ ctx[6],
    				sombra: /*sombra*/ ctx[7]
    			}
    		});

    	return {
    		c() {
    			create_component(tarjetahorizontal.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(tarjetahorizontal, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const tarjetahorizontal_changes = {};
    			if (dirty & /*imagenUrl*/ 1) tarjetahorizontal_changes.imagenUrl = /*imagenUrl*/ ctx[0];
    			if (dirty & /*titulo*/ 2) tarjetahorizontal_changes.titulo = /*titulo*/ ctx[1];
    			if (dirty & /*nivelTitulo*/ 4) tarjetahorizontal_changes.nivelTitulo = /*nivelTitulo*/ ctx[2];
    			if (dirty & /*colorTitulo*/ 8) tarjetahorizontal_changes.colorTitulo = /*colorTitulo*/ ctx[3];
    			if (dirty & /*texto*/ 16) tarjetahorizontal_changes.texto = /*texto*/ ctx[4];
    			if (dirty & /*color*/ 32) tarjetahorizontal_changes.color = /*color*/ ctx[5];
    			if (dirty & /*colorBG*/ 64) tarjetahorizontal_changes.colorBG = /*colorBG*/ ctx[6];
    			if (dirty & /*sombra*/ 128) tarjetahorizontal_changes.sombra = /*sombra*/ ctx[7];
    			tarjetahorizontal.$set(tarjetahorizontal_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(tarjetahorizontal.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(tarjetahorizontal.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(tarjetahorizontal, detaching);
    		}
    	};
    }

    function create_fragment$r(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	let dispose;
    	add_render_callback(/*onwindowresize*/ ctx[9]);
    	const if_block_creators = [create_if_block$c, create_else_block$2];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*ventana*/ ctx[8] > breakpoint$1) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	return {
    		c() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m(target, anchor) {
    			if_blocks[current_block_type_index].m(target, anchor);
    			insert(target, if_block_anchor, anchor);
    			current = true;
    			dispose = listen(window, "resize", /*onwindowresize*/ ctx[9]);
    		},
    		p(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(if_block_anchor.parentNode, if_block_anchor);
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d(detaching) {
    			if_blocks[current_block_type_index].d(detaching);
    			if (detaching) detach(if_block_anchor);
    			dispose();
    		}
    	};
    }

    let breakpoint$1 = 720;

    function instance$r($$self, $$props, $$invalidate) {
    	let { imagenUrl } = $$props;
    	let { titulo } = $$props;
    	let { nivelTitulo } = $$props;
    	let { colorTitulo } = $$props;
    	let { texto } = $$props;
    	let { color } = $$props;
    	let { colorBG } = $$props;
    	let { sombra } = $$props;
    	let ventana;

    	function onwindowresize() {
    		$$invalidate(8, ventana = window.innerWidth);
    	}

    	$$self.$set = $$props => {
    		if ("imagenUrl" in $$props) $$invalidate(0, imagenUrl = $$props.imagenUrl);
    		if ("titulo" in $$props) $$invalidate(1, titulo = $$props.titulo);
    		if ("nivelTitulo" in $$props) $$invalidate(2, nivelTitulo = $$props.nivelTitulo);
    		if ("colorTitulo" in $$props) $$invalidate(3, colorTitulo = $$props.colorTitulo);
    		if ("texto" in $$props) $$invalidate(4, texto = $$props.texto);
    		if ("color" in $$props) $$invalidate(5, color = $$props.color);
    		if ("colorBG" in $$props) $$invalidate(6, colorBG = $$props.colorBG);
    		if ("sombra" in $$props) $$invalidate(7, sombra = $$props.sombra);
    	};

    	return [
    		imagenUrl,
    		titulo,
    		nivelTitulo,
    		colorTitulo,
    		texto,
    		color,
    		colorBG,
    		sombra,
    		ventana,
    		onwindowresize
    	];
    }

    class Tarjeta extends SvelteComponent {
    	constructor(options) {
    		super();

    		init(this, options, instance$r, create_fragment$r, safe_not_equal, {
    			imagenUrl: 0,
    			titulo: 1,
    			nivelTitulo: 2,
    			colorTitulo: 3,
    			texto: 4,
    			color: 5,
    			colorBG: 6,
    			sombra: 7
    		});
    	}
    }

    /*!
     * escape-html
     * Copyright(c) 2012-2013 TJ Holowaychuk
     * Copyright(c) 2015 Andreas Lubbe
     * Copyright(c) 2015 Tiancheng "Timothy" Gu
     * MIT Licensed
     */

    /**
     * Module variables.
     * @private
     */

    var matchHtmlRegExp = /["'&<>]/;

    /**
     * Module exports.
     * @public
     */

    module.exports = escapeHtml;

    /**
     * Escape special characters in the given string of html.
     *
     * @param  {string} string The string to escape for inserting into HTML
     * @return {string}
     * @public
     */

    function escapeHtml(string) {
      var str = '' + string;
      var match = matchHtmlRegExp.exec(str);

      if (!match) {
        return str;
      }

      var escape;
      var html = '';
      var index = 0;
      var lastIndex = 0;

      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34: // "
            escape = '&quot;';
            break;
          case 38: // &
            escape = '&amp;';
            break;
          case 39: // '
            escape = '&#39;';
            break;
          case 60: // <
            escape = '&lt;';
            break;
          case 62: // >
            escape = '&gt;';
            break;
          default:
            continue;
        }

        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }

        lastIndex = index + 1;
        html += escape;
      }

      return lastIndex !== index
        ? html + str.substring(lastIndex, index)
        : html;
    }

    const generar = (etiqueta,cerrar=false,atributos) => {

        let atributosHtml = '';

        if( typeof atributos == 'object' ) {
            
            Object.keys(atributos).forEach((k,i)=>{
                atributosHtml += `${k}="${atributos[k]}"`;
                if( i<atributos.length-1) {
                    atributosHtml += `${k}="${atributos[k]}"`;
                }
            });
        }

        return `<${ cerrar ? '/' : '' }${etiqueta}${atributosHtml? " " + atributosHtml : ""}>`;
        
    };

    const etiqueta = (etiqueta,texto,atributos) => {


        let html = abrir(
            etiqueta,
            atributos
        );

        html += texto;

        html += cerrar(
            etiqueta
        );

        return html;
        
    };

    const abrir = (etiqueta, atributos) => {
        return generar(etiqueta,false,atributos)
    };


    const cerrar = (etiqueta) => {
        return generar(etiqueta,true)
    };

    const nombreGenerar = clave=>{
        let etiquetaNombre;
        
        switch(clave) {
            case "bold":
            case "strong":
                etiquetaNombre = 'strong';
                break;
            case "italic":
            case "em":
                etiquetaNombre = 'em';
                break;
            case "strikethrough":
            case "delete":
                etiquetaNombre = 'del';
                break;
            case "underline":
                etiquetaNombre = 'u';
                break;
        }

        return etiquetaNombre
    };

    var generadorEtiquetas = {
        abrir,
        cerrar,
        etiqueta,
        nombreGenerar
    };

    /* src/elementos/texto/Texto/Texto.svelte generated by Svelte v3.19.1 */

    function create_fragment$s(ctx) {
    	let html_tag;

    	return {
    		c() {
    			html_tag = new HtmlTag(/*html*/ ctx[0], null);
    		},
    		m(target, anchor) {
    			html_tag.m(target, anchor);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*html*/ 1) html_tag.p(/*html*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) html_tag.d();
    		}
    	};
    }

    function instance$s($$self, $$props, $$invalidate) {
    	let { estilos } = $$props;
    	let { texto } = $$props;
    	let { tamanno } = $$props;
    	let html = "";

    	const generarTexto = (estilos, texto) => {
    		if (Array.isArray(estilos)) {
    			estilos.forEach(e => {
    				$$invalidate(0, html += generadorEtiquetas.abrir(generadorEtiquetas.nombreGenerar(e), { "style": `font-size: ${tamanno}` }));
    			});
    		}

    		// html += escapeHtml(texto)
    		$$invalidate(0, html += texto);

    		// html += texto
    		if (Array.isArray(estilos)) {
    			estilos.forEach(e => {
    				$$invalidate(0, html += generadorEtiquetas.cerrar(generadorEtiquetas.nombreGenerar(e)));
    			});
    		}
    	};

    	$$self.$set = $$props => {
    		if ("estilos" in $$props) $$invalidate(1, estilos = $$props.estilos);
    		if ("texto" in $$props) $$invalidate(2, texto = $$props.texto);
    		if ("tamanno" in $$props) $$invalidate(3, tamanno = $$props.tamanno);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*estilos, texto*/ 6) {
    			 generarTexto(estilos, texto);
    		}
    	};

    	return [html, estilos, texto, tamanno];
    }

    class Texto extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$s, create_fragment$s, safe_not_equal, { estilos: 1, texto: 2, tamanno: 3 });
    	}
    }

    /* src/elementos/enlaces/Enlace/Enlace.svelte generated by Svelte v3.19.1 */

    function create_fragment$t(ctx) {
    	let a;
    	let current;

    	const bloque = new Bloque({
    			props: {
    				contenido: /*contenido*/ ctx[1],
    				texto: /*texto*/ ctx[0]
    			}
    		});

    	let a_levels = [{ href: "..." }, /*atributos*/ ctx[2]];
    	let a_data = {};

    	for (let i = 0; i < a_levels.length; i += 1) {
    		a_data = assign(a_data, a_levels[i]);
    	}

    	return {
    		c() {
    			a = element("a");
    			create_component(bloque.$$.fragment);
    			set_attributes(a, a_data);
    		},
    		m(target, anchor) {
    			insert(target, a, anchor);
    			mount_component(bloque, a, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const bloque_changes = {};
    			if (dirty & /*contenido*/ 2) bloque_changes.contenido = /*contenido*/ ctx[1];
    			if (dirty & /*texto*/ 1) bloque_changes.texto = /*texto*/ ctx[0];
    			bloque.$set(bloque_changes);
    			set_attributes(a, get_spread_update(a_levels, [{ href: "..." }, dirty & /*atributos*/ 4 && /*atributos*/ ctx[2]]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(bloque.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(bloque.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(a);
    			destroy_component(bloque);
    		}
    	};
    }

    function instance$t($$self, $$props, $$invalidate) {
    	let { href } = $$props;
    	let { texto } = $$props;
    	let { contenido } = $$props;
    	let { blank } = $$props;
    	const atributos = { href };

    	$$self.$set = $$props => {
    		if ("href" in $$props) $$invalidate(3, href = $$props.href);
    		if ("texto" in $$props) $$invalidate(0, texto = $$props.texto);
    		if ("contenido" in $$props) $$invalidate(1, contenido = $$props.contenido);
    		if ("blank" in $$props) $$invalidate(4, blank = $$props.blank);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*blank*/ 16) {
    			 (target => {
    				$$invalidate(2, atributos["target"] = !!target, atributos);
    			})(blank);
    		}
    	};

    	return [texto, contenido, atributos, href, blank];
    }

    class Enlace extends SvelteComponent {
    	constructor(options) {
    		super();

    		init(this, options, instance$t, create_fragment$t, safe_not_equal, {
    			href: 3,
    			texto: 0,
    			contenido: 1,
    			blank: 4
    		});
    	}
    }

    /* src/elementos/listas/ListaElemento/ListaElemento.svelte generated by Svelte v3.19.1 */

    function create_fragment$u(ctx) {
    	let li;
    	let current;

    	const bloque = new Bloque({
    			props: {
    				contenido: /*contenido*/ ctx[1],
    				texto: /*texto*/ ctx[0]
    			}
    		});

    	let li_levels = [/*atributos*/ ctx[2]];
    	let li_data = {};

    	for (let i = 0; i < li_levels.length; i += 1) {
    		li_data = assign(li_data, li_levels[i]);
    	}

    	return {
    		c() {
    			li = element("li");
    			create_component(bloque.$$.fragment);
    			set_attributes(li, li_data);
    		},
    		m(target, anchor) {
    			insert(target, li, anchor);
    			mount_component(bloque, li, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const bloque_changes = {};
    			if (dirty & /*contenido*/ 2) bloque_changes.contenido = /*contenido*/ ctx[1];
    			if (dirty & /*texto*/ 1) bloque_changes.texto = /*texto*/ ctx[0];
    			bloque.$set(bloque_changes);
    			set_attributes(li, get_spread_update(li_levels, [dirty & /*atributos*/ 4 && /*atributos*/ ctx[2]]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(bloque.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(bloque.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(li);
    			destroy_component(bloque);
    		}
    	};
    }

    function instance$u($$self, $$props, $$invalidate) {
    	let { texto } = $$props;
    	let { contenido } = $$props;
    	let { data } = $$props;

    	$$self.$set = $$props => {
    		if ("texto" in $$props) $$invalidate(0, texto = $$props.texto);
    		if ("contenido" in $$props) $$invalidate(1, contenido = $$props.contenido);
    		if ("data" in $$props) $$invalidate(3, data = $$props.data);
    	};

    	let atributos;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*data*/ 8) {
    			 $$invalidate(2, atributos = typeof data == "object" ? data : {});
    		}
    	};

    	return [texto, contenido, atributos, data];
    }

    class ListaElemento extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$u, create_fragment$u, safe_not_equal, { texto: 0, contenido: 1, data: 3 });
    	}
    }

    /* src/elementos/listas/ListaDesordenada/ListaDesordenada.svelte generated by Svelte v3.19.1 */

    function create_fragment$v(ctx) {
    	let ul;
    	let current;

    	const bloque = new Bloque({
    			props: {
    				contenido: /*contenido*/ ctx[1],
    				texto: /*texto*/ ctx[0]
    			}
    		});

    	let ul_levels = [/*atributos*/ ctx[2]];
    	let ul_data = {};

    	for (let i = 0; i < ul_levels.length; i += 1) {
    		ul_data = assign(ul_data, ul_levels[i]);
    	}

    	return {
    		c() {
    			ul = element("ul");
    			create_component(bloque.$$.fragment);
    			set_attributes(ul, ul_data);
    		},
    		m(target, anchor) {
    			insert(target, ul, anchor);
    			mount_component(bloque, ul, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const bloque_changes = {};
    			if (dirty & /*contenido*/ 2) bloque_changes.contenido = /*contenido*/ ctx[1];
    			if (dirty & /*texto*/ 1) bloque_changes.texto = /*texto*/ ctx[0];
    			bloque.$set(bloque_changes);
    			set_attributes(ul, get_spread_update(ul_levels, [dirty & /*atributos*/ 4 && /*atributos*/ ctx[2]]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(bloque.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(bloque.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(ul);
    			destroy_component(bloque);
    		}
    	};
    }

    function instance$v($$self, $$props, $$invalidate) {
    	let { texto } = $$props;
    	let { contenido } = $$props;
    	let { data } = $$props;

    	$$self.$set = $$props => {
    		if ("texto" in $$props) $$invalidate(0, texto = $$props.texto);
    		if ("contenido" in $$props) $$invalidate(1, contenido = $$props.contenido);
    		if ("data" in $$props) $$invalidate(3, data = $$props.data);
    	};

    	let atributos;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*data*/ 8) {
    			 $$invalidate(2, atributos = typeof data == "object" ? data : {});
    		}
    	};

    	return [texto, contenido, atributos, data];
    }

    class ListaDesordenada extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$v, create_fragment$v, safe_not_equal, { texto: 0, contenido: 1, data: 3 });
    	}
    }

    /* src/elementos/listas/ListaOrdenada/ListaOrdenada.svelte generated by Svelte v3.19.1 */

    function create_fragment$w(ctx) {
    	let ol;
    	let current;

    	const bloque = new Bloque({
    			props: {
    				contenido: /*contenido*/ ctx[1],
    				texto: /*texto*/ ctx[0]
    			}
    		});

    	let ol_levels = [/*atributos*/ ctx[2]];
    	let ol_data = {};

    	for (let i = 0; i < ol_levels.length; i += 1) {
    		ol_data = assign(ol_data, ol_levels[i]);
    	}

    	return {
    		c() {
    			ol = element("ol");
    			create_component(bloque.$$.fragment);
    			set_attributes(ol, ol_data);
    		},
    		m(target, anchor) {
    			insert(target, ol, anchor);
    			mount_component(bloque, ol, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const bloque_changes = {};
    			if (dirty & /*contenido*/ 2) bloque_changes.contenido = /*contenido*/ ctx[1];
    			if (dirty & /*texto*/ 1) bloque_changes.texto = /*texto*/ ctx[0];
    			bloque.$set(bloque_changes);
    			set_attributes(ol, get_spread_update(ol_levels, [dirty & /*atributos*/ 4 && /*atributos*/ ctx[2]]));
    		},
    		i(local) {
    			if (current) return;
    			transition_in(bloque.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(bloque.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(ol);
    			destroy_component(bloque);
    		}
    	};
    }

    function instance$w($$self, $$props, $$invalidate) {
    	let { texto } = $$props;
    	let { contenido } = $$props;
    	let { data } = $$props;

    	$$self.$set = $$props => {
    		if ("texto" in $$props) $$invalidate(0, texto = $$props.texto);
    		if ("contenido" in $$props) $$invalidate(1, contenido = $$props.contenido);
    		if ("data" in $$props) $$invalidate(3, data = $$props.data);
    	};

    	let atributos;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*data*/ 8) {
    			 $$invalidate(2, atributos = typeof data == "object" ? data : {});
    		}
    	};

    	return [texto, contenido, atributos, data];
    }

    class ListaOrdenada extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$w, create_fragment$w, safe_not_equal, { texto: 0, contenido: 1, data: 3 });
    	}
    }

    /* src/componentes/Contenido/Contenido.svelte generated by Svelte v3.19.1 */

    function get_each_context$6(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	child_ctx[7] = i;
    	return child_ctx;
    }

    // (117:0) {#if Array.isArray(bloques) }
    function create_if_block$d(ctx) {
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let each_1_anchor;
    	let current;
    	let each_value = /*bloques*/ ctx[1];
    	const get_key = ctx => "bloque_" + /*i*/ ctx[7];

    	for (let i = 0; i < each_value.length; i += 1) {
    		let child_ctx = get_each_context$6(ctx, each_value, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block$6(key, child_ctx));
    	}

    	return {
    		c() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			if (dirty & /*bloques, tamanno*/ 3) {
    				const each_value = /*bloques*/ ctx[1];
    				group_outros();
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block$6, each_1_anchor, get_each_context$6);
    				check_outros();
    			}
    		},
    		i(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o(local) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d(detaching) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d(detaching);
    			}

    			if (detaching) detach(each_1_anchor);
    		}
    	};
    }

    // (118:2) {#each bloques as bloque,i ("bloque_"+i) }
    function create_each_block$6(key_1, ctx) {
    	let first;
    	let current;

    	const bloque = new Bloque({
    			props: {
    				contenido: /*bloque*/ ctx[5],
    				tamanno: /*tamanno*/ ctx[0]
    			}
    		});

    	return {
    		key: key_1,
    		first: null,
    		c() {
    			first = empty();
    			create_component(bloque.$$.fragment);
    			this.first = first;
    		},
    		m(target, anchor) {
    			insert(target, first, anchor);
    			mount_component(bloque, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const bloque_changes = {};
    			if (dirty & /*bloques*/ 2) bloque_changes.contenido = /*bloque*/ ctx[5];
    			if (dirty & /*tamanno*/ 1) bloque_changes.tamanno = /*tamanno*/ ctx[0];
    			bloque.$set(bloque_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(bloque.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(bloque.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(first);
    			destroy_component(bloque, detaching);
    		}
    	};
    }

    function create_fragment$x(ctx) {
    	let show_if = Array.isArray(/*bloques*/ ctx[1]);
    	let if_block_anchor;
    	let current;
    	let if_block = show_if && create_if_block$d(ctx);

    	return {
    		c() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		m(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*bloques*/ 2) show_if = Array.isArray(/*bloques*/ ctx[1]);

    			if (show_if) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block$d(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach(if_block_anchor);
    		}
    	};
    }

    function instance$x($$self, $$props, $$invalidate) {
    	let { documento } = $$props;
    	let { tamanno } = $$props;

    	const generarContenido = nodo => {
    		// let elementos = []
    		if (Array.isArray(nodo)) {
    			return nodo.map(n => generarContenido(n));
    		} else {

    			switch (nodo.object) {
    				case "block":
    					switch (nodo.type) {
    						case "paragraph":
    							return {
    								componente: Parrafo,
    								data: { contenido: generarContenido(nodo.nodes) }
    							};
    						case "heading":
    							return {
    								componente: Titulo,
    								data: { contenido: generarContenido(nodo.nodes) }
    							};
    						case "ordered-list":
    							return {
    								componente: ListaOrdenada,
    								data: { contenido: generarContenido(nodo.nodes) }
    							};
    						case "unordered-list":
    							return {
    								componente: ListaDesordenada,
    								data: { contenido: generarContenido(nodo.nodes) }
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
    					}
    					
    					break;
    			}
    		}
    	};

    	$$self.$set = $$props => {
    		if ("documento" in $$props) $$invalidate(2, documento = $$props.documento);
    		if ("tamanno" in $$props) $$invalidate(0, tamanno = $$props.tamanno);
    	};

    	let bloquesJSON;
    	let bloques;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*documento*/ 4) {
    			 $$invalidate(3, bloquesJSON = !!documento ? JSON.parse(documento).nodes : []);
    		}

    		if ($$self.$$.dirty & /*bloquesJSON*/ 8) {
    			 $$invalidate(1, bloques = bloquesJSON.map(bloque => generarContenido(bloque)));
    		}

    		if ($$self.$$.dirty & /*bloquesJSON*/ 8) {
    			 console.log(bloquesJSON);
    		}
    	};

    	return [tamanno, bloques, documento];
    }

    class Contenido extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$x, create_fragment$x, safe_not_equal, { documento: 2, tamanno: 0 });
    	}
    }

    /* src/componentes/Mapa/Mapa.svelte generated by Svelte v3.19.1 */

    const { document: document_1 } = globals;

    function add_css$h() {
    	var style = element("style");
    	style.id = "svelte-1bi0kvv-style";
    	style.textContent = ".mapa.svelte-1bi0kvv.svelte-1bi0kvv{position:relative;background:#aaa;transition:opacity 0.4s;opacity:0}.mapa.svelte-1bi0kvv>header.svelte-1bi0kvv{position:absolute;top:1rem;left:1rem;display:flex;width:100%}.mapa.svelte-1bi0kvv>header button.svelte-1bi0kvv{border:none;background:rgba(0,0,0,0.3);padding:0.5rem 1rem;color:#fff}.mapa.listo{opacity:1 !important}.mapa path{fill:#bbb;stroke:#aaa;transition:fill 0.5s}.mapa path:hover{fill:#ccc  }.mapa path[active=\"true\"]{fill:#ddd  }.mapa path[inhabilitado=\"true\"]{fill:#9a9a9a  }";
    	append(document_1.head, style);
    }

    // (256:8) {#if !! pathSeleccionado}
    function create_if_block$e(ctx) {
    	let button;
    	let dispose;

    	return {
    		c() {
    			button = element("button");
    			button.textContent = "Regresar";
    			attr(button, "class", "svelte-1bi0kvv");
    		},
    		m(target, anchor) {
    			insert(target, button, anchor);
    			dispose = listen(button, "click", /*click_handler*/ ctx[18]);
    		},
    		p: noop,
    		d(detaching) {
    			if (detaching) detach(button);
    			dispose();
    		}
    	};
    }

    function create_fragment$y(ctx) {
    	let div;
    	let header;
    	let t;
    	let html_tag;
    	let div_style_value;
    	let if_block = !!/*pathSeleccionado*/ ctx[4] && create_if_block$e(ctx);

    	return {
    		c() {
    			div = element("div");
    			header = element("header");
    			if (if_block) if_block.c();
    			t = space();
    			attr(header, "class", "svelte-1bi0kvv");
    			html_tag = new HtmlTag(/*mapa*/ ctx[1], null);
    			attr(div, "class", "mapa svelte-1bi0kvv");
    			attr(div, "style", div_style_value = `width: ${/*ancho*/ ctx[2]}px; height: ${/*alto*/ ctx[3]}px`);
    		},
    		m(target, anchor) {
    			insert(target, div, anchor);
    			append(div, header);
    			if (if_block) if_block.m(header, null);
    			append(div, t);
    			html_tag.m(div);
    		},
    		p(ctx, [dirty]) {
    			if (!!/*pathSeleccionado*/ ctx[4]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$e(ctx);
    					if_block.c();
    					if_block.m(header, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*mapa*/ 2) html_tag.p(/*mapa*/ ctx[1]);

    			if (dirty & /*ancho, alto*/ 12 && div_style_value !== (div_style_value = `width: ${/*ancho*/ ctx[2]}px; height: ${/*alto*/ ctx[3]}px`)) {
    				attr(div, "style", div_style_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(div);
    			if (if_block) if_block.d();
    		}
    	};
    }

    function instance$y($$self, $$props, $$invalidate) {
    	let { seleccionar } = $$props;
    	let { mapa } = $$props;
    	let { datos } = $$props;
    	let { ancho = 300 } = $$props;
    	let { alto = 300 } = $$props;
    	let { seleccionado } = $$props;
    	let anchoOriginal;
    	let altoOriginal;
    	let pathSeleccionado;
    	let svg;
    	let paths;

    	onMount(() => {
    		configurar();
    	});

    	const configurar = () => {
    		$$invalidate(9, svg = document.getElementsByTagName("svg")[0]);
    		console.log("configurar!");

    		// containerHeight = svg.parentNode.clientHeight
    		if (!!svg) {
    			let contenedorAncho = svg.parentNode.clientWidth;
    			let contenedorAlto = svg.parentNode.clientHeight;
    			escalar(contenedorAncho, contenedorAlto);
    			setTimeout(() => svg.parentNode.classList.add("listo"), 300);
    			$$invalidate(10, paths = obtenerPaths());
    			const habilitados = activarHabilitados();

    			// paths.forEach(p=>p.removeEventListener('click',clicarPath))
    			paths.forEach(p => p.addEventListener("click", clicarPath));
    		}
    	};

    	const escalar = (w, h) => {
    		let wFinal = w;
    		let hFinal = h;
    		let width = svg.getAttribute("width");
    		let height = svg.getAttribute("height");
    		svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    		svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    		setTimeout(() => {
    			anchoOriginal = width;
    			altoOriginal = height;
    			svg.setAttribute("width", wFinal);
    			svg.setAttribute("height", hFinal);
    		});
    	};

    	const obtenerPaths = () => {
    		const nodos = Array.from(svg.childNodes);
    		const paths = nodos.filter(n => n.tagName == "path");
    		return paths;
    	};

    	const clicarPath = e => {
    		const inhabilitado = e.target.getAttribute("inhabilitado");

    		if (inhabilitado !== false) {
    			$$invalidate(4, pathSeleccionado = e.target.getAttribute("id"));
    			const pathNombre = e.target.getAttribute("name");
    			centrarPath(e.target);

    			if (typeof seleccionar == "function") {
    				seleccionar(pathNombre);
    			}
    		}
    	};

    	const centrarPath = path => {
    		let x = path.getBBox().x;
    		let y = path.getBBox().y;
    		let w = path.getBBox().width * 1.618;
    		let h = path.getBBox().height * 1.618;

    		// const containerWidth = svg.parentNode.clientWidth
    		// const containerHeight = svg.parentNode.clientHeight
    		x = x - path.getBBox().width / (1.618 * 2);

    		y = y - path.getBBox().height / (1.618 * 2);

    		for (let i in paths) {
    			if (typeof paths[i] == "object") {
    				paths[i].removeAttribute("active");
    			}
    		}

    		path.setAttribute("active", true);
    		path.setAttribute("active", true);
    		path.parentNode.setAttribute("viewBox", `${x} ${y} ${w} ${h}`);
    	};

    	const regresar = () => {
    		for (let i in paths) {
    			if (typeof paths[i] == "object") {
    				paths[i].removeAttribute("active");
    			}
    		}

    		const width = anchoOriginal;
    		const height = altoOriginal;
    		svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    		$$invalidate(4, pathSeleccionado = null);
    	}; // seleccionar()

    	const activarHabilitados = () => {
    		if (!!paths) {
    			if (typeof datos == "object") {
    				if (Object.keys(datos).includes("habilitados")) {
    					if (Array.isArray(datos.habilitados)) {
    						const habilitados = paths.filter(p => datos.habilitados.includes(p.getAttribute("name")));

    						if (habilitados.length > 0) {
    							paths.forEach(p => {
    								// p.removeEventListener('click',clicarPath)
    								p.setAttribute("inhabilitado", true);
    							});

    							habilitados.forEach(p => {
    								p.setAttribute("inhabilitado", false);
    							}); // p.addEventListener('click',clicarPath)

    							return habilitados;
    						}
    					}
    				}
    			}
    		}

    		return [];
    	};

    	const click_handler = () => seleccionar();

    	$$self.$set = $$props => {
    		if ("seleccionar" in $$props) $$invalidate(0, seleccionar = $$props.seleccionar);
    		if ("mapa" in $$props) $$invalidate(1, mapa = $$props.mapa);
    		if ("datos" in $$props) $$invalidate(5, datos = $$props.datos);
    		if ("ancho" in $$props) $$invalidate(2, ancho = $$props.ancho);
    		if ("alto" in $$props) $$invalidate(3, alto = $$props.alto);
    		if ("seleccionado" in $$props) $$invalidate(6, seleccionado = $$props.seleccionado);
    	};

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*pathSeleccionado, paths, seleccionado*/ 1104) {
    			 (seleccion => {
    				console.log("checar", seleccion);

    				if (!seleccion && !!pathSeleccionado) {
    					regresar();
    					return;
    				}

    				if (!!paths) {
    					$$invalidate(4, pathSeleccionado = paths.find(p => p.getAttribute("name") == seleccion));

    					if (!!pathSeleccionado) {
    						setTimeout(() => centrarPath(pathSeleccionado));
    					}
    				}
    			})(seleccionado);
    		}

    		if ($$self.$$.dirty & /*ancho, alto, svg*/ 524) {
    			 ancho && alto && !!svg && escalar(ancho, alto);
    		}

    		if ($$self.$$.dirty & /*datos*/ 32) {
    			 datos && activarHabilitados();
    		}
    	};

    	return [
    		seleccionar,
    		mapa,
    		ancho,
    		alto,
    		pathSeleccionado,
    		datos,
    		seleccionado,
    		anchoOriginal,
    		altoOriginal,
    		svg,
    		paths,
    		configurar,
    		escalar,
    		obtenerPaths,
    		clicarPath,
    		centrarPath,
    		regresar,
    		activarHabilitados,
    		click_handler
    	];
    }

    class Mapa extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document_1.getElementById("svelte-1bi0kvv-style")) add_css$h();

    		init(this, options, instance$y, create_fragment$y, safe_not_equal, {
    			seleccionar: 0,
    			mapa: 1,
    			datos: 5,
    			ancho: 2,
    			alto: 3,
    			seleccionado: 6
    		});
    	}
    }

    /* src/componentes/VideoGaleria/VideoReproductor/VideoReproductor.svelte generated by Svelte v3.19.1 */

    function add_css$i() {
    	var style = element("style");
    	style.id = "svelte-7w8kwt-style";
    	style.textContent = ".VideoReproductor.svelte-7w8kwt{height:100%;width:100%}.VideoReproductor.svelte-7w8kwt iframe{height:100%;width:100%}";
    	append(document.head, style);
    }

    function create_fragment$z(ctx) {
    	let article;
    	let current;

    	const insertar = new Insertar({
    			props: {
    				url: /*url*/ ctx[0],
    				alto: /*alto*/ ctx[1],
    				ancho: /*ancho*/ ctx[2]
    			}
    		});

    	return {
    		c() {
    			article = element("article");
    			create_component(insertar.$$.fragment);
    			attr(article, "class", "VideoReproductor svelte-7w8kwt");
    		},
    		m(target, anchor) {
    			insert(target, article, anchor);
    			mount_component(insertar, article, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			const insertar_changes = {};
    			if (dirty & /*url*/ 1) insertar_changes.url = /*url*/ ctx[0];
    			if (dirty & /*alto*/ 2) insertar_changes.alto = /*alto*/ ctx[1];
    			if (dirty & /*ancho*/ 4) insertar_changes.ancho = /*ancho*/ ctx[2];
    			insertar.$set(insertar_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(insertar.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(insertar.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(article);
    			destroy_component(insertar);
    		}
    	};
    }

    function instance$z($$self, $$props, $$invalidate) {
    	let { url } = $$props;
    	let { titulo } = $$props;
    	let { alto } = $$props;
    	let { ancho } = $$props;

    	$$self.$set = $$props => {
    		if ("url" in $$props) $$invalidate(0, url = $$props.url);
    		if ("titulo" in $$props) $$invalidate(3, titulo = $$props.titulo);
    		if ("alto" in $$props) $$invalidate(1, alto = $$props.alto);
    		if ("ancho" in $$props) $$invalidate(2, ancho = $$props.ancho);
    	};

    	return [url, alto, ancho, titulo];
    }

    class VideoReproductor extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-7w8kwt-style")) add_css$i();
    		init(this, options, instance$z, create_fragment$z, safe_not_equal, { url: 0, titulo: 3, alto: 1, ancho: 2 });
    	}
    }

    var iconoPlay = "<svg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_d)\">\n<path d=\"M48.0738 21C48.0738 32.3297 39.042 41.5 27.9181 41.5C16.7941 41.5 7.76233 32.3297 7.76233 21C7.76233 9.67034 16.7941 0.5 27.9181 0.5C39.042 0.5 48.0738 9.67034 48.0738 21Z\" stroke=\"#FFF\"/>\n<path d=\"M22.9099 12.1736L37.9468 20.9998L22.9099 29.826L22.9099 12.1736Z\" stroke=\"#E5E5E5\"/>\n</g>\n<defs>\n<filter id=\"filter0_d\" x=\"0.262329\" y=\"0\" width=\"55.3115\" height=\"56\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"/>\n<feOffset dy=\"7\"/>\n<feGaussianBlur stdDeviation=\"3.5\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"/>\n</filter>\n</defs>\n</svg>\n";

    /* src/componentes/VideoGaleria/VideoTarjeta/VideoTarjeta.svelte generated by Svelte v3.19.1 */

    function add_css$j() {
    	var style = element("style");
    	style.id = "svelte-1f5rx2x-style";
    	style.textContent = ".VideoTarjeta.svelte-1f5rx2x.svelte-1f5rx2x{height:100%}.VideoTarjetaImagen.svelte-1f5rx2x.svelte-1f5rx2x{height:100%;position:relative;display:flex;justify-content:center;align-items:center}a.svelte-1f5rx2x.svelte-1f5rx2x{position:absolute;height:auto;width:100%;margin:0;padding:0;text-align:center}a.svelte-1f5rx2x.svelte-1f5rx2x button,a.svelte-1f5rx2x.svelte-1f5rx2x button img{height:5rem;transition:0.5s}a.svelte-1f5rx2x.svelte-1f5rx2x button img:hover{filter:invert()}a.svelte-1f5rx2x img.svelte-1f5rx2x{height:4rem;transition:0.5s}a.svelte-1f5rx2x img.svelte-1f5rx2x:hover{height:4.25rem}";
    	append(document.head, style);
    }

    function create_fragment$A(ctx) {
    	let article;
    	let div;
    	let t;
    	let a;
    	let img;
    	let img_src_value;
    	let current;
    	let dispose;

    	const imagen_1 = new Imagen({
    			props: {
    				imagenUrl: /*imagen*/ ctx[1],
    				altTexto: /*titulo*/ ctx[0],
    				alineacion: "center",
    				altura: /*alturaImagen*/ ctx[3]
    			}
    		});

    	return {
    		c() {
    			article = element("article");
    			div = element("div");
    			create_component(imagen_1.$$.fragment);
    			t = space();
    			a = element("a");
    			img = element("img");
    			if (img.src !== (img_src_value = iconoPlay)) attr(img, "src", img_src_value);
    			attr(img, "alt", "play");
    			attr(img, "class", "svelte-1f5rx2x");
    			attr(a, "href", "#");
    			attr(a, "class", "svelte-1f5rx2x");
    			attr(div, "class", "VideoTarjetaImagen svelte-1f5rx2x");
    			attr(article, "class", "VideoTarjeta svelte-1f5rx2x");
    			attr(article, "tansition:fade", "");
    		},
    		m(target, anchor) {
    			insert(target, article, anchor);
    			append(article, div);
    			mount_component(imagen_1, div, null);
    			append(div, t);
    			append(div, a);
    			append(a, img);
    			current = true;

    			dispose = listen(a, "click", prevent_default(function () {
    				if (is_function(/*abrir*/ ctx[2])) /*abrir*/ ctx[2].apply(this, arguments);
    			}));
    		},
    		p(new_ctx, [dirty]) {
    			ctx = new_ctx;
    			const imagen_1_changes = {};
    			if (dirty & /*imagen*/ 2) imagen_1_changes.imagenUrl = /*imagen*/ ctx[1];
    			if (dirty & /*titulo*/ 1) imagen_1_changes.altTexto = /*titulo*/ ctx[0];
    			imagen_1.$set(imagen_1_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(imagen_1.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(imagen_1.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(article);
    			destroy_component(imagen_1);
    			dispose();
    		}
    	};
    }

    function instance$A($$self, $$props, $$invalidate) {
    	let { titulo } = $$props;
    	let { imagen } = $$props;
    	let { abrir } = $$props;
    	let alturaImagen;

    	$$self.$set = $$props => {
    		if ("titulo" in $$props) $$invalidate(0, titulo = $$props.titulo);
    		if ("imagen" in $$props) $$invalidate(1, imagen = $$props.imagen);
    		if ("abrir" in $$props) $$invalidate(2, abrir = $$props.abrir);
    	};

    	return [titulo, imagen, abrir, alturaImagen];
    }

    class VideoTarjeta extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1f5rx2x-style")) add_css$j();
    		init(this, options, instance$A, create_fragment$A, safe_not_equal, { titulo: 0, imagen: 1, abrir: 2 });
    	}
    }

    /* src/componentes/VideoGaleria/VideoVistaPrevia/VideoVistaPrevia.svelte generated by Svelte v3.19.1 */

    function add_css$k() {
    	var style = element("style");
    	style.id = "svelte-18d38ec-style";
    	style.textContent = ".VideoVistaPrevia.svelte-18d38ec{cursor:pointer;border-bottom:1px solid #aaaaaa;display:flex;box-sizing:border-box;padding:1rem 0}.VideoVistaPrevia.svelte-18d38ec:hover{opacity:0.75}.VideoVistaPrevia.svelte-18d38ec h4{width:60%;margin:0;display:flex;align-items:center;padding-left:1rem}.VideoVistaPrevia.svelte-18d38ec h4 span{color:#666666}.Imagen.svelte-18d38ec{width:40%;flex-shrink:0}@media screen and (min-width: 720px){.VideoVistaPrevia.svelte-18d38ec h4{font-size:0.75rem}}@media screen and (min-width: 1024px){.VideoVistaPrevia.svelte-18d38ec h4{font-size:0.85rem}}@media screen and (min-width: 1200px){.VideoVistaPrevia.svelte-18d38ec h4{font-size:1rem}}@media screen and (min-width: 1920px){.VideoVistaPrevia.svelte-18d38ec h4{font-size:1.25rem}}";
    	append(document.head, style);
    }

    function create_fragment$B(ctx) {
    	let article;
    	let div;
    	let t;
    	let current;
    	let dispose;

    	const imagen_1 = new Imagen({
    			props: {
    				imagenUrl: /*imagen*/ ctx[0],
    				altTexto: /*titulo*/ ctx[1]
    			}
    		});

    	const titulo_1 = new Titulo({
    			props: { nivel: "4", texto: /*titulo*/ ctx[1] }
    		});

    	return {
    		c() {
    			article = element("article");
    			div = element("div");
    			create_component(imagen_1.$$.fragment);
    			t = space();
    			create_component(titulo_1.$$.fragment);
    			attr(div, "class", "Imagen svelte-18d38ec");
    			attr(article, "class", "VideoVistaPrevia svelte-18d38ec");
    		},
    		m(target, anchor) {
    			insert(target, article, anchor);
    			append(article, div);
    			mount_component(imagen_1, div, null);
    			append(article, t);
    			mount_component(titulo_1, article, null);
    			current = true;

    			dispose = listen(article, "click", function () {
    				if (is_function(/*seleccionado*/ ctx[3](/*indice*/ ctx[2]))) /*seleccionado*/ ctx[3](/*indice*/ ctx[2]).apply(this, arguments);
    			});
    		},
    		p(new_ctx, [dirty]) {
    			ctx = new_ctx;
    			const imagen_1_changes = {};
    			if (dirty & /*imagen*/ 1) imagen_1_changes.imagenUrl = /*imagen*/ ctx[0];
    			if (dirty & /*titulo*/ 2) imagen_1_changes.altTexto = /*titulo*/ ctx[1];
    			imagen_1.$set(imagen_1_changes);
    			const titulo_1_changes = {};
    			if (dirty & /*titulo*/ 2) titulo_1_changes.texto = /*titulo*/ ctx[1];
    			titulo_1.$set(titulo_1_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(imagen_1.$$.fragment, local);
    			transition_in(titulo_1.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(imagen_1.$$.fragment, local);
    			transition_out(titulo_1.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(article);
    			destroy_component(imagen_1);
    			destroy_component(titulo_1);
    			dispose();
    		}
    	};
    }

    function instance$B($$self, $$props, $$invalidate) {
    	let { imagen } = $$props;
    	let { titulo } = $$props;
    	let { indice } = $$props;
    	let { seleccionado } = $$props;

    	$$self.$set = $$props => {
    		if ("imagen" in $$props) $$invalidate(0, imagen = $$props.imagen);
    		if ("titulo" in $$props) $$invalidate(1, titulo = $$props.titulo);
    		if ("indice" in $$props) $$invalidate(2, indice = $$props.indice);
    		if ("seleccionado" in $$props) $$invalidate(3, seleccionado = $$props.seleccionado);
    	};

    	return [imagen, titulo, indice, seleccionado];
    }

    class VideoVistaPrevia extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-18d38ec-style")) add_css$k();

    		init(this, options, instance$B, create_fragment$B, safe_not_equal, {
    			imagen: 0,
    			titulo: 1,
    			indice: 2,
    			seleccionado: 3
    		});
    	}
    }

    /* src/componentes/VideoGaleria/VideosLista/VideosLista.svelte generated by Svelte v3.19.1 */

    function get_each_context$7(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[2] = list[i];
    	child_ctx[4] = i;
    	return child_ctx;
    }

    // (11:2) {#each videos as video, i ('video_' + i)}
    function create_each_block$7(key_1, ctx) {
    	let first;
    	let current;

    	const videovistaprevia = new VideoVistaPrevia({
    			props: {
    				imagen: /*video*/ ctx[2].imagen,
    				titulo: /*video*/ ctx[2].titulo,
    				seleccionado: /*seleccionado*/ ctx[1],
    				indice: /*i*/ ctx[4]
    			}
    		});

    	return {
    		key: key_1,
    		first: null,
    		c() {
    			first = empty();
    			create_component(videovistaprevia.$$.fragment);
    			this.first = first;
    		},
    		m(target, anchor) {
    			insert(target, first, anchor);
    			mount_component(videovistaprevia, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const videovistaprevia_changes = {};
    			if (dirty & /*videos*/ 1) videovistaprevia_changes.imagen = /*video*/ ctx[2].imagen;
    			if (dirty & /*videos*/ 1) videovistaprevia_changes.titulo = /*video*/ ctx[2].titulo;
    			if (dirty & /*seleccionado*/ 2) videovistaprevia_changes.seleccionado = /*seleccionado*/ ctx[1];
    			if (dirty & /*videos*/ 1) videovistaprevia_changes.indice = /*i*/ ctx[4];
    			videovistaprevia.$set(videovistaprevia_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(videovistaprevia.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(videovistaprevia.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(first);
    			destroy_component(videovistaprevia, detaching);
    		}
    	};
    }

    function create_fragment$C(ctx) {
    	let aside;
    	let each_blocks = [];
    	let each_1_lookup = new Map();
    	let current;
    	let each_value = /*videos*/ ctx[0];
    	const get_key = ctx => "video_" + /*i*/ ctx[4];

    	for (let i = 0; i < each_value.length; i += 1) {
    		let child_ctx = get_each_context$7(ctx, each_value, i);
    		let key = get_key(child_ctx);
    		each_1_lookup.set(key, each_blocks[i] = create_each_block$7(key, child_ctx));
    	}

    	return {
    		c() {
    			aside = element("aside");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr(aside, "class", "VideosLista");
    		},
    		m(target, anchor) {
    			insert(target, aside, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(aside, null);
    			}

    			current = true;
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*videos, seleccionado*/ 3) {
    				const each_value = /*videos*/ ctx[0];
    				group_outros();
    				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, aside, outro_and_destroy_block, create_each_block$7, null, get_each_context$7);
    				check_outros();
    			}
    		},
    		i(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o(local) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(aside);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].d();
    			}
    		}
    	};
    }

    function instance$C($$self, $$props, $$invalidate) {
    	let { videos } = $$props;
    	let { seleccionado } = $$props;

    	$$self.$set = $$props => {
    		if ("videos" in $$props) $$invalidate(0, videos = $$props.videos);
    		if ("seleccionado" in $$props) $$invalidate(1, seleccionado = $$props.seleccionado);
    	};

    	return [videos, seleccionado];
    }

    class VideosLista extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$C, create_fragment$C, safe_not_equal, { videos: 0, seleccionado: 1 });
    	}
    }

    var iconoCierra = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   width=\"26\"\n   height=\"16\"\n   viewBox=\"0 0 76 16\"\n   fill=\"none\"\n   version=\"1.1\"\n   id=\"svg4\"\n   sodipodi:docname=\"cerrar.svg\"\n   inkscape:version=\"0.92.3 (2405546, 2018-03-11)\">\n  <metadata\n     id=\"metadata10\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id=\"defs8\" />\n  <sodipodi:namedview\n     pagecolor=\"#ffffff\"\n     bordercolor=\"#D4D4D4\"\n     borderopacity=\"1\"\n     objecttolerance=\"10\"\n     gridtolerance=\"10\"\n     guidetolerance=\"10\"\n     inkscape:pageopacity=\"0\"\n     inkscape:pageshadow=\"2\"\n     inkscape:window-width=\"1366\"\n     inkscape:window-height=\"704\"\n     id=\"namedview6\"\n     showgrid=\"false\"\n     inkscape:zoom=\"27.94351\"\n     inkscape:cx=\"13\"\n     inkscape:cy=\"8\"\n     inkscape:window-x=\"0\"\n     inkscape:window-y=\"27\"\n     inkscape:window-maximized=\"1\"\n     inkscape:current-layer=\"svg4\" />\n  <path\n     d=\"M 63.847941,-10.707968 58.657044,-15.464602 38.078215,3.3938373 17.499108,-15.464602 12.308487,-10.707968 32.887316,8.1504696 12.308487,27.008909 17.499108,31.76582 38.078215,12.907381 58.657044,31.76582 63.847941,27.008909 43.268835,8.1504696 Z\"\n     id=\"path2\"\n     inkscape:connector-curvature=\"0\"\n     style=\"fill:#D4D4D4;stroke-width:2.7784071\" />\n</svg>\n";

    /* src/componentes/VideoGaleria/VideoGaleria.svelte generated by Svelte v3.19.1 */

    function add_css$l() {
    	var style = element("style");
    	style.id = "svelte-1s1gxj4-style";
    	style.textContent = ".VideoGaleria.svelte-1s1gxj4.svelte-1s1gxj4{--altura:18rem}.VideoGaleria.svelte-1s1gxj4.svelte-1s1gxj4{width:100%;height:auto;padding:1rem;box-sizing:border-box;display:block}.ContenedorPrincipal.svelte-1s1gxj4.svelte-1s1gxj4{min-height:auto}.ContenedorPrincipal.svelte-1s1gxj4.svelte-1s1gxj4 span{color:#666666}.ContenedorPrincipal.svelte-1s1gxj4.svelte-1s1gxj4 h4{min-height:5rem;margin:0;display:flex;align-items:center}.ContenedorMedia.svelte-1s1gxj4.svelte-1s1gxj4{height:var(--altura);position:relative}.ContenedorMedia.svelte-1s1gxj4 header.svelte-1s1gxj4{position:absolute;right:1rem;top:1rem;width:auto;transition:0.5s}.ContenedorMedia.svelte-1s1gxj4 header a.svelte-1s1gxj4:hover{filter:invert()}.ContenedorLista.svelte-1s1gxj4.svelte-1s1gxj4{width:100%;box-sizing:border-box;padding-left:1rem;max-height:calc(var(--altura) + 5rem);overflow-y:initial;overflow-x:initial}@media screen and (min-width: 720px){.VideoGaleria.svelte-1s1gxj4.svelte-1s1gxj4{--altura:18rem}.VideoGaleria.svelte-1s1gxj4.svelte-1s1gxj4{display:flex}.ContenedorPrincipal.svelte-1s1gxj4.svelte-1s1gxj4{width:60%;border-bottom:1px solid #aaaaaa}.ContenedorLista.svelte-1s1gxj4.svelte-1s1gxj4{width:40%;overflow-y:scroll;overflow-x:hidden}}@media screen and (min-width: 1024px){.VideoGaleria.svelte-1s1gxj4.svelte-1s1gxj4{--altura:22rem}.ContenedorPrincipal.svelte-1s1gxj4.svelte-1s1gxj4{width:70%}.ContenedorLista.svelte-1s1gxj4.svelte-1s1gxj4{width:30%}.ContenedorPrincipal.svelte-1s1gxj4.svelte-1s1gxj4 h4{font-size:1.125rem}}@media screen and (min-width: 1200px){.VideoGaleria.svelte-1s1gxj4.svelte-1s1gxj4{--altura:24rem}.ContenedorPrincipal.svelte-1s1gxj4.svelte-1s1gxj4{width:70%}.ContenedorLista.svelte-1s1gxj4.svelte-1s1gxj4{width:30%}.ContenedorPrincipal.svelte-1s1gxj4.svelte-1s1gxj4 h4{font-size:1.25rem}}@media screen and (min-width: 1920px){.VideoGaleria.svelte-1s1gxj4.svelte-1s1gxj4{--altura:34rem}.ContenedorPrincipal.svelte-1s1gxj4.svelte-1s1gxj4 h4{font-size:1.5rem}}@media screen and (min-width: 2250px){.VideoGaleria.svelte-1s1gxj4.svelte-1s1gxj4{--altura:48rem}.ContenedorPrincipal.svelte-1s1gxj4.svelte-1s1gxj4 h4{font-size:1.75rem}}";
    	append(document.head, style);
    }

    // (146:6) {:else}
    function create_else_block$3(ctx) {
    	let current;

    	const videotarjeta = new VideoTarjeta({
    			props: {
    				imagen: /*videos*/ ctx[1][/*activo*/ ctx[0]].imagen,
    				abrir: /*alternarEstado*/ ctx[3]
    			}
    		});

    	return {
    		c() {
    			create_component(videotarjeta.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(videotarjeta, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const videotarjeta_changes = {};
    			if (dirty & /*videos, activo*/ 3) videotarjeta_changes.imagen = /*videos*/ ctx[1][/*activo*/ ctx[0]].imagen;
    			videotarjeta.$set(videotarjeta_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(videotarjeta.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(videotarjeta.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(videotarjeta, detaching);
    		}
    	};
    }

    // (138:6) {#if estado == true}
    function create_if_block$f(ctx) {
    	let header;
    	let a;
    	let t;
    	let current;
    	let dispose;

    	const botonicono = new BotonIcono({
    			props: { iconoBotonEstadoUnoUrl: iconoCierra }
    		});

    	const videoreproductor = new VideoReproductor({
    			props: {
    				url: /*videos*/ ctx[1][/*activo*/ ctx[0]].url
    			}
    		});

    	return {
    		c() {
    			header = element("header");
    			a = element("a");
    			create_component(botonicono.$$.fragment);
    			t = space();
    			create_component(videoreproductor.$$.fragment);
    			attr(a, "href", "#");
    			attr(a, "class", "svelte-1s1gxj4");
    			attr(header, "class", "svelte-1s1gxj4");
    		},
    		m(target, anchor) {
    			insert(target, header, anchor);
    			append(header, a);
    			mount_component(botonicono, a, null);
    			insert(target, t, anchor);
    			mount_component(videoreproductor, target, anchor);
    			current = true;
    			dispose = listen(a, "click", prevent_default(/*alternarEstado*/ ctx[3]));
    		},
    		p(ctx, dirty) {
    			const videoreproductor_changes = {};
    			if (dirty & /*videos, activo*/ 3) videoreproductor_changes.url = /*videos*/ ctx[1][/*activo*/ ctx[0]].url;
    			videoreproductor.$set(videoreproductor_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(botonicono.$$.fragment, local);
    			transition_in(videoreproductor.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(botonicono.$$.fragment, local);
    			transition_out(videoreproductor.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(header);
    			destroy_component(botonicono);
    			if (detaching) detach(t);
    			destroy_component(videoreproductor, detaching);
    			dispose();
    		}
    	};
    }

    function create_fragment$D(ctx) {
    	let section2;
    	let section0;
    	let div;
    	let current_block_type_index;
    	let if_block;
    	let t0;
    	let t1;
    	let section1;
    	let current;
    	const if_block_creators = [create_if_block$f, create_else_block$3];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*estado*/ ctx[2] == true) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const titulo = new Titulo({
    			props: {
    				nivel: "4",
    				texto: /*videos*/ ctx[1][/*activo*/ ctx[0]].titulo
    			}
    		});

    	const videoslista = new VideosLista({
    			props: {
    				videos: /*videos*/ ctx[1],
    				seleccionado: /*seleccionar*/ ctx[4]
    			}
    		});

    	return {
    		c() {
    			section2 = element("section");
    			section0 = element("section");
    			div = element("div");
    			if_block.c();
    			t0 = space();
    			create_component(titulo.$$.fragment);
    			t1 = space();
    			section1 = element("section");
    			create_component(videoslista.$$.fragment);
    			attr(div, "class", "ContenedorMedia svelte-1s1gxj4");
    			attr(section0, "class", "ContenedorPrincipal svelte-1s1gxj4");
    			attr(section1, "class", "ContenedorLista svelte-1s1gxj4");
    			attr(section2, "class", "VideoGaleria svelte-1s1gxj4");
    		},
    		m(target, anchor) {
    			insert(target, section2, anchor);
    			append(section2, section0);
    			append(section0, div);
    			if_blocks[current_block_type_index].m(div, null);
    			append(section0, t0);
    			mount_component(titulo, section0, null);
    			append(section2, t1);
    			append(section2, section1);
    			mount_component(videoslista, section1, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(div, null);
    			}

    			const titulo_changes = {};
    			if (dirty & /*videos, activo*/ 3) titulo_changes.texto = /*videos*/ ctx[1][/*activo*/ ctx[0]].titulo;
    			titulo.$set(titulo_changes);
    			const videoslista_changes = {};
    			if (dirty & /*videos*/ 2) videoslista_changes.videos = /*videos*/ ctx[1];
    			videoslista.$set(videoslista_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(if_block);
    			transition_in(titulo.$$.fragment, local);
    			transition_in(videoslista.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(if_block);
    			transition_out(titulo.$$.fragment, local);
    			transition_out(videoslista.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			if (detaching) detach(section2);
    			if_blocks[current_block_type_index].d();
    			destroy_component(titulo);
    			destroy_component(videoslista);
    		}
    	};
    }

    function instance$D($$self, $$props, $$invalidate) {
    	let { videos } = $$props;
    	let { activo = 0 } = $$props;
    	let estado;

    	const alternarEstado = () => {
    		$$invalidate(2, estado = !estado);
    	};

    	const seleccionar = i => {
    		$$invalidate(0, activo = i);
    	};

    	$$self.$set = $$props => {
    		if ("videos" in $$props) $$invalidate(1, videos = $$props.videos);
    		if ("activo" in $$props) $$invalidate(0, activo = $$props.activo);
    	};

    	return [activo, videos, estado, alternarEstado, seleccionar];
    }

    class VideoGaleria extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1s1gxj4-style")) add_css$l();
    		init(this, options, instance$D, create_fragment$D, safe_not_equal, { videos: 1, activo: 0 });
    	}
    }

    exports.Boton = Boton;
    exports.BotonIcono = BotonIcono;
    exports.Contenido = Contenido;
    exports.Footer = Footer;
    exports.Header = Header;
    exports.Imagen = Imagen;
    exports.Entrada = Entrada;
    exports.EntradaEmail = EntradaEmail;
    exports.Selector = Selector;
    exports.Insertar = Insertar;
    exports.Label = Label;
    exports.Logo = Logo;
    exports.Mapa = Mapa;
    exports.MenuEscritorio = MenuEscritorio;
    exports.MenuMovil = MenuMovil;
    exports.Parrafo = Parrafo;
    exports.Tarjeta = Tarjeta;
    exports.TarjetaHorizontal = TarjetaHorizontal;
    exports.TarjetaVertical = TarjetaVertical;
    exports.TextArea = TextArea;
    exports.Titulo = Titulo;
    exports.Video = Video;
    exports.VideoGaleria = VideoGaleria;
    exports.VideoReproductor = VideoReproductor;
    exports.VideoTarjeta = VideoTarjeta;
    exports.VideoVistaPrevia = VideoVistaPrevia;
    exports.VideosLista = VideosLista;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
