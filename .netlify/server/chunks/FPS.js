import { g as getContext, c as create_ssr_component, a as subscribe, s as setContext, h as add_attribute, e as escape, v as validate_component } from "./index2.js";
import { d as derived, w as writable } from "./index.js";
const width = writable();
const height = writable();
const pixelRatio = writable();
const context = writable();
const canvas = writable();
const time = writable(0);
const props = deriveObject({
  context,
  canvas,
  width,
  height,
  pixelRatio,
  time
});
const key = Symbol();
const renderable = (render) => {
  const api = getContext(key);
  const element = {
    ready: false,
    mounted: false
  };
  if (typeof render === "function")
    element.render = render;
  else if (render) {
    if (render.render)
      element.render = render.render;
    if (render.setup)
      element.setup = render.setup;
  }
  api.add(element);
};
function deriveObject(obj) {
  const keys = Object.keys(obj);
  const list = keys.map((key2) => {
    return obj[key2];
  });
  return derived(list, (array) => {
    return array.reduce((dict, value, i) => {
      dict[keys[i]] = value;
      return dict;
    }, {});
  });
}
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_props;
  let $pixelRatio, $$unsubscribe_pixelRatio;
  let $width, $$unsubscribe_width;
  let $height, $$unsubscribe_height;
  $$unsubscribe_props = subscribe(props, (value) => value);
  $$unsubscribe_pixelRatio = subscribe(pixelRatio, (value) => $pixelRatio = value);
  $$unsubscribe_width = subscribe(width, (value) => $width = value);
  $$unsubscribe_height = subscribe(height, (value) => $height = value);
  let { killLoopOnError = true } = $$props;
  let { attributes = {} } = $$props;
  let { clicked = null } = $$props;
  let canvas$1;
  setContext(key, {
    add(fn) {
      this.remove(fn);
    },
    remove(fn) {
    }
  });
  if ($$props.killLoopOnError === void 0 && $$bindings.killLoopOnError && killLoopOnError !== void 0)
    $$bindings.killLoopOnError(killLoopOnError);
  if ($$props.attributes === void 0 && $$bindings.attributes && attributes !== void 0)
    $$bindings.attributes(attributes);
  if ($$props.clicked === void 0 && $$bindings.clicked && clicked !== void 0)
    $$bindings.clicked(clicked);
  $$unsubscribe_props();
  $$unsubscribe_pixelRatio();
  $$unsubscribe_width();
  $$unsubscribe_height();
  return `<canvas${add_attribute("width", $width * $pixelRatio, 0)}${add_attribute("height", $height * $pixelRatio, 0)} style="${"width: " + escape($width, true) + "px; height: " + escape($height, true) + "px;"}"${add_attribute("this", canvas$1, 0)}></canvas>

${slots.default ? slots.default({}) : ``}`;
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
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { map } = $$props;
  const spriteMapWidth = 32;
  const spriteMapHeight = 32;
  const multiplier = 2;
  renderable((props2) => {
    const { context: context2, width: width2, height: height2 } = props2;
    context2.clearRect(0, 0, width2, height2);
    context2.fillStyle = "#ff007f";
    context2.fillRect(0, 0, width2, height2);
    const natureSprites = document.getElementById("nature");
    for (let x = 0; x < map.length; x++) {
      for (let y = 0; y < map[x].length; y++) {
        let tile = normalTilemap.find((tile2) => tile2.background === map[x][y].background);
        let backgroundX = tile.x - 1;
        let backgroundY = tile.y - 1;
        const tileStartingX = backgroundX * spriteMapWidth;
        const tileStartingY = backgroundY * spriteMapHeight;
        const startingX = y * spriteMapWidth * multiplier - 1;
        const startinY = x * spriteMapHeight * multiplier - 1;
        const width22 = spriteMapWidth * multiplier + 1;
        const height22 = spriteMapHeight * multiplier + 1;
        context2.drawImage(natureSprites, tileStartingX, tileStartingY, spriteMapWidth, spriteMapHeight, startingX, startinY, width22, height22);
        if (map[x][y].occupiedBy != null) {
          const hero = map[x][y].occupiedBy;
          let heroImg = new Image();
          heroImg.src = "https://heroes.defikingdoms.com/image/" + hero.id;
          context2.drawImage(heroImg, startingX, startinY, width22, height22);
        }
      }
    }
  });
  if ($$props.map === void 0 && $$bindings.map && map !== void 0)
    $$bindings.map(map);
  if ($$props.spriteMapWidth === void 0 && $$bindings.spriteMapWidth && spriteMapWidth !== void 0)
    $$bindings.spriteMapWidth(spriteMapWidth);
  if ($$props.spriteMapHeight === void 0 && $$bindings.spriteMapHeight && spriteMapHeight !== void 0)
    $$bindings.spriteMapHeight(spriteMapHeight);
  if ($$props.multiplier === void 0 && $$bindings.multiplier && multiplier !== void 0)
    $$bindings.multiplier(multiplier);
  return `
${slots.default ? slots.default({}) : ``}`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "hsl(0, 0%, 100%)" } = $$props;
  let { align = "center" } = $$props;
  let { baseline = "middle" } = $$props;
  let { text = "" } = $$props;
  let { x = 0 } = $$props;
  let { y = 0 } = $$props;
  let { fontSize = 16 } = $$props;
  let { fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica' } = $$props;
  renderable((props2) => {
    const { context: context2, width: width2, height: height2 } = props2;
    if (text) {
      context2.fillStyle = color;
      context2.font = `${fontSize}px ${fontFamily}`;
      context2.textAlign = align;
      context2.textBaseline = baseline;
      context2.fillText(text, x, y);
    }
  });
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.baseline === void 0 && $$bindings.baseline && baseline !== void 0)
    $$bindings.baseline(baseline);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.fontFamily === void 0 && $$bindings.fontFamily && fontFamily !== void 0)
    $$bindings.fontFamily(fontFamily);
  return `
${slots.default ? slots.default({}) : ``}`;
});
const FPS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let text = "";
  let frames = 0;
  let prevTime = performance.now();
  renderable((state, dt) => {
    let time2 = performance.now();
    frames++;
    if (time2 >= prevTime + 1e3) {
      const fps = frames * 1e3 / (time2 - prevTime);
      text = `${fps.toFixed(1)} FPS`;
      prevTime = time2;
      frames = 0;
    }
  });
  return `${validate_component(Text, "Text").$$render(
    $$result,
    {
      text,
      fontSize: "12",
      fontFamily: "Courier New",
      align: "left",
      baseline: "top",
      x: 20,
      y: 20
    },
    {},
    {}
  )}


${slots.default ? slots.default({}) : ``}`;
});
export {
  Background as B,
  Canvas as C,
  FPS as F
};
