import { Component, OnInit } from '@angular/core';
import { CardInfoItem } from '../../../models/card-info';
import { DataService } from 'src/app/service/data.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  infos: CardInfoItem[] = [];

  constructor(
    private dataService: DataService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    // Registrar os ícones SVG antes de usá-los
    this.registerIcons();

    this.dataService.getIndicadores().subscribe(
      (data) => {
        console.log(data);

        // Verifique se a resposta possui a propriedade 'data'
        if (data && data.success && data.data) {
          const indicators = data.data;

          // Crie um array de CardInfoItem com os dados recebidos
          this.infos = [
            { icon: 'coin', number: 'R$ ' + indicators.sales, title: 'Faturamento', className :'um' },
            { icon: 'graph', number: indicators.sales_quant.toString(), title: 'Quantidade de Vendas',  className :'dois' },
            { icon: 'users', number: indicators.user.toString(), title: 'Usuário',  className :'tres'}
          ];

        }
      },
      (error) => {
        console.error('Ocorreu um erro ao recuperar os indicadores.', error);
      }
    );
  }

  private registerIcons(): void {
    const iconNames = ['users', 'graph', 'coin'];
    const basePath = '../../../../assets/img/';

    iconNames.forEach(name => {
      const path = basePath + name + '.svg';
      this.matIconRegistry.addSvgIcon(
        name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(path)
      );
    });
  }


}
