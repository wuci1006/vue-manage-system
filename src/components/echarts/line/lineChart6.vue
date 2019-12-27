<template>
	<div class="lineChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{lineData6.title}}</div>
		<div id="myLineChart6" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            lineData6: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myLineChart6'));

                let myOption = {
					legend: {
						
					},
					tooltip: {
						trigger: 'axis',
						showContent: false,
					},
					dataset: {
						source: this.lineData6.lone1
					},
					xAxis: {type: 'category'},
					yAxis: {gridIndex: 0},
					grid: {top: '55%'},
					series: [
						{type: 'line', smooth: true, seriesLayoutBy: 'row'},
						{type: 'line', smooth: true, seriesLayoutBy: 'row'},
						{type: 'line', smooth: true, seriesLayoutBy: 'row'},
						{type: 'line', smooth: true, seriesLayoutBy: 'row'},
						{
							type: 'pie',
							id: 'pie',
							radius: '30%',
							center: ['50%', '25%'],
							label: {
								formatter: '{b}: {@2012} ({d}%)'
							},
							encode: {
								itemName: 'product',
								value: '2012',
								tooltip: '2012'
							}
						}
					]
                };

				myChart.on('updateAxisPointer', function (event) {
					var xAxisInfo = event.axesInfo[0];
					if (xAxisInfo) {
						var dimension = xAxisInfo.value + 1;
						myChart.setOption({
							series: {
								id: 'pie',
								label: {
									formatter: '{b}: {@[' + dimension + ']} ({d}%)'
								},
								encode: {
									value: dimension,
									tooltip: dimension
								}
							}
						});
					}
				});
				
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
