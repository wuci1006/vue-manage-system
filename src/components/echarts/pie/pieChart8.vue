<template>
	<div class="pieChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{pieData8.title}}</div>
		<div id="myPieChart8" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            pieData8: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myPieChart8'));

                let myOption = {
                     tooltip: {
					},
					legend: {
						formatter: function (value) {
							return value;
						}
					},
					 dataset: {
						source: this.pieData8.lone1
					},
					series: [
						{
							type: 'pie',
							radius: 60,
							center: ['25%', '30%'],
							label: {
								normal: {show:false}
							},
							// No encode specified, by default, it is '2012'.
						}, 
						{
							type: 'pie',
							radius: 60,
							center: ['75%', '30%'],
							label: {
								normal: {show:false}
							},
							encode: {
								itemName: 'product',
								value: '2013'
							}
						}, 
						{
							type: 'pie',
							radius: 60,
							center: ['25%', '75%'],
							label: {
								normal: {show:false}
							},
							encode: {
								itemName: 'product',
								value: '2014'
							}
						}, 
						{
							type: 'pie',
							radius: 60,
							center: ['75%', '75%'],
							label: {
								normal: {show:false}
							},
							encode: {
								itemName: 'product',
								value: '2015'
							}
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


