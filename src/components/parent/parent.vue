<template>
	<div id="parent">
		<p>我是父组件：</p>
		<Child @childNotify="doChildNotify" :msg="msg"></Child><!--监听子组件触发的childNotify事件,然后调用doChildNotify方法-->
	</div>
</template>

<script>
	import Child from '../child/child';
	export default {
		name: 'parent',
		data(){
			return {
				msg: '来自父组件的消息'
			}
		},
		components: {
			Child
		},
		methods: {
			doChildNotify(params){
				console.log('子组件emit了：',params);
				this.msg = params; //接受子组件的消息
			}
		}
	}
</script>

<style scoped>
	@import 'parent.css';
</style>