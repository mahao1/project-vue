<template>
	<div id="index">
		<top></top>		
		<router-view></router-view>
	</div>
</template>
<script>
	import top from "../../components/top/top.vue";
	
	export default {
		name: 'index',
		data(){
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			top
		},
		mounted(){			
			
		}
		
	}
</script>
<style scoped>
	@import 'index.css';
</style>