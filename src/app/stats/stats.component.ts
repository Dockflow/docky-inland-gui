import { Component, OnInit } from '@angular/core';
import * as highcharts from 'highcharts';

@Component({
  selector: 'app-stats-component',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  highCharts = highcharts;
  chartOptions1: Highcharts.Options = {
    title: {
      text: 'Wait times'
    },
    series: [{
      data: [6, 5, 3, 5, 3, 7],
      type: 'line',
    }]
  };
  chartOptions2: Highcharts.Options = {
    title: {
      text: 'Downtime / Maintenance'
    },
    series: [{
      data: [1, 7, 3, 5, 4, 6],
      type: 'line',
    }]
  };
  chartOptions3: Highcharts.Options = {
    title: {
      text: 'Total journey time'
    },
    series: [{
      data: [3, 2, 6, 1, 4, 5],
      type: 'line',
    }]
  };

  chartOptions4: Highcharts.Options = {
    chart : {
       plotBorderWidth: null,
       plotShadow: false
    },
    title : {
       text: 'Corridor usage by vessels'
    },
    tooltip : {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions : {
       pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
             enabled: true,
             format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
             style: {
                color: 'black'
             }
          }
       }
    },
    series : [{
       type: 'pie',
       name: 'Vessel corridor share',
       data: [
          ['Rapide',   45.0],
          ['Amistade',       26.8],
          {
             name: 'Benguela',
             y: 12.8,
             sliced: true,
             selected: true
          },
          ['Antigoon',    8.5],
          ['Koufra',     6.2],
          ['Others',      0.7]
       ]
    }]
 };

  constructor() { }

  ngOnInit(): void {
  }

}
