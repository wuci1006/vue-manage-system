<template>
	<div class="pieChart">
		<div id="myPieChart5" style="height:390px;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            pieData5: {
                type: Object,
                default: '',
            }
        },
		created(){
		},
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myPieChart5'));
				var piePatternSrc = this.pieData5.pieBg;//圆的背景
				var bgPatternSrc = this.pieData5.allBg;//整个图的背景
				
				var piePatternImg = new Image();
				piePatternImg.src = piePatternSrc;
				var bgPatternImg = new Image();
				bgPatternImg.src = bgPatternSrc;

				var itemStyle = {
					normal: {
						opacity: 0.7,
						color: {
							image: piePatternImg,
							repeat: 'repeat'
						},
						borderWidth: 3,
						borderColor: '#235894'
					}
				};
		
                let myOption = {
                    backgroundColor: {
						image: bgPatternImg,
						repeat: 'repeat'
					},
					title: {
						text: '饼图纹理',
						textStyle: {
							color: '#235894'
						}
					},
					legend: {
						top:30,
						formatter: function (value) {
							return value;
						}
					},
					tooltip: {
					},
					series: [
						{
							type: 'pie',
							radius : '55%',
							center: ['50%', '60%'],
							selectedMode: 'single',
							selectedOffset: 30,
							clockwise: true,
							label: {
								normal: {
									textStyle: {
										fontSize: 14,
										color: '#235894'
									}
								}
							},
							labelLine: {
								normal: {
									lineStyle: {
										color: '#235894'
									}
								}
							},
							data:this.pieData5.lone1,
							itemStyle: itemStyle
						},
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


