<template>
	<div class="pieChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{pieData3.title}}</div>
		<div id="myPieChart3" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            pieData3: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myPieChart3'));

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
					visualMap: {
						show: false,
						min: 80,
						max: 600,
						inRange: {
							colorLightness: [0, 1]
						}
					},
					series: [
						{
							type:'pie',
							radius: '65%',//圆角度
							center:['50%','55%'],//中心位置
							data:this.pieData3.lone1.sort(function (a, b) { return a.value - b.value; }),
							roseType: 'radius',
							label: {
								normal: {
									show: false,//控制提示文字是否显示
									textStyle: {//提示文字的颜色
										color: '#c23531'
									}
								}
							},
							labelLine: {
								normal: {
									show: false,//控制提示线是否显示
									lineStyle: {//提示线的颜色
										color: '#c23531'
									},
									smooth: 0.2,
									length: 10,
									length2: 20
								}
							},
							itemStyle: {
								normal: {
									color: '#c23531',//控制总体的颜色
									// shadowBlur: 200,//背景虚化
									// shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
					
							animationType: 'scale',
							animationEasing: 'elasticOut',
							animationDelay: function (idx) {
								return Math.random() * 200;
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

