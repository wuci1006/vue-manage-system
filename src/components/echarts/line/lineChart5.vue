<template>
	<div class="lineChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{lineData5.title}}</div>
		<div id="myLineChart5" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            lineData5: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myLineChart5'));

                let myOption = {
					tooltip: {
						trigger: 'axis',
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
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data:this.lineData5.lone1
					},
					yAxis:  {
						type: 'value',
						axisLabel: {
							formatter: '{value} W'
						},
						axisPointer: {
							snap: true
						}
					},
					visualMap: {
						show: false,
						dimension: 0,
						pieces: this.lineData5.lone3
					},
					series: [
						{
							name:'用电量',
							type:'line',
							smooth: true,
							data: this.lineData5.lone2,
							markArea: {
								data: this.lineData5.lone4
							}
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
