import { c as create_ssr_component, a as subscribe, v as validate_component, h as add_attribute } from "../../../chunks/index2.js";
import { C as Canvas, B as Background, F as FPS } from "../../../chunks/FPS.js";
import { g as gameStore } from "../../../chunks/GameStore.js";
const App_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0}.app.svelte-xm4ff4{margin:auto;margin-top:10%;width:50%;padding:10px}",
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gameStore, $$unsubscribe_gameStore;
  $$unsubscribe_gameStore = subscribe(gameStore, (value) => $gameStore = value);
  $$result.css.add(css);
  $$unsubscribe_gameStore();
  return `<div class="app svelte-xm4ff4">${validate_component(Canvas, "Canvas").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Background, "Background").$$render(
        $$result,
        {
          map: $gameStore.map,
          color: "hsl(0, 0%, 10%)"
        },
        {},
        {}
      )}
		
		${validate_component(FPS, "FPS").$$render($$result, {}, {}, {})}`;
    }
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(App, "App").$$render($$result, {}, {}, {})}<img id="nature"${add_attribute("src", "./map-tilesets/RPGNatureTileset.png", 0)} alt="nature-spritesheet" style="display: none;">`;
});
export {
  Page as default
};
