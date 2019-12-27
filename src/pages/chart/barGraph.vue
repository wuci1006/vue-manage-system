<template>
	<div class="barGraph">
		<div class="barWrap">
			<el-row class="clearfix" :style="{margin:'15px 0'}">
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1%',background:'#ffffff'}">
					<BarChart1 ref='bar1' :barData1="barData1"></BarChart1>
				</div>
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1% 0 0',background:'#ffffff'}">
					<BarChart2 ref='bar2' :barData2="barData2"></BarChart2>
				</div>
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1% 0 0',background:'#ffffff'}">
					<BarChart3 ref='bar3' :barData3="barData3"></BarChart3>
				</div>
			</el-row>
			<el-row class="clearfix" :style="{margin:'15px 0'}">
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1%',background:'#ffffff'}">
					<BarChart4 ref='bar4' :barData4="barData4"></BarChart4>
				</div>
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1% 0 0',background:'#ffffff'}">
					<!-- <BarChart5 ref='bar5' :barData5="barData5"></BarChart5> -->
				</div>
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1% 0 0',background:'#ffffff'}">
					<!-- <BarChart6 ref='bar6' :barData6="barData6"></BarChart6> -->
				</div>
			</el-row> 
		</div>
	</div>
</template>
    
<script>
	import BarChart1 from '../../components/echarts/bar/barChart1.vue';
	import BarChart2 from '../../components/echarts/bar/barChart2.vue';
	import BarChart3 from '../../components/echarts/bar/barChart3.vue';
	import BarChart4 from '../../components/echarts/bar/barChart4.vue';
	// import BarChart5 from '../../components/echarts/bar/barChart5.vue';
	// import BarChart6 from '../../components/echarts/bar/barChart6.vue';
	// import BarChart7 from '../../components/echarts/bar/barChart7.vue';
	// import BarChart8 from '../../components/echarts/bar/barChart8.vue';
	export default {
		components: {
		   BarChart1,
		   BarChart2,
		   BarChart3,
		   BarChart4,
		   // BarChart5,
		   // BarChart6,
		   // BarChart7,
		   // BarChart8
		},
		data() {
			return {
				barData1: {
					title:'星期分布',
				    lone1: [
				        {name: 'Mon',value:120},
				        {name: 'Tue',value:200},
				        {name: 'Wed',value:150},
						{name: 'Thu',value:80},
						{name: 'Fri',value:70},
						{name: 'Sat',value:110},
						{name: 'Sun',value:130},
				    ]
				},
				barData2: {
					title:'水果行情',
				    lone1: [
				        ['product', '2015', '2016'],
						['orange', 43.3, 85.8],
						['apple', 83.1, 73.4],
						['banana', 86.4, 65.2]
				    ]
				},
				barData3: {
					title:'一周天气预报预测',
				    lone1: [
				        ['type', '2015', '2016','2017'],
				        ['周一', 43.3, 85.8,23.4],
				        ['周二', 83.1, 73.4,45.7],
				        ['周三', 86.4, 65.2,56.8],
						['周四', 43.3, 85.8,12.4],
						['周五', 83.1, 73.4,89.0],
						['周六', 86.4, 65.2,56.3],
						['周日', 86.4, 65.2,42.1]
				    ]
				},
				barData4: {
					title:'收支图',
				    lone1: [
				        ['type', '利润', '收入','支出'],
				        ['周一', 43.3, 85.8,-23.4],
				        ['周二', 83.1, 73.4,-45.7],
				        ['周三', 86.4, 65.2,-56.8],
				        ['周四', 43.3, 85.8,-12.4],
				        ['周五', 83.1, 73.4,-89.0],
				        ['周六', 86.4, 65.2,-56.3],
				        ['周日', 86.4, 65.2,-42.1]
				    ]
				},
				barData5: {
					title:'地理图',
				},
				barData6: {
					title:'地区分布',
					legendData:['湖南','湖北','河南','北京','天津','重庆','云南','西藏','江苏','安徽'],
					seriesData:[
						{name:'湖南',value:123},
						{name:'湖北',value:345},
						{name:'河南',value:678},
						{name:'北京',value:234},
						{name:'天津',value:434},
						{name:'重庆',value:121},
						{name:'云南',value:9},
						{name:'西藏',value:12},
						{name:'江苏',value:987},
						{name:'安徽',value:345}
					],
					selected:{
						湖南:true,湖北:true,河南:true,北京:true,天津:true,重庆:false,云南:false,西藏:false,江苏:false,安徽:false
					},
				},
				barData7: {
					title:'环形嵌套',
					data1:[
						{value:335, name:'直达', selected:true},
						{value:679, name:'营销广告'},
						{value:1548, name:'搜索引擎'}
					],
					data2:[
						{value:335, name:'直达'},
						{value:310, name:'邮件营销'},
						{value:234, name:'联盟广告'},
						{value:135, name:'视频广告'},
						{value:1048, name:'百度'},
						{value:251, name:'谷歌'},
						{value:147, name:'必应'},
						{value:102, name:'其他'}
					]
				},
				barData8: {
					title:'水果分析',
					lone1:[
						['product', '2012', '2013', '2014', '2015'],
						['apple', 41.1, 30.4, 65.1, 53.3],
						['banana', 86.5, 92.1, 85.7, 83.1],
						['orange', 24.1, 67.2, 79.5, 86.4],
						['lemon', 55.2, 67.1, 69.2, 72.4]
					]
				},
			}
		},
		created() {
		},
		mounted() {
			this.$refs.bar1.draweCharts();
			this.$refs.bar2.draweCharts();
			this.$refs.bar3.draweCharts();
			this.$refs.bar4.draweCharts();
			// this.$refs.bar5.draweCharts();
			// this.$refs.bar6.draweCharts();
			// this.$refs.bar7.draweCharts();
			// this.$refs.bar8.draweCharts();
		},
		methods: {
		},
	}
</script>

