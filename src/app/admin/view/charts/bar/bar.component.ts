import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit, AfterViewInit {
  public chart: any;
  @ViewChild('MyChart', { static: true }) myChart!: ElementRef;

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    const canvas = this.myChart.nativeElement;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 600, 0);
    gradient.addColorStop(0.000156, '#1D3326');
    gradient.addColorStop(1, '#5EDE91');

    this.createChart(gradient);
  }

  createChart(gradient: CanvasGradient) {
    if (this.myChart && this.myChart.nativeElement instanceof HTMLCanvasElement) {
      const labels = ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16'];
      const data = ['467', '576', '572', '79', '92', '574', '573', '576'];

      const backgroundColors = labels.map(() => gradient);

      this.chart = new Chart('MyChart', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Sales',
              data: data,
              backgroundColor: backgroundColors
            },

           
          ]
        },
        options: {
          responsive: true,
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
