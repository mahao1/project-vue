<template>
	<div id="article">
		<div class="layout">
			<h1 class="size">我是首页下的新闻页</h1>
			<main>
				<div class="article">
					<h1 class="title">{{result.title}}</h1>
					<p>
						<span>{{result.time | date}}</span>  
						<span>来源： {{result.author}}</span>
					</p>
					<div class="content" v-html="result.content">
	
					</div>
				</div>
			</main>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'index',
		data(){
			return {
				result: {}
			}
		},
		components: {
			
		},
		mounted(){			
			console.log("222",this.$route);			
			this.$http.get('/static/data/article.json').then((res)=>{
				console.log(res.data);
				this.result = res.data[this.$route.query.aid - 1];
				console.log(this.result);
			}).catch((res)=>{
				alert(res.status);
			})
		}
		
	}
</script>
<style scoped>
	@import 'article.css';
</style>