import { getContext, onMount } from 'svelte';
import { derived, writable } from 'svelte/store';

// Some props for the app
export const width = writable();
export const height = writable();
export const pixelRatio = writable();
export const context = writable();
export const canvas = writable();
export const time = writable(0);

// A more convenient store for grabbing all game props
export const props = deriveObject({
	context,
	canvas,
	width,
	height,
	pixelRatio,
	time
});

export const key = Symbol();

export const getState = () => {
	const api = getContext(key);
	return api.getState();
};

export const renderable = (render) => {
	const api = getContext(key);
	const element = {
		ready: false,
		mounted: false
	};
	if (typeof render === 'function') element.render = render;
	else if (render) {
		if (render.render) element.render = render.render;
		if (render.setup) element.setup = render.setup;
	}
	api.add(element);
	onMount(() => {

		width.set(700);
		height.set(700);
		pixelRatio.set(window.devicePixelRatio);

		element.mounted = true;
		return () => {
			api.remove(element);
			element.mounted = false;
		};
	});
}

function deriveObject (obj) {
	const keys = Object.keys(obj);
	const list = keys.map(key => {
		return obj[key];
	});
	return derived(list, (array) => {
		return array.reduce((dict, value, i) => {
			dict[keys[i]] = value;
			return dict;
		}, {});
	});
}