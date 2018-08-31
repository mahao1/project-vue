<template>
	<div id="zujian">
		<top></top>
		<h1 class="head_h1">我是组件页</h1>
		<div class="main layout">
			
			<div class="main_bottom main_btn">
				<h2 class="main_size">1、点击按钮弹出文字：</h2>
				<el-button @click="visible = true">Button</el-button>
		    <el-dialog :visible.sync="visible" title="Hello world">
		      <p>Try Element</p>
		    </el-dialog>
			</div>
			
			<div class="main_bottom main_model">
				<h2 class="main_size">2、双向数据绑定：</h2>
				<el-input v-model="message"></el-input>
				<span>{{message}}</span>
			</div>
			
			<div class="main_bottom main_tab">
				<h2 class="main_size">3、导航切换：</h2>
				<nav @click.prevent>
	        <a v-for="(item,index) in items" :class="{'show': item.active}" :key="index" @click="makeActive(item,index)">{{item.name}}</a>
		    </nav>
		    <p>You chose <b>{{active}}</b></p>
			</div>
			
			<div class="main_bottom main_price">
				<h2 class="main_size">4、合计总价：</h2>
				<ul>
					<li v-for="(item,index) in cars"
						:class="{'active':item.active}"
						@click="toggleActive(item)">
						{{item.name}}
						<span>{{item.price}}</span>
					</li>
				</ul>
				<p>Total: <span>{{total()}}</span></p>
			</div>
			
			<div class="main_bottom main_communication">
				<h2 class="main_size">5、父子组件通讯：</h2>
				<div class="v_comminiaction v-first">
					<h2 class="main_title">第一种通信方式：父子组件通信</h2>
					<div class="first_left">
						<p class="title_sub">父组件一共需要做4件事：</p>
						<ul>
							<li>1.import son from './son.js' 引入子组件 son</li>
							<li>2.在components： {"son'} 里注册所有子组件名称</li>
							<li>3.在父组件的template应用子组件， < son ></ son></li>
							<li>4.如果需要传递数据给子组件，就在template模板里写 '< son :num="number"></ son >'</li>
						</ul>
					</div>
					<div class="first_right">
						<p class="title_sub">子组件只需要做1件事：</p>
						<ul>
							<li>1.用props接受数据，就可以直接使用数据</li>
							<li>2.子组件接受到的数据，不能去修改。如果你的确需要修改，可以用计算属性，或者把数据赋值给子组件data里的一个变量</li>
						</ul>
					</div>
					<div class="zujian">
						<!--父子组件通讯-->
						<parent></parent>
					</div>
				</div>
				
				<!--导出表格为excel-->
				<tab></tab>
				
				<!--canvas-->
				<coordinate></coordinate>
			</div>
			
		</div>
	</div>
</template>
<script>
	import top from '../../components/top/top';
	import parent from '../../components/parent/parent';
	import tab from '../../components/tab/tab';
	import coordinate from '../../components/canvas/canvas';
	export default {
		name: 'zujian',
		data(){
			return {
				visible: false,
				message: "hello world!",
				active: 'HTML',
	    	items: [
        	{name:'HTML', active:true},
          {name:'CSS', active:false},
          {name:'JavaScript', active:false},
          {name:'Vue.js', active:false}
        ],
        cars: [
        	{name:"apple", price:2, active:false},
        	{name:"banner", price:4, active:false},
        	{name:"orange", price:6, active:false}
        ]
			}
		},
		components: {
			top,parent,tab,coordinate
		},
		methods: {
			makeActive(item, index){
				console.log(index);
				console.log(item);
				this.active = item.name;
				for(var i=0; i<this.items.length; i++){
					this.items[i].active = false;
				}
				this.items[index].active = true;
			},
			//状态
			toggleActive(i){
				i.active = !i.active;
			},
			//总价
			total(){
				var total = 0;
				this.cars.forEach(function(s){
					if(s.active){ //如果是选中状态
						total += s.price;
					}
				})
				return total;
			}
		}
	}
</script>
<style scoped>
	@import 'zujian.css';
</style>