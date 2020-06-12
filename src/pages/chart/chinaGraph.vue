<template>
    <div class="container">
        <div class="china_map">
            <div id="chinaMap" style="height:100%;width:100%;"></div>
        </div>
    </div>
</template>

<script>
import echarts from "echarts";
import 'echarts/map/js/china.js';// 引入中国地图数据
// import '../../assets/javascript/china.js'; // 引入中国地图数据
// import '../../assets/javascript/chinaCenter.js'; // 引入中国地图数据
// import '../../assets/javascript/data.js';// 引入中国地图数据
export default {
    data() {
        return {
            mapData :[
              {name: '北京',value: '100' },{name: '天津',value: Math.round(Math.random() * 2000)  },
              {name: '上海',value: Math.round(Math.random() * 2000)  },{name: '重庆',value: Math.round(Math.random() * 2000)  },
              {name: '河北',value: Math.round(Math.random() * 2000)  },{name: '河南',value: Math.round(Math.random() * 2000)  },
              {name: '云南',value: Math.round(Math.random() * 2000)  },{name: '辽宁',value: Math.round(Math.random() * 2000)  },
              {name: '黑龙江',value: Math.round(Math.random() * 2000)  },{name: '湖南',value: Math.round(Math.random() * 2000)  },
              {name: '安徽',value: Math.round(Math.random() * 2000)  },{name: '山东',value: Math.round(Math.random() * 2000)  },
              {name: '新疆',value: Math.round(Math.random() * 2000)  },{name: '江苏',value: Math.round(Math.random() * 2000)  },
              {name: '浙江',value: Math.round(Math.random() * 2000)  },{name: '江西',value: Math.round(Math.random() * 2000)  },
              {name: '湖北',value: Math.round(Math.random() * 2000)  },{name: '广西',value: Math.round(Math.random() * 2000)  },
              {name: '甘肃',value: Math.round(Math.random() * 2000)  },{name: '山西',value: Math.round(Math.random() * 2000)  },
              {name: '内蒙古',value: Math.round(Math.random() * 2000)  },{name: '陕西',value: Math.round(Math.random() * 2000)  },
              {name: '吉林',value: Math.round(Math.random() * 2000)  },{name: '福建',value: Math.round(Math.random() * 2000)  },
              {name: '贵州',value: Math.round(Math.random() * 2000)  },{name: '广东',value: Math.round(Math.random() * 2000)  },
              {name: '青海',value: Math.round(Math.random() * 2000)  },{name: '西藏',value: Math.round(Math.random() * 2000)  },
              {name: '四川',value: Math.round(Math.random() * 2000)  },{name: '宁夏',value: Math.round(Math.random() * 2000)  },
              {name: '海南',value: Math.round(Math.random() * 2000)  },{name: '台湾',value: Math.round(Math.random() * 2000)  },
              {name: '香港',value: Math.round(Math.random() * 2000)  },{name: '澳门',value: Math.round(Math.random() * 2000)  }
            ],
        }
    },
    mounted() {
      this.mapChart();
    },
    methods: {
        mapChart() {
            let that = this;
            let myChinaEcharts = echarts.init(document.getElementById("chinaMap"));
            let option = {
                backgroundColor: '#FFFFFF',
                title: {
                  text: '中国地图',
                  subtext: '',
                  y: '5%',
                  x:'center'
                },
                tooltip : {
                  trigger: 'item'
                },
                //左侧小导航图标
                visualMap: {
                  show : true,
                  x: 'left',
                  y: 'bottom',
                  splitList: [
                    {start: 2000, end:10000},
                    {start: 1000, end: 2000},
                    {start: 500, end: 1000},
                    {start: 300, end: 500},
                    {start: 100, end: 300},
                    {start: 0, end: 100},
                  ],
                  color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
                },
                //配置属性
                series: [
                  {
                    name: '数据',
                    type: 'map',
                    mapType: 'china',
                    roam: true,
                    label: {
                      normal: {
                        show: true  //省份名称
                      },
                      emphasis: {
                        show: false
                      }
                    },
                    data:this.mapData  //数据
                  },
                ]
            }
            let option1 = {
                tooltip: {//提示框组件。
                    trigger: 'item'//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                },
                legend: {
                    orient: 'horizontal',//图例的排列方向
                    x: 'left',//图例的位置
                    data: ['省会']
                },

                visualMap: {//颜色的设置  dataRange
                    x: 'left',
                    y: 'center',
                    splitList: [
                        { start: 2000, color: '#006EDD' },
                        { start: 1000, end: 2000, color: '#4577FF' },
                        { start: 200, end: 1000, color: '#70B7EE' },
                        { start: 10, end: 200, color: '#95CFF4' },
                        { end: 10, color: '#BBE7F9' }
                    ],
                    // text: ['高', '低'],// 文本，默认为数值文本
                    color: ['#E0022B', '#E09107', '#A3E00B']
                },
                series: [
                    {
                        name: '访问量',
                        type: 'map',
                        mapType: 'china',
                        roam: false,//是否开启鼠标缩放和平移漫游
                        showLegendSymbol: false,
                        itemStyle: {//地图区域的多边形 图形样式
                            normal: {//是图形在默认状态下的样式
                                label: {
                                    show: true,//是否显示省份名称
                                    textStyle: {
                                        color: "rgb(249, 249, 249)",  //省份名称的颜色
                                        fontSize: 12    //省份名称的字体大小
                                    }
                                }
                            },
                            emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                                // label:{show:true}
                            }
                        },
                        top: "3%",//组件距离容器的距离
                        data:this.mapData
                    }
                ]
            };
            myChinaEcharts.setOption(option);
            // 自适应
            window.addEventListener("resize", function () {
                setTimeout(() => {
                    myChinaEcharts.resize();
                }, 10);
            });
        },
    },
}
</script>

<style scoped lang="scss">
.container {
    padding: 20px;
    .china_map {
        width: 100%;
        height: 500px;
    }
}
</style>
