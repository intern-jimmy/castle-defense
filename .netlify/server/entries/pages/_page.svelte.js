import { b as get_store_value, c as create_ssr_component, d as compute_rest_props, f as createEventDispatcher, h as add_attribute, e as escape, i as spread, j as escape_attribute_value, k as escape_object, l as compute_slots, a as subscribe, v as validate_component, n as each } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { H as HeroCard } from "../../chunks/HeroCard.js";
import "graphql-request";
import { g as gameStore } from "../../chunks/GameStore.js";
import "web3";
const stores = {};
function getStorage(type) {
  return type === "local" ? localStorage : sessionStorage;
}
function localStorageStore(key, initialValue, options) {
  const serializer = options?.serializer ?? JSON;
  const storageType = options?.storage ?? "local";
  const browser = typeof window !== "undefined" && typeof document !== "undefined";
  function updateStorage(key2, value) {
    if (!browser)
      return;
    getStorage(storageType).setItem(key2, serializer.stringify(value));
  }
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
      const json = browser ? getStorage(storageType).getItem(key) : null;
      if (json) {
        set2(serializer.parse(json));
      }
      if (browser) {
        const handleStorage = (event) => {
          if (event.key === key)
            set2(event.newValue ? serializer.parse(event.newValue) : null);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
      }
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        updateStorage(key, value);
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
const ProgressBar_svelte_svelte_type_style_lang = "";
const cBase = "inline-block";
const cLabel = "unstyled flex items-center";
const cTrack = "flex transition-all duration-[200ms] cursor-pointer";
const cThumb = "w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";
const SlideToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cTrackActive;
  let cThumbBackground;
  let cThumbPos;
  let classesDisabled;
  let classesBase;
  let classesLabel;
  let classesTrack;
  let classesThumb;
  let $$restProps = compute_rest_props($$props, ["name", "checked", "size", "active", "border", "rounded", "label"]);
  let $$slots = compute_slots(slots);
  createEventDispatcher();
  let { name } = $$props;
  let { checked = false } = $$props;
  let { size = "md" } = $$props;
  let { active = "bg-surface-900 dark:bg-surface-300" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { label = "" } = $$props;
  let trackSize;
  switch (size) {
    case "sm":
      trackSize = "w-12 h-6";
      break;
    case "lg":
      trackSize = "w-20 h-10";
      break;
    default:
      trackSize = "w-16 h-8";
  }
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  cTrackActive = checked ? active : "bg-surface-400 dark:bg-surface-700 cursor-pointer";
  cThumbBackground = checked ? "bg-white/75" : "bg-white";
  cThumbPos = checked ? "translate-x-full" : "";
  classesDisabled = $$props.disabled === true ? "opacity-50" : "hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer";
  classesBase = `${cBase} ${rounded} ${classesDisabled} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  classesTrack = `${cTrack} ${border} ${rounded} ${trackSize} ${cTrackActive}`;
  classesThumb = `${cThumb} ${rounded} ${cThumbBackground} ${cThumbPos}`;
  return `<div${add_attribute("id", label, 0)} class="${"slide-toggle " + escape(classesBase, true)}" data-testid="slide-toggle" role="switch"${add_attribute("aria-label", label, 0)}${add_attribute("aria-checked", checked, 0)} tabindex="0"><label class="${"slide-toggle-label " + escape(classesLabel, true)}">
		<input${spread(
    [
      { type: "checkbox" },
      { class: "slide-toggle-input hidden" },
      { name: escape_attribute_value(name) },
      escape_object(prunedRestProps()),
      { disabled: $$props.disabled || null }
    ],
    {}
  )}${add_attribute("checked", checked, 1)}>
		
		<div class="${[
    "slide-toggle-track " + escape(classesTrack, true),
    $$props.disabled ? "cursor-not-allowed" : ""
  ].join(" ").trim()}"><div class="${[
    "slide-toggle-thumb " + escape(classesThumb, true),
    $$props.disabled ? "cursor-not-allowed" : ""
  ].join(" ").trim()}"></div></div>
		
		${$$slots.default ? `<div class="slide-toggle-text ml-3">${slots.default ? slots.default({}) : ``}</div>` : ``}</label></div>`;
});
const normalTilemap = [
  // grass/road 9 square
  { background: "grass", x: 2, y: 5, walkable: true, placeable: true },
  { background: "road-bottom-right-grass", x: 1, y: 4, walkable: true, placeable: true },
  { background: "top-road-bottom-grass", x: 2, y: 4, walkable: true, placeable: true },
  { background: "road-bottom-left-grass", x: 3, y: 4, walkable: true, placeable: true },
  { background: "left-road-right-grass", x: 1, y: 5, walkable: true, placeable: true },
  { background: "left-grass-right-road", x: 3, y: 5, walkable: true, placeable: true },
  { background: "road-top-right-grass", x: 1, y: 6, walkable: true, placeable: true },
  { background: "top-grass-bottom-road", x: 2, y: 6, walkable: true, placeable: true },
  { background: "road-top-left-grass", x: 3, y: 6, walkable: true, placeable: true },
  // grass/road 4 square
  { background: "grass-bottom-right-road", x: 4, y: 4, walkable: true, placeable: true },
  { background: "grass-bottom-left-road", x: 5, y: 4, walkable: true, placeable: true },
  { background: "grass-top-right-road", x: 4, y: 5, walkable: true, placeable: true },
  { background: "grass-top-left-road", x: 5, y: 5, walkable: true, placeable: true },
  // grass/road diagonal 
  { background: "grass-bottom-left-top-right-road", x: 4, y: 6, walkable: true, placeable: true },
  { background: "grass-top-left-bottom-right-road", x: 5, y: 6, walkable: true, placeable: true },
  // water/grass 9 square 
  { background: "water", x: 2, y: 3, walkable: false, placeable: false },
  { background: "water-bottom-right-grass", x: 6, y: 4, walkable: false, placeable: false },
  { background: "water-top-grass-bottom", x: 7, y: 4, walkable: false, placeable: false },
  { background: "water-bottom-left-grass", x: 8, y: 4, walkable: false, placeable: false },
  { background: "water-left-grass-right", x: 6, y: 5, walkable: false, placeable: false },
  { background: "water-right-grass-left", x: 8, y: 5, walkable: false, placeable: false },
  { background: "water-top-right-grass", x: 6, y: 6, walkable: false, placeable: false },
  { background: "water-bottom-grass-top", x: 7, y: 6, walkable: false, placeable: false },
  { background: "water-top-left-grass", x: 8, y: 6, walkable: false, placeable: false },
  // water/grass 4 square
  { background: "grass-bottom-right-water", x: 9, y: 4, walkable: false, placeable: false },
  { background: "grass-bottom-left-water", x: 10, y: 4, walkable: false, placeable: false },
  { background: "grass-top-right-water", x: 9, y: 5, walkable: false, placeable: false },
  { background: "grass-top-left-water", x: 10, y: 5, walkable: false, placeable: false },
  // water/grass diagonal 
  { background: "water-top-left-bottom-right-grass", x: 9, y: 6, walkable: false, placeable: false },
  { background: "water-bottom-left-top-right-grass", x: 10, y: 6, walkable: false, placeable: false },
  // water/road 9 square
  { background: "road", x: 12, y: 5, walkable: true, placeable: true },
  { background: "water-bottom-right-road", x: 11, y: 4, walkable: false, placeable: false },
  { background: "water-top-road-bottom", x: 12, y: 4, walkable: false, placeable: false },
  { background: "water-bottom-left-road", x: 13, y: 4, walkable: false, placeable: false },
  { background: "water-left-road-right", x: 11, y: 5, walkable: false, placeable: false },
  { background: "water-right-road-left", x: 13, y: 5, walkable: false, placeable: false },
  { background: "water-top-right-road", x: 11, y: 6, walkable: false, placeable: false },
  { background: "water-bottom-road-top", x: 12, y: 6, walkable: false, placeable: false },
  { background: "water-top-left-road", x: 13, y: 6, walkable: false, placeable: false },
  // water/road 4 square
  { background: "road-bottom-right-water", x: 14, y: 4, walkable: false, placeable: false },
  { background: "road-bottom-left-water", x: 15, y: 4, walkable: false, placeable: false },
  { background: "road-top-right-water", x: 14, y: 5, walkable: false, placeable: false },
  { background: "road-top-left-water", x: 15, y: 5, walkable: false, placeable: false },
  // water/road diagonal
  { background: "water-bottom-right-top-left-road", x: 14, y: 6, walkable: false, placeable: false },
  { background: "water-top-right-bottom-left-road", x: 15, y: 6, walkable: false, placeable: false },
  // wall/grass 9 square
  { background: "wall", x: 4, y: 3, walkable: true, placeable: false },
  { background: "wall-bottom-right-grass", x: 16, y: 4, walkable: false, placeable: false },
  { background: "wall-top-grass-bottom", x: 17, y: 4, walkable: false, placeable: false },
  { background: "wall-bottom-left-grass", x: 18, y: 4, walkable: false, placeable: false },
  { background: "wall-left-grass-right", x: 16, y: 5, walkable: false, placeable: false },
  { background: "wall-right-grass-left", x: 18, y: 5, walkable: false, placeable: false },
  { background: "wall-top-right-grass", x: 16, y: 6, walkable: false, placeable: false },
  { background: "wall-bottom-grass-top", x: 17, y: 6, walkable: false, placeable: false },
  { background: "wall-top-left-grass", x: 18, y: 6, walkable: false, placeable: false },
  // wall/grass 4 square
  { background: "grass-bottom-right-wall", x: 19, y: 4, walkable: false, placeable: false },
  { background: "grass-bottom-left-wall", x: 20, y: 4, walkable: false, placeable: false },
  { background: "grass-top-right-wall", x: 19, y: 5, walkable: false, placeable: false },
  { background: "grass-top-left-wall", x: 20, y: 5, walkable: false, placeable: false },
  // wall/grass diagonal
  { background: "wall-bottom-right-top-left-grass", x: 19, y: 6, walkable: false, placeable: false },
  { background: "wall-top-right-bottom-left-grass", x: 20, y: 6, walkable: false, placeable: false },
  // wall/water "9" square
  { background: "wall-bottom-right-water", x: 16, y: 1, walkable: false, placeable: false },
  { background: "wall-top-water-bottom", x: 17, y: 1, walkable: false, placeable: false },
  { background: "wall-bottom-left-water", x: 18, y: 1, walkable: false, placeable: false },
  { background: "wall-left-water-right", x: 16, y: 2, walkable: false, placeable: false },
  { background: "wall-right-water-left", x: 18, y: 2, walkable: false, placeable: false },
  { background: "wall-top-right-water", x: 16, y: 3, walkable: false, placeable: false },
  { background: "wall-bottom-water-top", x: 17, y: 3, walkable: false, placeable: false },
  { background: "wall-top-left-water", x: 18, y: 3, walkable: false, placeable: false },
  // wall/water 4 square
  { background: "water-bottom-right-wall", x: 19, y: 1, walkable: false, placeable: false },
  { background: "water-bottom-left-wall", x: 20, y: 1, walkable: false, placeable: false },
  { background: "water-top-right-wall", x: 19, y: 2, walkable: false, placeable: false },
  { background: "water-top-left-wall", x: 20, y: 2, walkable: false, placeable: false },
  // wall/water diagonal
  { background: "wall-bottom-right-top-left-water", x: 19, y: 3, walkable: false, placeable: false },
  { background: "wall-top-right-bottom-left-water", x: 20, y: 3, walkable: false, placeable: false },
  // wall/road 9 square
  { background: "wall-bottom-right-road", x: 16, y: 7, walkable: false, placeable: false },
  { background: "wall-top-road-bottom", x: 17, y: 7, walkable: false, placeable: false },
  { background: "wall-bottom-left-road", x: 18, y: 7, walkable: false, placeable: false },
  { background: "wall-left-road-right", x: 16, y: 8, walkable: false, placeable: false },
  { background: "wall-right-road-left", x: 18, y: 8, walkable: false, placeable: false },
  { background: "wall-top-right-road", x: 16, y: 9, walkable: false, placeable: false },
  { background: "wall-bottom-road-top", x: 17, y: 9, walkable: false, placeable: false },
  { background: "wall-top-left-road", x: 18, y: 9, walkable: false, placeable: false },
  // wall/road 4 square
  { background: "road-bottom-right-wall", x: 19, y: 7, walkable: false, placeable: false },
  { background: "road-bottom-left-wall", x: 20, y: 7, walkable: false, placeable: false },
  { background: "road-top-right-wall", x: 19, y: 8, walkable: false, placeable: false },
  { background: "road-top-left-wall", x: 20, y: 8, walkable: false, placeable: false },
  // wall/road diagonal
  { background: "wall-bottom-right-top-left-road", x: 19, y: 9, walkable: false, placeable: false },
  { background: "wall-top-right-bottom-left-road", x: 20, y: 9, walkable: false, placeable: false }
  //{background: "", x: 0, y: 0, walkable: false, placeable: false},
];
[
  [
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road-top-right-grass"),
    normalTilemap.find((tile) => tile.background === "grass-bottom-left-road"),
    normalTilemap.find((tile) => tile.background === "grass-bottom-right-road"),
    normalTilemap.find((tile) => tile.background === "road-top-left-grass"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road")
  ],
  [
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road-top-right-grass"),
    normalTilemap.find((tile) => tile.background === "road-top-left-grass"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road")
  ],
  [
    normalTilemap.find((tile) => tile.background === "top-road-bottom-grass"),
    normalTilemap.find((tile) => tile.background === "top-road-bottom-grass"),
    normalTilemap.find((tile) => tile.background === "road-bottom-left-grass"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road-bottom-right-grass"),
    normalTilemap.find((tile) => tile.background === "top-road-bottom-grass"),
    normalTilemap.find((tile) => tile.background === "top-road-bottom-grass")
  ],
  [
    normalTilemap.find((tile) => tile.background === "grass-bottom-left-water"),
    normalTilemap.find((tile) => tile.background === "grass"),
    normalTilemap.find((tile) => tile.background === "left-grass-right-road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "left-road-right-grass"),
    normalTilemap.find((tile) => tile.background === "grass"),
    normalTilemap.find((tile) => tile.background === "grass-bottom-right-water")
  ],
  [
    normalTilemap.find((tile) => tile.background === "water-left-grass-right"),
    normalTilemap.find((tile) => tile.background === "grass"),
    normalTilemap.find((tile) => tile.background === "left-grass-right-road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "left-road-right-grass"),
    normalTilemap.find((tile) => tile.background === "grass"),
    normalTilemap.find((tile) => tile.background === "water-right-grass-left")
  ],
  [
    normalTilemap.find((tile) => tile.background === "water-left-grass-right"),
    normalTilemap.find((tile) => tile.background === "grass"),
    normalTilemap.find((tile) => tile.background === "left-grass-right-road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "left-road-right-grass"),
    normalTilemap.find((tile) => tile.background === "grass-bottom-right-water"),
    normalTilemap.find((tile) => tile.background === "water-top-left-grass")
  ],
  [
    normalTilemap.find((tile) => tile.background === "water-left-grass-right"),
    normalTilemap.find((tile) => tile.background === "grass"),
    normalTilemap.find((tile) => tile.background === "left-grass-right-road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "left-road-right-grass"),
    normalTilemap.find((tile) => tile.background === "grass-top-right-water"),
    normalTilemap.find((tile) => tile.background === "water-bottom-left-grass")
  ],
  [
    normalTilemap.find((tile) => tile.background === "water-left-grass-right"),
    normalTilemap.find((tile) => tile.background === "grass"),
    normalTilemap.find((tile) => tile.background === "left-grass-right-road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "left-road-right-grass"),
    normalTilemap.find((tile) => tile.background === "grass"),
    normalTilemap.find((tile) => tile.background === "water-right-grass-left")
  ],
  [
    normalTilemap.find((tile) => tile.background === "water-left-grass-right"),
    normalTilemap.find((tile) => tile.background === "grass-bottom-right-road"),
    normalTilemap.find((tile) => tile.background === "road-top-left-grass"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road"),
    normalTilemap.find((tile) => tile.background === "road-top-right-grass"),
    normalTilemap.find((tile) => tile.background === "grass-bottom-left-road"),
    normalTilemap.find((tile) => tile.background === "grass-top-right-water")
  ],
  [
    normalTilemap.find((tile) => tile.background === "grass-top-left-water"),
    normalTilemap.find((tile) => tile.background === "left-grass-right-road"),
    normalTilemap.find((tile) => tile.background === "road-bottom-right-wall"),
    normalTilemap.find((tile) => tile.background === "wall-bottom-road-top"),
    normalTilemap.find((tile) => tile.background === "wall-bottom-road-top"),
    normalTilemap.find((tile) => tile.background === "wall-bottom-road-top"),
    normalTilemap.find((tile) => tile.background === "wall-bottom-road-top"),
    normalTilemap.find((tile) => tile.background === "road-bottom-left-wall"),
    normalTilemap.find((tile) => tile.background === "left-road-right-grass"),
    normalTilemap.find((tile) => tile.background === "grass")
  ]
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gameStore, $$unsubscribe_gameStore;
  $$unsubscribe_gameStore = subscribe(gameStore, (value) => $gameStore = value);
  let playerAddress = "";
  function toggleHeroSelection(heroId) {
  }
  $$unsubscribe_gameStore();
  return `<h1>Welcome to Castle Defender</h1>

<div>${`<div style="float: left"><label class="label"><span>Wallet:</span>
      <input class="input" type="text" placeholder="wallet address"${add_attribute("value", playerAddress, 0)}></label>
    <button type="button" class="btn variant-filled-surface">Get Profile</button></div>`}
  ${validate_component(SlideToggle, "SlideToggle").$$render($$result, { style: "float:right;" }, {}, {})}</div>

${$gameStore.playerAddress.length === 0 ? `<button type="button" class="btn variant-filled-primary">Connect Wallet</button>` : ``}

${``}

${$gameStore.playerAddress.length > 0 ? `<div><p>Select 4 heroes for yout party:</p></div>
  <div class="grid grid-cols-3 gap-4">${each($gameStore.heroes, (hero) => {
    return `${validate_component(HeroCard, "HeroCard").$$render(
      $$result,
      {
        hero,
        onToggleSelection: () => toggleHeroSelection(hero.id)
      },
      {},
      {}
    )}`;
  })}</div>
  <div><button>Start Game</button></div>` : ``}`;
});
export {
  Page as default
};
