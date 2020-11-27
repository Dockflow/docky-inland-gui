import { Component, OnInit } from '@angular/core';
import * as highcharts from 'highcharts';

@Component({
  selector: 'app-stats-component',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  highCharts = highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 7, 3, 5, 4, 6],
      type: 'line',
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
