<script lang="ts">
  export let background: string;
  export let tileset: string = "rpg-nature";
  //tileset = "rpg-ice";
	export let character: Hero | null;
	let src: string = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
	
	if(character !== null) {
		src = `https://heroes.defikingdoms.com/image/${character.id}`
	}
</script>

<div>
  <img class="{tileset} background-{background}" src={src} alt={background}/>
</div>

<style>
  .rpg-nature {
    background-image: url('map-tilesets/RPGNatureTileset.png');
  }

  .rpg-ice {
    background-image: url('map-tilesets/IceTileset.png');
  }

  .background-grass {
 	background-position: 0px -64px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-bottom-right-grass {
 	background-position: 0px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-top-road-bottom-grass {
 	background-position: -32px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-bottom-left-grass {
 	background-position: -64px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-left-road-right-grass {
 	background-position: 0px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-left-grass-right-road {
 	background-position: -64px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-top-right-grass {
 	background-position: 0px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-top-grass-bottom-road {
 	background-position: -32px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-top-left-grass {
 	background-position: -64px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-bottom-right-road {
 	background-position: -96px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-bottom-left-road {
 	background-position: -128px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-top-right-road {
 	background-position: -96px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-top-left-road {
 	background-position: -128px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-bottom-left-top-right-road {
 	background-position: -96px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-top-left-bottom-right-road {
 	background-position: -128px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-water {
 	background-position: -32px -64px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-bottom-right-grass {
 	background-position: -160px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-top-grass-bottom {
 	background-position: -192px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-bottom-left-grass {
 	background-position: -224px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-left-grass-right {
 	background-position: -160px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-right-grass-left {
 	background-position: -224px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-top-right-grass {
 	background-position: -160px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-bottom-grass-top {
 	background-position: -192px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-top-left-grass {
 	background-position: -224px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-bottom-right-water {
 	background-position: -256px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-bottom-left-water {
 	background-position: -288px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-top-right-water {
 	background-position: -256px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-top-left-water {
 	background-position: -288px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-top-left-bottom-right-grass {
 	background-position: -256px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-bottom-left-top-right-grass {
 	background-position: -288px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-road {
 	background-position: -64px -64px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-bottom-right-road {
 	background-position: -320px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-top-road-bottom {
 	background-position: -352px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-bottom-left-road {
 	background-position: -384px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-left-road-right {
 	background-position: -320px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-right-road-left {
 	background-position: -384px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-top-right-road {
 	background-position: -320px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-bottom-road-top {
 	background-position: -352px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-top-left-road {
 	background-position: -384px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-bottom-right-water {
 	background-position: -416px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-bottom-left-water {
 	background-position: -448px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-top-right-water {
 	background-position: -416px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-top-left-water {
 	background-position: -448px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-bottom-right-top-left-road {
 	background-position: -416px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-top-right-bottom-left-road {
 	background-position: -448px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall {
 	background-position: -96px -64px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-right-grass {
 	background-position: -480px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-grass-bottom {
 	background-position: -512px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-left-grass {
 	background-position: -544px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-left-grass-right {
 	background-position: -480px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-right-grass-left {
 	background-position: -544px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-right-grass {
 	background-position: -480px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-grass-top {
 	background-position: -512px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-left-grass {
 	background-position: -544px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-bottom-right-wall {
 	background-position: -576px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-bottom-left-wall {
 	background-position: -608px -96px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-top-right-wall {
 	background-position: -576px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-grass-top-left-wall {
 	background-position: -608px -128px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-right-top-left-grass {
 	background-position: -576px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-right-bottom-left-grass {
 	background-position: -608px -160px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-right-water {
 	background-position: -480px 0px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-water-bottom {
 	background-position: -512px 0px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-left-water {
 	background-position: -544px 0px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-left-water-right {
 	background-position: -480px -32px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-right-water-left {
 	background-position: -544px -32px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-right-water {
 	background-position: -480px -64px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-water-top {
 	background-position: -512px -64px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-left-water {
 	background-position: -544px -64px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-bottom-right-wall {
 	background-position: -576px 0px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-bottom-left-wall {
 	background-position: -608px 0px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-top-right-wall {
 	background-position: -576px -32px; 
	 width: 32px;
	 height: 32px; 
}
.background-water-top-left-wall {
 	background-position: -608px -32px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-right-top-left-water {
 	background-position: -576px -64px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-right-bottom-left-water {
 	background-position: -608px -64px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-right-road {
 	background-position: -480px -192px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-road-bottom {
 	background-position: -512px -192px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-left-road {
 	background-position: -544px -192px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-left-road-right {
 	background-position: -480px -224px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-right-road-left {
 	background-position: -544px -224px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-right-road {
 	background-position: -480px -256px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-road-top {
 	background-position: -512px -256px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-left-road {
 	background-position: -544px -256px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-bottom-right-wall {
 	background-position: -576px -192px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-bottom-left-wall {
 	background-position: -608px -192px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-top-right-wall {
 	background-position: -576px -224px; 
	 width: 32px;
	 height: 32px; 
}
.background-road-top-left-wall {
 	background-position: -608px -224px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-bottom-right-top-left-road {
 	background-position: -576px -256px; 
	 width: 32px;
	 height: 32px; 
}
.background-wall-top-right-bottom-left-road {
 	background-position: -608px -256px; 
	 width: 32px;
	 height: 32px; 
}
</style>