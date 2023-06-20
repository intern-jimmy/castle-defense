<script>
	import { width, height } from './game';

	import { gameStore } from '../../stores/GameStore';

	import Canvas from './Canvas.svelte';
	import Background from './Background.svelte';
	import FPS from './FPS.svelte';
</script>

<div class="app">
	<Canvas>
		<Background map={$gameStore.map} color='hsl(0, 0%, 10%)'>
		</Background>
		<!--<Character size={10} />
		<Text
			text='Click and drag around the page to move the character.'
			fontSize={12}
			align='right'
			baseline='bottom'
			x={$width - 20}
			y={$height - 20} />-->
		<FPS />
	</Canvas>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.app { 
		margin: auto;
		margin-top: 10%;
		width: 50%;
		padding: 10px;
	}
	
</style>