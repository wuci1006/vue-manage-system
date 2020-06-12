<template>
    <div class="pieChart">
        <div style="height:30px;line-height:30px;padding-left:10px;">{{pieData9.title}}</div>
        <div id="myPieChart9" style="height:340px;margin:10px 0;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        pieData9: {
            type: Object,
            default: ""
        }
    },
    methods: {
        draweCharts() {
            let that = this;
            let myChart = this.myEcharts.init(document.getElementById("myPieChart9"));
            let myOption = {
                tooltip: {
                    show:false,
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                color:['#1d8e10'],
                series: [
                    {
                        type: "pie",
                        radius: ["50%", "60%"],
                        avoidLabelOverlap: true,
                        label: {
                            normal:{
                                show: true,
                                position: "center",
                                fontSize:'14',
                                lineHeight:30,
                                formatter:function(params){
                                    return params.data.name + "\r\n" + params.data.value + '吨'
                                },
                                rich: {
                                    b: {
                                        lineHeight: 20,
                                        color: '#999'
                                    },
                                    c: {
                                        lineHeight: 20,
                                        color: '#108ee9',
                                        align:"center"
                                    }
                                }
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: this.pieData9.lone1
                    }
                ]
            };
            myChart.setOption(myOption);

            // 自适应
            window.addEventListener("resize", function() {
                setTimeout(() => {
                    myChart.resize();
                }, 10);
            });
        }
    }
};
</script>
