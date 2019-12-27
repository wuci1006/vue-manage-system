<template>
	<div class="lineChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{lineData1.title}}</div>
		<div id="myLineChart1" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            lineData1: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myLineChart1'));

                let myOption = {
					tooltip: {
						trigger: 'axis',
						confine: true, //是否将 tooltip 框限制在图表的区域内
					},
					legend: {
					},
					grid: {
						top:30,
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
					xAxis: {
						type: 'category',
						boundaryGap: false,//控制X轴是否0开始 false从0开始 true为从1开始
						formatter: function (value) {
							return value;
						}
					},
					yAxis: {
						type: 'value'
					},
					dataset:{
						source:this.lineData1.lone1
					},
					series: [
						{
							type: 'line',
							smooth: false,//true平滑曲线 false非平滑
							// areaStyle: {},//控制地步是否有阴影
						}
					]
                };

                myChart.setOption(myOption);
                // 自适应
                window.addEventListener("resize", function () {
                    setTimeout(() => {
                        myChart.resize();
                    }, 10)
                });
            },
		},
	}
</script>