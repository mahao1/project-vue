<template>
	<div id="home">
		<div class="layout">
			<h1 class="size">我是首页</h1>
			<main>
				<!--新闻列表-->
				<div class="news">
					<h1>热点新闻</h1>
					<ul>
						<li v-for="(item,index) in arr" :key="index">
							<!--<router-link :to="'/news/'+item.id">{{item.id}}.{{item.title}}</router-link>-->
							<router-link :to="{path:'/index/article',query:{aid:item.id}}">{{item.id}}.{{item.title}}</router-link>
						</li>
					</ul>
				</div>
				
				<!--上传头像-->
				<headImg></headImg>
				<!--购物车-->
				<cars></cars>
			</main>
			
			
		</div>
	
	</div>
</template>

<script>
	import cars from "../../components/cars/cars.vue";
	import headImg from "../../components/headImg/headImg.vue";
	export default {
		data(){
			return {
				arr: []
			}
		},
		components: {
			cars,headImg
		},
		mounted(){			
			this.$http.get('/static/data/news.json').then((res)=>{
				console.log(res.data);
				this.arr = res.data;
			}).catch((res)=>{
				alert(res.status);
			})
		}
	}
</script>

<style scoped>
	@import 'home.css';
</style>