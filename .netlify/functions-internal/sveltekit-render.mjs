import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["backgrounds/arctic.png","backgrounds/city.gif","backgrounds/desert.gif","backgrounds/forest.gif","backgrounds/island.png","backgrounds/mountains.png","backgrounds/plains.png","backgrounds/swamp.gif","element/element-dark.png","element/element-earth.png","element/element-fire.png","element/element-ice.png","element/element-light.png","element/element-lightning.png","element/element-water.png","element/element-wind.png","favicon.png","map-tilesets/IceTileset.png","map-tilesets/RPG Nature Tileset Autumn.png","map-tilesets/RPGNatureTileset.png","rarity/rarity-common.png","rarity/rarity-legendary.png","rarity/rarity-mythic.png","rarity/rarity-rare.png","rarity/rarity-uncommon.png","survivor_badge.png","weapons/archer-weapon.svg","weapons/bard-weapon.png","weapons/berserker-weapon.svg","weapons/darkKnight-weapon.svg","weapons/dragoon-weapon.svg","weapons/dreadknight-weapon.svg","weapons/knight-weapon.svg","weapons/legionnaire-weapon.png","weapons/monk-weapon.svg","weapons/ninja-weapon.svg","weapons/paladin-weapon.svg","weapons/pirate-weapon.svg","weapons/priest-weapon.svg","weapons/sage-weapon.svg","weapons/scholar-weapon.png","weapons/seer-weapon.svg","weapons/shapeshifter-weapon.svg","weapons/spellbow-weapon.png","weapons/summoner-weapon.svg","weapons/thief-weapon.svg","weapons/warrior-weapon.svg","weapons/wizard-weapon.svg","web-assets/checkbox_empty.png","web-assets/checkbox_filled.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8fe43400.js","imports":["_app/immutable/entry/start.8fe43400.js","_app/immutable/chunks/index.a43560f4.js","_app/immutable/chunks/singletons.f9ec0e08.js","_app/immutable/chunks/index.9d6c0071.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.61d8e3cb.js","imports":["_app/immutable/entry/app.61d8e3cb.js","_app/immutable/chunks/index.a43560f4.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/app",
				pattern: /^\/app\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/game",
				pattern: /^\/game\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
