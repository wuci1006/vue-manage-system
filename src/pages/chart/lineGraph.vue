<template>
	<div class="lineGraph">
		<div class="lineWrap">
			<el-row class="clearfix" :style="{margin:'15px 0'}">
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1%',background:'#ffffff'}">
					<LineChart1 ref='line1' :lineData1="lineData1"></LineChart1>
				</div>
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1% 0 0',background:'#ffffff'}">
					<LineChart2 ref='line2' :lineData2="lineData2"></LineChart2>
				</div>
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1% 0 0',background:'#ffffff'}">
					<LineChart3 ref='line3' :lineData3="lineData3"></LineChart3>
				</div>
			</el-row>
			<el-row class="clearfix" :style="{margin:'15px 0'}">
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1%',background:'#ffffff'}">
					<LineChart4 ref='line4' :lineData4="lineData4"></LineChart4>
				</div>
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1% 0 0',background:'#ffffff'}">
					<LineChart5 ref='line5' :lineData5="lineData5"></LineChart5>
				</div>
				<div :style="{width:'32%',float:'left',height:'390px',margin:'0 1% 0 0',background:'#ffffff'}">
					<LineChart6 ref='line6' :lineData6="lineData6"></LineChart6>
				</div>
			</el-row>
		</div>
	</div>
</template>
    
<script>
	import LineChart1 from '../../components/echarts/line/lineChart1.vue';
	import LineChart2 from '../../components/echarts/line/lineChart2.vue';
	import LineChart3 from '../../components/echarts/line/lineChart3.vue';
	import LineChart4 from '../../components/echarts/line/lineChart4.vue';
	import LineChart5 from '../../components/echarts/line/lineChart5.vue';
	import LineChart6 from '../../components/echarts/line/lineChart6.vue';
	export default {
		components: {
		   LineChart1,
		   LineChart2,
		   LineChart3,
		   LineChart4,
		   LineChart5,
		   LineChart6
		},
		data() {
			return {
				lineData1: {
					title:'折线图',
				    lone1: [
				        {name: '周一',value:123},
				        {name: '周二',value:230},
				        {name: '周三',value:210},
						{name: '周四',value:120},
						{name: '周五',value:230},
						{name: '周六',value:350},
						{name: '周日',value:190},
				    ]
				},
				lineData2: {
					title:'就业行情',
				    lone1: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					lone2:[
						{ name: '互联网',type:'line',stack: '总量', data:[120, 132, 101, 134, 90, 230, 210,132, 101, 134, 90, 230]},
                        { name: '金融',type:'line',stack: '总量', data:[220, 182, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330]},
                        { name: '建筑',type:'line',stack: '总量', data:[150, 232, 201, 154, 190, 330, 410, 201, 154, 190, 330, 410]},
                        { name: '其他', type:'line',stack: '总量',data:[180, 262, 231, 184, 290, 350, 460, 201, 174, 140, 360, 460]},
					]
				},
				lineData3: {
					title:'正弦波形',
				    lone1: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					lone2:[
				        {name:'曲线1',type:'line',step: 'a',data:[120, 132, 101, 134, 90, 230, 210]},
						{name:'曲线2',type:'line',step: 'b',data:[220, 282, 201, 234, 290, 430, 410]},
						{name:'曲线3',type:'line',step: 'c',data:[450, 432, 401, 454, 590, 530, 510]},
						{name:'曲线4',type:'line',step: 'd',data:[25, 43, 10, 45, 60, 33, 55]},
						{name:'曲线5',type:'line',step: 'e',data:[15, 40, 10, 25, 30, 13, 25]}
				    ]
				},
				lineData4: {
					title:'销量排行',
					lone1:["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"],
					lone2:["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"],
					lone3:[
						{
							name:'2015销量',
							type:'line',
							xAxisIndex: 1,
							smooth: true,
							data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
						},
						{
							name:'2016销量',
							type:'line',
							smooth: true,
							data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
						}
					],
				},
				lineData5: {
					title:'电量分析',
					lone1:['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
					lone2:[300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
					lone3:[
						{lte: 6,color: 'green'}, 
						{gt: 6,lte: 8,color: 'red'}, 
						{gt: 8,lte: 14,color: 'green'}, 
						{gt: 14,lte: 17,color: 'red'}, 
						{gt: 17,color: 'green'},
					],
					lone4:[ 
						[{name: '早高峰',xAxis: '07:30'}, {xAxis: '10:00'}], 
						[{name: '晚高峰',xAxis: '17:30'}, {xAxis: '21:15'}] 
					]
				},
				lineData6: {
					title:'连动分析',
					lone1:[
						['product', '2012', '2013', '2014', '2015', '2016', '2017'],
						['blue', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
						['pink', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
						['orange', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
						['red', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
					]
				},
				
			}
		},
		created() {
		},
		mounted() {
			this.$refs.line1.draweCharts();
			this.$refs.line2.draweCharts();
			this.$refs.line3.draweCharts();
			this.$refs.line4.draweCharts();
			this.$refs.line5.draweCharts();
			this.$refs.line6.draweCharts();
		},
		methods: {
		},
	}
</script>


