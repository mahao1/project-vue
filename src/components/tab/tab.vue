<template>
	<div id="tab">
		<div class="title">
			<p>导出表格为excel</p>
		</div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>

		<div class="btn">
			<el-row>
				<el-button type="primary" plain @click="exportExcel">导出为excel</el-button>
			</el-row>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods: {
			formatJson(filterVal, jsonData) {　　　　　　
				return jsonData.map(v => filterVal.map(j => v[j]))　　　　
			},
			exportExcel() {　　　　　　
				require.ensure([], () => {　　　　　　　　
					const {
						export_json_to_excel
					} = require('../../vendor/Export2Excel');　　　　　　　　
					const tHeader = ['日期', '姓名', '地址']; //对应表格输出的title
					　　　　　　　　
					const filterVal = ['date', 'name', 'address']; // 对应表格输出的数据
					　　　　　　　　
					const list = this.tableData;　　　　　　　　
					const data = this.formatJson(filterVal, list);　　　　　　　　
					export_json_to_excel(tHeader, data, 'Excel'); //对应下载文件的名字
					　　　　　　
				})　　　　
			}
		}

	}
</script>

<style scoped>
	@import 'tab.css';
</style>