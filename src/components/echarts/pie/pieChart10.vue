<template>
    <div class="pieChart">
        <div style="height:30px;line-height:30px;padding-left:10px;">{{pieData10.title}}</div>
        <div id="myPieChart10" style="height:340px;margin:10px 0;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        pieData10: {
            type: Object,
            default: ""
        }
    },
    methods: {
        draweCharts() {
            let that = this;
            let myChart = this.myEcharts.init(document.getElementById("myPieChart10"));
            let myOption = {
                 tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                color:['#F08E35','#A5CA4E','#4292F7','#538B77','#EA3223','#91C7AE','#2F4554','#61A0A8','#D48265','#8BAAAF'],
                series: [
                    {
                        name: '电器类型',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '20',
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: this.pieData10.lone1
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
