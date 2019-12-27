<template>
	<div class="lineChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{lineData4.title}}</div>
		<div id="myLineChart4" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            lineData4: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myLineChart4'));

                let myOption = {
					tooltip: {
						trigger: 'none',
						confine: true, //是否将 tooltip 框限制在图表的区域内
						axisPointer: {
							type: 'cross'
						}
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
					xAxis: [
						{
							type: 'category',
							axisTick: {
								alignWithLabel: true
							},
							axisLine: {
								onZero: false,
								lineStyle: {
									color: '#d14a61'
								}
							},
							axisPointer: {
								label: {
									formatter: function (params) {
										return '销量' + params.value
											+ (params.seriesData.length ? '：' + params.seriesData[0].data : '');
									}
								}
							},
							data: this.lineData4.lone1
						},
						{
							type: 'category',
							axisTick: {
								alignWithLabel: true
							},
							axisLine: {
								onZero: false,
								lineStyle: {
									color: '#5793f3'
								}
							},
							axisPointer: {
								label: {
									formatter: function (params) {
										return '销量' + params.value
											+ (params.seriesData.length ? '：' + params.seriesData[0].data : '');
									}
								}
							},
							data: this.lineData4.lone2
						}
					],
					yAxis: [{
						type: 'value'
					}],
					series: this.lineData4.lone3
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

