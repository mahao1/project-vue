<template>
	<div id="login">
		<div class="login layout">
			<div class="top">
				<p>转到
					<router-link to="/register">注册</router-link>
				</p>
			</div>
			<div class="main">
				<div class="demo-input-suffix">
					<el-input placeholder="已注册手机号" v-model="phone">
						<i slot="prefix" class="el-input__icon el-icon-mobile-phone
"></i>
					</el-input>
					<el-input placeholder="请输入密码" v-model="psd" type="password">
						<i slot="prefix" class="el-input__icon el-icon-goods"></i>
					</el-input>
				</div>
				<div class="main_middle">
					<el-checkbox label="记住密码" name="type" v-model="checked"></el-checkbox>
				</div>
				<div class="main-bottom">
					<el-button type="success" @click="login">登录</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { setCookie, getCookie } from '../../assets/js/cookie.js'
	export default {
		data() {
			return {
				checked: false,
				phone: '', //手机号
				password: '', //密码
				resultPhone: [],
				resultPsd: []
			}
		},
		mounted() {
			this.isSure();
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
			if(getCookie('username')) {
				this.$router.push('/home')
			}
		},
		methods: {
			//手机号验证
			isPhone(str) {
				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(!myreg.test(str)) {
					return false;
				} else {
					return true;
				}
			},
			isSure() {
				this.resultPhone = localStorage.getItem("phone").split(',');
				this.resultPsd = localStorage.getItem("password").split(',');
				console.log(this.resultPhone, this.resultPsd);
			},
			//登录
			login() {
				//				if(this.phone == '' || this.password == '') {
				//					this.$message.error('请输入手机号或密码');
				//				} else {
				//					let data = {
				//						'username': this.username,
				//						'password': this.password
				//					};
				//					/*接口请求*/
				//					let url = 'http://localhost/vueapi/index.php/Home/user/login';
				//					this.$http.post(url, data).then((res) => {
				//						console.log(res);
				//						/*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
				//						if(res.data == -1) {
				//							this.$message.error = "该用户不存在"
				//							this.showTishi = true
				//						} else if(res.data == 0) {
				//							this.$message.error = "密码输入错误"
				//							this.showTishi = true
				//						} else if(res.data == 'admin') {
				//							/*路由跳转this.$router.push*/
				//							this.$router.push('/main')
				//						} else {
				//							this.$message.success = "登录成功"
				//							this.showTishi = true
				//							setCookie('username', this.username, 1000 * 60)
				//							setTimeout(function() {
				//								this.$router.push('/home')
				//							}.bind(this), 1000)
				//						}
				//					})
				//				}
				var phone = this.phone;
				var psd = this.psd;
				if(phone.length <= 0) { //判断手机号为空
					this.$message.error('请输入手机号');
					return false;
				}
				if(!this.isPhone(phone)) { //判断手机号是否符合规则
					this.$message.error("请输入正确手机号");
					return false;
				}
				if(psd.length <= 0) {
					this.$message.error('请输入密码');
					return false;
				}
				if(this.checked == true) {
					console.log('密码:', psd);
					localStorage.setItem("password", psd);
				}
				for(var i = 0; i < this.resultPhone.length; i++) {
					for(var j = 0; j < this.resultPsd.length; j++) {
						if(i == j) { //手机号和密码对照
							console.log(this.resultPhone[i], this.resultPsd[j]);
							if(phone == this.resultPhone[i] && psd == this.resultPsd[j]) {
								this.$message.success('登录成功');
							} else if(phone !== this.resultPhone[i] && psd != '') {
								this.$message.error('手机号未注册');
							}

						}
					}
				}
			}
		}
	}
</script>

<style scoped>
	@import 'login.css';
</style>