<template>
	<div id="slide" @mouseover="stop()" @mouseout="move()">
		<div class="slide layout">
			<p class="title">slide</p>
			<transition-group tag="ul" name="image"
				enter-active-class="animated fadeIn"
				leave-active-class="animated fadeOut">  
				<li v-for="(item,index) in images" v-show="index===mark" :key="index">
					<a href="#">
						<img :src="item" />
					</a>
				</li>
			</transition-group>  
		</div>
		<div class="bar">
			<span v-for="(item, index) in images" :class="{ 'active':index===mark }" :key="index" @click="change(index)"></span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'slide',
		data() {
			return {
				timer: null,
				mark: 0, //比对图片索引的变量  
				images: [
					"../../../static/images/car1.jpg",
					"../../../static/images/car2.jpg",
					"../../../static/images/car3.jpg",
					"../../../static/images/car4.jpg"
				]
			}
		},		
		created() {
			this.play();
		},
		methods: {
			autoPlay() {
				this.mark++;
				if(this.mark == 4) { //当遍历到最后一张图片置零
					this.mark = 0;
				}
			},
			play() {
				this.timer = setInterval(this.autoPlay, 2000);
			},
			change(i) {
				this.mark = i;
			},
			stop(){
				clearInterval(this.timer);
			},
			move(){
				this.timer = setInterval(this.autoPlay, 2000);
			}
		}
	}
</script>
<style scoped>
	@import 'slide.css';
</style>