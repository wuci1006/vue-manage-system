<template>
	<div class="pieChart">
		<div style="height:30px;line-height:30px;padding-left:10px;">{{pieData4.title}}</div>
		<div id="myPieChart4" style="height:340px;margin:10px 0;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
            pieData4: {
                type: Object,
                default: '',
            }
        },
		methods: {
			draweCharts() {
                let myChart = this.myEcharts.init(document.getElementById('myPieChart4'));

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
					toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							// dataView : {show: true, readOnly: false},//数据视图
							magicType : {
								show: true,
								type: ['pie', 'funnel']
							},
							// restore : {show: true},//还原
							// saveAsImage : {show: true}//保存为图片
						}
					},
					calculable : true,
					series: [
						{
							type:'pie',
							radius : [20, 120],//第一个控制内心大小 第二个控制半径大小
							center : ['25%', '50%'],
							roseType : 'radius',
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: true
								}
							},
							lableLine: {
								normal: {
									show: false
								},
								emphasis: {
									show: true
								}
							},
							data:this.pieData4.lone1
						},
						{
							type:'pie',
							radius : [0, 120],
							center : ['75%', '50%'],
							roseType : 'area',
							data:this.pieData4.lone1
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


