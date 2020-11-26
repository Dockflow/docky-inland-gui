import { Component, OnInit } from '@angular/core';
import * as highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  highCharts = highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
