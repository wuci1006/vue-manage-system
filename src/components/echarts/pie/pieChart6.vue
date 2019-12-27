<template>
	<div class="pieChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{pieData6.title}}</div>
		<div id="myPieChart6" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            pieData6: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myPieChart6'));

                let myOption = {
                    tooltip : {
						trigger: 'item',
						confine: true, //是否将 tooltip 框限制在图表的区域内
						formatter: function (params) {
						    let desc = params.data.name + '<br>数量:' + params.data.value + "<br>占比:" +
						        params.percent + '%';
						    return desc;
						}
					},
					legend: {
						type: 'scroll',
						orient: 'vertical',
						right: 10,
						top: 20,
						bottom: 20,
						data: this.pieData6.legendData,
						selected: this.pieData6.selected
					},
					series : [
						{
							type: 'pie',
							radius : '60%',
							center: ['40%', '50%'],
							data: this.pieData6.seriesData,
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
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


