<template>
	<div id="news">
		<top></top>
		<h1 class="title">我是新闻页</h1>
		<main>
			<todoList></todoList>
			<slide></slide>
			<pagination :total="total" :current-page='current' @pagechange="pagechange"></pagination>
		</main>

	</div>
</template>
<script>
	import top from '../../components/top/top';
	import todoList from '../../components/todoList/todoList';
	import slide from '../../components/slide/slide';
	import pagination from '../../components/pagination/pagination';
	export default {
		name: 'news',
		data() {
			return {
				total: 150, // 记录总条数
				display: 10, // 每页显示条数
				current: 1, // 当前的页数
				result: {}
			}
		},
		components: {
			top,
			todoList,
			slide,
			pagination
		},
		methods: {
			pagechange(currentPage) {
				console.log(currentPage);
				// ajax请求, 向后台发送 currentPage, 来获取对应的数据
			}
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	@import 'news.css';
</style>