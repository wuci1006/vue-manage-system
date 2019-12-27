<template>
	<div class="pieChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{pieData1.title}}</div>
		<div id="myPieChart1" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            pieData1: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myPieChart1'));

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
						formatter: function (value) {
							return value;
						}
					},
					dataset:{
						source:this.pieData1.lone1
					},
					series: [
						{
							type:'pie',
							radius: '70%',//圆角度
							center:['50%','55%'],//中心位置
							label: {
								normal: {
									show: false
								},
							},
							labelLine: {
								normal: {
									show: false
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