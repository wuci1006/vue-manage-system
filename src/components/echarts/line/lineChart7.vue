<template>
    <div class="lineChart line">
      <div style="height:30px;line-height:30px;padding-left:10px;">电器使用时长占比</div>
      <el-tabs v-model="currentName" @tab-click="handleTab">
        <el-tab-pane label="日" name="day">
          <div id="day" style="height:340px;margin:10px 0;"></div>
        </el-tab-pane>
        <el-tab-pane label="月" name="month">
          <div id="month" style="height:340px;margin:10px 0;"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentName:'month',
        }
    },
    props: {
        lineData7: {
            type: Object,
            default: '',
        }
    },
    mounted(){
    // console.log(this.lineData7)
    },
    methods: {
        // 切换tab
        handleTab(i){
            this.currentName = i.paneName;
        },
        draweCharts() {
            let that = this;
            let myChart1 = this.myEcharts.init(document.getElementById('day'));
            let myChart2 = this.myEcharts.init(document.getElementById('month'));

            let myOption1 = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    formatter: function (value) {
                        return value
                    }
                },
                color:['#9acd32','#1f91ff','#ff8900','#fe0000','#3f8d76'],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data:this.lineData7.lone1.xData
                },
                yAxis: {
                    type: 'value'
                },
                series: this.lineData7.lone1.data
            };
            let myOption2 = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    formatter: function (value,index) {
                        return value
                    }
                },
                color:['#9acd32','#1f91ff','#ff8900','#fe0000','#3f8d76'],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data:this.lineData7.lone2.xData
                },
                yAxis: {
                    type: 'value'
                },
                series: this.lineData7.lone2.data
            };


            myChart1.setOption(myOption1);
            myChart2.setOption(myOption2);
            // 自适应
            window.addEventListener("resize", function () {
                setTimeout(() => {
                    myChart1.resize();
                    myChart2.resize();
                }, 10)
            });
        },
    },
}
</script>
<style lang="scss" scoped>

</style>
<style>
  .line{
    position: relative;
  }
.el-tabs__nav-wrap::after{
  position: static!important;
}
.el-tabs__header{
  margin:0!important;
  display: inline-block;
  position: absolute;
  top:0;
  right:10px;
}
.el-tabs__active-bar{
  height:0px!important;
}
.el-tabs__item{
  height:30px!important;
  line-height:30px!important;
  border:1px solid #bbb!important;
  padding:0 10px!important;
}
.el-tabs__item.is-active{
  border:1px solid #409eff!important;
}
.el-tabs__item:hover{
  color:none;
}

</style>
