<template>
  <div>

    <el-row class="row-b-b">
      <el-col class="col-b-r" :span="11" :offset="1">
        <div class="picture-size" ref="line"></div>
      </el-col>
      <el-col :span="11" :offset="1">
        <div class="picture-size" ref="line2"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col class="col-b-r" :span="11" :offset="1">
        <div class="picture-size" ref="line3"></div>
      </el-col>
      <el-col :span="11" :offset="1">
        <div class="picture-size" ref="line4"></div>
      </el-col>
    </el-row>

  </div>
</template>


<script>
export default {
  components: {},
  name: 'OperatorManage',
  data () {
    return {

    }
  },
  mounted () {

    // 初始化线形图
    var lineEChart = this.echarts.init(this.$refs['line']);

    var data = [];

    for (var i = 0; i <= 100; i++) {
      var theta = i / 100 * 360;
      var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
      data.push([r, theta]);
    }

    var lineOptions = {
      title: {
        text: '极坐标双数值轴'
      },
      legend: {
        data: ['line']
      },
      polar: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      angleAxis: {
        type: 'value',
        startAngle: 0
      },
      radiusAxis: {
      },
      series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        data: data
      }]
    };

    lineEChart.setOption(lineOptions);


    // 初始化柱状图

    var lineEChart2 = this.echarts.init(this.$refs['line2']);

    var base = +new Date(1968, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i < 20000; i++) {
      var now = new Date(base += oneDay);
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    var lineOptions2 = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: '大数据量面积图',
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
      }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }],
      series: [
        {
          name:'模拟数据',
          type:'line',
          smooth:true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
            normal: {
              color: 'rgb(255, 70, 131)'
            }
          },
          areaStyle: {
            normal: {
              color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(255, 158, 68)'
              }, {
                offset: 1,
                color: 'rgb(255, 70, 131)'
              }])
            }
          },
          data: data
        }
      ]
    };

    lineEChart2.setOption(lineOptions2);


    // 初始化热力图

    var lineEChart3 = this.echarts.init(this.$refs['line3']);

    var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
    var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    var yMax = 500;
    var dataShadow = [];

    for (var i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }

    var lineOptions3 = {
      title: {
        text: '特性示例：渐变色 阴影 点击缩放',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          textStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            normal: {color: 'rgba(0,0,0,0.05)'}
          },
          barGap:'-100%',
          barCategoryGap:'40%',
          data: dataShadow,
          animation: false
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: new this.echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#83bff6'},
                  {offset: 0.5, color: '#188df0'},
                  {offset: 1, color: '#188df0'}
                ]
              )
            },
            emphasis: {
              color: new this.echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#2378f7'},
                  {offset: 0.7, color: '#2378f7'},
                  {offset: 1, color: '#83bff6'}
                ]
              )
            }
          },
          data: data
        }
      ]
    };

    var zoomSize = 6;
    lineEChart3.on('click', function (params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      lineEChart3.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
    });

    lineEChart3.setOption(lineOptions3);


    //气泡图

    var lineEChart4 = this.echarts.init(this.$refs['line4']);

    var lineOptions4 = {
      title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    lineEChart4.setOption(lineOptions4);

  },
  methods: {

  }
}
</script>

<style scoped>

  .el-row{
    height: 280PX;
  }

  .el-col{
    height: 100%;
    padding-top: 20px;
  }

  .col-b-r{
    border-right: 1px solid rgba(1,1,1,.1);
  }

  .row-b-b{
    border-bottom: 1px solid rgba(1,1,1,.1);
  }

  .picture-size{
    width: 100%;
    height: 100%;
  }

</style>
