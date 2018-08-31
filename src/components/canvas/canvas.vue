<template>
	<div id="range" class="layout">
		<div>
			<el-radio-group v-model="radio" @change="change">
				<el-radio :label="1" border>风机</el-radio>
				<el-radio :label="2" border>检测仪</el-radio>
			</el-radio-group>
		</div>
		<div class='main' @mousemove='updateXY' @click="add" ref="coordinate">
			{{x}} {{y}}
			<!--<div :class="divClass" class="ds" ref="xy"></div>-->
		</div>

	</div>
</template>

<script>
	export default {
		name: 'range',
		data() {
			return {
				radio: 9,
				x: 0,
				y: 0,
				i: 1 //节点个数
			}
		},
		mounted() {
			//			this.showDot();
		},
		methods: {
			updateXY(e) {
				this.x = e.offsetX; //获取x坐标
				this.y = e.offsetY; //获取y坐标
			},
			styles(o, imgUrl, className) {
				o.setAttribute("src", imgUrl);
				o.setAttribute("class", className);
				o.style.position = 'absolute';
				o.style.left = this.x + 'px';
				o.style.top = this.y + 'px';
			},
			add(e) {
				let box = this.$refs.coordinate; //获取盒子
				let fjUrl = '../../../static/images/fj_green.png';
				let jcyUrl = '../../../static/images/jcy_green.png';

				if(this.radio == 1) {
					let smallDot = document.createElement("img"); //动态添加图片
					this.styles(smallDot, fjUrl, "dot");
					box.appendChild(smallDot);
//					this.i++;
//					box.insertBefore(smallDot, box.childNodes[this.i]);
				}
				if(this.radio == 2) {
					let smallDot = document.createElement("img"); //动态添加图片
					this.styles(smallDot, jcyUrl, "square");
					box.appendChild(smallDot);
//					this.i++;
//					box.insertBefore(smallDot, box.childNodes[this.i]);
				}
			},
			change() {
				console.log(this.radio);
				let box = this.$refs.coordinate; //获取范围
				let childs = box.childNodes; //获取所有添加子节点

				if(this.radio == 1) {
					console.log('风机');
					for(var i = childs.length - 1; i >= 0; i--) {
						box.removeChild(childs[i]);
					}
				}
				if(this.radio == 2) {
					console.log('检测仪');
					for(var i = childs.length - 1; i >= 0; i--) {
						box.removeChild(childs[i]);
					}
				}
			},
		}
	}
</script>

<style scoped>
	#range {
		margin: 10px 0;
		padding: 10px;
		border: 1px solid #42B983;
	}
	
	.main {
		width: 800px;
		height: 400px;
		text-align: center;
		line-height: 400px;
		border: 1px solid #E5E5E5;
		margin: 0 auto;
		position: relative;
		background: #ccc;
		opacity: 0.9;
		filter: alpha(opacity=90);
	}
	
	.main .ds {
		display: none;
	}
	
	.img {
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.dot,
	.square {
		position: absolute;
		top: 0;
		left: 0;
		width: 20px;
		height: 20px;
	}
	
	.dot {
		border-radius: 100%;
		background: red;
	}
	
	.square {
		background: green;
	}
</style>