<template>
	<div id="child">
		<p>我是子组件：</p>
		<input type="text" placeholder="输入向父组件发送的内容" class="child_ipt" v-model="params"/>
		<button @click="notifyParent">点击向父组件发送消息</button>
		{{msg}}
	</div>
</template>

<script>
	export default {
		name: 'child',
		props: {
			msg: {
				type: String,
				default: ""
			}
		},
		data(){
			return {
				params: this.msg
			}
		},
		methods: {
			notifyParent(){
//				var params = {
//					a: 1,
//					b: 2
//				};//向父组件发送的内容
//				var params = "父组件你好，我是子组件";
				this.$emit('childNotify',this.params);//主动触发childNotify方法，this.params为向父组件传递的数据
			}
		}
	}
</script>

<style scoped>
	@import 'child.css';
</style>