import { Component, OnInit, AfterViewInit} from '@angular/core';
import { BaseChartDirective, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginAnnotation from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit {
  public barChartOptions = {
    responsive: true,
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0
            }
        }]
    },
    annotation: {
      drawTime: 'afterDatasetsDraw',
      annotations: [
        {
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: 60,
          borderColor: 'red',
          borderDash: [2, 2],
          borderWidth: 1,
        },
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: '2010',
          borderColor: 'black',
          borderWidth: 1,
          borderDash: [2, 2],
          label: {
            enabled: true,
            content: 'Täna',
            position: 'bottom'
          }
        }

      ]
    },
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginAnnotation];

  public barChartData: ChartDataSets[] = [
    { 
      data: [65, 59, 80, 81, 56, 55, 70],
      backgroundColor:[ 'lightgreen', 'orange']
    },
  ];

  constructor() { }

  onClick(event) {
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
