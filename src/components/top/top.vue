<template>
	<div id="top">
		<header>
			<div class="layout">
				<ul class="head_ul">
					<li>
						<router-link to="/index">首页</router-link>
					</li>
					<li>
						<router-link :to="{path:'/news',query:{aid:1}}">新闻</router-link>
					</li>
					<li>
						<router-link to="/zujian">组件</router-link>
					</li>
					<li>
						<router-link to="/users">用户</router-link>
					</li>
				</ul>
				<div class="head_right">
					<router-link to="/login">个人用户</router-link>
				</div>
			</div>

		</header>
	</div>
</template>
<script>
	export default {
		name: 'top',
		data() {
			return {
				
			}
		},
		mounted(){
				
		},
		methods: {
			
		}
	}
</script>
<style scoped>
	@import 'top.css';
</style>