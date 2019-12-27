<template>
	<div class="barChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{barData2.title}}</div>
		<div id="myBarChart2" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            barData2: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myBarChart2'));

                let myOption = {
                     tooltip: {
						trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
						confine: true, //是否将 tooltip 框限制在图表的区域内
					},
					legend: {
						formatter: function (value) {
							return value;
						}
					},
					grid: {
                        top: 30,
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
					xAxis: {
						type: 'category',
					},
					yAxis: {
						type: 'value'
					},
					dataset: {
                        source: this.barData2.lone1
                    },
                    series: [
                        {
							type:'bar',
							barWidth: '30%',
						},
						{
							type:'bar',
							barWidth: '30%',
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
