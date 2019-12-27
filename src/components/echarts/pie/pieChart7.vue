<template>
	<div class="pieChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{pieData7.title}}</div>
		<div id="myPieChart7" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            pieData7: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myPieChart7'));

                let myOption = {
                    tooltip: {
						trigger: 'item',
						confine: true, //是否将 tooltip 框限制在图表的区域内
						formatter: function (params) {
						    let desc = params.data.name + '<br>数量:' + params.data.value + "<br>占比:" +
						        params.percent + '%';
						    return desc;
						}
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						left:10,
						formatter: function (value) {
							return value;
						}
					},
					series: [
						{
							type:'pie',
							selectedMode: 'single',
							radius: [0, '35%'],
							center:['60%','55%'],//中心位置
							label: {
								normal: {
									position: 'inner'
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data:this.pieData7.data1
						},
						{
							type:'pie',
							radius: ['80%', '50%'],
							center:['60%','55%'],//中心位置
							label: {
								normal: {
									show:false
								}
							},
							data:this.pieData7.data2
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



