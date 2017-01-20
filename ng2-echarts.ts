首先其实这就是封装的一个指令，google了好多，被误导了，主要注意一下几点

安装ng2-echarts的同时安装echarts 然后在angular-cli.json中scripts标签中配置，
既然是指令，那么就在app.module.ts 的providers中引入即可
具体参照下面步骤

1、安装

npm install --save echarts ng2-echarts
2、在app.module.ts中配置

import { Ng2Echarts } from 'ng2-echarts';
...
providers: [
    Ng2Echarts
]
...
3、组件中配置图标信息，可参考echart官网 echarts.component.ts

...
export class EchartsComponent {
    public chartData = {
    theme: '',
    event: [
      {
        type: "click",
        cb: function (res) {
          console.log(res);
        }
      }
    ],
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 335,
        name: '直接访问'
      }, {
        value: 310,
        name: '邮件营销'
      }, {
        value: 234,
        name: '联盟广告'
      }, {
        value: 135,
        name: '视频广告'
      }, {
        value: 1548,
        name: '搜索引擎'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
}
4、在界面中引入，使用指令，注意设置宽度高度，要不然不显示。

<div [ng2-echarts]="chartData" style="height: 300px; width: 100%"></div>
5、配置angular-cli.json

...
"scripts": [
   "../node_modules/echarts/dist/echarts.min.js"
],
...
6、 总结，其实就把他当做一个指令，引入使用就可以了。
