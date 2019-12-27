<template>
	<div class="barChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{barData1.title}}</div>
		<div id="myBarChart1" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            barData1: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myBarChart1'));

                let myOption = {
                     tooltip: {
						trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
						confine: true, //是否将 tooltip 框限制在图表的区域内
                        formatter: function (params) {
                            let desc = params[0].name + '<br>数量:' + params[0].data.value;
                            return desc;
                        }
					},
					grid: {
                        top: 10,
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
					xAxis: {
						type: 'category',
						axisLabel: {
                            formatter: function (value) {
                                return value;
                            }
                        },
						axisTick: {//坐标轴刻度与标签对齐
							alignWithLabel: true
						}
					},
					yAxis: {
						type: 'value'
					},
					dataset: {
                        source: this.barData1.lone1
                    },
                    series: [
                        {
							type:'bar',
							barWidth: '60%',
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