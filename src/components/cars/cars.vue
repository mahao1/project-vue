<template>
	<div id="cars">
		<div class="page-shopping-cart" id="shopping-cart">
			<h4 class="cart-title">购物清单</h4>
			<div class="cart-product-title clearfix">
				<div class="td-check fl"><span class="check-span fl check-all" :class="{'check-true':isSelectAll}" @click="selectProduct(isSelectAll)"></span>全选</div>
				<div class="td-product fl">商品</div>
				<div class="td-num fl">数量</div>
				<div class="td-price fl">单价(元)</div>
				<div class="td-total fl">金额(元)</div>
				<div class="td-do fl">操作</div>
			</div>
			<div class="cart-product clearfix">
				<table>
					<tbody>
						<tr v-for="(item,index) in productList">
							<td class="td-check">
								<span class="check-span"
									@click="item.select=!item.select"
									:class="{'check-true':item.select}"></span>
							</td>
							<td class="td-product"><img :src="item.pro_img" width="98" height="98">
								<div class="product-info">
									<h6>{{item.pro_name}}</h6>
									<p>品牌：{{item.pro_brand}}&nbsp;&nbsp;产地：{{item.pro_place}}</p>
									<p>规格/纯度：{{item.pro_purity}}&nbsp;&nbsp;起定量：{{item.pro_min}}</p>
									<p>配送仓储：{{item.pro_depot}}</p>
								</div>
								<div class="clearfix"></div>
							</td>
							<td class="td-num">
								<div class="product-num">
									<a href="javascript:;" class="num-reduce num-do fl" @click="item.pro_num>0?item.pro_num--:''"><span></span></a>
									<input type="text" class="num-input" v-model="item.pro_num">
									<a href="javascript:;" class="num-add num-do fr" @click="item.pro_num++"><span></span></a>
								</div>
							</td>
							<td class="td-price">
								<p class="red-text">￥<span class="price-text">{{item.pro_price.toFixed(2)}}</span></p>
							</td>
							<td class="td-total">
								<p class="red-text">￥<span class="total-text">{{item.pro_price*item.pro_num}}</span>.00</p>
							</td>
							<td class="td-do">
								<a href="javascript:;" class="product-delect" @click="deleteOneProduct(index)">删除</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="cart-product-info">
        <a class="delect-product" href="javascript:;" @click="deleteProduct"><span></span>删除所选商品</a>
        <a class="keep-shopping" href="#"><span></span>继续购物</a>
        <a class="btn-buy fr" href="javascript:;">去结算</a>
        <p class="fr product-total">￥<span>{{getTotal.totalPrice}}</span></p>
        <p class="fr check-num"><span>{{getTotal.totalNum}}</span>件商品总计（不含运费）：</p>
	    </div>
			
		</div>
	</div>
</template>
<script>
	export default {
		name: 'cars',
		data() {
			return {
				curId: 0,
				productList: [{
						'pro_name': '【斯文】甘油 | 丙三醇', //产品名称
						'pro_brand': 'skc', //品牌名称
						'pro_place': '韩国', //产地
						'pro_purity': '99.7%', //规格
						'pro_min': "215千克", //最小起订量
						'pro_depot': '上海仓海仓储', //所在仓库
						'pro_num': 3, //数量
						'pro_img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526264134&di=6c8e6e921ffd2f98547590c5757f7d2a&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a6ee55f2f95632f875a13273e225.jpg', //图片链接
						'pro_price': 800 //单价
					},
					{
						'pro_name': '【斯文】甘油 | 丙三醇', //产品名称
						'pro_brand': 'skc', //品牌名称
						'pro_place': '韩国', //产地
						'pro_purity': '99.7%', //规格
						'pro_min': "215千克", //最小起订量
						'pro_depot': '上海仓海仓储', //所在仓库
						'pro_num': 3, //数量
						'pro_img': 'http://pic.qiantucdn.com/58pic/12/58/34/46k58PICEaR.jpg', //图片链接
						'pro_price': 800 //单价
					},
					{
						'pro_name': '【斯文】甘油 | 丙三醇', //产品名称
						'pro_brand': 'skc', //品牌名称
						'pro_place': '韩国', //产地
						'pro_purity': '99.7%', //规格
						'pro_min': "215千克", //最小起订量
						'pro_depot': '上海仓海仓储', //所在仓库
						'pro_num': 3, //数量
						'pro_img': 'http://pic.58pic.com/58pic/11/30/42/01U58PICFpX.jpg', //图片链接
						'pro_price': 800 //单价
					}
				]
			}
		},
		computed: {
			//检测是否全选
			isSelectAll(){
				//如果productList中每一条数据的select都为true，返回true，否则返回false;
				return this.productList.every(function(value){
					return value.select;
				})
			},
			//获取总价和产品总件数
			getTotal(){
				//获取productList中select为true的数据。
				var _proList = this.productList.filter(function(value){return value.select});
				var totalPrice = 0;
//				console.log(_proList.length);
				for(var i=0,len=_proList.length;i<len;i++){
					//总价累加
					totalPrice += _proList[i].pro_num * _proList[i].pro_price;
				}
				//选择产品的件数就是_proList.length，总价就是totalPrice
				return {totalNum:_proList.length,totalPrice:totalPrice}
			}
		},
		mounted() {
			//为productList添加select（是否选中）字段，初始值为true
      var _this = this;
      //为productList添加select（是否选中）字段，初始值为true
      this.productList.map(function (item) {
        _this.$set(item, 'select', true);
      })
      //要像上面这样写双向绑定才能起效，下面的写法是有问题的，双向绑定不起效的！
      //this.productList.map(function (item) {item.select=true})
		},
		methods: {
			//全选与取消全选
			selectProduct(_isSelect){
				//遍历productList，全部取反
				for (var i = 0, len = this.productList.length; i < len; i++) {
          this.productList[i].select = !_isSelect;
        }
			},
			//删除已经选中(select=true)的产品
			deleteProduct(){
				this.productList = this.productList.filter(function(val){
					return !val.select;
				})
			},
			//删除单条产品
			deleteOneProduct(index){
				//根据索引删除productList的记录
//				console.log(this.productList);
//				console.log(index);
				this.productList.splice(index,1);
			}
		}
	}
</script>
<style scoped>
	@import 'cars.css';
</style>