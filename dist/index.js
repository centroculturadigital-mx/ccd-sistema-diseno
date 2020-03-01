(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global['ccd-sistema-disenio'] = {}));
}(this, (function (exports) { 'use strict';

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

        let html = generadorEtiquetas.abrir(
        'p',
        atributos
        );

        html += texto;

        html += generadorEtiquetas.cerrar('h'+nivel);

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
                etiquetaNombre = 'strong';
                break;
            case "italic":
                etiquetaNombre = 'em';
                break;
        }

        return etiquetaNombre
    };

    var generadorEtiquetas$1 = {
        abrir,
        cerrar,
        etiqueta,
        nombreGenerar
    };

    /* src/elementos/texto/Titulo/Titulo.svelte generated by Svelte v3.19.1 */

    function create_fragment$6(ctx) {
    	let html_tag;

    	return {
    		c() {
    			html_tag = new HtmlTag(/*tituloRenderear*/ ctx[0], null);
    		},
    		m(target, anchor) {
    			html_tag.m(target, anchor);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*tituloRenderear*/ 1) html_tag.p(/*tituloRenderear*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) html_tag.d();
    		}
    	};
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { nivel } = $$props;
    	let { color = "#000" } = $$props;
    	let { texto } = $$props;

    	const generarTitulo = (nivel, texto, color, atributos) => {
    		let html = "";

    		html += generadorEtiquetas$1.etiqueta("p", texto, atributos);
    		return html;
    	};

    	$$self.$set = $$props => {
    		if ("nivel" in $$props) $$invalidate(1, nivel = $$props.nivel);
    		if ("color" in $$props) $$invalidate(2, color = $$props.color);
    		if ("texto" in $$props) $$invalidate(3, texto = $$props.texto);
    	};

    	let tituloRenderear;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*nivel, texto, color*/ 14) {
    			 $$invalidate(0, tituloRenderear = generarTitulo(nivel, texto, { color, ...data }));
    		}
    	};

    	return [tituloRenderear, nivel, color, texto];
    }

    class Titulo extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, { nivel: 1, color: 2, texto: 3 });
    	}
    }

    /* src/elementos/texto/Parrafo/Parrafo.svelte generated by Svelte v3.19.1 */

    function create_fragment$7(ctx) {
    	let html_tag;

    	return {
    		c() {
    			html_tag = new HtmlTag(/*textoRenderear*/ ctx[0], null);
    		},
    		m(target, anchor) {
    			html_tag.m(target, anchor);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*textoRenderear*/ 1) html_tag.p(/*textoRenderear*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) html_tag.d();
    		}
    	};
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { texto } = $$props;
    	let { color } = $$props;
    	let { data } = $$props;

    	const generarParrafo = (texto, atributos) => {
    		let html = "";
    		html += generadorEtiquetas$1.etiqueta("p", texto, atributos);
    		return html;
    	};

    	$$self.$set = $$props => {
    		if ("texto" in $$props) $$invalidate(1, texto = $$props.texto);
    		if ("color" in $$props) $$invalidate(2, color = $$props.color);
    		if ("data" in $$props) $$invalidate(3, data = $$props.data);
    	};

    	let textoRenderear;

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*texto, color, data*/ 14) {
    			 $$invalidate(0, textoRenderear = generarParrafo(!!texto ? texto : titulo, { color, ...data }));
    		}
    	};

    	return [textoRenderear, texto, color, data];
    }

    class Parrafo extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, { texto: 1, color: 2, data: 3 });
    	}
    }

    /* src/elementos/inputs/Input/Input.svelte generated by Svelte v3.19.1 */

    function add_css$6() {
    	var style = element("style");
    	style.id = "svelte-15qgr3j-style";
    	style.textContent = "input.svelte-15qgr3j{border:1px solid gray;border-radius:0.25rem;padding:0.5rem;margin-bottom:0.5rem;min-height:2rem}.error.svelte-15qgr3j{border:1px solid red;color:red}.ok.svelte-15qgr3j{border:1px solid green;color:green}#mensaje.svelte-15qgr3j{border:none}p.svelte-15qgr3j{font-size:0.75rem}";
    	append(document.head, style);
    }

    // (61:2) {#if valor === true}
    function create_if_block$3(ctx) {
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

    function create_fragment$8(ctx) {
    	let input;
    	let input_class_value;
    	let t;
    	let div;
    	let div_class_value;
    	let dispose;
    	let if_block = /*valor*/ ctx[2] === true && create_if_block$3();

    	return {
    		c() {
    			input = element("input");
    			t = space();
    			div = element("div");
    			if (if_block) if_block.c();
    			attr(input, "id", "text");
    			attr(input, "class", input_class_value = "" + (null_to_empty(/*color*/ ctx[3]) + " svelte-15qgr3j"));
    			attr(input, "type", /*type*/ ctx[1]);
    			attr(input, "name", /*name*/ ctx[4]);
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

    			if (dirty & /*type*/ 2) {
    				attr(input, "type", /*type*/ ctx[1]);
    			}

    			if (dirty & /*placeholder*/ 1) {
    				attr(input, "placeholder", /*placeholder*/ ctx[0]);
    			}

    			if (/*valor*/ ctx[2] === true) {
    				if (!if_block) {
    					if_block = create_if_block$3();
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

    function instance$8($$self, $$props, $$invalidate) {
    	let { placeholder } = $$props;
    	let { type = "text" } = $$props;
    	let name = type;
    	let valor;
    	let color;

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
    		if ("type" in $$props) $$invalidate(1, type = $$props.type);
    	};

    	return [placeholder, type, valor, color, name, validaEntrada];
    }

    class Input extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-15qgr3j-style")) add_css$6();
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, { placeholder: 0, type: 1 });
    	}
    }

    /* src/elementos/inputs/InputEmail/InputEmail.svelte generated by Svelte v3.19.1 */

    function add_css$7() {
    	var style = element("style");
    	style.id = "svelte-1ou00e0-style";
    	style.textContent = "input.svelte-1ou00e0{border:1px solid gray;border-radius:0.25rem;padding:0.5rem;margin-bottom:0.5rem}.error.svelte-1ou00e0{border:1px solid red;color:red}.ok.svelte-1ou00e0{border:1px solid green;color:green}#mensaje.svelte-1ou00e0{border:none}p.svelte-1ou00e0{font-size:0.75rem}";
    	append(document.head, style);
    }

    // (35:2) {#if valor === false}
    function create_if_block$4(ctx) {
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

    function create_fragment$9(ctx) {
    	let input;
    	let input_class_value;
    	let t;
    	let div;
    	let div_class_value;
    	let dispose;
    	let if_block = /*valor*/ ctx[1] === false && create_if_block$4();

    	return {
    		c() {
    			input = element("input");
    			t = space();
    			div = element("div");
    			if (if_block) if_block.c();
    			attr(input, "class", input_class_value = "" + (null_to_empty(/*color*/ ctx[2]) + " svelte-1ou00e0"));
    			attr(input, "type", "email");
    			attr(input, "name", "email");
    			attr(input, "placeholder", /*textoPlaceholder*/ ctx[0]);
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

    			if (dirty & /*textoPlaceholder*/ 1) {
    				attr(input, "placeholder", /*textoPlaceholder*/ ctx[0]);
    			}

    			if (/*valor*/ ctx[1] === false) {
    				if (!if_block) {
    					if_block = create_if_block$4();
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

    function instance$9($$self, $$props, $$invalidate) {
    	let { textoPlaceholder } = $$props;
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
    		if ("textoPlaceholder" in $$props) $$invalidate(0, textoPlaceholder = $$props.textoPlaceholder);
    	};

    	return [textoPlaceholder, valor, color, validaCorreo];
    }

    class InputEmail extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1ou00e0-style")) add_css$7();
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, { textoPlaceholder: 0 });
    	}
    }

    /* src/elementos/inputs/InputSelect/InputSelect.svelte generated by Svelte v3.19.1 */

    function add_css$8() {
    	var style = element("style");
    	style.id = "svelte-1a0l6up-style";
    	style.textContent = "select.svelte-1a0l6up{border:1px solid gray;border-radius:0.25rem;padding:0.5rem;margin-bottom:0.5rem}";
    	append(document.head, style);
    }

    function get_each_context$3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[2] = list[i];
    	return child_ctx;
    }

    // (20:6) {#if !!opciones}
    function create_if_block$5(ctx) {
    	let if_block_anchor;
    	let each_1_anchor;
    	let if_block = !!/*textoPlaceholder*/ ctx[0] && create_if_block_1$1(ctx);
    	let each_value = /*opciones*/ ctx[1];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
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
    			if (!!/*textoPlaceholder*/ ctx[0]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_1$1(ctx);
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
    					const child_ctx = get_each_context$3(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$3(child_ctx);
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

    // (22:8) {#if !!textoPlaceholder}
    function create_if_block_1$1(ctx) {
    	let option;
    	let t0;
    	let t1;
    	let option_value_value;

    	return {
    		c() {
    			option = element("option");
    			t0 = text(/*textoPlaceholder*/ ctx[0]);
    			t1 = space();
    			attr(option, "class", "placeholder");
    			option.disabled = true;
    			option.selected = true;
    			option.__value = option_value_value = "\n            " + /*textoPlaceholder*/ ctx[0] + "\n          ";
    			option.value = option.__value;
    		},
    		m(target, anchor) {
    			insert(target, option, anchor);
    			append(option, t0);
    			append(option, t1);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*textoPlaceholder*/ 1) set_data(t0, /*textoPlaceholder*/ ctx[0]);

    			if (dirty & /*textoPlaceholder*/ 1 && option_value_value !== (option_value_value = "\n            " + /*textoPlaceholder*/ ctx[0] + "\n          ")) {
    				option.__value = option_value_value;
    			}

    			option.value = option.__value;
    		},
    		d(detaching) {
    			if (detaching) detach(option);
    		}
    	};
    }

    // (28:8) {#each opciones as opcion}
    function create_each_block$3(ctx) {
    	let option;
    	let t_value = /*opcion*/ ctx[2] + "";
    	let t;
    	let option_value_value;

    	return {
    		c() {
    			option = element("option");
    			t = text(t_value);
    			option.__value = option_value_value = /*opcion*/ ctx[2];
    			option.value = option.__value;
    		},
    		m(target, anchor) {
    			insert(target, option, anchor);
    			append(option, t);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*opciones*/ 2 && t_value !== (t_value = /*opcion*/ ctx[2] + "")) set_data(t, t_value);

    			if (dirty & /*opciones*/ 2 && option_value_value !== (option_value_value = /*opcion*/ ctx[2])) {
    				option.__value = option_value_value;
    			}

    			option.value = option.__value;
    		},
    		d(detaching) {
    			if (detaching) detach(option);
    		}
    	};
    }

    function create_fragment$a(ctx) {
    	let select;
    	let if_block = !!/*opciones*/ ctx[1] && create_if_block$5(ctx);

    	return {
    		c() {
    			select = element("select");
    			if (if_block) if_block.c();
    			attr(select, "class", "svelte-1a0l6up");
    		},
    		m(target, anchor) {
    			insert(target, select, anchor);
    			if (if_block) if_block.m(select, null);
    		},
    		p(ctx, [dirty]) {
    			if (!!/*opciones*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$5(ctx);
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
    		}
    	};
    }

    function instance$a($$self, $$props, $$invalidate) {
    	let { textoPlaceholder } = $$props;
    	let { opciones } = $$props;

    	$$self.$set = $$props => {
    		if ("textoPlaceholder" in $$props) $$invalidate(0, textoPlaceholder = $$props.textoPlaceholder);
    		if ("opciones" in $$props) $$invalidate(1, opciones = $$props.opciones);
    	};

    	return [textoPlaceholder, opciones];
    }

    class InputSelect extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-1a0l6up-style")) add_css$8();
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, { textoPlaceholder: 0, opciones: 1 });
    	}
    }

    /* src/elementos/inputs/TextArea/TextArea.svelte generated by Svelte v3.19.1 */

    function add_css$9() {
    	var style = element("style");
    	style.id = "svelte-n6nzoj-style";
    	style.textContent = "textarea.svelte-n6nzoj{width:18.5rem;height:10.5rem;border:1px solid gray;border-radius:0.5rem;padding:0.75rem;resize:none}";
    	append(document.head, style);
    }

    function create_fragment$b(ctx) {
    	let textarea;
    	let dispose;

    	return {
    		c() {
    			textarea = element("textarea");
    			attr(textarea, "name", "text-area");
    			attr(textarea, "placeholder", /*textoPlaceholder*/ ctx[0]);
    			set_style(textarea, "width", /*ancho*/ ctx[1]);
    			set_style(textarea, "height", /*altura*/ ctx[2]);
    			attr(textarea, "class", "svelte-n6nzoj");
    		},
    		m(target, anchor) {
    			insert(target, textarea, anchor);
    			dispose = listen(textarea, "keyup", /*validaEntrada*/ ctx[3]);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*textoPlaceholder*/ 1) {
    				attr(textarea, "placeholder", /*textoPlaceholder*/ ctx[0]);
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

    function instance$b($$self, $$props, $$invalidate) {
    	let { textoPlaceholder } = $$props;
    	let { ancho } = $$props;
    	let { altura } = $$props;

    	const validaEntrada = e => {
    		let evento = e.target.value;

    		if (evento == "") {
    			color = "";
    		}
    	};

    	$$self.$set = $$props => {
    		if ("textoPlaceholder" in $$props) $$invalidate(0, textoPlaceholder = $$props.textoPlaceholder);
    		if ("ancho" in $$props) $$invalidate(1, ancho = $$props.ancho);
    		if ("altura" in $$props) $$invalidate(2, altura = $$props.altura);
    	};

    	return [textoPlaceholder, ancho, altura, validaEntrada];
    }

    class TextArea extends SvelteComponent {
    	constructor(options) {
    		super();
    		if (!document.getElementById("svelte-n6nzoj-style")) add_css$9();
    		init(this, options, instance$b, create_fragment$b, safe_not_equal, { textoPlaceholder: 0, ancho: 1, altura: 2 });
    	}
    }

    /* src/componentes/Logo/Logo.svelte generated by Svelte v3.19.1 */

    function add_css$a() {
    	var style = element("style");
    	style.id = "svelte-1ig8hww-style";
    	style.textContent = "div.svelte-1ig8hww{display:flex;height:100%;width:100%;min-width:12rem;align-items:center;justify-content:left}a.svelte-1ig8hww{box-sizing:border-box;padding:0.5rem;height:100%;width:100%}h4.svelte-1ig8hww{margin:0.25rem 0}";
    	append(document.head, style);
    }

    // (42:44) 
    function create_if_block_1$2(ctx) {
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
    function create_if_block$6(ctx) {
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

    function create_fragment$c(ctx) {
    	let div;
    	let a;
    	let current_block_type_index;
    	let if_block;
    	let current;
    	const if_block_creators = [create_if_block$6, create_if_block_1$2];
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

    function instance$c($$self, $$props, $$invalidate) {
    	let { logoTexto } = $$props;
    	let { logoImagenUrl } = $$props;
    	let { logoAncho } = $$props;
    	let { alineacion } = $$props;

    	if (!alineacion) {
    		alineacion = "left";
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
    		if (!document.getElementById("svelte-1ig8hww-style")) add_css$a();

    		init(this, options, instance$c, create_fragment$c, safe_not_equal, {
    			logoTexto: 1,
    			logoImagenUrl: 2,
    			logoAncho: 3,
    			alineacion: 0
    		});
    	}
    }

    /* src/componentes/Header/HeaderVista.svelte generated by Svelte v3.19.1 */

    function add_css$b() {
    	var style = element("style");
    	style.id = "svelte-301z16-style";
    	style.textContent = "header.svelte-301z16.svelte-301z16{position:relative}header.svelte-301z16 div.svelte-301z16:nth-child(1){box-sizing:border-box;padding:0 0.5rem;display:flex;justify-content:space-between;height:100%;width:100%}.fixed.svelte-301z16.svelte-301z16{position:fixed;width:100%;top:0;left:0;z-index:1000}";
    	append(document.head, style);
    }

    // (69:28) 
    function create_if_block_3(ctx) {
    	let current;

    	const menuescritorio = new MenuEscritorio({
    			props: {
    				objetosMenu: /*objetosMenu*/ ctx[3],
    				colorFondo: /*colorFondo*/ ctx[6],
    				color: /*color*/ ctx[8]
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
    			if (dirty & /*colorFondo*/ 64) menuescritorio_changes.colorFondo = /*colorFondo*/ ctx[6];
    			if (dirty & /*color*/ 256) menuescritorio_changes.color = /*color*/ ctx[8];
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

    // (61:4) {#if responsivo < breakpoint}
    function create_if_block_2(ctx) {
    	let current;

    	const botonicono = new BotonIcono({
    			props: {
    				estado: /*estadoMenu*/ ctx[11],
    				iconoBotonEstadoUnoUrl: /*iconoBotonEstadoUnoUrl*/ ctx[12],
    				iconoBotonEstadoDosUrl: /*iconoBotonEstadoDosUrl*/ ctx[13],
    				iconoAltura: /*iconoBotonAltura*/ ctx[14],
    				colorBG: /*colorFondo*/ ctx[6]
    			}
    		});

    	botonicono.$on("click", function () {
    		if (is_function(/*menuAlternar*/ ctx[0])) /*menuAlternar*/ ctx[0].apply(this, arguments);
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
    			if (dirty & /*estadoMenu*/ 2048) botonicono_changes.estado = /*estadoMenu*/ ctx[11];
    			if (dirty & /*iconoBotonEstadoUnoUrl*/ 4096) botonicono_changes.iconoBotonEstadoUnoUrl = /*iconoBotonEstadoUnoUrl*/ ctx[12];
    			if (dirty & /*iconoBotonEstadoDosUrl*/ 8192) botonicono_changes.iconoBotonEstadoDosUrl = /*iconoBotonEstadoDosUrl*/ ctx[13];
    			if (dirty & /*iconoBotonAltura*/ 16384) botonicono_changes.iconoAltura = /*iconoBotonAltura*/ ctx[14];
    			if (dirty & /*colorFondo*/ 64) botonicono_changes.colorBG = /*colorFondo*/ ctx[6];
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

    // (76:2) {#if responsivo < breakpoint}
    function create_if_block$7(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = !!/*objetosMenu*/ ctx[3] && create_if_block_1$3(ctx);

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
    					if_block = create_if_block_1$3(ctx);
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

    // (77:4) {#if !!objetosMenu}
    function create_if_block_1$3(ctx) {
    	let current;

    	const menumovil = new MenuMovil({
    			props: {
    				estadoMenu: /*estadoMenu*/ ctx[11],
    				objetosMenu: /*objetosMenu*/ ctx[3],
    				color: /*color*/ ctx[8],
    				sombra: /*sombra*/ ctx[9],
    				colorFondo: /*colorFondoMovil*/ ctx[7],
    				alturaObjetoMenu: "3rem",
    				alturaMenuMovil: /*alturaMenuMovil*/ ctx[15],
    				objetosMenuExtra: /*objetosMenuExtra*/ ctx[16],
    				objetosAlineacion: /*objetosAlineacion*/ ctx[4]
    			}
    		});

    	menumovil.$on("eventoEstadoMenu", /*eventoEstadoMenu_handler*/ ctx[20]);

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
    			if (dirty & /*estadoMenu*/ 2048) menumovil_changes.estadoMenu = /*estadoMenu*/ ctx[11];
    			if (dirty & /*objetosMenu*/ 8) menumovil_changes.objetosMenu = /*objetosMenu*/ ctx[3];
    			if (dirty & /*color*/ 256) menumovil_changes.color = /*color*/ ctx[8];
    			if (dirty & /*sombra*/ 512) menumovil_changes.sombra = /*sombra*/ ctx[9];
    			if (dirty & /*colorFondoMovil*/ 128) menumovil_changes.colorFondo = /*colorFondoMovil*/ ctx[7];
    			if (dirty & /*alturaMenuMovil*/ 32768) menumovil_changes.alturaMenuMovil = /*alturaMenuMovil*/ ctx[15];
    			if (dirty & /*objetosMenuExtra*/ 65536) menumovil_changes.objetosMenuExtra = /*objetosMenuExtra*/ ctx[16];
    			if (dirty & /*objetosAlineacion*/ 16) menumovil_changes.objetosAlineacion = /*objetosAlineacion*/ ctx[4];
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

    function create_fragment$d(ctx) {
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
    	add_render_callback(/*onwindowresize*/ ctx[19]);

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
    		if (/*responsivo*/ ctx[17] < breakpoint) return 0;
    		if (!!/*objetosMenu*/ ctx[3]) return 1;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	let if_block1 = /*responsivo*/ ctx[17] < breakpoint && create_if_block$7(ctx);

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

    			attr(header, "style", header_style_value = "background-color:" + /*colorFondo*/ ctx[6] + ";height:" + /*altura*/ ctx[5] + ";" + (!!/*sombra*/ ctx[9]
    			? "box-shadow:0 1px 2px rgba(0,0,0,0.5)"
    			: ""));

    			attr(header, "class", header_class_value = "" + (null_to_empty(!!/*fixed*/ ctx[10] ? "fixed" : "") + " svelte-301z16"));
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
    			dispose = listen(window, "resize", /*onwindowresize*/ ctx[19]);
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

    			if (/*responsivo*/ ctx[17] < breakpoint) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    					transition_in(if_block1, 1);
    				} else {
    					if_block1 = create_if_block$7(ctx);
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

    			if (!current || dirty & /*colorFondo, altura, sombra*/ 608 && header_style_value !== (header_style_value = "background-color:" + /*colorFondo*/ ctx[6] + ";height:" + /*altura*/ ctx[5] + ";" + (!!/*sombra*/ ctx[9]
    			? "box-shadow:0 1px 2px rgba(0,0,0,0.5)"
    			: ""))) {
    				attr(header, "style", header_style_value);
    			}

    			if (!current || dirty & /*fixed*/ 1024 && header_class_value !== (header_class_value = "" + (null_to_empty(!!/*fixed*/ ctx[10] ? "fixed" : "") + " svelte-301z16"))) {
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

    function instance$d($$self, $$props, $$invalidate) {
    	let { menuAlternar } = $$props;
    	let { logoTexto } = $$props;
    	let { logoImagenUrl } = $$props;
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
    		$$invalidate(17, responsivo = window.innerWidth);
    	}

    	function eventoEstadoMenu_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$set = $$props => {
    		if ("menuAlternar" in $$props) $$invalidate(0, menuAlternar = $$props.menuAlternar);
    		if ("logoTexto" in $$props) $$invalidate(1, logoTexto = $$props.logoTexto);
    		if ("logoImagenUrl" in $$props) $$invalidate(2, logoImagenUrl = $$props.logoImagenUrl);
    		if ("objetosMenu" in $$props) $$invalidate(3, objetosMenu = $$props.objetosMenu);
    		if ("objetosAlineacion" in $$props) $$invalidate(4, objetosAlineacion = $$props.objetosAlineacion);
    		if ("altura" in $$props) $$invalidate(5, altura = $$props.altura);
    		if ("colorFondo" in $$props) $$invalidate(6, colorFondo = $$props.colorFondo);
    		if ("colorFondoMovil" in $$props) $$invalidate(7, colorFondoMovil = $$props.colorFondoMovil);
    		if ("color" in $$props) $$invalidate(8, color = $$props.color);
    		if ("sombra" in $$props) $$invalidate(9, sombra = $$props.sombra);
    		if ("fixed" in $$props) $$invalidate(10, fixed = $$props.fixed);
    		if ("estadoMenu" in $$props) $$invalidate(11, estadoMenu = $$props.estadoMenu);
    		if ("iconoBotonEstadoUnoUrl" in $$props) $$invalidate(12, iconoBotonEstadoUnoUrl = $$props.iconoBotonEstadoUnoUrl);
    		if ("iconoBotonEstadoDosUrl" in $$props) $$invalidate(13, iconoBotonEstadoDosUrl = $$props.iconoBotonEstadoDosUrl);
    		if ("iconoBotonAltura" in $$props) $$invalidate(14, iconoBotonAltura = $$props.iconoBotonAltura);
    		if ("alturaMenuMovil" in $$props) $$invalidate(15, alturaMenuMovil = $$props.alturaMenuMovil);
    		if ("objetosMenuExtra" in $$props) $$invalidate(16, objetosMenuExtra = $$props.objetosMenuExtra);
    		if ("segment" in $$props) $$invalidate(18, segment = $$props.segment);
    	};

    	return [
    		menuAlternar,
    		logoTexto,
    		logoImagenUrl,
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
    		if (!document.getElementById("svelte-301z16-style")) add_css$b();

    		init(this, options, instance$d, create_fragment$d, safe_not_equal, {
    			menuAlternar: 0,
    			logoTexto: 1,
    			logoImagenUrl: 2,
    			objetosMenu: 3,
    			objetosAlineacion: 4,
    			altura: 5,
    			colorFondo: 6,
    			colorFondoMovil: 7,
    			color: 8,
    			sombra: 9,
    			fixed: 10,
    			estadoMenu: 11,
    			iconoBotonEstadoUnoUrl: 12,
    			iconoBotonEstadoDosUrl: 13,
    			iconoBotonAltura: 14,
    			alturaMenuMovil: 15,
    			objetosMenuExtra: 16,
    			segment: 18
    		});
    	}
    }

    /* src/componentes/Header/Header.svelte generated by Svelte v3.19.1 */

    function create_fragment$e(ctx) {
    	let current;

    	const headervista = new HeaderVista({
    			props: {
    				segment: /*segment*/ ctx[16],
    				menuAlternar: /*menuAlternar*/ ctx[17],
    				estadoMenu: /*estadoMenu*/ ctx[0],
    				altura: /*altura*/ ctx[4],
    				objetosMenu: /*objetosMenu*/ ctx[3],
    				logoTexto: /*logoTexto*/ ctx[1],
    				logoImagenUrl: /*logoImagenUrl*/ ctx[2],
    				iconoBotonEstadoUnoUrl: /*iconoBotonEstadoUnoUrl*/ ctx[10],
    				iconoBotonEstadoDosUrl: /*iconoBotonEstadoDosUrl*/ ctx[11],
    				iconoBotonAltura: /*iconoBotonAltura*/ ctx[12],
    				colorFondo: /*colorFondo*/ ctx[5],
    				colorFondoMovil: /*colorFondoMovil*/ ctx[6],
    				color: /*color*/ ctx[7],
    				sombra: /*sombra*/ ctx[8],
    				fixed: /*fixed*/ ctx[9],
    				alturaMenuMovil: /*alturaMenuMovil*/ ctx[13],
    				objetosMenuExtra: /*objetosMenuExtra*/ ctx[14],
    				objetosAlineacion: /*objetosAlineacion*/ ctx[15]
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
    			if (dirty & /*segment*/ 65536) headervista_changes.segment = /*segment*/ ctx[16];
    			if (dirty & /*estadoMenu*/ 1) headervista_changes.estadoMenu = /*estadoMenu*/ ctx[0];
    			if (dirty & /*altura*/ 16) headervista_changes.altura = /*altura*/ ctx[4];
    			if (dirty & /*objetosMenu*/ 8) headervista_changes.objetosMenu = /*objetosMenu*/ ctx[3];
    			if (dirty & /*logoTexto*/ 2) headervista_changes.logoTexto = /*logoTexto*/ ctx[1];
    			if (dirty & /*logoImagenUrl*/ 4) headervista_changes.logoImagenUrl = /*logoImagenUrl*/ ctx[2];
    			if (dirty & /*iconoBotonEstadoUnoUrl*/ 1024) headervista_changes.iconoBotonEstadoUnoUrl = /*iconoBotonEstadoUnoUrl*/ ctx[10];
    			if (dirty & /*iconoBotonEstadoDosUrl*/ 2048) headervista_changes.iconoBotonEstadoDosUrl = /*iconoBotonEstadoDosUrl*/ ctx[11];
    			if (dirty & /*iconoBotonAltura*/ 4096) headervista_changes.iconoBotonAltura = /*iconoBotonAltura*/ ctx[12];
    			if (dirty & /*colorFondo*/ 32) headervista_changes.colorFondo = /*colorFondo*/ ctx[5];
    			if (dirty & /*colorFondoMovil*/ 64) headervista_changes.colorFondoMovil = /*colorFondoMovil*/ ctx[6];
    			if (dirty & /*color*/ 128) headervista_changes.color = /*color*/ ctx[7];
    			if (dirty & /*sombra*/ 256) headervista_changes.sombra = /*sombra*/ ctx[8];
    			if (dirty & /*fixed*/ 512) headervista_changes.fixed = /*fixed*/ ctx[9];
    			if (dirty & /*alturaMenuMovil*/ 8192) headervista_changes.alturaMenuMovil = /*alturaMenuMovil*/ ctx[13];
    			if (dirty & /*objetosMenuExtra*/ 16384) headervista_changes.objetosMenuExtra = /*objetosMenuExtra*/ ctx[14];
    			if (dirty & /*objetosAlineacion*/ 32768) headervista_changes.objetosAlineacion = /*objetosAlineacion*/ ctx[15];
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

    function instance$e($$self, $$props, $$invalidate) {
    	let { logoTexto } = $$props;
    	let { logoImagenUrl } = $$props;
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
    		if ("logoTexto" in $$props) $$invalidate(1, logoTexto = $$props.logoTexto);
    		if ("logoImagenUrl" in $$props) $$invalidate(2, logoImagenUrl = $$props.logoImagenUrl);
    		if ("objetosMenu" in $$props) $$invalidate(3, objetosMenu = $$props.objetosMenu);
    		if ("altura" in $$props) $$invalidate(4, altura = $$props.altura);
    		if ("colorFondo" in $$props) $$invalidate(5, colorFondo = $$props.colorFondo);
    		if ("colorFondoMovil" in $$props) $$invalidate(6, colorFondoMovil = $$props.colorFondoMovil);
    		if ("color" in $$props) $$invalidate(7, color = $$props.color);
    		if ("sombra" in $$props) $$invalidate(8, sombra = $$props.sombra);
    		if ("fixed" in $$props) $$invalidate(9, fixed = $$props.fixed);
    		if ("iconoBotonEstadoUnoUrl" in $$props) $$invalidate(10, iconoBotonEstadoUnoUrl = $$props.iconoBotonEstadoUnoUrl);
    		if ("iconoBotonEstadoDosUrl" in $$props) $$invalidate(11, iconoBotonEstadoDosUrl = $$props.iconoBotonEstadoDosUrl);
    		if ("iconoBotonAltura" in $$props) $$invalidate(12, iconoBotonAltura = $$props.iconoBotonAltura);
    		if ("alturaMenuMovil" in $$props) $$invalidate(13, alturaMenuMovil = $$props.alturaMenuMovil);
    		if ("objetosMenuExtra" in $$props) $$invalidate(14, objetosMenuExtra = $$props.objetosMenuExtra);
    		if ("objetosAlineacion" in $$props) $$invalidate(15, objetosAlineacion = $$props.objetosAlineacion);
    		if ("segment" in $$props) $$invalidate(16, segment = $$props.segment);
    		if ("estadoMenu" in $$props) $$invalidate(0, estadoMenu = $$props.estadoMenu);
    	};

    	return [
    		estadoMenu,
    		logoTexto,
    		logoImagenUrl,
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

    		init(this, options, instance$e, create_fragment$e, safe_not_equal, {
    			logoTexto: 1,
    			logoImagenUrl: 2,
    			objetosMenu: 3,
    			altura: 4,
    			colorFondo: 5,
    			colorFondoMovil: 6,
    			color: 7,
    			sombra: 8,
    			fixed: 9,
    			iconoBotonEstadoUnoUrl: 10,
    			iconoBotonEstadoDosUrl: 11,
    			iconoBotonAltura: 12,
    			alturaMenuMovil: 13,
    			objetosMenuExtra: 14,
    			objetosAlineacion: 15,
    			segment: 16,
    			estadoMenu: 0
    		});
    	}
    }

    /* src/componentes/Footer/Footer.svelte generated by Svelte v3.19.1 */

    function add_css$c() {
    	var style = element("style");
    	style.id = "svelte-1d49xkx-style";
    	style.textContent = "footer.svelte-1d49xkx.svelte-1d49xkx{position:relative}footer.svelte-1d49xkx div.svelte-1d49xkx:nth-child(1){box-sizing:border-box;padding:0 0.5rem;display:flex;justify-content:right;height:100%;width:100%}.fixed.svelte-1d49xkx.svelte-1d49xkx{position:fixed;width:100%;bottom:0;left:0;z-index:1000}";
    	append(document.head, style);
    }

    function create_fragment$f(ctx) {
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

    function instance$f($$self, $$props, $$invalidate) {
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
    		if (!document.getElementById("svelte-1d49xkx-style")) add_css$c();

    		init(this, options, instance$f, create_fragment$f, safe_not_equal, {
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

    function add_css$d() {
    	var style = element("style");
    	style.id = "svelte-1knd21b-style";
    	style.textContent = "label.svelte-1knd21b{width:100%;height:auto}";
    	append(document.head, style);
    }

    // (18:2) {#if !!textoLabel}
    function create_if_block$8(ctx) {
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

    function create_fragment$g(ctx) {
    	let label;
    	let t;
    	let current;
    	let if_block = !!/*textoLabel*/ ctx[0] && create_if_block$8(ctx);

    	const input = new Input({
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
    					if_block = create_if_block$8(ctx);
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

    function instance$g($$self, $$props, $$invalidate) {
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
    		if (!document.getElementById("svelte-1knd21b-style")) add_css$d();
    		init(this, options, instance$g, create_fragment$g, safe_not_equal, { textoLabel: 0, type: 1, placeholder: 2 });
    	}
    }

    /* src/componentes/Tarjetas/TarjetaHorizontal/TarjetaHorizontal.svelte generated by Svelte v3.19.1 */

    function add_css$e() {
    	var style = element("style");
    	style.id = "svelte-qc0sp0-style";
    	style.textContent = "article.svelte-qc0sp0{max-width:100%;height:auto;display:flex;flex-direction:unset;justify-content:flex-start;align-items:center;border-radius:0.25rem;background-color:rgb(255);color:rgb(0, 0, 0)}.tarjeta-imagen.svelte-qc0sp0{width:50%;height:21rem}.tarjeta-texto.svelte-qc0sp0{box-sizing:border-box;width:50%;padding:0.5rem 1rem}.tarjeta-boton.svelte-qc0sp0{display:flex;justify-content:center;width:100%}.sombra.svelte-qc0sp0{box-shadow:-1px 2px 3px rgba(0, 0, 0, 5)}";
    	append(document.head, style);
    }

    // (58:4) {#if !!titulo}
    function create_if_block$9(ctx) {
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

    function create_fragment$h(ctx) {
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

    	let if_block = !!/*titulo*/ ctx[1] && create_if_block$9(ctx);

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
    					if_block = create_if_block$9(ctx);
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

    function instance$h($$self, $$props, $$invalidate) {
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
    		if (!document.getElementById("svelte-qc0sp0-style")) add_css$e();

    		init(this, options, instance$h, create_fragment$h, safe_not_equal, {
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

    function add_css$f() {
    	var style = element("style");
    	style.id = "svelte-wqiyr2-style";
    	style.textContent = "article.svelte-wqiyr2{max-width:20rem;height:auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;border-radius:0.25rem;background-color:rgb(255);color:rgb(0, 0, 0)}.tarjeta-imagen.svelte-wqiyr2{width:100%;height:10rem}.tarjeta-texto.svelte-wqiyr2{box-sizing:border-box;padding:1rem 2rem;width:100%}.tarjeta-boton.svelte-wqiyr2{display:flex;justify-content:center;width:100%}.sombra.svelte-wqiyr2{box-shadow:-1px 2px 3px rgba(0, 0, 0, 5)}";
    	append(document.head, style);
    }

    // (58:4) {#if !!titulo}
    function create_if_block_1$4(ctx) {
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
    function create_if_block$a(ctx) {
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

    function create_fragment$i(ctx) {
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

    	let if_block0 = !!/*titulo*/ ctx[1] && create_if_block_1$4(ctx);
    	let if_block1 = !!/*texto*/ ctx[4] && create_if_block$a(ctx);

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
    					if_block0 = create_if_block_1$4(ctx);
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
    					if_block1 = create_if_block$a(ctx);
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

    function instance$i($$self, $$props, $$invalidate) {
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
    		if (!document.getElementById("svelte-wqiyr2-style")) add_css$f();

    		init(this, options, instance$i, create_fragment$i, safe_not_equal, {
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

    function create_else_block$1(ctx) {
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
    function create_if_block$b(ctx) {
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

    function create_fragment$j(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	let dispose;
    	add_render_callback(/*onwindowresize*/ ctx[9]);
    	const if_block_creators = [create_if_block$b, create_else_block$1];
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

    function instance$j($$self, $$props, $$invalidate) {
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

    		init(this, options, instance$j, create_fragment$j, safe_not_equal, {
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

    exports.Boton = Boton;
    exports.BotonIcono = BotonIcono;
    exports.Footer = Footer;
    exports.Header = Header;
    exports.Imagen = Imagen;
    exports.Input = Input;
    exports.InputEmail = InputEmail;
    exports.InputSelect = InputSelect;
    exports.Label = Label;
    exports.Logo = Logo;
    exports.MenuEscritorio = MenuEscritorio;
    exports.MenuMovil = MenuMovil;
    exports.Parrafo = Parrafo;
    exports.Tarjeta = Tarjeta;
    exports.TarjetaHorizontal = TarjetaHorizontal;
    exports.TarjetaVertical = TarjetaVertical;
    exports.TextArea = TextArea;
    exports.Titulo = Titulo;
    exports.Video = Video;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
