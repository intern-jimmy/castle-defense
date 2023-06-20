<script lang="ts">
	import { renderable } from './game';
	import { normalTilemap } from '$lib/map/TileSet';

	export let map: {
    background: string;
    x: number;
    y: number;
    occupiedBy: Character | null;
	} [][]; 

	export const spriteMapWidth = 32;	
	export const spriteMapHeight = 32;
	export const multiplier = 2

	renderable(props => {
		const { context, width, height } = props;
		// clear the canvas
		context.clearRect(0, 0, width, height);
		context.fillStyle = "#ff007f";
		context.fillRect(0,0, width, height);


		const natureSprites = document.getElementById("nature");

		for(let x = 0; x < map.length; x++) {
			for ( let y = 0; y < map[x].length; y++) {
				let tile = normalTilemap.find(tile => tile.background === map[x][y].background)
				//find the background
				let backgroundX = tile.x-1;
				let backgroundY = tile.y-1;
				
				const tileStartingX = (backgroundX * spriteMapWidth);
				const tileStartingY = (backgroundY * spriteMapHeight);
				const startingX =  y * spriteMapWidth * multiplier -1;
				const startinY = x * spriteMapHeight * multiplier -1;
				const width = spriteMapWidth * multiplier + 1;
				const height = spriteMapHeight * multiplier + 1

				//console.log(`[${x}, ${y}]location:${map[x][y].background}: [${backgroundX}, ${backgroundY}]`)
				context.drawImage(natureSprites, 
				tileStartingX, tileStartingY, 
				spriteMapWidth, spriteMapHeight, 
				startingX, startinY, width, height);

				// get the character Image

				//context.drawImage()
				//console.log(map[x][y].occupiedBy)
				if(map[x][y].occupiedBy != null) {
					const hero = map[x][y].occupiedBy
					let heroImg = new Image();
					heroImg.src = "https://heroes.defikingdoms.com/image/" + hero.id;
					context.drawImage(heroImg, startingX, startinY, width, height);

				}
			}
		}

		
	})
</script>

<!-- The following allows this component to nest children -->
<slot></slot>