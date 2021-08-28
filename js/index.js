
(function () {
  // 1.实例化对象

  var myChart = echarts.init(document.querySelector(".p1 .chart"));
  // 2.指定配置项和数据
  var option = {

    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],

    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 28, name: '男'},
          {value: 29, name: '女'}
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图模块2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".p2 .chart"));

  // 声明颜色数组
  // 2.指定配置项和数据
  var option = {

    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 1, name: '小于15岁'},
          {value: 40, name: '15-24岁'},
          {value: 10, name: '25-34岁'},
          {value: 5, name: '35-44岁'},
          {value: 1, name: '44-54岁'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);


  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图模块1
(function () {
  // 年份对应数据


  var myChart = echarts.init(document.querySelector(".p3 .chart"));

  var option = {

    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 4, name: '高中(含)以下'},
          {value: 8, name: '中专/大专'},
          {value: 41, name: '本科/专科'},
          {value: 4, name: '研究生及以上'}
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },

      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

})();

(function () {
  var myChart = echarts.init(document.querySelector('.p4 .chart'));

  var option = {

    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 37, name: '学生'},
          {value: 3, name: '公务员'},
          {value: 6, name: '教师、医生'},
          {value: 5, name: '公司职员'},
          {value: 3, name: '个体经营者'},
          {value: 0, name: '离退休人员'},
          {value: 3, name: '其它'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图1
(function () {
  var myChart = echarts.init(document.querySelector(".p5 .chart"));
  var option = {

    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 54, name: '是'},
          {value: 3, name: '否'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();


(function () {
  var myChart = echarts.init(document.querySelector(".p6 .chart"));
  var option = {

    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 23, name: '非常想接种'},
          {value: 25, name: '想接种'},
          {value: 8, name: '无所谓'},
          {value: 1, name: '不想接种'},
          {value: 0, name: '非常不想接种'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();



(function () {
  var myChart = echarts.init(document.querySelector(".p7 .chart"));
  var option = {

    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 18, name: '非常关心'},
          {value: 27, name: '比较关心'},
          {value: 10, name: '偶尔关心'},
          {value: 2, name: '不关心'},
          {value: 0, name: '完全不关心'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
(function () {
  var myChart = echarts.init(document.querySelector(".p8 .chart"));
  var option = {

    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 10, name: '非常了解'},
          {value: 16, name: '比较了解'},
          {value: 25, name: '只是听说过'},
          {value: 5, name: '不太了解'},
          {value: 1, name: '完全不了解'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
(function () {
  var myChart = echarts.init(document.querySelector(".p9 .chart"));
  var option = {

    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 20, name: '80%以上'},
          {value: 15, name: '60%-80%'},
          {value: 12, name: '40%-60%'},
          {value: 6, name: '20%-40%'},
          {value: 4, name: '20%以下'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector(".p10 .chart"));
  var option = {
    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 11, name: '非常关心'},
          {value: 30, name: '比较关心'},
          {value: 15, name: '偶尔关心'},
          {value: 1, name: '不关心'},
          {value: 0, name: '完全不关心'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector(".p11 .chart"));
  var option = {
    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 14, name: '非常想接种'},
          {value: 34, name: '想接种'},
          {value: 8, name: '无所谓'},
          {value: 1, name: '不想接种'},
          {value: 0, name: '非常不想接种'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector(".p12 .chart"));
  var option = {
    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 14, name: '有非常大的影响'},
          {value: 23, name: '有较大的影响'},
          {value: 16, name: '有一定的影响'},
          {value: 4, name: '没有影响'},
          {value: 0, name: '完全没有影响'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector(".p13 .chart"));
  var option = {
    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 8, name: '非常了解'},
          {value: 32, name: '比较了解'},
          {value: 12, name: '只是听说过'},
          {value: 4, name: '不太了解'},
          {value: 1, name: '完全不了解'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector(".p14 .chart"));
  var option = {
    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 8, name: '非常了解'},
          {value: 32, name: '比较了解'},
          {value: 12, name: '只是听说过'},
          {value: 4, name: '不太了解'},
          {value: 1, name: '完全不了解'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector(".p15 .chart"));
  var option = {
    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 13, name: '完全没有疑问'},
          {value: 28, name: '没有疑问'},
          {value: 15, name: '有一些疑问'},
          {value: 1, name: '有很多疑问'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector(".p16 .chart"));
  var option = {
    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 14, name: '完全没有影响'},
          {value: 25, name: '没有影响'},
          {value: 14, name: '有一些影响'},
          {value: 4, name: '有较大影响'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector(".p17 .chart"));
  var option = {
    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 32, name: '非常认同'},
          {value: 16, name: '很认同'},
          {value: 9, name: '认同'},
          {value: 0, name: '不太认同'},
          {value: 0, name: '非常不认同'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(function () {
  var myChart = echarts.init(document.querySelector(".p18 .chart"));
  var option = {
    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 12, name: '外出时自始至终佩戴口罩'},
          {value: 32, name: '外出时几乎一直佩戴口罩'},
          {value: 12, name: '外出仅在人流密集场所佩戴口罩'},
          {value: 1, name: '外出很少佩戴口罩'},
          {value: 0, name: '外出从不佩戴口罩'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();
(function () {
  var myChart = echarts.init(document.querySelector(".p19 .chart"));
  var option = {
    color:["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: '80%',
        data: [
          {value: 13, name: '非常想去'},
          {value: 30, name: '想去'},
          {value: 12, name: '无所谓'},
          {value: 2, name: '有点不想去'},
          {value: 0, name: '非常不想去'},
        ],
        label: {
          formatter: '{b}: {@1} ({d}%)'
        },
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();