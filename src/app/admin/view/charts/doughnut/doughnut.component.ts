import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements AfterViewInit {
  chart: any;
  @ViewChild('legendContainer', { static: true }) legendContainerRef!: ElementRef;

  constructor(private elementRef: ElementRef) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.elementRef.nativeElement.querySelector("#DoughnutChart"), {
      type: 'doughnut',
      data: {
        labels: ['Canceladas', 'Concluídas', 'Em andamento'],
        datasets: [
          {
            data: [200, 100, 50],
            backgroundColor: ['#D03F3F', '#5EDE91', '#DCF156']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          
          legend: {
            display: false
          }
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      }
    });

    this.positionLegend();
  }

  positionLegend() {
    const legendContainer = this.legendContainerRef.nativeElement;
    if (legendContainer) {
      const chartArea = this.chart.chartArea;
      const labels = this.chart.data.labels;
      const backgroundColors = this.chart.data.datasets[0].backgroundColor;

      // Gera uma lista de elementos <div> para cada item da legenda
      const legendItems = labels.map((label: string, index: number) => {
        const backgroundColor = backgroundColors[index];
        return `<div class="legend-item">
                  <span class="legend-marker" style="background-color: ${backgroundColor};
                                                    display: inline-block;
                                                    width: 10px;
                                                    height: 10px;
                                                    margin-right: 5px;"></span>                  
                  <span class="legend-label">${label}</span>
                </div>`;
      });

      // Insere os elementos da legenda no container
      legendContainer.innerHTML = legendItems.join("");

      // Posiciona a legenda abaixo do gráfico
      const legendHeight = legendContainer.offsetHeight;
      //legendContainer.style.position = 'absolute';
      //legendContainer.style.top = `${chartArea.bottom - legendHeight}px`;
      //legendContainer.style.left = `${chartArea.left}px`;

      // Atualiza o gráfico para recalcula o layout
      this.chart.update();
    }
  }
}
