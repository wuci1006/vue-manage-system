<template>
	<div class="lineChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{lineData3.title}}</div>
		<div id="myLineChart3" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            lineData3: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myLineChart3'));

                let myOption = {
					tooltip: {
						trigger: 'axis',
						confine: true, //是否将 tooltip 框限制在图表的区域内
					},
					legend: {
						formatter: function (value) {
							return value;
						}
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
						// boundaryGap: false,//控制X轴是否从0开始 false从0开始 true为从1开始
						data:this.lineData3.lone1
					},
					yAxis: {
						type: 'value'
					},
					series: this.lineData3.lone2
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
