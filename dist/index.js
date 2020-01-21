(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Name = factory());
}(this, (function () { 'use strict';

    function noop() { }
    const identity = x => x;
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
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
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
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
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
    function flush() {
        const seen_callbacks = new Set();
        do {
            // first, call beforeUpdate functions
            // and update components
            while (dirty_components.length) {
                const component = dirty_components.shift();
                set_current_component(component);
                update(component.$$);
            }
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    callback();
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            $$.fragment && $$.fragment.p($$.ctx, $$.dirty);
            $$.dirty = [-1];
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
            ? instance(component, prop_values, (i, ret, value = ret) => {
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

    /* src/elementos/media/Imagen/Imagen.svelte generated by Svelte v3.16.0 */

    function add_css() {
    	var style = element("style");
    	style.id = "svelte-d3pyr5-style";
    	style.textContent = "img.svelte-d3pyr5{height:100%;width:100%;object-fit:cover;object-position:center}";
    	append(document.head, style);
    }

    function create_fragment(ctx) {
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
    			attr(img, "class", "svelte-d3pyr5");
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

    function instance($$self, $$props, $$invalidate) {
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
    		if (!document.getElementById("svelte-d3pyr5-style")) add_css();

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			imagenUrl: 0,
    			altTexto: 1,
    			ajuste: 2,
    			alineacion: 3,
    			altura: 4
    		});
    	}
    }

    /* src/componentes/Logo/Logo.svelte generated by Svelte v3.16.0 */

    function add_css$1() {
    	var style = element("style");
    	style.id = "svelte-1ig8hww-style";
    	style.textContent = "div.svelte-1ig8hww{display:flex;height:100%;width:100%;min-width:12rem;align-items:center;justify-content:left}a.svelte-1ig8hww{box-sizing:border-box;padding:0.5rem;height:100%;width:100%}h4.svelte-1ig8hww{margin:0.25rem 0}";
    	append(document.head, style);
    }

    // (42:44) 
    function create_if_block_1(ctx) {
    	let h4;
    	let t;

    	return {
    		c() {
    			h4 = element("h4");
    			t = text(/*logoTexto*/ ctx[1]);
    			attr(h4, "class", "svelte-1ig8hww");
    		},
    		m(target, anchor) {
    			insert(target, h4, anchor);
    			append(h4, t);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*logoTexto*/ 2) set_data(t, /*logoTexto*/ ctx[1]);
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(h4);
    		}
    	};
    }

    // (35:4) {#if !!logoImagenUrl}
    function create_if_block(ctx) {
    	let current;

    	const imagen = new Imagen({
    			props: {
    				imagenUrl: /*logoImagenUrl*/ ctx[2],
    				altTexto: /*logoTexto*/ ctx[1],
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
    			if (dirty & /*logoImagenUrl*/ 4) imagen_changes.imagenUrl = /*logoImagenUrl*/ ctx[2];
    			if (dirty & /*logoTexto*/ 2) imagen_changes.altTexto = /*logoTexto*/ ctx[1];
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

    function create_fragment$1(ctx) {
    	let div;
    	let a;
    	let current_block_type_index;
    	let if_block;
    	let current;
    	const if_block_creators = [create_if_block, create_if_block_1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (!!/*logoImagenUrl*/ ctx[2]) return 0;
    		if (!/*logoImagenUrl*/ ctx[2] && !!/*logoTexto*/ ctx[1]) return 1;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	return {
    		c() {
    			div = element("div");
    			a = element("a");
    			if (if_block) if_block.c();
    			attr(a, "href", ".");
    			attr(a, "class", "svelte-1ig8hww");
    			set_style(div, "width", /*logoAncho*/ ctx[3]);
    			attr(div, "class", "svelte-1ig8hww");
    		},
    		m(target, anchor) {
    			insert(target, div, anchor);
    			append(div, a);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(a, null);
    			}

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
    					if_block.m(a, null);
    				} else {
    					if_block = null;
    				}
    			}

    			if (!current || dirty & /*logoAncho*/ 8) {
    				set_style(div, "width", /*logoAncho*/ ctx[3]);
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
    			if (detaching) detach(div);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d();
    			}
    		}
    	};
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { logoTexto } = $$props;
    	let { logoImagenUrl } = $$props;
    	let { logoAncho } = $$props;
    	let { alineacion } = $$props;

    	if (!alineacion) {
    		$$invalidate(0, alineacion = "left");
    	}

    	$$self.$set = $$props => {
    		if ("logoTexto" in $$props) $$invalidate(1, logoTexto = $$props.logoTexto);
    		if ("logoImagenUrl" in $$props) $$invalidate(2, logoImagenUrl = $$props.logoImagenUrl);
    		if ("logoAncho" in $$props) $$invalidate(3, logoAncho = $$props.logoAncho);
    		if ("alineacion" in $$props) $$invalidate(0, alineacion = $$props.alineacion);
    	};

    	return [alineacion, logoTexto, logoImagenUrl, logoAncho];
    }

    class Logo extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1ig8hww-style")) add_css$1();

    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
    			logoTexto: 1,
    			logoImagenUrl: 2,
    			logoAncho: 3,
    			alineacion: 0
    		});
    	}
    }

    /* node_modules/svelte-feather-icons/src/icons/MenuIcon.svelte generated by Svelte v3.16.0 */

    function create_fragment$2(ctx) {
    	let svg;
    	let line0;
    	let line1;
    	let line2;

    	return {
    		c() {
    			svg = svg_element("svg");
    			line0 = svg_element("line");
    			line1 = svg_element("line");
    			line2 = svg_element("line");
    			attr(line0, "x1", "3");
    			attr(line0, "y1", "12");
    			attr(line0, "x2", "21");
    			attr(line0, "y2", "12");
    			attr(line1, "x1", "3");
    			attr(line1, "y1", "6");
    			attr(line1, "x2", "21");
    			attr(line1, "y2", "6");
    			attr(line2, "x1", "3");
    			attr(line2, "y1", "18");
    			attr(line2, "x2", "21");
    			attr(line2, "y2", "18");
    			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr(svg, "width", "100%");
    			attr(svg, "height", "100%");
    			attr(svg, "fill", "none");
    			attr(svg, "viewBox", "0 0 24 24");
    			attr(svg, "stroke", "currentColor");
    			attr(svg, "stroke-width", "2");
    			attr(svg, "stroke-linecap", "round");
    			attr(svg, "stroke-linejoin", "round");
    			attr(svg, "class", "feather feather-menu");
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, line0);
    			append(svg, line1);
    			append(svg, line2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    class MenuIcon extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$2, safe_not_equal, {});
    	}
    }

    /* node_modules/svelte-feather-icons/src/icons/XIcon.svelte generated by Svelte v3.16.0 */

    function create_fragment$3(ctx) {
    	let svg;
    	let line0;
    	let line1;

    	return {
    		c() {
    			svg = svg_element("svg");
    			line0 = svg_element("line");
    			line1 = svg_element("line");
    			attr(line0, "x1", "18");
    			attr(line0, "y1", "6");
    			attr(line0, "x2", "6");
    			attr(line0, "y2", "18");
    			attr(line1, "x1", "6");
    			attr(line1, "y1", "6");
    			attr(line1, "x2", "18");
    			attr(line1, "y2", "18");
    			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr(svg, "width", "100%");
    			attr(svg, "height", "100%");
    			attr(svg, "fill", "none");
    			attr(svg, "viewBox", "0 0 24 24");
    			attr(svg, "stroke", "currentColor");
    			attr(svg, "stroke-width", "2");
    			attr(svg, "stroke-linecap", "round");
    			attr(svg, "stroke-linejoin", "round");
    			attr(svg, "class", "feather feather-x");
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, line0);
    			append(svg, line1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    class XIcon extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, null, create_fragment$3, safe_not_equal, {});
    	}
    }

    /* src/elementos/botones/BotonMenu/BotonMenu.svelte generated by Svelte v3.16.0 */

    function add_css$2() {
    	var style = element("style");
    	style.id = "svelte-4oatze-style";
    	style.textContent = "button.svelte-4oatze{background-color:transparent;border:none;cursor:pointer;width:3rem;margin:0}.feather{stroke:black}.feather:hover{stroke:red}";
    	append(document.head, style);
    }

    // (30:2) {:else}
    function create_else_block(ctx) {
    	let current;
    	const menuicon = new MenuIcon({});

    	return {
    		c() {
    			create_component(menuicon.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(menuicon, target, anchor);
    			current = true;
    		},
    		i(local) {
    			if (current) return;
    			transition_in(menuicon.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(menuicon.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(menuicon, detaching);
    		}
    	};
    }

    // (28:2) {#if !! estado}
    function create_if_block$1(ctx) {
    	let current;
    	const xicon = new XIcon({});

    	return {
    		c() {
    			create_component(xicon.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(xicon, target, anchor);
    			current = true;
    		},
    		i(local) {
    			if (current) return;
    			transition_in(xicon.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(xicon.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(xicon, detaching);
    		}
    	};
    }

    function create_fragment$4(ctx) {
    	let button;
    	let current_block_type_index;
    	let if_block;
    	let current;
    	let dispose;
    	const if_block_creators = [create_if_block$1, create_else_block];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (!!/*estado*/ ctx[0]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	return {
    		c() {
    			button = element("button");
    			if_block.c();
    			attr(button, "class", "svelte-4oatze");
    			dispose = listen(button, "click", /*click_handler*/ ctx[1]);
    		},
    		m(target, anchor) {
    			insert(target, button, anchor);
    			if_blocks[current_block_type_index].m(button, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index !== previous_block_index) {
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
    				if_block.m(button, null);
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
    			if (detaching) detach(button);
    			if_blocks[current_block_type_index].d();
    			dispose();
    		}
    	};
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { estado = false } = $$props;

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$set = $$props => {
    		if ("estado" in $$props) $$invalidate(0, estado = $$props.estado);
    	};

    	return [estado, click_handler];
    }

    class BotonMenu extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-4oatze-style")) add_css$2();
    		init(this, options, instance$2, create_fragment$4, safe_not_equal, { estado: 0 });
    	}
    }

    /* src/elementos/menu/MenuEscritorio/MenuEscritorio.svelte generated by Svelte v3.16.0 */

    function add_css$3() {
    	var style = element("style");
    	style.id = "svelte-1rqmsyi-style";
    	style.textContent = "ul.svelte-1rqmsyi{display:flex;justify-content:space-evenly;align-items:center;height:100%;margin:0;padding:0;list-style-type:none;width:auto}li.svelte-1rqmsyi{box-sizing:border-box;padding:0.5rem;display:flex;align-items:center;justify-content:center;height:100%;height:100%;width:auto}a.svelte-1rqmsyi{text-decoration:none}a.svelte-1rqmsyi:hover{opacity:0.75}";
    	append(document.head, style);
    }

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i];
    	return child_ctx;
    }

    // (38:2) {#each objetosMenu as objeto}
    function create_each_block(ctx) {
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

    function create_fragment$5(ctx) {
    	let ul;
    	let each_value = /*objetosMenu*/ ctx[1];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
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
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
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

    function instance$3($$self, $$props, $$invalidate) {
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
    		if (!document.getElementById("svelte-1rqmsyi-style")) add_css$3();
    		init(this, options, instance$3, create_fragment$5, safe_not_equal, { segment: 0, objetosMenu: 1, color: 2 });
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

    /* src/elementos/menu/MenuMovil/MenuMovil.svelte generated by Svelte v3.16.0 */

    function add_css$4() {
    	var style = element("style");
    	style.id = "svelte-17twkhi-style";
    	style.textContent = "ul.svelte-17twkhi{height:auto;margin:0;padding:0;list-style-type:none;width:100%;position:absolute;z-index:1000}li.svelte-17twkhi{padding:0.5rem;display:flex;align-items:center;justify-content:center}a.svelte-17twkhi{text-decoration:none}a.svelte-17twkhi:hover{opacity:0.75}";
    	append(document.head, style);
    }

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[7] = list[i];
    	child_ctx[9] = i;
    	return child_ctx;
    }

    // (37:0) {#if estadoMenu === true}
    function create_if_block$2(ctx) {
    	let ul;
    	let ul_style_value;
    	let ul_transition;
    	let current;
    	let each_value = /*objetosMenu*/ ctx[2];
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

    			attr(ul, "style", ul_style_value = "background-color:" + /*colorFondo*/ ctx[3] + ";" + (!!/*sombra*/ ctx[6]
    			? "box-shadow: 0 1px 1px rgba(0,0,0,0.5)"
    			: ""));

    			attr(ul, "class", "svelte-17twkhi");
    		},
    		m(target, anchor) {
    			insert(target, ul, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ul, null);
    			}

    			current = true;
    		},
    		p(ctx, dirty) {
    			if (dirty & /*alturaObjetoMenu, color, objetosMenu, segment*/ 53) {
    				each_value = /*objetosMenu*/ ctx[2];
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

    			if (!current || dirty & /*colorFondo, sombra*/ 72 && ul_style_value !== (ul_style_value = "background-color:" + /*colorFondo*/ ctx[3] + ";" + (!!/*sombra*/ ctx[6]
    			? "box-shadow: 0 1px 1px rgba(0,0,0,0.5)"
    			: ""))) {
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
    			if (detaching && ul_transition) ul_transition.end();
    		}
    	};
    }

    // (42:4) {#each objetosMenu as objeto,i}
    function create_each_block$1(ctx) {
    	let li;
    	let a;
    	let t0_value = /*objeto*/ ctx[7].label + "";
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
    			attr(a, "href", a_href_value = /*objeto*/ ctx[7].ruta);
    			set_style(a, "color", /*color*/ ctx[4]);
    			attr(a, "class", "svelte-17twkhi");
    			toggle_class(a, "selected", /*segment*/ ctx[0] === /*objeto*/ ctx[7].ruta);
    			attr(li, "style", li_style_value = "height:" + /*alturaObjetoMenu*/ ctx[5] + ";color=" + /*color*/ ctx[4]);
    			attr(li, "class", "svelte-17twkhi");
    		},
    		m(target, anchor) {
    			insert(target, li, anchor);
    			append(li, a);
    			append(a, t0);
    			append(li, t1);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*objetosMenu*/ 4 && t0_value !== (t0_value = /*objeto*/ ctx[7].label + "")) set_data(t0, t0_value);

    			if (dirty & /*objetosMenu*/ 4 && a_href_value !== (a_href_value = /*objeto*/ ctx[7].ruta)) {
    				attr(a, "href", a_href_value);
    			}

    			if (dirty & /*color*/ 16) {
    				set_style(a, "color", /*color*/ ctx[4]);
    			}

    			if (dirty & /*segment, objetosMenu*/ 5) {
    				toggle_class(a, "selected", /*segment*/ ctx[0] === /*objeto*/ ctx[7].ruta);
    			}

    			if (dirty & /*alturaObjetoMenu, color*/ 48 && li_style_value !== (li_style_value = "height:" + /*alturaObjetoMenu*/ ctx[5] + ";color=" + /*color*/ ctx[4])) {
    				attr(li, "style", li_style_value);
    			}
    		},
    		d(detaching) {
    			if (detaching) detach(li);
    		}
    	};
    }

    function create_fragment$6(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = /*estadoMenu*/ ctx[1] === true && create_if_block$2(ctx);

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
    			if (/*estadoMenu*/ ctx[1] === true) {
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

    function instance$4($$self, $$props, $$invalidate) {
    	let { segment } = $$props;
    	let { estadoMenu } = $$props;
    	let { objetosMenu } = $$props;
    	let { colorFondo } = $$props;
    	let { color } = $$props;
    	let { alturaObjetoMenu } = $$props;
    	let { sombra } = $$props;

    	$$self.$set = $$props => {
    		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    		if ("estadoMenu" in $$props) $$invalidate(1, estadoMenu = $$props.estadoMenu);
    		if ("objetosMenu" in $$props) $$invalidate(2, objetosMenu = $$props.objetosMenu);
    		if ("colorFondo" in $$props) $$invalidate(3, colorFondo = $$props.colorFondo);
    		if ("color" in $$props) $$invalidate(4, color = $$props.color);
    		if ("alturaObjetoMenu" in $$props) $$invalidate(5, alturaObjetoMenu = $$props.alturaObjetoMenu);
    		if ("sombra" in $$props) $$invalidate(6, sombra = $$props.sombra);
    	};

    	return [segment, estadoMenu, objetosMenu, colorFondo, color, alturaObjetoMenu, sombra];
    }

    class MenuMovil extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-17twkhi-style")) add_css$4();

    		init(this, options, instance$4, create_fragment$6, safe_not_equal, {
    			segment: 0,
    			estadoMenu: 1,
    			objetosMenu: 2,
    			colorFondo: 3,
    			color: 4,
    			alturaObjetoMenu: 5,
    			sombra: 6
    		});
    	}
    }

    /* src/componentes/Header/HeaderVista.svelte generated by Svelte v3.16.0 */

    function add_css$5() {
    	var style = element("style");
    	style.id = "svelte-301z16-style";
    	style.textContent = "header.svelte-301z16{position:relative}header.svelte-301z16 div.svelte-301z16:nth-child(1){box-sizing:border-box;padding:0 0.5rem;display:flex;justify-content:space-between;height:100%;width:100%}.fixed.svelte-301z16{position:fixed;width:100%;top:0;left:0;z-index:1000}";
    	append(document.head, style);
    }

    // (62:28) 
    function create_if_block_3(ctx) {
    	let current;

    	const menuescritorio = new MenuEscritorio({
    			props: {
    				objetosMenu: /*objetosMenu*/ ctx[3],
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
    			if (dirty & /*objetosMenu*/ 8) menuescritorio_changes.objetosMenu = /*objetosMenu*/ ctx[3];
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

    // (58:4) {#if responsivo < breakpoint}
    function create_if_block_2(ctx) {
    	let current;

    	const botonmenu = new BotonMenu({
    			props: { estado: /*estadoMenu*/ ctx[10] }
    		});

    	botonmenu.$on("click", /*menuAlternar*/ ctx[0]);

    	return {
    		c() {
    			create_component(botonmenu.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(botonmenu, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const botonmenu_changes = {};
    			if (dirty & /*estadoMenu*/ 1024) botonmenu_changes.estado = /*estadoMenu*/ ctx[10];
    			botonmenu.$set(botonmenu_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(botonmenu.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(botonmenu.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(botonmenu, detaching);
    		}
    	};
    }

    // (69:2) {#if responsivo < breakpoint}
    function create_if_block$3(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = !!/*objetosMenu*/ ctx[3] && create_if_block_1$1(ctx);

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
    			if (!!/*objetosMenu*/ ctx[3]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    					transition_in(if_block, 1);
    				} else {
    					if_block = create_if_block_1$1(ctx);
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

    // (70:4) {#if !!objetosMenu}
    function create_if_block_1$1(ctx) {
    	let current;

    	const menumovil = new MenuMovil({
    			props: {
    				estadoMenu: /*estadoMenu*/ ctx[10],
    				objetosMenu: /*objetosMenu*/ ctx[3],
    				color: /*color*/ ctx[7],
    				sombra: /*sombra*/ ctx[8],
    				colorFondo: /*colorFondoMovil*/ ctx[6],
    				alturaObjetoMenu: "4rem"
    			}
    		});

    	menumovil.$on("eventoEstadoMenu", /*eventoEstadoMenu_handler*/ ctx[14]);

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
    			if (dirty & /*objetosMenu*/ 8) menumovil_changes.objetosMenu = /*objetosMenu*/ ctx[3];
    			if (dirty & /*color*/ 128) menumovil_changes.color = /*color*/ ctx[7];
    			if (dirty & /*sombra*/ 256) menumovil_changes.sombra = /*sombra*/ ctx[8];
    			if (dirty & /*colorFondoMovil*/ 64) menumovil_changes.colorFondo = /*colorFondoMovil*/ ctx[6];
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

    function create_fragment$7(ctx) {
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
    	add_render_callback(/*onwindowresize*/ ctx[13]);

    	const logo = new Logo({
    			props: {
    				logoTexto: /*logoTexto*/ ctx[1],
    				logoImagenUrl: /*logoImagenUrl*/ ctx[2],
    				logoAncho: "30%"
    			}
    		});

    	const if_block_creators = [create_if_block_2, create_if_block_3];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*responsivo*/ ctx[11] < breakpoint) return 0;
    		if (!!/*objetosMenu*/ ctx[3]) return 1;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	let if_block1 = /*responsivo*/ ctx[11] < breakpoint && create_if_block$3(ctx);

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
    			dispose = listen(window, "resize", /*onwindowresize*/ ctx[13]);
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
    		},
    		p(ctx, [dirty]) {
    			const logo_changes = {};
    			if (dirty & /*logoTexto*/ 2) logo_changes.logoTexto = /*logoTexto*/ ctx[1];
    			if (dirty & /*logoImagenUrl*/ 4) logo_changes.logoImagenUrl = /*logoImagenUrl*/ ctx[2];
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

    			if (/*responsivo*/ ctx[11] < breakpoint) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    					transition_in(if_block1, 1);
    				} else {
    					if_block1 = create_if_block$3(ctx);
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

    function instance$5($$self, $$props, $$invalidate) {
    	let { menuAlternar } = $$props;
    	let { logoTexto } = $$props;
    	let { logoImagenUrl } = $$props;
    	let { objetosMenu } = $$props;
    	let { altura } = $$props;
    	let { colorFondo } = $$props;
    	let { colorFondoMovil } = $$props;
    	let { color } = $$props;
    	let { sombra } = $$props;
    	let { fixed } = $$props;
    	let { estadoMenu } = $$props;
    	let { segment } = $$props;
    	let responsivo;

    	function onwindowresize() {
    		$$invalidate(11, responsivo = window.innerWidth);
    	}

    	function eventoEstadoMenu_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$set = $$props => {
    		if ("menuAlternar" in $$props) $$invalidate(0, menuAlternar = $$props.menuAlternar);
    		if ("logoTexto" in $$props) $$invalidate(1, logoTexto = $$props.logoTexto);
    		if ("logoImagenUrl" in $$props) $$invalidate(2, logoImagenUrl = $$props.logoImagenUrl);
    		if ("objetosMenu" in $$props) $$invalidate(3, objetosMenu = $$props.objetosMenu);
    		if ("altura" in $$props) $$invalidate(4, altura = $$props.altura);
    		if ("colorFondo" in $$props) $$invalidate(5, colorFondo = $$props.colorFondo);
    		if ("colorFondoMovil" in $$props) $$invalidate(6, colorFondoMovil = $$props.colorFondoMovil);
    		if ("color" in $$props) $$invalidate(7, color = $$props.color);
    		if ("sombra" in $$props) $$invalidate(8, sombra = $$props.sombra);
    		if ("fixed" in $$props) $$invalidate(9, fixed = $$props.fixed);
    		if ("estadoMenu" in $$props) $$invalidate(10, estadoMenu = $$props.estadoMenu);
    		if ("segment" in $$props) $$invalidate(12, segment = $$props.segment);
    	};

    	return [
    		menuAlternar,
    		logoTexto,
    		logoImagenUrl,
    		objetosMenu,
    		altura,
    		colorFondo,
    		colorFondoMovil,
    		color,
    		sombra,
    		fixed,
    		estadoMenu,
    		responsivo,
    		segment,
    		onwindowresize,
    		eventoEstadoMenu_handler
    	];
    }

    class HeaderVista extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-301z16-style")) add_css$5();

    		init(this, options, instance$5, create_fragment$7, safe_not_equal, {
    			menuAlternar: 0,
    			logoTexto: 1,
    			logoImagenUrl: 2,
    			objetosMenu: 3,
    			altura: 4,
    			colorFondo: 5,
    			colorFondoMovil: 6,
    			color: 7,
    			sombra: 8,
    			fixed: 9,
    			estadoMenu: 10,
    			segment: 12
    		});
    	}
    }

    /* src/componentes/Header/Header.svelte generated by Svelte v3.16.0 */

    function create_fragment$8(ctx) {
    	let current;

    	const headervista = new HeaderVista({
    			props: {
    				segment: /*segment*/ ctx[9],
    				menuAlternar: /*menuAlternar*/ ctx[11],
    				objetosMenu: /*objetosMenu*/ ctx[6],
    				estadoMenu: /*estadoMenu*/ ctx[10],
    				logoTexto: /*logoTexto*/ ctx[0],
    				logoImagenUrl: /*logoImagenUrl*/ ctx[1],
    				altura: /*altura*/ ctx[2],
    				colorFondo: /*colorFondo*/ ctx[3],
    				colorFondoMovil: /*colorFondoMovil*/ ctx[4],
    				color: /*color*/ ctx[5],
    				sombra: /*sombra*/ ctx[7],
    				fixed: /*fixed*/ ctx[8]
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
    			if (dirty & /*segment*/ 512) headervista_changes.segment = /*segment*/ ctx[9];
    			if (dirty & /*objetosMenu*/ 64) headervista_changes.objetosMenu = /*objetosMenu*/ ctx[6];
    			if (dirty & /*estadoMenu*/ 1024) headervista_changes.estadoMenu = /*estadoMenu*/ ctx[10];
    			if (dirty & /*logoTexto*/ 1) headervista_changes.logoTexto = /*logoTexto*/ ctx[0];
    			if (dirty & /*logoImagenUrl*/ 2) headervista_changes.logoImagenUrl = /*logoImagenUrl*/ ctx[1];
    			if (dirty & /*altura*/ 4) headervista_changes.altura = /*altura*/ ctx[2];
    			if (dirty & /*colorFondo*/ 8) headervista_changes.colorFondo = /*colorFondo*/ ctx[3];
    			if (dirty & /*colorFondoMovil*/ 16) headervista_changes.colorFondoMovil = /*colorFondoMovil*/ ctx[4];
    			if (dirty & /*color*/ 32) headervista_changes.color = /*color*/ ctx[5];
    			if (dirty & /*sombra*/ 128) headervista_changes.sombra = /*sombra*/ ctx[7];
    			if (dirty & /*fixed*/ 256) headervista_changes.fixed = /*fixed*/ ctx[8];
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

    function instance$6($$self, $$props, $$invalidate) {
    	let { logoTexto } = $$props;
    	let { logoImagenUrl } = $$props;
    	let { altura } = $$props;
    	let { colorFondo } = $$props;
    	let { colorFondoMovil } = $$props;
    	let { color } = $$props;
    	let { objetosMenu } = $$props;
    	let { sombra } = $$props;
    	let { fixed } = $$props;
    	let { segment } = $$props;
    	let estadoMenu = false;

    	const menuAlternar = () => {
    		$$invalidate(10, estadoMenu = !estadoMenu);
    	};

    	$$self.$set = $$props => {
    		if ("logoTexto" in $$props) $$invalidate(0, logoTexto = $$props.logoTexto);
    		if ("logoImagenUrl" in $$props) $$invalidate(1, logoImagenUrl = $$props.logoImagenUrl);
    		if ("altura" in $$props) $$invalidate(2, altura = $$props.altura);
    		if ("colorFondo" in $$props) $$invalidate(3, colorFondo = $$props.colorFondo);
    		if ("colorFondoMovil" in $$props) $$invalidate(4, colorFondoMovil = $$props.colorFondoMovil);
    		if ("color" in $$props) $$invalidate(5, color = $$props.color);
    		if ("objetosMenu" in $$props) $$invalidate(6, objetosMenu = $$props.objetosMenu);
    		if ("sombra" in $$props) $$invalidate(7, sombra = $$props.sombra);
    		if ("fixed" in $$props) $$invalidate(8, fixed = $$props.fixed);
    		if ("segment" in $$props) $$invalidate(9, segment = $$props.segment);
    	};

    	return [
    		logoTexto,
    		logoImagenUrl,
    		altura,
    		colorFondo,
    		colorFondoMovil,
    		color,
    		objetosMenu,
    		sombra,
    		fixed,
    		segment,
    		estadoMenu,
    		menuAlternar
    	];
    }

    class Header extends SvelteComponent {
    	constructor(options) {
    		super();

    		init(this, options, instance$6, create_fragment$8, safe_not_equal, {
    			logoTexto: 0,
    			logoImagenUrl: 1,
    			altura: 2,
    			colorFondo: 3,
    			colorFondoMovil: 4,
    			color: 5,
    			objetosMenu: 6,
    			sombra: 7,
    			fixed: 8,
    			segment: 9
    		});
    	}
    }

    var index = {
        Header,
    };

    return index;

})));
