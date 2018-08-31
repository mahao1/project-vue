<template>
	<div class="headImg">
		<h1 class="size">上传头像</h1>
		<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
			<i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>

		<div class="main">
			<el-button type="primary" @click="openFullScreen2">
				服务方式
			</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'headImg',
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false
			}
		},

		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			openFullScreen2() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				setTimeout(() => {
					loading.close();
				}, 2000);
			}
		},
		mounted() {
			//			this.openFullScreen2();
		}
	}
</script>

<style scoped>
	@import 'headImg.css';
</style>