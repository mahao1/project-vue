<template>
	<div id="register">
		<div class="register layout">
			<div class="top">
				<p>转到
					<router-link to="/login">登录</router-link>
				</p>
			</div>
			<div class="main">
				<div class="demo-input-suffix">
					<el-input placeholder="手机号" v-model="phone">
						<i slot="prefix" class="el-input__icon el-icon-mobile-phone
"></i>
					</el-input>
					<el-input type="password" placeholder="输入密码" v-model="psd">
						<i slot="prefix" class="el-input__icon el-icon-goods"></i>
					</el-input>
					<el-input type="password" placeholder="确认密码" v-model="psdSure">
						<i slot="prefix" class="el-input__icon el-icon-goods"></i>
					</el-input>
				</div>
				<div class="main-bottom">
					<el-button type="success" @click="reg">注册</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				phone: '',
				psd: '',
				psdSure: '',
				resultPhone: [],
				resultPsd: []
			}
		},
		methods:{
			//手机号验证
			isPhone(str) {
				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(!myreg.test(str)) {
					return false;
				} else {
					return true;
				}
			},
			//注册
			reg(){
				var phone = this.phone;
				var psd = this.psd;
				var psdSure = this.psdSure;
				if(phone.length <= 0) {
					this.$message.error('请输入手机号');
					return false;
				}
				if(!this.isPhone(phone)) {
					this.$message.error('请输入正确手机号码');
					return false;
				}
				if(psd.length <= 0) {
					this.$message.error('请输入密码');
					return false;
				}
				if(psd.length < 6 || psd.length > 16) {
					this.$message.error('请输入6-16位密码');
					return false;
				}
				if(psdSure.length <= 0) {
					this.$message.error('请确认密码');
					return false;
				}
				if(psd != psdSure) {
					this.$message.error('两次密码不一致');
					return false;
				}else{
					this.$message.success("注册成功");					
					this.resultPhone.push(phone);
					this.resultPsd.push(psd);
					localStorage.setItem("phone",this.resultPhone);
					localStorage.setItem("password",this.resultPsd);
					console.log("phone",this.resultPhone,"psd",this.resultPsd);
				}
			}
		}
	}
</script>

<style scoped>
	@import 'register.css';
</style>